# Harry Dev Website - Project Structure

## File Structure

```
harry-dev-website/
│
├── index.html              # Main HTML file
├── style.css               # Main stylesheet
├── script.js               # Main JavaScript file
│
├── .env                    # Environment variables (not committed)
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore file
│
├── package.json            # NPM dependencies
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel deployment configuration
│
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
│
├── README.md               # Project documentation
└── PROJECT_STRUCTURE.md    # This file

```

## Key Files Description

### index.html
Main HTML file containing the complete website structure with:
- Header with navigation
- Hero section with particles animation
- Features/Solutions section
- Stats section
- Testimonials section
- Contact form
- Footer

### style.css
Complete CSS styling with:
- CSS custom properties for theming
- Responsive design
- Animations
- Grid and Flexbox layouts
- Mobile-first approach

### script.js
JavaScript functionality including:
- Mobile menu toggle
- Scroll animations
- Particle effects
- Form handling
- Statistics counter
- Testimonial slider
- Video modal

### .env
Environment variables for:
- Supabase configuration
- API URLs
- Application settings

### vercel.json
Vercel deployment configuration with:
- Static file serving
- Routing rules
- Security headers

### package.json
NPM package configuration with:
- Vite for development
- Supabase client
- Build scripts

### vite.config.js
Vite configuration for:
- Development server
- Build optimization
- Code splitting

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy .env.example to .env and fill in your values:
   ```bash
   cp .env.example .env
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

## Deployment

### Vercel Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. For production:
   ```bash
   vercel --prod
   ```

### Environment Variables on Vercel

Add these environment variables in Vercel dashboard:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY
- VITE_APP_NAME
- VITE_APP_URL

## Features

- Fully responsive design
- Modern animations and transitions
- Contact form
- Newsletter subscription
- Testimonials slider
- Statistics counter
- Video modal
- Particle background effects
- SEO optimized
- Accessibility features

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Vite
- Font Awesome Icons
- Google Fonts (Inter)
- Supabase (ready to integrate)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images
- Minified CSS/JS
- Code splitting
- Lazy loading
- Fast page load times

## Security

- Security headers configured
- XSS protection
- Content Security Policy ready
- HTTPS enforced on Vercel
