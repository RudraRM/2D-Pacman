# Pac-Man Themed 2D Game Website

A production-ready, retro arcade-themed website built with **React**, **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## 🎮 Features

### 1. **Hero Section with Animated Pac-Man Pellet Track**
- Visual pellet track with 20 animated pellets
- Pac-Man character that traverses the track eating pellets one by one
- Smooth looping animation with pellet reset
- Pellet counter display

### 2. **Interactive Arcade Scoreboard Navigation**
- Three interactive cards (HIGH SCORE, CREDITS, PLAY NOW)
- Neon blue bordered cards with black backgrounds
- Ghost icon slides in on hover using Framer Motion
- Full responsiveness for desktop and mobile

### 3. **Feature Cards (The Ghost Team)**
- 4 themed cards for classic Pac-Man ghosts:
  - **Blinky** (Red) - Chase aggressively
  - **Pinky** (Pink) - Ambush strategy
  - **Inky** (Cyan) - Unpredictable strategy
  - **Clyde** (Orange) - Patrol corners
- Floating up-down animation (ghost hovering effect)
- Color-coded borders matching each ghost
- Hover effects with glow and lift animations

### 4. **Call-to-Action Section**
- "START GAME" button with intense neon glow
- Pulsing glow animation (yellow + blue combination)
- Coin insertion counter that tracks clicks
- Responsive sizing across all devices

### 5. **Arcade Aesthetic Throughout**
- **Color Palette:**
  - Pure black background (#000000)
  - Neon blue borders (#2121ff)
  - Crisp white text (#ffffff)
  - Yellow accents (#ffff00)
- **Typography:** Monospace arcade font (Courier New)
- **Styling:** Box shadows with neon glows, border styling, and retro effects

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Next.js 14** - React meta-framework with SSR
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion 10** - Animation library
- **TypeScript** - Type safety

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Setup

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

## 🚀 Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main Pac-Man website component
│   └── globals.css         # Global styles and animations
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── README.md               # This file
```

## 🎨 Customization

### Colors
Edit the `tailwind.config.js` to modify the arcade color palette:
```javascript
colors: {
  arcade: {
    black: "#000000",
    blue: "#2121ff",
    white: "#ffffff",
    yellow: "#ffff00",
    // ... more colors
  }
}
```

### Animations
- Pac-Man speed: Modify the `setInterval` duration in the `useEffect` hook
- Ghost floating animation: Adjust the `animate` values in the ghost cards
- Button glow: Change the `boxShadow` animation transition duration

### Content
All text, labels, and descriptions can be easily modified in the component's JSX, particularly in the `menuItems` and `ghosts` arrays.

## ⚡ Performance

- **Hardware-accelerated animations** using Framer Motion's transform/opacity
- **Responsive design** with mobile-first approach
- **Optimized CSS** with Tailwind's purge feature
- **Next.js optimizations** for image and script loading

## 🎯 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Code Quality

- Full TypeScript support for type safety
- Clean, modular component structure
- Semantic HTML elements
- Accessibility considerations with proper contrast ratios

## 🔄 Animation Details

### Pac-Man Character
- Uses CSS `clip-path` animation for mouth movement
- Linear motion across pellet track
- Pellets fade and scale down when eaten

### Menu Items
- Smooth ghost icon slide-in on hover
- Background glow effect with Framer Motion's `animate`
- Spring-based transitions for natural feel

### Ghost Cards
- Infinite floating animation (3-second cycle)
- Hover lift effect with y-axis translation
- Subtle glow layers on hover

### CTA Button
- Dual-color pulsing glow (yellow outer, blue inner)
- Interactive tap feedback with scale transform
- Continuous shimmer overlay animation

## 🎓 Learning Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Hooks Guide](https://react.dev/reference/react)

## 📄 License

This project is open source and available under the MIT License.

---

**Ready to play?** Run `npm run dev` and visit `http://localhost:3000` 🎮
