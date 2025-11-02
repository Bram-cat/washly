# Quick Start Guide

Get your Washly Washing Services website running in minutes!

## Installation

Navigate to the project directory and install dependencies:

```bash
cd washly-washing-services
npm install
```

Or with yarn:
```bash
yarn install
```

Or with pnpm:
```bash
pnpm install
```

## Running the Development Server

Start the development server:

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

Or with pnpm:
```bash
pnpm dev
```

Open your browser and visit: **http://localhost:3000**

## Building for Production

Create an optimized production build:

```bash
npm run build
npm start
```

Or with yarn:
```bash
yarn build
yarn start
```

Or with pnpm:
```bash
pnpm build
pnpm start
```

## What's Included

- **Responsive Navigation** - Fixed header with smooth scrolling
- **Hero Section** - Eye-catching landing with CTA buttons
- **Services** - Four service cards with icons and descriptions
- **About** - Company information and values
- **Contact Form** - Interactive form with validation
- **Quote Dialog** - Modal for requesting quotes
- **Footer** - Contact info and company details

## Customization Tips

### Update Phone Numbers
Search for `705-822-8605` and `705-970-4920` in:
- [components/Hero.tsx](components/Hero.tsx)
- [components/Contact.tsx](components/Contact.tsx)
- [components/Footer.tsx](components/Footer.tsx)
- [components/QuoteDialog.tsx](components/QuoteDialog.tsx)

### Change Colors
Edit [tailwind.config.ts](tailwind.config.ts):
```typescript
primary: {
  DEFAULT: "#004C97",  // Your primary color
  foreground: "#ffffff",
},
secondary: {
  DEFAULT: "#FFD700",  // Your accent color
  foreground: "#004C97",
},
```

### Update Company Info
Edit the metadata in [app/layout.tsx](app/layout.tsx) for SEO.

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
Clear the cache:
```bash
rm -rf .next
npm run build
```

**Module not found?**
Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Support

For questions about the website:
- Pathik Pandya: (705) 822-8605
- Atmiya Patel: (705) 970-4920

---

**Happy Coding!** ✨
