# Little Leaders Website

A modern, responsive website for Little Leaders Center in Jeddah, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌐 Bilingual support (Arabic/English)
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🎨 Modern UI with animations
- 🖼️ Image gallery
- 📞 Contact forms
- 👥 Team showcase
- 📋 Programs and sections information

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Sliders**: Swiper
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mohameddzaher/little-leaders.git
cd little-leaders
```

2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
cd frontend
npm run build
npm start
```

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the build configuration.

### Netlify Deployment Steps:

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Deploy!

## Project Structure

```
little-leaders/
├── frontend/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── contexts/         # React contexts
│   ├── public/           # Static assets
│   └── ...
├── netlify.toml          # Netlify configuration
└── README.md
```

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized animations with Framer Motion
- CSS optimization with Tailwind
- Font optimization

## License

Private - All rights reserved

## Contact

For inquiries, please contact: info@little-leaders.org
