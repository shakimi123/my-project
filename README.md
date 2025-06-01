# Delizia Restaurant Website

A modern, responsive website for **Delizia Restaurant** built with HTML, Tailwind CSS, and JavaScript.

## Features

- **Fully Responsive Design:** Looks great on mobile, tablet, and desktop.
- **Navigation:** Clean, adaptive header with navigation links.
- **Hero Section:** Welcome area with background image and call-to-action.
- **Menu Section:** Menu items with background images and interactive hover effects.
- **About Section:** Brief story about the restaurant.
- **Partners Section:** Restaurant partner logos with grayscale and enlarge-on-hover effects.
- **Testimonials:** Carousel for customer feedback.
- **Contact Form:** Users can send a message (shows a thank you alert on submit).
- **FAQ Section:** Click-to-expand answers for frequently asked questions.
- **Footer:** Social media icons and copyright.
- **Multi-language Support:** Switch between English, French, Swahili, and Italian using the language selector at the top right. All main content, menu, forms, and FAQ are translated.

## How to Use

1. **Clone or Download** this repository.
2. Open `index.html` in your browser to view the site.

3. All styling is handled by Tailwind CDN and optional custom CSS in `css/style.css`.
4. To customize menu items, images, or text, edit `index.html`.
5. The contact form uses a simple JavaScript alert for demonstration.
6. **To change the language:** Use the dropdown at the top right of the page.

## File Structure

```
/project
  ├── index.html         # Main website file (with multi-language support)
  ├── js/
  │   └── script.js      # JavaScript for carousel, contact form, FAQ accordion, and language switching
  └── README.md          # This file
```

## Deployment with GitHub Pages

You can easily deploy this site for free using [GitHub Pages](https://pages.github.com):

1. **Push your project to a GitHub repository.**
2. Go to your repository on GitHub.
3. Click on **Settings** > **Pages** in the sidebar.
4. Under **Source**, select the branch (usually `main` or `master`) and the root (`/`) folder.
5. Click **Save**.  
6. GitHub will provide a link to your live site at the top of the Pages settings.

**Your site will be live and fully responsive on mobile, tablet, and desktop!**

## Customization

- **Menu Items:** Change images, names, and prices in the Menu section.
- **Partners:** Replace logo URLs with your own partners.
- **Colors & Fonts:** Adjust Tailwind classes in the HTML or add custom styles in `css/style.css`.
- **Contact Form:** Integrate with a backend or service for real submissions.
- **FAQ:** Edit questions and answers in the FAQ section.
- **Translations:** Edit or add translations by updating the `<span data-lang="...">...</span>` elements in `index.html`.

## Credits

- Images from [Unsplash](https://unsplash.com/) and [Pixabay](https://pixabay.com/).
- Icons from [Heroicons](https://heroicons.com/) and SVG sources.

---

**Enjoy your new multilingual restaurant website!**