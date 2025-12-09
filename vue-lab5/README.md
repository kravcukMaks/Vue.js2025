# Лабораторна робота №5   
**Тема:** Використання інтерфейсних бібліотек та плагінів у Vue 3  
**Студент:** Кравчук Максим  
**Група:** ВТ-22-1  

---

## Мета роботи
Ознайомитися з можливостями UI-бібліотек у Vue.js (на прикладі PrimeVue), навчитися створювати власні плагіни, працювати з мультимовністю, маршрутизацією та менеджером стану Pinia.

---

## Використані технології
- **Vue 3 + Composition API**
- **PrimeVue** — для інтерфейсних компонентів
- **PrimeFlex** — сітка та стилі
- **Pinia** — менеджер стану
- **Vue Router** — маршрутизація
- **Vue-i18n** — локалізація (UA/EN)
- **TypeScript**
- **Vite** — середовище розробки

---

## Основний функціонал
- Односторінковий лендінг із структурою:
  - Header
  - Hero
  - Problem
  - Solution
  - Benefits
  - How It Works
  - Pricing
  - Testimonials
  - FAQ
  - Contact
  - Footer
- Мультимовність (перемикач UA/EN у хедері)
- Маршрутизація:
  - `/` — Landing Page
  - `/products` — Демонстрація Store + плагіна
- Власний Vue-плагін:
  - **CopyToClipboardPlugin** з Toast повідомленнями
- Pinia Store:
  - управління кошиком товарів
- Адаптивне компонування (PrimeFlex)
- Плавна прокрутка по секціях

---

## Структура проєкту

src/
├─ components/ # Секції лендингу
├─ pages/ # Routing pages (Landing, Products)
├─ stores/ # Pinia stores
├─ locales/ # en.json, ua.json
├─ plugins/ # Clipboard plugin
├─ router/ # Routes
├─ i18n/ # i18n init
├─ App.vue
└─ main.ts


---

## Команди для запуску проєкту

```bash
npm install
npm run dev
