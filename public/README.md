# Rohit Kashinath Pawar - Professional Portfolio Website

A modern, responsive, and professional portfolio website built with HTML, CSS, and JavaScript.

## Features

✨ **Professional Design**
- Modern gradient color scheme
- Clean and minimal layout
- Smooth animations and transitions
- Fully responsive design

📱 **Responsive Layout**
- Mobile-first design approach
- Works perfectly on all devices (mobile, tablet, desktop)
- Optimized navigation

🎯 **Complete Sections**
- Hero section with call-to-action buttons
- About me section with statistics
- Education background
- Professional certifications
- Comprehensive technical skills
- Experience and expertise
- Featured projects
- Contact information and form

⚡ **Interactive Elements**
- Smooth scrolling navigation
- Hover effects on cards and buttons
- Active navigation highlighting
- Intersection Observer for scroll animations
- Contact form integration

## Files Structure

```
Portfolio/
├── index.html      # Main HTML file
├── styles.css      # All CSS styling
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## How to Use

### 1. **View the Website**
Simply open `index.html` in any web browser:
- Double-click the `index.html` file
- Or right-click → Open with → Browser

### 2. **Customize Information**
Edit `index.html` to update:
- Personal information (name, email, phone)
- Social media links (LinkedIn, GitHub, etc.)
- Skills and expertise
- Projects and experience
- Contact details

### 3. **Change Colors and Styling**
Edit `styles.css` to customize:
- Colors: Update CSS variables at the top
  ```css
  :root {
      --primary-color: #e74c3c;      /* Red */
      --secondary-color: #34495e;    /* Dark Blue */
      --accent-color: #3498db;       /* Light Blue */
  }
  ```
- Fonts: Change `font-family` property
- Spacing: Adjust `padding` and `margin` values

### 4. **Deploy to Web**

**Option A: GitHub Pages (Free)**
1. Create a GitHub repository
2. Push the files to `main` branch
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://yourusername.github.io/portfolio`

**Option B: Netlify (Free)**
1. Go to https://netlify.com
2. Drag and drop your portfolio folder
3. Get a free domain

**Option C: Other Hosting**
- Vercel, Firebase Hosting, Render, or any static hosting service

## Customization Guide

### Update Navigation Links
Edit the navigation menu in `index.html`:
```html
<ul class="nav-menu">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <!-- Add or remove sections as needed -->
</ul>
```

### Add Social Media Icons
Replace the social links section:
```html
<div class="social-links">
    <a href="your-github-url" target="_blank"><i class="fab fa-github"></i></a>
    <a href="your-twitter-url" target="_blank"><i class="fab fa-twitter"></i></a>
    <!-- Add more social links -->
</div>
```

### Setup Contact Form
The contact form uses Formspree. To enable emails:
1. Go to https://formspree.io
2. Sign up and create a new form
3. Replace `YOUR_FORM_ID` in `index.html` line 219 with your form ID:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Add More Projects
Copy the project card template and add to the projects section:
```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-project-diagram"></i>
    </div>
    <h3>Project Title</h3>
    <p class="project-subtitle">Subtitle</p>
    <div class="project-details">
        <ul>
            <li>Description point 1</li>
            <li>Description point 2</li>
        </ul>
    </div>
    <div class="project-tags">
        <span class="tag">Technology</span>
    </div>
</div>
```

## Icons Used

This portfolio uses **Font Awesome 6.4.0** icons. You can:
- Browse available icons: https://fontawesome.com/icons
- Use any icon by adding: `<i class="fas fa-icon-name"></i>` or `<i class="fab fa-icon-name"></i>`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: If you add images, compress them using tools like TinyPNG
2. **Minimize CSS/JS**: For production, minify the files
3. **Use CDN**: Consider using a CDN for Font Awesome
4. **Cache**: Enable caching on your hosting provider

## SEO Optimization

The website includes:
- Meta description
- Semantic HTML structure
- Open Graph meta tags (can be added)
- Mobile viewport configuration

To enhance SEO:
1. Add more meta descriptions
2. Use structured data (Schema.org)
3. Create a sitemap
4. Submit to Google Search Console

## Troubleshooting

### Contact form not working
- Ensure Formspree is properly configured
- Check browser console for errors (F12)
- Test with a simple email

### Styling issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path in HTML
- Ensure all CSS selectors match HTML classes

### Navigation not smooth
- Check JavaScript is enabled
- Verify section IDs match href links
- Test in console: `document.querySelector('#about')`

## Future Enhancements

Consider adding:
- Blog section
- Dark mode toggle
- Multi-language support
- Download CV button
- Testimonials section
- Live chat widget
- Analytics (Google Analytics)

## License

This portfolio template is free to use and modify for personal use.

## Support

For Font Awesome icons help: https://fontawesome.com/docs
For web hosting help: Check provider's documentation

---

**Created**: April 2026
**Portfolio Owner**: Rohit Kashinath Pawar
**Last Updated**: April 13, 2026
