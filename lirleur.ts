// human-readable-time.ts

type Language = 'en' | 'fr';

/**
 * Options for humanReadableTime function.
 */
interface HumanReadableTimeOptions {
  relative?: boolean; // Relative time format
  unit?: 'auto' | 'ms' | 's'; // Input unit, auto-detects by default
  locale?: Language; // Localization
  precision?: number; // Limit the number of units displayed
  short?: boolean; // Shortened output format
}

/**
 * Converts a duration into a human-readable format.
 */
export function humanReadableTime(
  duration: number,
  options: HumanReadableTimeOptions = {}
): string {
  const {
    relative = false,
    unit = 'auto',
    locale = 'en',
    precision = 2,
    short = false,
  } = options;

  const totalSeconds =
    unit === 'auto' ? (duration >= 1000 ? Math.floor(duration / 1000) : duration) : 
    unit === 'ms' ? Math.floor(duration / 1000) : duration;

  return relative
    ? formatRelativeTime(totalSeconds, locale)
    : formatExactTime(totalSeconds, locale, precision, short);
}

/**
 * Localized strings for exact and relative formats.
 */
const localeStrings: Record<Language, any> = {
  en: {
    seconds: ['second', 'seconds'],
    minutes: ['minute', 'minutes'],
    hours: ['hour', 'hours'],
    days: ['day', 'days'],
    months: ['month', 'months'],
    years: ['year', 'years'],
    ago: 'ago',
    short: { s: 's', m: 'm', h: 'h', d: 'd', mo: 'mo', y: 'y' },
  },
  fr: {
    seconds: ['seconde', 'secondes'],
    minutes: ['minute', 'minutes'],
    hours: ['heure', 'heures'],
    days: ['jour', 'jours'],
    months: ['mois', 'mois'],
    years: ['an', 'ans'],
    ago: 'il y a',
    short: { s: 's', m: 'm', h: 'h', j: 'j', mo: 'mo', a: 'a' },
  },
};

/**
 * Formats a duration into a precise, human-readable format.
 */
function formatExactTime(
  totalSeconds: number,
  locale: Language,
  precision: number,
  short: boolean
): string {
  const strings = localeStrings[locale];
  const units = [
    { label: 'years', value: 31536000 },
    { label: 'months', value: 2592000 },
    { label: 'days', value: 86400 },
    { label: 'hours', value: 3600 },
    { label: 'minutes', value: 60 },
    { label: 'seconds', value: 1 },
  ];

  const parts: string[] = [];

  for (const unit of units) {
    const value = Math.floor(totalSeconds / unit.value);
    if (value > 0) {
      totalSeconds %= unit.value;
      const unitLabel = short
        ? strings.short[unit.label[0]] // Abréviation
        : value > 1
        ? strings[unit.label][1]
        : strings[unit.label][0];
      parts.push(`${value}${short ? '' : ' '}${unitLabel}`);
    }
    if (parts.length >= precision) break;
  }

  return parts.join(' ');
}

/**
 * Formats a duration into a relative format.
 */
function formatRelativeTime(totalSeconds: number, locale: Language): string {
  const strings = localeStrings[locale];

  if (totalSeconds < 60)
    return `${strings.ago} ${totalSeconds} ${
      totalSeconds > 1 ? strings.seconds[1] : strings.seconds[0]
    }`;

  const minutes = Math.floor(totalSeconds / 60);
  if (minutes < 60)
    return `${strings.ago} ${minutes} ${
      minutes > 1 ? strings.minutes[1] : strings.minutes[0]
    }`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24)
    return `${strings.ago} ${hours} ${
      hours > 1 ? strings.hoursa[1] : strings.hours[0]
    }`;

  const days = Math.floor(hours / 24);
  if (days < 30)
    return `${strings.ago} ${days} ${
      days > 1 ? strings.days[1] : strings.days[0]
    }`;

  const months = Math.floor(days / 30);
  if (months < 12)
    return `${strings.ago} ${months} ${
      months > 1 ? strings.months[1] : strings.months[0]
    }`;

  const years = Math.floor(months / 12);
  return `${strings.ago} ${years} ${
    years > 1 ? strings.years[1] : strings.years[0]
  }`;
}
