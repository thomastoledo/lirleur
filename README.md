
# Lirleur

**Lirleur** est une librairie légère pour convertir des durées en formats lisibles par les humains. Que ce soit pour des formats précis (`2h 35m 12s`) ou relatifs (`il y a 5 minutes`), **Lirleur** rend le temps plus simple à lire.

---

## 🚀 Fonctionnalités

- **Formats précis** : Convertit une durée en heures, minutes et secondes (ex : `2h 5m 12s`).  
- **Formats relatifs** : Affiche des durées sous forme humaine (ex : `il y a 3 jours`).  
- **Localisation** : Support multilingue (actuellement `fr` et `en`).  
- **Mode abrégé** : Affiche des durées simplifiées (`2h 5m` → `2h`).  
- **Précision personnalisable** : Contrôle le nombre d’unités affichées.  
- **Détection automatique** : Supporte les secondes et les millisecondes sans effort.

---

## 📦 Installation

```bash
npm install lirleur
```

Ou avec Yarn :

```bash
yarn add lirleur
```

---

## 🔧 Utilisation

### Importation

```typescript
import { humanReadableTime } from 'lirleur';
```

---

### 🔹 Format précis

Affiche la durée sous un format détaillé :

```typescript
console.log(humanReadableTime(3662, { unit: 's' }));
// "1h 1m 2s"
```

**Mode abrégé :**

```typescript
console.log(humanReadableTime(3662, { unit: 's', short: true }));
// "1h 1m"
```

**Limiter la précision :**

```typescript
console.log(humanReadableTime(3662, { unit: 's', precision: 1 }));
// "1h"
```

---

### 🔹 Format relatif

Affiche une durée sous forme humaine :

```typescript
console.log(humanReadableTime(7200, { unit: 's', relative: true }));
// "il y a 2 heures"

console.log(humanReadableTime(86400 * 2, { unit: 's', relative: true, locale: 'en' }));
// "2 days ago"
```

---

### 🔹 Détection automatique des unités

Si la durée est en millisecondes ou secondes, Lirleur le détecte automatiquement :

```typescript
console.log(humanReadableTime(1500)); // Auto-détection : millisecondes
// "1s"

console.log(humanReadableTime(1500, { relative: true }));
// "il y a 1 seconde"
```

---

### 🔹 Localisation

Support actuel pour **anglais** (`en`) et **français** (`fr`) :

```typescript
console.log(humanReadableTime(3662, { locale: 'en' }));
// "1 hour 1 minute"

console.log(humanReadableTime(3662, { locale: 'fr' }));
// "1 heure 1 minute"
```

---

## 📜 API

### **`humanReadableTime(duration: number, options?: HumanReadableTimeOptions): string`**

#### Paramètres :
- **`duration`** : Durée en secondes ou millisecondes.  
- **`options`** : Objet d’options (facultatif).  
  - **`relative`** *(boolean)* : Active le format relatif (`true`) ou précis (`false` par défaut).  
  - **`unit`** *(‘ms’, ‘s’, ‘auto’)* : Spécifie l’unité de la durée. `auto` détecte automatiquement.  
  - **`locale`** *(‘en’ | ‘fr’)* : Définit la langue.  
  - **`precision`** *(number)* : Nombre maximum d’unités à afficher.  
  - **`short`** *(boolean)* : Active le mode abrégé.  

#### Retourne :
Une chaîne de caractères représentant la durée sous un format lisible.

---

## 🛠️ Exemples Avancés

### Combinaison de fonctionnalités

```typescript
console.log(humanReadableTime(7200, { 
  unit: 's', 
  relative: true, 
  locale: 'fr' 
}));
// "il y a 2 heures"

console.log(humanReadableTime(3665, { 
  short: true, 
  precision: 2 
}));
// "1h 1m"
```

---

## 📝 Fonctionnalités à venir

- Support d’autres langues (ex : `es`, `de`, etc.).  
- Formats personnalisables via des templates (ex : `1 hour and 2 minutes`).  
- Support des durées négatives (ex : "dans 5 minutes").  

---

## 📄 Licence

MIT

---

Prêt à lire le temps différemment ? **Lirleur** est là pour vous simplifier la vie. 🚀  