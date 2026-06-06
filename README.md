# MELIA KÁB Landing Page

Commercial landing page developed for **MELIA KÁB**, an artisanal melipona honey brand inspired by Mayan tradition. The website presents the product, catalog, pricing, location, contact channels, and promotional media while integrating the main elements of the marketing mix: **Product, Price, Place, and Promotion**.

## Demo

Live site deployed on Netlify:

https://meliakab.netlify.app

## Project Description

MELIA KÁB is a static landing page focused on the commercial presentation of an artisanal product brand. The main goal of the project was to build a clear, responsive, and functional web experience where users can learn about the product, explore available presentations, check pricing, locate the business, and contact the seller directly through WhatsApp.

The site was built as a single-page landing page, with attention to visual structure, internal navigation, product presentation, mobile responsiveness, and basic performance considerations.

## Objectives

* Build a functional landing page for an artisanal honey brand.
* Integrate the 4 P’s of marketing: Product, Price, Place, and Promotion.
* Present a visual product catalog.
* Enable direct contact through WhatsApp and email.
* Include business location using Google Maps.
* Add a promotional video.
* Improve product visualization through an image lightbox.
* Optimize the layout for mobile devices.
* Deploy the site using Netlify.

## Technologies Used

* Astro
* HTML
* CSS
* JavaScript
* Netlify
* Git and GitHub
* Google Maps Embed
* Open Graph Metadata

## Main Features

### Responsive Design

The website was designed to adapt to different screen sizes, including desktop, tablet, and mobile devices. CSS Grid, Flexbox, and media queries were used to keep the structure readable and consistent across devices.

### Product Catalog

The site includes a catalog with multiple MELIA KÁB product presentations. Each product card includes an image, name, description, size or presentation, price or quotation option, and a direct WhatsApp link for inquiries.

### Image Lightbox

Catalog images and the main hero image can be opened in fullscreen mode, allowing users to view the products in greater detail. The lightbox can be closed using a button, the Escape key, or by clicking outside the image.

### Direct Contact

The landing page includes a WhatsApp button with a predefined message, as well as email and social media information. This makes it easier for users to request information or place an order.

### Google Maps Location

The site includes an embedded Google Maps section to display the business location, along with address, opening hours, and delivery information.

### Promotional Video

A short promotional video was added to reinforce the brand identity and include audiovisual content as part of the promotional strategy.

### Basic SEO and Open Graph

The project includes a page title, meta description, custom favicon, and Open Graph/Twitter Card tags to improve the site preview when shared on social media or messaging apps.

## Marketing Structure: 4 P’s

### Product

The page describes melipona honey as an artisanal, natural, premium product with cultural value. It also presents its characteristics, benefits, origin, and brand story.

### Price

The website displays prices by presentation, package options, and quotation-based products. It also mentions available payment methods and gift packaging options.

### Place

The location section includes the business address, opening hours, delivery options, and an interactive Google Maps embed.

### Promotion

The site uses a slogan, product images, promotional video, WhatsApp call-to-action, social media information, and visual branding elements to support brand communication.

## Project Structure

```txt
melia-kab-landing/
├─ public/
│  ├─ favicon.svg
│  ├─ images/
│  │  ├─ logo.png
│  │  ├─ melia-hero.webp
│  │  ├─ og-image.webp
│  │  ├─ presentacion-250g.webp
│  │  ├─ paquete-regalo.webp
│  │  ├─ pedido-especial.webp
│  │  ├─ producto-nuevo-1.webp
│  │  ├─ producto-nuevo-2.webp
│  │  └─ producto-nuevo-3.webp
│  └─ videos/
│     └─ melia-video.mp4
├─ src/
│  ├─ pages/
│  │  └─ index.astro
│  └─ styles/
│     └─ global.css
├─ astro.config.mjs
├─ package.json
└─ README.md
```

## Local Installation

Clone the repository:

```bash
git clone https://github.com/BlackTea10X/melia-kab-landing.git
```

Enter the project folder:

```bash
cd melia-kab-landing
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The site was deployed on Netlify.

Deployment configuration:

```txt
Build command: npm run build
Publish directory: dist
```

## What I Learned

This project allowed me to practice building a static landing page focused on commercial presentation, marketing structure, and visual communication. Unlike a more complex web application with authentication or a database, this project focused on presenting a product clearly, organizing content for conversion, and taking care of visual and technical details.

Key learning points include:

* Using Astro to build fast static websites.
* Structuring a commercial landing page.
* Applying the 4 P’s of marketing in a real web interface.
* Creating responsive layouts with CSS Grid, Flexbox, and media queries.
* Integrating multimedia resources.
* Implementing an image lightbox with JavaScript.
* Using Open Graph metadata to improve link previews.
* Deploying a static website with Netlify.
* Organizing visual assets for a product-focused website.

## Future Improvements

* Add a functional contact form.
* Improve image optimization with an automated workflow.
* Add a testimonials section.
* Add a frequently asked questions section.
* Integrate basic analytics.
* Add a custom domain.
* Improve the Open Graph image for better social media previews.
* Add more product variations or presentations.

## Author

Developed by **Alexis Pérez López** as a commercial landing page project and static web development practice.

GitHub: [BlackTea10X](https://github.com/AlexisPeLopez)
