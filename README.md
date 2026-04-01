# Ravindu Nimesh Portfolio

A modern, professional portfolio for an ERP Functional Consultant specializing in Microsoft Dynamics 365 Business Central, with expansion into SAP, Oracle, and IFS.

## Features

- **Hero Section**: Professional introduction with network background animation
- **ERP Ecosystem**: Bento grid showcasing expertise across platforms
- **Data Intelligence Suite**: Power BI, Power Apps, and Azure integrations
- **Case Studies**: Carousel of successful implementations
- **About Section**: Professional background and skills
- **Roadmap**: Continuous learning and expansion plans
- **Contact**: Calendly integration for consultations
- **Responsive Design**: Mobile-optimized layout
- **Animations**: Smooth scroll-based animations using Framer Motion

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Carousel**: Swiper

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

Deploy to Vercel for optimal performance:

```bash
npm run build
npm start
```

Or deploy directly to Vercel from GitHub.

## Contact Form Email Setup

The dedicated contact page at `/contact` posts to `/api/contact`.

Set these environment variables before using email sending:

```bash
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
CONTACT_TO_EMAIL=ravinduuswaththa@gmail.com
```

## Customization

- Replace placeholder images in `public/` with actual headshot and logos
- Update contact information in components
- Add real Power BI embeds and Calendly links
- Customize colors and fonts as needed

## Notes

- Dark mode toggle removed due to Next.js 16 compatibility issues; can be re-added with custom implementation
- Build may fail with Turbopack; deploy to Vercel for production
