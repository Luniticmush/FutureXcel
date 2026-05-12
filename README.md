# FutureXcel Technologies - Corporate Website

A modern, responsive corporate website for FutureXcel Technologies showcasing services, training programs, career opportunities, and company information. Built with vanilla HTML, CSS, and JavaScript for optimal performance and maintainability.

## 🌟 Overview

This is a comprehensive multi-page website featuring:
- **Service Pages**: Detailed information about 9 different service offerings
- **Company Information**: About page with mission, values, and tech toolkit
- **Training Programs**: Information about training and placement services
- **Career Opportunities**: Job listings and application information
- **Contact Forms**: Multiple contact options with form validation
- **Interactive Chatbot**: AI-powered chatbot widget for customer support
- **Dark Mode**: System-aware theme toggle with persistent user preference
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

## 🚀 Features

### Core Functionality
- ✅ **Multi-page Navigation**: Seamless navigation between 15+ pages
- ✅ **Dark/Light Mode**: Automatic system preference detection with manual toggle
- ✅ **Smooth Scrolling**: Enhanced user experience with smooth anchor navigation
- ✅ **Lazy Loading**: Optimized image loading for better performance
- ✅ **Form Validation**: Client-side validation with Bootstrap integration
- ✅ **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- ✅ **SEO Optimized**: Meta tags, structured data, and semantic markup

### Interactive Elements
- 🎨 **Animated Logo**: Continuous pulse and glow animations
- 📱 **Responsive Navbar**: Collapsible mobile menu with active state highlighting
- 🎭 **AOS Animations**: Scroll-triggered animations using AOS library
- 💬 **Chatbot Widget**: Intelligent chatbot with knowledge base integration
- 🔍 **Tech Stack Search**: Interactive searchable technology showcase
- 🎯 **Toolkit Snapshot**: Visual representation of technologies used

### Service Pages
1. **Cloud Services** (`src/pages/services/services-cloud.html`)
2. **IT Consulting** (`src/pages/services/services-consulting.html`)
3. **Data & Analytics** (`src/pages/services/services-data.html`)
4. **Endpoint Management** (`src/pages/services/services-endpoint.html`)
5. **Helpdesk & Support** (`src/pages/services/services-helpdesk.html`)
6. **Machine Learning** (`src/pages/services/services-ml.html`)
7. **Research & Development** (`src/pages/services/services-research.html`)
8. **Software Development** (`src/pages/services/services-software.html`)
9. **Training & Placement** (`src/pages/services/services-training.html`)

## 📁 Project Structure

```
FuturXcelWebApp/
├── index.html                      # Homepage with hero section and services overview
│
├── src/                            # Source directory
│   ├── pages/                      # HTML pages
│   │   ├── about.html              # Company information, mission, values, tech toolkit
│   │   ├── careers.html            # Job listings and career opportunities
│   │   ├── contact.html            # Contact forms and company information
│   │   ├── training.html           # Training programs and placement services
│   │   └── services/               # Service detail pages (9 pages)
│   │       ├── services-cloud.html
│   │       ├── services-consulting.html
│   │       ├── services-data.html
│   │       ├── services-endpoint.html
│   │       ├── services-helpdesk.html
│   │       ├── services-ml.html
│   │       ├── services-research.html
│   │       ├── services-software.html
│   │       └── services-training.html
│   │
│   ├── assets/                     # Static assets
│   │   ├── logo.png                # Company logo
│   │   ├── Favico.png              # Favicon
│   │   ├── favicon.ico             # Alternative favicon
│   │   ├── hero1.jpg               # Hero background image
│   │   ├── intune.png              # Microsoft Intune logo
│   │   └── M365[1].png             # Microsoft 365 logo
│   │
│   ├── styles/                     # Stylesheets
│   │   ├── styles.css              # Main stylesheet (CSS variables, components, utilities)
│   │   └── chatbot.css             # Chatbot widget styling
│   │
│   └── scripts/                    # JavaScript files
│       ├── main.js                 # Core JavaScript functionality
│       └── chatbot.js              # Chatbot widget implementation
│
└── README.md                       # This file
```

## 🛠️ Technologies Used

### Frontend Framework & Libraries
- **Bootstrap 5.3.2**: Responsive grid system and UI components
- **Bootstrap Icons**: Icon library for UI elements
- **Font Awesome 6.4.0**: Additional icon set
- **AOS (Animate On Scroll) 2.3.4**: Scroll animations
- **Google Fonts (Inter)**: Professional typography

### Core Technologies
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, flexbox, grid
- **Vanilla JavaScript (ES6+)**: No framework dependencies
- **LocalStorage API**: Theme preference persistence

### Development Tools
- **CDN Resources**: External libraries loaded via CDN
- **Lazy Loading**: Native browser lazy loading with fallback
- **Resource Hints**: Preconnect and preload for performance

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: `#0056d2` (FutureXcel Blue)
- **Teal Accent**: `#009688`
- **Orange Accent**: `#ff6f00`
- **Dark Theme**: `#0d1b2a` (Dark background)
- **Gradient**: Linear and radial gradients for visual appeal

### Typography
- **Font Family**: Inter (Google Fonts) with system font fallbacks
- **Responsive Sizing**: Fluid typography using clamp() and rem units
- **Line Height**: 1.6 for optimal readability

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 992px
- Desktop: > 992px
- Large Desktop: > 1200px

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd FuturXcelWebApp
   ```

2. **Open in browser**
   - Option 1: Open `index.html` directly in your browser
   - Option 2: Use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the website**
   - Navigate to `http://localhost:8000` (or your chosen port)
   - Or simply open `index.html` in your browser

### No Build Process Required
This is a static website with no build step. All files are ready to deploy to any web server.

## 📝 Configuration

### Theme Customization
Edit CSS variables in `src/styles/styles.css`:
```css
:root {
  --fx-blue: #0056d2;
  --fx-teal: #009688;
  --fx-orange: #ff6f00;
  --fx-dark: #0d1b2a;
  /* ... more variables */
}
```

### Chatbot Configuration
Modify `src/scripts/chatbot.js` to customize:
- Welcome messages
- Knowledge base responses
- Bot position and appearance
- Response behavior

### Navigation
Update navigation links in the navbar section of each HTML file, or use a template system if migrating to a dynamic site.

## 🔧 Core JavaScript Features

### `src/scripts/main.js` Functionality
- **Theme Toggle**: Dark/light mode with localStorage persistence
- **Navbar Management**: Active state highlighting, scroll effects, dropdown behavior
- **Smooth Scrolling**: Enhanced anchor link navigation
- **Lazy Loading**: Image loading optimization
- **Form Validation**: Bootstrap validation integration
- **AOS Initialization**: Scroll animation setup
- **Year Update**: Automatic copyright year update

### `src/scripts/chatbot.js` Features
- Knowledge base matching
- Keyword-based responses
- Conversation history
- Mobile-responsive design
- Accessibility features

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Opera (latest)

## 🎯 Performance Optimizations

- **Lazy Loading Images**: Reduces initial page load time
- **CDN Resources**: Fast loading of external libraries
- **Resource Hints**: Preconnect and preload for critical resources
- **Minimal Dependencies**: Vanilla JavaScript reduces bundle size
- **CSS Variables**: Efficient theming without multiple stylesheets
- **Optimized Images**: Compressed hero images and assets

## 🔒 Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Screen reader friendly

## 📧 Contact Information

- **Email**: info@futurexceltech.com
- **Website**: [www.futurexceltech.com](https://www.futurexceltech.com)

## 📄 License

This website is proprietary software owned by FutureXcel Technologies. All rights reserved.

## 🗺️ Site Map

### Main Pages
- `/index.html` - Homepage
- `/src/pages/about.html` - About Us
- `/src/pages/careers.html` - Careers
- `/src/pages/contact.html` - Contact
- `/src/pages/training.html` - Training Programs

### Service Pages
- `/src/pages/services/services-cloud.html` - Cloud Services
- `/src/pages/services/services-consulting.html` - IT Consulting
- `/src/pages/services/services-data.html` - Data & Analytics
- `/src/pages/services/services-endpoint.html` - Endpoint Management
- `/src/pages/services/services-helpdesk.html` - Helpdesk & Support
- `/src/pages/services/services-ml.html` - Machine Learning
- `/src/pages/services/services-research.html` - Research & Development
- `/src/pages/services/services-software.html` - Software Development
- `/src/pages/services/services-training.html` - Training Services

## 🛠️ Development Notes

### Adding New Pages
1. Create new HTML file in appropriate directory (`src/pages/` or `src/pages/services/`)
2. Include standard head section with meta tags
3. Update asset paths relative to file location:
   - From `src/pages/*.html`: Use `../assets/`, `../styles/`, `../scripts/`
   - From `src/pages/services/*.html`: Use `../../assets/`, `../../styles/`, `../../scripts/`
   - From `index.html`: Use `./src/assets/`, `./src/styles/`, `./src/scripts/`
4. Add navigation link in navbar
5. Update active state logic in `src/scripts/main.js` if needed

### Modifying Styles
- Global styles: Edit `src/styles/styles.css`
- Page-specific styles: Add `<style>` block in HTML file
- Component styles: Use CSS variables for consistency

### Updating Content
- All content is in HTML files
- No CMS or database required
- Easy to edit with any text editor

## 🚀 Deployment

### Static Hosting Options
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Automatic deployments from Git
- **Vercel**: Fast global CDN
- **AWS S3 + CloudFront**: Scalable hosting
- **Traditional Web Hosting**: Any standard web server

### Deployment Steps
1. Upload all files to web server
2. Ensure proper file permissions
3. Configure domain and SSL certificate
4. Test all pages and functionality
5. Verify mobile responsiveness

### URL Rewriting
If your web server supports URL rewriting (Apache `.htaccess`, Nginx `rewrite`, etc.), you can configure clean URLs. Otherwise, update navigation links to use relative file paths.

## 📊 Version

Current version: 1.0.0

---

**FutureXcel Technologies** - Building digital platforms that scale.

For questions, support, or inquiries, please contact info@futurexceltech.com
