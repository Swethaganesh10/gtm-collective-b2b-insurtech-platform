# GTM Collective - B2B InsurTech Consulting Platform

A modern, high-performance marketing website built for [GTM Collective](https://gtm-collective.com), a B2B InsurTech consulting firm specializing in go-to-market strategy for insurance technology companies.

## Live Site

**[gtm-collective.com](https://gtm-collective.com)**

## Overview

Designed and developed a full-stack marketing platform from scratch for a remote B2B consulting business. The site is a single-page application with dedicated routes for the diagnostic assessment and contact page. It features a premium dark-themed UI, an interactive 25-question GTM readiness assessment tool, integrated analytics, and optimized performance for SEO and Core Web Vitals.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Language | JavaScript, React |
| Styling | Custom CSS (Dark Navy + Neon Cyan theme) |
| Animations | Framer Motion |
| Deployment | Vercel (Continuous Deployment) |
| Domain and DNS | GoDaddy (A Record to Vercel, CNAME config) |
| Analytics | Google Analytics 4 (GA4), Google Search Console |
| Contact Form | Web3Forms API |
| Assessment Backend | Google Sheets + Google Apps Script |
| Scheduling | Calendly Integration |
| Image Optimization | Next.js Image component, WebP conversion |

## Key Features

### Premium Dark-Themed Single-Page Design
- Custom-designed responsive layout with dark navy and neon cyan branding
- Smooth scroll navigation linking to homepage sections: Why GTM, Services, Diagnostic, Speaking, and About
- Framer Motion animations for polished transitions and interactive elements
- Fully responsive design for desktop, tablet, and mobile with hamburger menu

### Conversion Operating System (COS) Framework
- Visual representation of Kerry's 5-phase GTM methodology: Signal Scan, Ideal Fit Blueprint, Messaging Framework, GTM Engine Upgrade, and Performance Loop
- Dedicated services section combining the COS framework with service offerings

### GTM Signal Scan - Interactive Diagnostic Tool
- 25-question go-to-market readiness assessment for InsurTech companies hosted at /assessment route
- Google Sheets backend with Apps Script automation for response collection
- Automated email notifications to the business owner upon form submission
- Progress tracking and scored results with personalized feedback

### SEO and Performance Optimization
- Server-side rendering with Next.js App Router for improved crawlability
- Dynamic sitemap generation and submission to Google Search Console
- Image optimization using Next.js Image component and WebP format conversion
- Custom metadata and Open Graph tags for social sharing

### Contact Page
- Dedicated /contact route with multiple engagement options
- Calendly integration for 30-minute consultation booking
- Serverless contact form powered by Web3Forms API with client-side validation
- Direct email link to Kerry@gtm-collective.com

### Analytics and Tracking
- Google Analytics 4 integration for user behavior tracking
- Google Search Console for indexing and search performance monitoring

### Domain and Deployment
- Custom domain configured via GoDaddy DNS (A record to 76.76.21.21, CNAME to cname.vercel-dns.com)
- Continuous deployment through Vercel with automatic builds on push

## Project Structure

```
app/
  layout.js            # Root layout with metadata, fonts, and analytics
  page.js              # Main single-page site (all homepage sections)
  globals.css          # Global styles (dark theme, responsive, animations)
  sitemap.js           # Dynamic sitemap generation for SEO
  assessment/
    page.js            # GTM Signal Scan 25-question diagnostic tool
  contact/
    page.js            # Contact page with form, Calendly, and email
components/            # Reusable UI components
public/                # Static assets (optimized WebP images, logo)
next.config.js         # Next.js configuration
package.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```
git clone https://github.com/Swethaganesh10/gtm-collective-b2b-insurtech-platform.git
cd gtm-collective-b2b-insurtech-platform
npm install
```

### Environment Variables

Create a .env.local file in the root directory with your Google Analytics ID and Web3Forms access key.

### Run Locally

```
npm run dev
```

Open http://localhost:3000 to view the site.

## Impact

- Built and deployed a production-ready website for a live B2B InsurTech consulting business
- Achieved optimized Core Web Vitals scores through image optimization and server-side rendering
- Automated client intake workflow with assessment tool and email notifications, reducing manual effort for the business owner
- Improved search visibility through structured SEO, dynamic sitemap, and Search Console submission
- Delivered iterative updates based on stakeholder feedback including navigation restructuring, content revisions, and responsive design improvements

## Developer

**Swetha Ganesh**
- [LinkedIn](https://linkedin.com/in/swetha-ganesh-6399271b8)
- [GitHub](https://github.com/Swethaganesh10)

Master's in Data Analytics Engineering - Northeastern University (Expected May 2026)
