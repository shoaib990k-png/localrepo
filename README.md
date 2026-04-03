# Harry Dev Business Solutions Website

A modern, responsive business website built with HTML, CSS, and JavaScript.

## Features

- Modern and responsive design
- Animated hero section with particles
- AI-powered solutions showcase
- Client testimonials slider
- Contact form
- Newsletter subscription
- Statistics counter
- Video modal for demos
- Mobile-friendly navigation
- SEO optimized

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd harry-dev-website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update .env with your values:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

Run the development server:
```bash
npm run dev
```

Visit http://localhost:5173 in your browser.

### Production Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. For production deployment:
```bash
vercel --prod
```

### Environment Variables

Set these in Vercel dashboard:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_APP_NAME`
- `VITE_APP_URL`

## Project Structure

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for detailed file structure.

## Technology Stack

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript
- Vite (Build tool)
- Font Awesome (Icons)
- Google Fonts (Inter)
- Supabase (Database ready)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT License - feel free to use this project for your own purposes.

## Contact

For questions or support, please contact: shoaib990k@gmail.com

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
