# FutureXcel Technologies Chatbot

A lightweight, customizable chatbot widget designed for static HTML websites. This chatbot provides automated responses to common inquiries about FutureXcel Technologies services, training programs, and contact information.

## Features

- 🚀 **Lightweight**: No external dependencies, pure JavaScript and CSS
- 📱 **Responsive**: Works seamlessly on desktop and mobile devices
- 🎨 **Customizable**: Easy to modify colors, messages, and behavior
- 🌙 **Dark Mode**: Automatically adapts to system preferences
- ⚡ **Fast**: Client-side only, instant responses
- ♿ **Accessible**: Keyboard navigation and ARIA labels included

## Quick Start

### 1. Add Files to Your Website

Copy these files to your website's root directory (or any accessible folder):
- `chatbot.js` - Main chatbot functionality
- `chatbot.css` - Chatbot styling

### 2. Include in Your HTML

Add these lines just before the closing `</body>` tag in your HTML files:

```html
<link rel="stylesheet" href="chatbot.css">
<script src="chatbot.js"></script>
```

### Example Integration

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Website</title>
</head>
<body>
    <!-- Your website content -->
    
    <!-- Chatbot Integration -->
    <link rel="stylesheet" href="chatbot.css">
    <script src="chatbot.js"></script>
</body>
</html>
```

## Customization

### Change Bot Position

Edit the `config` object in `chatbot.js`:

```javascript
const config = {
    position: 'bottom-right', // Change to 'bottom-left'
    // ... other settings
};
```

Or modify the CSS to position it differently.

### Modify Welcome Message

```javascript
const config = {
    welcomeMessage: 'Your custom welcome message here',
    // ... other settings
};
```

### Add Custom Responses

Edit the `knowledgeBase` object in `chatbot.js`:

```javascript
const knowledgeBase = {
    yourTopic: {
        keywords: ['keyword1', 'keyword2', 'related term'],
        response: 'Your detailed response here.\n\nYou can use line breaks.'
    },
    // ... existing topics
};
```

### Change Colors

Modify the CSS variables or update the color values in `chatbot.css`:

```css
/* Primary color - used for buttons and user messages */
background: linear-gradient(135deg, #0066cc, #0052a3);
```

## Knowledge Base Topics

The chatbot currently handles these topics:

- **Greetings**: hi, hello, hey, etc.
- **Services**: Information about all FutureXcel services
- **Training**: Training programs and placement support
- **Contact**: Email, phone, address, and contact options
- **Careers**: Job openings and career opportunities
- **Pricing**: Information about quotes and pricing
- **About**: Company information and background

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
your-website/
├── index.html
├── chatbot.js
├── chatbot.css
└── ... other files
```

## Testing

Open `example.html` in your browser to see the chatbot in action. You can test it by asking questions like:

- "What services do you offer?"
- "Tell me about training"
- "How can I contact you?"
- "What career opportunities are available?"

## Advanced Usage

### Programmatic Control

The chatbot exposes a global object for advanced customization:

```javascript
// Access after page load
window.FutureXcelChatbot.config.botName = 'Custom Name';
window.FutureXcelChatbot.knowledgeBase.services.response = 'Updated response';
```

### Integration with Backend API

To add backend integration, modify the `getBotResponse()` function in `chatbot.js`:

```javascript
function getBotResponse(userMessage) {
    // First check local knowledge base
    const localResponse = checkLocalKnowledgeBase(userMessage);
    if (localResponse) return localResponse;
    
    // Then fetch from API if needed
    fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => addMessage(data.response, 'bot'));
}
```

## Troubleshooting

### Chatbot not appearing?

1. Check that both `chatbot.js` and `chatbot.css` are in the correct location
2. Verify file paths are correct in your HTML
3. Check browser console for JavaScript errors
4. Ensure files are loaded (check Network tab in browser DevTools)

### Styling issues?

1. Make sure `chatbot.css` is loaded after your main stylesheet
2. Check for CSS conflicts with your existing styles
3. Verify the chatbot container has proper z-index (should be 9999)

### Responses not working?

1. Check the `knowledgeBase` object in `chatbot.js`
2. Verify keywords match user queries (case-insensitive)
3. Check browser console for JavaScript errors

## Support

For questions or issues:
- Email: info@futurexceltech.com
- Website: [www.futurexceltech.com](https://www.futurexceltech.com)

## License

This chatbot widget is provided by FutureXcel Technologies for use on the FutureXcel Technologies website.

## Version

Current version: 1.0.0

---

**FutureXcel Technologies** - Building digital platforms that scale.

