# StepStyle - Premium Footwear Showcase

A clean, modern, and responsive website showcasing a collection of premium footwear. Built with HTML, CSS, and JavaScript.

## 🎯 Features

- **Full-Screen Video Hero**: Cinematic video background with overlay and call-to-action
- **Multiple Content Sections**: Story, materials, process, collection preview, testimonials
- **Interactive Elements**: Parallax effects, animated statistics, smooth scrolling
- **Newsletter Integration**: Email subscription with form validation
- **Premium Animations**: Staggered loading, hover effects, and micro-interactions
- **Responsive Design**: Mobile-first approach with clean, modern UI
- **Dynamic Content**: Shoe details loaded dynamically based on URL parameters
- **Contact Form**: Functional contact form with validation
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 📄 Pages

1. **Home Page** (`index.html`)
   - Full-screen video hero with overlay
   - Company story with statistics and video
   - Materials showcase with premium cards
   - Manufacturing process timeline
   - Collection preview with image grid
   - Industry testimonials
   - Newsletter subscription

2. **All Shoes Page** (`shoes.html`)
   - Grid layout of all available shoes
   - Shoe cards with images, names, and prices
   - "More Info" buttons linking to detail pages

3. **Shoe Detail Page** (`shoe-detail.html`)
   - Large product image
   - Detailed product information
   - Features and care instructions
   - Back navigation

4. **About Page** (`about.html`)
   - Brand story and mission
   - Feature cards highlighting key values
   - Company information

5. **Contact Page** (`contact.html`)
   - Contact form with validation
   - User-friendly feedback messages
   - Professional layout

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality and form handling
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Inter font family for typography

## 🎨 Design Features

- **Color Scheme**: Modern blue and purple gradients
- **Typography**: Clean Inter font family
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Animations**: Smooth transitions and hover effects
- **Shadows**: Subtle box shadows for depth
- **Mobile-First**: Responsive design that works on all devices

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Navigate** through the different pages using the menu
4. **Test** the responsive design by resizing your browser window

## 📁 File Structure

```
StepStyle/
├── index.html          # Home page
├── shoes.html          # All shoes page
├── shoe-detail.html    # Individual shoe detail page
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # Main JavaScript functionality
├── shoe-detail.js      # Shoe detail page functionality
├── contact.js          # Contact form handling
└── README.md           # Project documentation
```

## 🎯 Key Features Explained

### Dynamic Shoe Details
The shoe detail page uses JavaScript to load different shoe information based on URL parameters. Each shoe has:
- Unique ID
- Product name
- Price
- High-quality image
- Detailed description
- Features list
- Care instructions

### Contact Form
The contact form includes:
- Form validation
- Email format checking
- Success/error messages
- Loading states
- Form reset after submission

### Mobile Navigation
- Hamburger menu for mobile devices
- Smooth slide-in animation
- Auto-close when clicking links
- Touch-friendly interface

## 🎨 Customization

### Colors
The main color scheme can be modified in `styles.css`:
- Primary Blue: `#3498db`
- Dark Blue: `#2980b9`
- Dark Gray: `#2c3e50`
- Gradient: `#667eea` to `#764ba2`

### Adding New Shoes
To add new shoes, update the `shoesData` object in `shoe-detail.js`:
```javascript
const shoesData = {
    9: {
        name: "New Shoe Name",
        price: "$99.99",
        image: "image-url",
        description: "Shoe description..."
    }
}
```

## 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the project.

---

**StepStyle** - Premium footwear for every step of your journey. 