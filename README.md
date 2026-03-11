# GTM Collective - B2B InsurTech Consulting Platform

A modern, high-performance marketing website built for [GTM Collective](https://gtm-collective.com), a B2B InsurTech consulting firm specializing in go-to-market strategy for insurance technology companies.

## Live Site

**[gtm-collective.com](https://gtm-collective.com)**

## Overview

Designed and developed a full-stack marketing platform from scratch for a remote B2B consulting business. The site features a premium dark-themed UI, an interactive GTM assessment tool, integrated analytics, and optimized performance for SEO and Core Web Vitals.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | JavaScript, React |
| Styling | Custom CSS (Dark Navy + Neon Cyan theme) |
| Deployment | Vercel |
| Domain and DNS | GoDaddy (A Record to Vercel, CNAME config) |
| Analytics | Google Analytics (GA4), Google Search Console |
| Contact Form | Web3Forms API |
| Assessment Tool | Google Sheets + Apps Script (backend automation) |
| Image Optimization | Next.js Image component, WebP conversion |

## Key Features

### Premium Dark-Themed UI
- Custom-designed responsive layout with dark navy and neon cyan branding
- Smooth animations and interactive elements for a polished user experience

### GTM Signal Scan - Interactive Assessment Tool
- 25-question go-to-market readiness assessment for InsurTech companies
- Google Sheets backend with Apps Script automation
- Automated email notifications to the business owner upon form submission

### SEO and Performance Optimization
- Server-side rendering with Next.js App Router for improved crawlability
- Dynamic sitemap generation and submission to Google Search Console
- Image optimization using Next.js Image component and WebP format conversion
- Custom metadata and Open Graph tags for social sharing

### Analytics and Tracking
- Google Analytics 4 integration for user behavior tracking
- Google Search Console for indexing and search performance monitoring

### Contact Form Integration
- Serverless contact form powered by Web3Forms API
- Client-side validation with real-time feedback

### Domain and Deployment
- Custom domain configured via GoDaddy DNS (A record to 76.76.21.21, CNAME to cname.vercel-dns.com)
- Continuous deployment through Vercel with automatic builds on push

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

- Built and deployed a production-ready website for a live consulting business
- Achieved optimized Core Web Vitals scores through image optimization and SSR
- Automated client intake workflow, reducing manual effort for the business owner
- Improved search visibility through structured SEO and sitemap submission

## Developer

**Swetha Ganesh**
- [LinkedIn](https://linkedin.com/in/swetha-ganesh-6399271b8)
- [GitHub](https://github.com/Swethaganesh10)

Master's in Data Analytics Engineering - Northeastern University (Expected May 2026)
