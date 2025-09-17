# kP Electric - Deployment Guide

## Deployment Options

### Option 1: Vercel (Recommended)
1. Create account at [vercel.com](https://vercel.com)
2. Connect GitHub repository
3. Deploy with one click
4. Custom domain setup available

### Option 2: Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder
3. Configure redirects for Next.js

### Option 3: Traditional Hosting
1. Build: `npm run build`
2. Start: `npm start`
3. Use PM2 or similar for process management
4. Configure Nginx/Apache as reverse proxy

## Environment Setup

### Domain Configuration
- Purchase domain (e.g., kpelectric.com)
- Point DNS to hosting provider
- Configure SSL certificate (free with Let's Encrypt)

### Email Setup
For the contact form to work:
1. Set up email service (SendGrid, Mailgun, or similar)
2. Create API endpoint in `/app/api/contact/route.ts`
3. Add environment variables for email configuration

## Production Checklist

- [ ] Update meta tags with final domain
- [ ] Add Google Analytics
- [ ] Set up Google My Business
- [ ] Submit sitemap to Google Search Console
- [ ] Test all forms
- [ ] Verify mobile responsiveness
- [ ] Check page load speeds
- [ ] Set up email forwarding for contact form

## Recommended Services

### Hosting
- **Vercel**: Best for Next.js, automatic deployments
- **Netlify**: Good alternative, easy setup

### Email
- **SendGrid**: Reliable email API
- **EmailJS**: Simple form handling

### Analytics
- **Google Analytics**: Track visitors
- **Google Search Console**: Monitor SEO

### Domain
- **Namecheap**: Affordable domains
- **Google Domains**: Simple management

## Contact Form Integration

To make the contact form functional, add this API route:

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()

  // Add your email service integration here
  // Example with SendGrid, Resend, etc.

  return NextResponse.json({ success: true })
}
```

## Support

For deployment assistance, contact the developer or refer to:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)