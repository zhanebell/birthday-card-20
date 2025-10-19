# 🎂 20th Birthday Card - Virtual Interactive Experience

A beautiful, interactive virtual birthday card created with love. This handmade-style digital card features paper textures, soft animations, and multiple interactive surprises to discover!

## ✨ Features

### Interactive Elements
- **🎀 Pull Tabs** - Drag to reveal hidden messages
- **📖 Flip Panels** - Click doors to open memories
- **💗 Die-Cut Hearts** - Hover and click for sweet messages
- **📸 Accordion Pockets** - Expand to see collections of moments
- **✨ Scratch-Off Cards** - Reveal surprises by scratching
- **🧲 Magnet Locks** - Pull apart magnetic pieces
- **🎀 Ribbon Untie** - Hold to untie bows and unlock compartments
- **📝 Notebook Tear-Out** - Tear pages to add to keepsake pile
- **🧩 Slider Puzzle** - Solve a mini puzzle for a surprise
- **🎡 20 Things Wheel** - Spin to discover lists of love

### Design Elements
- Warm beige and sage green color palette
- Paper textures and letterpress shadows
- Handwritten-style fonts (Dancing Script)
- Smooth spring-loaded animations
- Confetti celebrations
- Responsive design for mobile and desktop

## 🚀 Quick Start

### Option 1: Open Locally
1. Download all files to a folder
2. Open `index.html` in any modern web browser
3. Enjoy the experience!

### Option 2: Deploy to GitHub Pages

#### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right and select **"New repository"**
3. Name your repository (e.g., `birthday-card-20`)
4. Choose **Public** (so it can be hosted on GitHub Pages)
5. Click **"Create repository"**

#### Step 2: Upload Your Files
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Write a commit message like "Initial birthday card upload"
4. Click **"Commit changes"**

#### Step 3: Enable GitHub Pages
1. In your repository, click **"Settings"** (top menu)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"main"** branch
4. Click **"Save"**
5. Wait a few minutes, then refresh the page
6. You'll see a message: **"Your site is live at https://[your-username].github.io/[repository-name]/"**

#### Step 4: Share the Link!
Copy the URL and share it with the birthday girl! 🎉

## 🎨 Customization Guide

### Personalizing the 20 Things Lists

In `script.js`, find the `twentyThingsData` object (around line 9). Replace the placeholder text with your own:

```javascript
const twentyThingsData = {
    reasons: [
        "Your first reason...",
        "Your second reason...",
        // ... 20 total items
    ],
    future: [
        "First future thing...",
        "Second future thing...",
        // ... 20 total items
    ],
    dates: [
        "First date idea...",
        "Second date idea...",
        // ... 20 total items
    ]
};
```

### Editing the Final Letter

In `index.html`, find the `<div id="final-letter">` section (around line 242). Update the letter content:

```html
<div class="letter-body">
    <p>My Dearest Birthday Girl,</p>
    
    <p>Your personalized message here...</p>
    
    <!-- Add your own paragraphs -->
    
    <p class="letter-signature">
        Forever yours,<br>
        [Your Name Here]
    </p>
</div>
```

### Changing Colors

In `styles.css`, modify the CSS variables at the top (around line 5):

```css
:root {
    --cream: #F5F3EE;        /* Main background */
    --beige: #E8E3D6;        /* Card pages */
    --warm-beige: #D4C5B0;   /* Accents */
    --sage-green: #A4B494;   /* Primary accent */
    --dark-sage: #7A8A6F;    /* Darker accent */
    --soft-brown: #8B7355;   /* Text color */
}
```

### Adding the Envelope Link

In `index.html`, find the envelope section (around line 276) and update the link:

```html
<a href="YOUR_SPOTIFY_PLAYLIST_LINK" class="special-link" target="_blank">
    🎵 Our Playlist
</a>
```

You can link to:
- A Spotify/Apple Music playlist
- A Google Photos album (shared link)
- A custom form/survey
- Any other special URL

## 📱 Browser Compatibility

Works best on:
- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile)
- ✅ Edge (Desktop)

## 🎁 User Journey

1. **Cover** - Click the wax seal to open the card
2. **Confetti** - Celebratory animation as the card opens
3. **Interior** - Explore 8 interactive compartments
4. **Pop-Up** - After opening all compartments, see the main message
5. **Puzzle** - Solve a quick slider puzzle
6. **20 Things Wheel** - Spin to see different lists
7. **Final Letter** - Read the heartfelt birthday message
8. **Explore** - Go back and revisit any section!

## 💡 Tips for the Best Experience

- Use on a desktop/laptop for the full experience
- Make sure sound is on (if you add audio)
- Take your time exploring each element
- Some interactions require clicking, some dragging, some hovering
- Look for visual hints (icons and text) for what to do
- Mobile works great too, but some drag interactions work best with a mouse

## 🔧 Technical Details

### File Structure
```
20-Bday/
├── index.html       # Main HTML structure
├── styles.css       # All styling and animations
├── script.js        # Interactive functionality
└── README.md        # This file
```

### Dependencies
- Google Fonts (Dancing Script, Quicksand)
- No frameworks required - pure HTML/CSS/JavaScript!

### Performance
- Lightweight (~50KB total)
- Fast loading times
- Smooth 60fps animations
- Canvas-based scratch-off effect

## 🐛 Troubleshooting

**Card won't open?**
- Make sure JavaScript is enabled in your browser
- Check browser console for errors (F12)

**Animations look choppy?**
- Try a different browser
- Close other resource-heavy tabs

**Mobile gestures not working?**
- Some interactions work better with touch and hold
- Try tapping instead of clicking

**GitHub Pages not showing up?**
- Wait 5-10 minutes after enabling Pages
- Make sure your repository is public
- Check that files are in the root directory

## 📝 Customization Checklist

Before sharing, make sure to:
- [ ] Update the 20 reasons list with your reasons
- [ ] Update the 20 future things list
- [ ] Update the 20 dates list
- [ ] Personalize the final letter
- [ ] Add your name to the letter signature
- [ ] Update the envelope link (if using)
- [ ] Test all interactive elements
- [ ] Check on mobile device

## 💖 Credits

Created with love for an amazing girlfriend who deserves the world.

Inspired by handmade cards with secret compartments, interactive elements, and thoughtful details.

Built with HTML, CSS, and JavaScript - no frameworks needed!

## 📜 License

This is a personal project made with love. Feel free to use it as inspiration for your own special someone! ✨

---

**Happy 20th Birthday! 🎂🎉💝**

*Made with ❤️ and lots of care*
