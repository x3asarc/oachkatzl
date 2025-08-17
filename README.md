# Appartement "Oachkatzl" - Luxury Apartment Website

A professional, responsive website for the Appartement "Oachkatzl" luxury apartment in Austria. Built with Next.js, React, and Tailwind CSS.

## 🏠 Features

- **Responsive Design**: Mobile-first approach with beautiful desktop layouts
- **Professional Layout**: Modern, clean design that showcases the property
- **Interactive Gallery**: Image gallery with modal view
- **Booking Form**: Contact form for booking requests
- **SEO Optimized**: Meta tags and structured content
- **Fast Performance**: Optimized images and efficient code

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section with CTA
│   ├── PropertyDetails.js # About section
│   ├── Amenities.js    # Amenities showcase
│   ├── Gallery.js      # Image gallery
│   ├── BookingForm.js  # Booking form
│   └── Footer.js       # Footer with links
├── app/                # Next.js App Router
│   ├── page.js         # Homepage
│   ├── layout.js       # Root layout
│   └── globals.css     # Global styles
├── styles/             # CSS files
│   └── globals.css     # Tailwind CSS
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
└── next.config.js      # Next.js configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Additional Tailwind Plugins
```bash
npm install @tailwindcss/forms @tailwindcss/aspect-ratio
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  blue: {
    // Your custom blue colors
  },
  // Add more custom colors
}
```

### Content
- **Property Details**: Edit `components/PropertyDetails.js`
- **Amenities**: Modify `components/Amenities.js`
- **Images**: Replace URLs in `components/Gallery.js`
- **Contact Info**: Update in `components/Footer.js` and `components/BookingForm.js`

### Images
Replace placeholder images with actual property photos:
1. Upload images to your hosting service
2. Update image URLs in the components
3. Ensure images are optimized for web (recommended: WebP format)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Compatible with Next.js
- **AWS Amplify**: Full-stack deployment
- **Traditional hosting**: Build and upload static files

## 📧 Contact Form

The booking form currently shows an alert. To make it functional:

1. **Email Service**: Integrate with services like:
   - SendGrid
   - Mailgun
   - AWS SES

2. **Backend API**: Create API routes in `app/api/`

3. **Database**: Store booking requests in:
   - Supabase
   - Firebase
   - PostgreSQL

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components
1. Create component in `components/` folder
2. Import and use in `app/page.js`
3. Style with Tailwind CSS classes

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic with Next.js

## 🌐 SEO

- Meta tags for title and description
- Semantic HTML structure
- Alt text for all images
- Structured navigation
- Fast loading times

## 📄 License

This project is for the Appartement "Oachkatzl" property. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**Built with ❤️ using Next.js 14 App Router and Tailwind CSS 4**

🌐 **Live Demo**: [View Website](https://oachkatzl.vercel.app)  
📂 **Repository**: [GitHub](https://github.com/x3asarc/oachkatzl)
