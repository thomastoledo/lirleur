# Lirleur

**Lirleur** is a lightweight library that converts durations into human-readable formats. Whether you need precise formats like `2h 35m 12s` or relative formats like `5 minutes ago`, **Lirleur** makes time easy to understand.

---

## 🚀 Features

- **Precise format**: Convert durations into hours, minutes, and seconds (e.g., `2h 5m 12s`).  
- **Relative format**: Display durations in a human-readable form (e.g., `5 minutes ago`).  
- **Localization**: Supports multiple languages (`en`, `fr`).  
- **Abbreviated output**: Shorter formats (e.g., `2h 5m`).  
- **Custom precision**: Limit the number of time units displayed.  
- **Auto unit detection**: Automatically detects if input is in seconds or milliseconds.  

---

## 📦 Installation

Install via npm:

```bash
npm install lirleur
```

Or using Yarn:

```bash
yarn add lirleur
```

---

## 🔧 Usage

### Import the function

```typescript
import { humanReadableTime } from 'lirleur';
```

---

### 🔹 Precise format

Convert durations into detailed, human-readable output:

```typescript
console.log(humanReadableTime(3662, { unit: 's' }));
// "1h 1m 2s"
```

**Abbreviated format**:

```typescript
console.log(humanReadableTime(3662, { unit: 's', short: true }));
// "1h 1m"
```

**Limit precision**:

```typescript
console.log(humanReadableTime(3662, { unit: 's', precision: 1 }));
// "1h"
```

---

### 🔹 Relative format

Display durations in relative time:

```typescript
console.log(humanReadableTime(3600, { unit: 's', relative: true }));
// "1 hour ago"

console.log(humanReadableTime(86400 * 2, { unit: 's', relative: true, locale: 'fr' }));
// "il y a 2 jours"
```

---

### 🔹 Automatic unit detection

**Lirleur** automatically detects milliseconds or seconds:

```typescript
console.log(humanReadableTime(1500)); // Auto-detection of milliseconds
// "1s"

console.log(humanReadableTime(7200, { relative: true }));
// "2 hours ago"
```

---

### 🔹 Localization

**Lirleur** supports multiple languages. Currently available:  
- **English** (`en`)  
- **French** (`fr`)  

```typescript
console.log(humanReadableTime(3662, { locale: 'en' }));
// "1 hour 1 minute"

console.log(humanReadableTime(3662, { locale: 'fr' }));
// "1 heure 1 minute"
```

**Abbreviated localized format**:

```typescript
console.log(humanReadableTime(3662, { locale: 'fr', short: true }));
// "1h 1m"
```

---

## 📜 API

### `humanReadableTime(duration: number, options?: HumanReadableTimeOptions): string`

#### Parameters:
- **`duration`**: Duration in seconds or milliseconds.  
- **`options`** (optional):  
  - **`relative`** *(boolean)*: Use relative format (`true`) or precise format (`false` by default).  
  - **`unit`** *(‘ms’, ‘s’, ‘auto’)*: Specify the unit. If `auto`, the unit is detected automatically.  
  - **`locale`** *(‘en’ | ‘fr’)*: Define the language for the output.  
  - **`precision`** *(number)*: Number of units to display (default: 2).  
  - **`short`** *(boolean)*: Enable abbreviated format (e.g., `2h` instead of `2 hours`).  

#### Returns:
A string representing the human-readable duration.

---

## 🛠️ Examples

### Combined features

```typescript
console.log(humanReadableTime(7200, { 
  relative: true, 
  locale: 'en' 
}));
// "2 hours ago"

console.log(humanReadableTime(3665, { 
  short: true, 
  precision: 2 
}));
// "1h 1m"
```

### Auto-detection and localization

```typescript
console.log(humanReadableTime(1500));
// "1s"

console.log(humanReadableTime(86400 * 30, { relative: true, locale: 'fr' }));
// "il y a 1 mois"
```

---

## 📝 Planned Features

- Support for additional languages (e.g., Spanish, German).  
- Customizable templates for time formatting.  
- Handling of negative durations (e.g., "in 5 minutes").  

---

## 📄 License

MIT  

---

Simplify time, **Lirleur** makes it readable. 🕒