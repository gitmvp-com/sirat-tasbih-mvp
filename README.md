# Sirat Tasbih MVP 📿

A beautiful, minimal digital Tasbih (Islamic dhikr counter) built with modern web technologies and featuring a stunning glass-effect UI.

## ✨ Features

- 🎯 **Digital Counter** - Clean, simple interface for counting dhikr
- 📿 **5 Preset Dhikr Options**:
  - SubḥānAllāh (Glory be to Allah)
  - Alḥamdulillāh (Praise be to Allah)
  - Allāhu Akbar (Allah is the Greatest)
  - Lā ilāha illAllāh (There is no god but Allah)
  - Astaghfirullāh (I seek forgiveness from Allah)
- 🎨 **Glass Morphism UI** - Modern aurora-glass effect design
- 🌓 **Dark/Light Mode** - Seamless theme switching
- 📱 **Responsive Design** - Perfect on all devices
- 🎭 **Beautiful Arabic Typography** - Proper diacritic rendering

## 🚀 Tech Stack

This MVP uses the exact same tech stack as the parent Sirat project:

- **React 18.3** - Modern UI library
- **TypeScript 5.8** - Type-safe development
- **Vite 5.4** - Lightning-fast build tool
- **Tailwind CSS 3.4** - Utility-first styling
- **shadcn/ui** - Beautiful component library
- **Lucide React** - Clean, consistent icons

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/gitmvp-com/sirat-tasbih-mvp.git
cd sirat-tasbih-mvp

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 MVP Scope

This is a simplified MVP version focusing on the core Tasbih functionality:

- ✅ Digital counter with increment/decrement
- ✅ 5 preset dhikr options
- ✅ Dark/light theme toggle
- ✅ Glass morphism design
- ✅ Responsive layout
- ❌ No authentication (MVP requirement)
- ❌ No database/persistence (MVP requirement)
- ❌ No advanced features

## 📂 Project Structure

```
sirat-tasbih-mvp/
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   └── Tasbih.tsx   # Main Tasbih component
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Design Features

- **Glass Morphism**: Beautiful translucent glass effect with backdrop blur
- **Smooth Animations**: Subtle fade-in and scale transitions
- **Arabic Typography**: Proper Amiri font for authentic Arabic text
- **Color Scheme**: Matches the parent Sirat app with blue/purple gradients
- **Accessibility**: Large touch targets and clear contrast

## 🌟 Parent Project

This MVP is based on [Sirat](https://github.com/MAtiyaaa/sirat) - A comprehensive Islamic web application featuring:
- Qur'an Reader
- Hadith Collections
- Prophet Stories
- Holy Cities Explorer
- Mosque Locator
- And much more!

## 📝 License

MIT License - Feel free to use this project for learning and development.

## 🤲 Acknowledgments

- Parent project: [Sirat](https://github.com/MAtiyaaa/sirat) by MAtiyaaa
- UI Components: [shadcn/ui](https://ui.shadcn.com)
- Icons: [Lucide](https://lucide.dev)

---

<div align="center">
  <p>May your dhikr be accepted 🤲</p>
  <sub>Built with ❤️ as an MVP demonstration</sub>
</div>