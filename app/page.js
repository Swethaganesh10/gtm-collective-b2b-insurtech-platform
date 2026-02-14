// // 'use client';

// // import { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import Link from 'next/link';

// // export default function Home() {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [scrollProgress, setScrollProgress] = useState(0);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       // Navbar scroll effect
// //       if (window.scrollY > 50) {
// //         setScrolled(true);
// //       } else {
// //         setScrolled(false);
// //       }

// //       // Scroll progress bar
// //       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
// //       const progress = (window.scrollY / scrollHeight) * 100;
// //       setScrollProgress(progress);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       {/* Scroll Progress Bar */}
// //       <div 
// //         id="scroll-progress" 
// //         style={{ 
// //           position: 'fixed',
// //           top: 0,
// //           left: 0,
// //           width: `${scrollProgress}%`,
// //           height: '4px',
// //           background: 'linear-gradient(90deg, #1e3a5f 0%, #00B89F 100%)',
// //           zIndex: 10000,
// //           transition: 'width 0.1s ease-out',
// //           boxShadow: '0 0 10px rgba(0, 184, 159, 0.5)'
// //         }}
// //       />

// //       {/* Navigation */}
// //       <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
// //         <div className="nav-container">
// //           <Link href="/" className="logo">
// //             <img src="/logo.jpg" alt="GTM Collective" className="logo-img" />
// //           </Link>
// //           <div className="nav-links">
// //             <a href="#about" className="underline-effect">About</a>
// //             <a href="#why-cos-matters" className="underline-effect">Why COS</a>
// //             <a href="#cos-framework" className="underline-effect">Framework</a>
// //             <a href="#assessment" className="underline-effect">Diagnostic</a>
// //             <a href="#speaking" className="underline-effect">Speaking</a>
// //             <a href="https://calendly.com/kerry-gtm-collective/30min" className="nav-cta shine-effect">Book a Call</a>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <section className="hero">
// //         <div className="hero-content">
// //           <div className="container-narrow">
// //             <p className="hero-tagline">
// //               <span className="pulse-dot"></span>GTM Collective
// //             </p>
// //             <h1>Accelerating Growth for InsurTech Leaders</h1>
// //             <p>Success requires more than funding; it demands operational GTM discipline in a complex, relationship-driven industry.</p>
// //             <a href="#assessment" className="cta-button">Discover Your GTM Health</a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* About Kerry Section */}
// //       <section id="about" style={{ position: 'relative', zIndex: 100, background: 'white' }}>
// //         <div className="container">
// //           <h2>Meet Kerry Macca</h2>
          
// //           <div className="about-kerry">
// //             <div className="about-image">
// //               <img src="/kerry-headshot.png" alt="Kerry Macca" />
// //             </div>
            
// //             <div className="about-content">
// //               <h3>Hi, I'm Kerry - Founder of GTM Collective</h3>
              
// //               <p>I'm a strategist, growth advisor, and executive partner with over 30 years of experience at the intersection of insurance, technology, and enterprise sales. I've worked across the full spectrum of the industry from established carriers to disruptive InsurTechs helping companies build and scale go-to-market strategies that actually convert.</p>
              
// //               <p>What sets my approach apart is my ability to connect strategy with execution. I understand the full insurance lifecycle, the mindset of the buyer, and the internal complexity that slows growth. I work closely with founders, CEOs, and innovation solution providers to bring clarity, alignment, and momentum to their GTM efforts especially when they're ready to move from founder-led selling to scalable systems.</p>
              
// //               <p>At GTM Collective, I combine decades of domain expertise with a modern, data-driven mindset. I use emerging technologies, including AI, to help my clients stand out in crowded markets, close the right customers faster, and unlock their next stage of growth.</p>
              
// //               <p>Known for my straightforward and collaborative style, I bring structure, speed, and strategic clarity to every engagement so you can stop guessing and start growing with confidence.</p>
// //             </div>
// //           </div>
          
// //           {/* Who This Is For */}
// //           <div className="who-cos-for">
// //             <h2 style={{ marginTop: '100px' }}>Who the Conversion Operating System Is Built For</h2>
            
// //             <div className="who-cos-hero-image">
// //               <img src="/whoCOS.jpg" alt="GTM Professional at Work" />
// //             </div>
            
// //             <div className="client-types-grid">
// //               <div className="client-type-card">
// //                 <div className="icon-wrapper">
// //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                     <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// //                   </svg>
// //                 </div>
// //                 <h3>InsurTech Founders</h3>
// //                 <p>InsurTech founders still leading sales</p>
// //               </div>
              
// //               <div className="client-type-card">
// //                 <div className="icon-wrapper">
// //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                     <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
// //                   </svg>
// //                 </div>
// //                 <h3>Early-Stage Teams</h3>
// //                 <p>Early-stage and pre-seed teams building their first GTM engine</p>
// //               </div>
              
// //               <div className="client-type-card">
// //                 <div className="icon-wrapper">
// //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                     <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
// //                   </svg>
// //                 </div>
// //                 <h3>Post-Founder CEOs</h3>
// //                 <p>Post-founder CEOs brought in to scale go-to-market</p>
// //               </div>
              
// //               <div className="client-type-card">
// //                 <div className="icon-wrapper">
// //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                     <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
// //                   </svg>
// //                 </div>
// //                 <h3>Growth-Stage Startups</h3>
// //                 <p>Seed to Series B startups with broken handoffs and siloed teams</p>
// //               </div>
              
// //               <div className="client-type-card">
// //                 <div className="icon-wrapper">
// //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                     <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
// //                   </svg>
// //                 </div>
// //                 <h3>B2B Insurance Platforms</h3>
// //                 <p>B2B platforms selling into complex insurance buyers (carriers, MGAs, brokers)</p>
// //               </div>
              
// //               <div className="client-type-card">
// //                 <div className="icon-wrapper">
// //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
// //                   </svg>
// //                 </div>
// //                 <h3>High-Activity Teams</h3>
// //                 <p>Teams tired of doing a lot but not growing fast enough</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why GTM Section */}
// //       <section className="section-alt" id="why-gtm">
// //         <div className="container">
// //           <h2>Why GTM Collective?</h2>
          
// //           <div className="why-gtm-content">
// //             <p>We are a strategic growth partner with decades of experience guiding InsurTech founders, CEOs, and solution providers through high-impact go-to-market transformations. With deep roots in both enterprise technology and the full insurance lifecycle, we bring unmatched insight to help modern companies cut through complexity and scale with clarity.</p>
            
// //             <p>Our hybrid background spans underwriting, enterprise sales, and technology giving us a unique edge. We don't just advise on strategy; we help you build a sales and GTM engine that aligns your message, motion, and market. Leveraging AI, modern GTM frameworks, and a hands-on approach, we equip your team to move faster and convert better without burning out or second-guessing your next move.</p>
            
// //             <p>Our approach is collaborative, outcomes-driven, and grounded in real-world execution because momentum matters, and growth doesn't happen by accident.</p>
            
// //             <div className="services-showcase">
// //               <h3>Core Services</h3>
// //               <p>Go-To-Market Strategy | Sales System Design | Messaging & Positioning | AI-Enabled GTM Execution | Revenue Growth Planning | Unified GTM Engineering | Revenue Operations | Fractional CRO</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Impact Stats Section */}
// //       <section className="impact-stats-section">
// //         <div className="container">
// //           <div className="impact-stats-grid">
// //             <div className="impact-stats-content">
// //               <div className="impact-tagline">GTM Collective:</div>
// //               <h2 className="impact-title">Proven Results That Drive Real Growth</h2>
// //               <p className="impact-description">We don't just consult—we transform. Our clients see measurable improvements in conversion rates, sales efficiency, and revenue acceleration through our data-driven COS framework.</p>
// //               <a href="#cos-framework" className="impact-cta-button">Explore the Framework</a>
// //             </div>
            
// //             <div className="impact-visual">
// //               <div className="growth-arrows">
// //                 <div className="arrow arrow-1"></div>
// //                 <div className="arrow arrow-2"></div>
// //                 <div className="arrow arrow-3"></div>
// //                 <div className="arrow arrow-4"></div>
// //                 <div className="arrow arrow-5"></div>
// //               </div>
// //             </div>
// //           </div>
          
// //           <div className="stats-metrics-grid">
// //             <div className="metric-card">
// //               <div className="metric-number">85%</div>
// //               <div className="metric-label">Average reduction in quote processing time</div>
// //             </div>
            
// //             <div className="metric-card">
// //               <div className="metric-number">95%</div>
// //               <div className="metric-label">Improvement in feedback categorization accuracy</div>
// //             </div>
            
// //             <div className="metric-card">
// //               <div className="metric-number">30+</div>
// //               <div className="metric-label">Years of combined insurance & tech expertise</div>
// //             </div>
            
// //             <div className="metric-card">
// //               <div className="metric-number">100%</div>
// //               <div className="metric-label">Focus on InsurTech growth acceleration</div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why COS Matters Section */}
// //       <section id="why-cos-matters" className="why-cos-matters-section">
// //         <div className="container">
// //           <h2>Why Every InsurTech Founder Needs COS Right Now</h2>
          
// //           <div className="why-cos-matters">
// //             <div className="why-cos-intro">
// //               <p>Most InsurTech startups aren't failing because of product, they're stalling because their go-to-market engine is built on guesswork. Sales is manual. Marketing is scattered. RevOps is missing entirely. And the founder is still doing everything.</p>
              
// //               <p>Revenue growth is slow, messaging is unclear, and teams can't tell what's actually working.</p>
              
// //               <p>Meanwhile, buyers are more skeptical. Sales cycles are longer. Investors are asking hard questions about GTM repeatability and most founders don't have answers.</p>
// //             </div>
            
// //             <div className="highlight-box">
// //               <p>The reality? Deals are stalling. Pipelines are leaking. And without a unified GTM engine, founders are burning time, capital and trust. Go-to-market clarity is now table stakes.</p>
// //             </div>
            
// //             <div className="problem-solution-grid">
// //               <div className="problem-column">
// //                 <h3>The Challenge</h3>
// //                 <ul className="icon-list problem-list">
// //                   <li>Manual, disconnected sales processes</li>
// //                   <li>Scattered marketing efforts</li>
// //                   <li>Missing or incomplete RevOps</li>
// //                   <li>Founder doing everything</li>
// //                   <li>Slow revenue growth</li>
// //                 </ul>
// //               </div>
              
// //               <div className="transformation-arrow">
// //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
// //                 </svg>
// //                 <span className="arrow-label">COS</span>
// //               </div>
              
// //               <div className="solution-column">
// //                 <h3>✓ The Companies That Win</h3>
// //                 <ul className="winning-criteria-list">
// //                   <li>
// //                     <div className="checkmark-icon">
// //                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                         <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
// //                       </svg>
// //                     </div>
// //                     <span className="criteria-text">Build a unified GTM engine</span>
// //                     <span className="criteria-number">1</span>
// //                   </li>
// //                   <li>
// //                     <div className="checkmark-icon">
// //                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                         <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
// //                       </svg>
// //                     </div>
// //                     <span className="criteria-text">Align sales, marketing, and RevOps</span>
// //                     <span className="criteria-number">2</span>
// //                   </li>
// //                   <li>
// //                     <div className="checkmark-icon">
// //                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                         <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
// //                       </svg>
// //                     </div>
// //                     <span className="criteria-text">Turn founder-led selling into a scalable system</span>
// //                     <span className="criteria-number">3</span>
// //                   </li>
// //                   <li>
// //                     <div className="checkmark-icon">
// //                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                         <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
// //                       </svg>
// //                     </div>
// //                     <span className="criteria-text">Create clarity around who they serve and how they win</span>
// //                     <span className="criteria-number">4</span>
// //                   </li>
// //                   <li>
// //                     <div className="checkmark-icon">
// //                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                         <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
// //                       </svg>
// //                     </div>
// //                     <span className="criteria-text">Track performance and fix what's not working in real time</span>
// //                     <span className="criteria-number">5</span>
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
            
// //             <div className="opportunity-statement">
// //               <p>Most InsurTechs don't have this — but <span className="opportunity-highlight">that's the opportunity.</span></p>
// //             </div>
            
// //             <div className="cos-callout-box">
// //               <p>The Conversion Operating System shows you how to build it <span className="cos-highlight">before you need a rescue plan.</span></p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* COS Framework Section */}
// //       <section id="cos-framework">
// //         <div className="container">
// //           <h2>The Conversion Operating System</h2>
// //           <p className="section-subtitle">This Is Not Consulting. It's a GTM Operating System.</p>
          
// //           <div className="cos-intro">
// //             <p>The COS is delivered in modular phases designed to minimize founder bandwidth while maximizing early wins. Each phase builds on the last, and you'll always know what to do now and what can wait.</p>
// //           </div>
          
// //           <div className="cos-framework-visual">
// //             <img src="/cos-framework-diagram.jpg" alt="Conversion Operating System Framework" />
// //           </div>
          
// //           <div className="cos-framework-grid">
// //             <div className="cos-phase">
// //               <div className="cos-number">1</div>
// //               <h3>Signal Scan</h3>
// //               <p>Revenue Engine Diagnose your GTM and sales performance to identify conversion gaps and systemic bottlenecks.</p>
// //             </div>
            
// //             <div className="cos-phase">
// //               <div className="cos-number">2</div>
// //               <h3>Ideal Fit Blueprint</h3>
// //               <p>Precisely define your Ideal Customer Profile (ICP), target accounts, and buyer personas based on real buying behavior, not assumptions.</p>
// //             </div>
            
// //             <div className="cos-phase">
// //               <div className="cos-number">3</div>
// //               <h3>Messaging Framework & Content Sync</h3>
// //               <p>Create unified, pain-first messaging that speaks to insurance buyer realities and is consistent across every touchpoint, that creates urgency, trust, and conversion.</p>
// //             </div>
            
// //             <div className="cos-phase">
// //               <div className="cos-number">4</div>
// //               <h3>GTM Engine Upgrade</h3>
// //               <p>Integrate a process-driven GTM motion that supports one cohesive system that creates the foundation for future scale, including structure, process, and RevOps.</p>
// //             </div>
            
// //             <div className="cos-phase">
// //               <div className="cos-number">5</div>
// //               <h3>Performance Loop</h3>
// //               <p>Operationalize a weekly GTM performance reviews and leading indicators to course-correct in real time.</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Assessment Section */}
// //       <section className="section-alt" id="assessment">
// //         <div className="container">
// //           <h2>Revenue Engine Diagnose</h2>
// //           <p className="section-subtitle">Discover your GTM health in 5 minutes with our comprehensive diagnostic assessment</p>
          
// //           <div className="assessment-hero">
// //             <h3>The GTM Signal Scan</h3>
// //             <p>Get a personalized diagnostic showing exactly where your revenue engine is breaking down—and how to fix it</p>
// //             <Link href="/assessment" className="cta-button">Take the Assessment</Link>
// //           </div>
          
// //           <h2 style={{ marginTop: '100px' }}>What We Measure</h2>
// //           <div className="categories">
// //             <div className="category-card">
// //               <div className="icon-wrapper">
// //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
// //                 </svg>
// //               </div>
// //               <h3>GTM Strategy & Offer Clarity</h3>
// //               <p>Do you know who you're selling to and why they should choose you?</p>
// //             </div>
            
// //             <div className="category-card">
// //               <div className="icon-wrapper">
// //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
// //                 </svg>
// //               </div>
// //               <h3>Sales Process & Conversion</h3>
// //               <p>Is your sales motion repeatable or does every deal feel like starting over?</p>
// //             </div>
            
// //             <div className="category-card">
// //               <div className="icon-wrapper">
// //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
// //                 </svg>
// //               </div>
// //               <h3>Tooling & Visibility</h3>
// //               <p>Can you see your pipeline and track what's actually happening?</p>
// //             </div>
            
// //             <div className="category-card">
// //               <div className="icon-wrapper">
// //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
// //                 </svg>
// //               </div>
// //               <h3>Sales Motion & Founder Time</h3>
// //               <p>Is your time allocated efficiently and do you have the right team structure?</p>
// //             </div>
            
// //             <div className="category-card">
// //               <div className="icon-wrapper">
// //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
// //                 </svg>
// //               </div>
// //               <h3>Learning & Sales Tracking</h3>
// //               <p>Are you measuring what matters and learning from every interaction?</p>
// //             </div>
            
// //             <div className="category-card">
// //               <div className="icon-wrapper">
// //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
// //                 </svg>
// //               </div>
// //               <h3>Lead Flow Confidence</h3>
// //               <p>Do you have a reliable way to generate qualified leads consistently?</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Speaking Section */}
// //       <section id="speaking">
// //         <div className="container">
// //           <h2>Speaking with Impact</h2>
// //           <p className="section-subtitle">Driving conversations that move from strategy to action</p>
          
// //           <div className="speaking-grid">
// //             <div className="speaking-card">
// //               <div className="speaking-image">
// //                 <img src="/insurtech.jpeg" alt="InsurTech Panel" />
// //               </div>
// //               <div className="speaking-content">
// //                 <h3>Shaping the Future of InsurTech</h3>
// //                 <p>As a go-to-market strategist with decades of experience across insurance and enterprise technology, I bring a practical, real-world lens to InsurTech stages. I speak on the Industry challenges and how to overcome them with clarity, alignment, and speed. Whether addressing founders, product leaders, or sales teams, my goal is to move conversations from abstract strategy to executable action.</p>
// //               </div>
// //             </div>
            
// //             <div className="speaking-card">
// //               <div className="speaking-image">
// //                 <img src="/WIIT%20Conference%20Panel.jpg" alt="Women in Leadership" />
// //               </div>
// //               <div className="speaking-content">
// //                 <h3>Championing Women in Insurance and Tech</h3>
// //                 <p>I'm passionate about helping women step into leadership with confidence and conviction. I speak at industry events focused on elevating women in insurance and technology, sharing the lessons I've learned from the boardroom to the front lines of GTM. Through candid storytelling and actionable takeaways, I empower women to lead authentically, build influence, and drive meaningful change.</p>
// //               </div>
// //             </div>
            
// //             <div className="speaking-card">
// //               <div className="speaking-image">
// //                 <img src="/RISE%20Professional%20Panel.jpg" alt="Next Generation" />
// //               </div>
// //               <div className="speaking-content">
// //                 <h3>Inspiring the Next Generation of Leaders</h3>
// //                 <p>One of the most rewarding parts of my work is mentoring and speaking to emerging professionals through organizations like RISE Professional. I help early-career talent understand how to navigate the industry, position themselves for leadership, and build careers aligned with who they are. My talks are designed to spark ambition, build resilience, and remind young professionals that their voice matters now more than ever.</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Final CTA Section */}
// //       <section className="final-cta">
// //         <div className="final-cta-content">
// //           <div className="container-narrow">
// //             <h2>Ready to Accelerate Your Growth?</h2>
// //             <p>Let's discuss how we can transform your GTM strategy and unlock your revenue potential</p>
// //             <a href="https://calendly.com/kerry-gtm-collective/30min" className="cta-button">Book Your Call</a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer>
// //         <div className="container">
// //           <div className="footer-content">
// //             <div className="footer-brand">
// //               <h3>GTM Collective</h3>
// //               <p style={{ color: '#00D4BB', fontWeight: 600 }}>Bridging Strategy, Sales & Revenue Execution</p>
// //               <p>Accelerating growth for InsurTech founders, CEOs, and solution providers through proven go-to-market strategies.</p>
// //             </div>
            
// //             <div className="footer-section">
// //               <h4>Navigation</h4>
// //               <a href="#about">About Kerry</a>
// //               <a href="#why-gtm">Why GTM Collective</a>
// //               <a href="#cos-framework">COS Framework</a>
// //               <a href="#assessment">Revenue Diagnostic</a>
// //               <a href="#speaking">Speaking</a>
// //             </div>
            
// //             <div className="footer-section">
// //               <h4>Connect</h4>
// //               <a href="mailto:kerry@gtmcollective.com">kerry@gtmcollective.com</a>
// //               <a href="https://calendly.com/kerry-gtm-collective/30min">Book a Call</a>
// //               <a href="https://www.linkedin.com/in/kerrymacca">LinkedIn</a>
// //             </div>
// //           </div>
          
// //           <div className="footer-bottom">
// //             <p>© 2025 GTM Collective LLC. All rights reserved.</p>
// //           </div>
// //         </div>
// //       </footer>
// //     </>
// //   );
// // }


// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// export default function Home() {
//   const [scrolled, setScrolled] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }

//       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (window.scrollY / scrollHeight) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <div 
//         style={{ 
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: `${scrollProgress}%`,
//           height: '4px',
//           background: 'linear-gradient(90deg, #1e3a5f 0%, #00B89F 100%)',
//           zIndex: 10000,
//           transition: 'width 0.1s ease-out',
//           boxShadow: '0 0 10px rgba(0, 184, 159, 0.5)'
//         }}
//       />

//       <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
//         <div className="nav-container">
//           <Link href="/" className="logo">
//             <img src="/logo.jpg" alt="GTM Collective" className="logo-img" />
//           </Link>
//           <div className="nav-links">
//             <a href="#about">About</a>
//             <a href="#why-gtm">Why GTM</a>
//             <a href="#why-cos-matters">Why COS</a>
//             <a href="#cos-framework">Framework</a>
//             <a href="#assessment">Diagnostic</a>
//             <a href="#speaking">Speaking</a>
//             <a href="https://calendly.com/kerry-gtm-collective/30min" className="nav-cta">Book a Call</a>
//           </div>
//         </div>
//       </nav>

//       <section className="hero">
//         <div className="hero-content">
//           <div className="container-narrow">
//             <p className="hero-tagline">
//               <span className="pulse-dot"></span>GTM Collective
//             </p>
//             <h1>Accelerating Growth for InsurTech Leaders</h1>
//             <p>Success requires more than funding; it demands operational GTM discipline in a complex, relationship-driven industry.</p>
//             <a href="#assessment" className="cta-button">Discover Your GTM Health</a>
//           </div>
//         </div>
//       </section>

//       <section id="about" className="about-section-premium">
//         <div className="container">
//           <h2>Meet Kerry Macca</h2>
          
//           <div className="about-kerry">
//             <div className="about-image">
//               <img src="/kerry-headshot.png" alt="Kerry Macca" />
//             </div>
            
//             <div className="about-content">
//               <h3>Hi, I'm Kerry - Founder of GTM Collective</h3>
//               <p>I'm a strategist, growth advisor, and executive partner with over 30 years of experience at the intersection of insurance, technology, and enterprise sales. I've worked across the full spectrum of the industry from established carriers to disruptive InsurTechs helping companies build and scale go-to-market strategies that actually convert.</p>
//               <p>What sets my approach apart is my ability to connect strategy with execution. I understand the full insurance lifecycle, the mindset of the buyer, and the internal complexity that slows growth. I work closely with founders, CEOs, and innovation solution providers to bring clarity, alignment, and momentum to their GTM efforts especially when they're ready to move from founder-led selling to scalable systems.</p>
//               <p>At GTM Collective, I combine decades of domain expertise with a modern, data-driven mindset. I use emerging technologies, including AI, to help my clients stand out in crowded markets, close the right customers faster, and unlock their next stage of growth.</p>
//               <p>Known for my straightforward and collaborative style, I bring structure, speed, and strategic clarity to every engagement so you can stop guessing and start growing with confidence.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="who-cos-for-section">
//         <div className="container">
//           <h2>Who the Conversion Operating System Is Built For</h2>
//           <div className="who-cos-hero-image">
//             <img src="/whoCOS.jpg" alt="GTM Professional at Work" />
//           </div>
//           <div className="client-types-grid">
//             {[
//               { title: "InsurTech Founders", desc: "InsurTech founders still leading sales", icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" },
//               { title: "Early-Stage Teams", desc: "Early-stage and pre-seed teams building their first GTM engine", icon: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" },
//               { title: "Post-Founder CEOs", desc: "Post-founder CEOs brought in to scale go-to-market", icon: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" },
//               { title: "Growth-Stage Startups", desc: "Seed to Series B startups with broken handoffs and siloed teams", icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" },
//               { title: "B2B Insurance Platforms", desc: "B2B platforms selling into complex insurance buyers (carriers, MGAs, brokers)", icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" },
//               { title: "High-Activity Teams", desc: "Teams tired of doing a lot but not growing fast enough", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }
//             ].map((item, idx) => (
//               <div key={idx} className="client-type-card">
//                 <div className="icon-wrapper">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                     <path d={item.icon}/>
//                   </svg>
//                 </div>
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="why-gtm-premium" id="why-gtm">
//         <div className="container">
//           <h2>Why GTM Collective?</h2>
//           <div className="why-gtm-content">
//             <p>We are a strategic growth partner with decades of experience guiding InsurTech founders, CEOs, and solution providers through high-impact go-to-market transformations. With deep roots in both enterprise technology and the full insurance lifecycle, we bring unmatched insight to help modern companies cut through complexity and scale with clarity.</p>
//             <p>Our hybrid background spans underwriting, enterprise sales, and technology giving us a unique edge. We don't just advise on strategy; we help you build a sales and GTM engine that aligns your message, motion, and market. Leveraging AI, modern GTM frameworks, and a hands-on approach, we equip your team to move faster and convert better without burning out or second-guessing your next move.</p>
//             <p>Our approach is collaborative, outcomes-driven, and grounded in real-world execution because momentum matters, and growth doesn't happen by accident.</p>
//             <div className="services-showcase-dark">
//               <h3>Core Services</h3>
//               <p>Go-To-Market Strategy | Sales System Design | Messaging & Positioning | AI-Enabled GTM Execution | Revenue Growth Planning | Unified GTM Engineering | Revenue Operations | Fractional CRO</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="impact-section-premium">
//   <div className="container">
//     <div className="impact-stats-grid">
//       <div className="impact-content-center">
//         <div className="impact-tagline">GTM COLLECTIVE:</div>
//         <h2 className="impact-title">Proven Results That Drive Real Growth</h2>
//         <p className="impact-description">We don't just consult—we transform. Our clients see measurable improvements in conversion rates, sales efficiency, and revenue acceleration through our data-driven COS framework.</p>
//         <a href="#cos-framework" className="impact-cta-button">Explore the Framework</a>
//       </div>
      
//       <div className="impact-visual">
//         <div className="growth-arrows">
//           <div className="arrow arrow-1"></div>
//           <div className="arrow arrow-2"></div>
//           <div className="arrow arrow-3"></div>
//           <div className="arrow arrow-4"></div>
//           <div className="arrow arrow-5"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       <section id="why-cos-matters" className="why-cos-matters-section">
//         <div className="container">
//           <h2>Why Every InsurTech Founder Needs COS Right Now</h2>
//           <div className="why-cos-matters">
//             <div className="why-cos-intro">
//               <p>Most InsurTech startups aren't failing because of product, they're stalling because their go-to-market engine is built on guesswork. Sales is manual. Marketing is scattered. RevOps is missing entirely. And the founder is still doing everything.</p>
//               <p>Revenue growth is slow, messaging is unclear, and teams can't tell what's actually working.</p>
//               <p>Meanwhile, buyers are more skeptical. Sales cycles are longer. Investors are asking hard questions about GTM repeatability and most founders don't have answers.</p>
//             </div>
//             <div className="highlight-box">
//               <p>The reality? Deals are stalling. Pipelines are leaking. And without a unified GTM engine, founders are burning time, capital and trust. Go-to-market clarity is now table stakes.</p>
//             </div>
//             <div className="problem-solution-grid">
//               <div className="problem-column">
//                 <h3>The Challenge</h3>
//                 <ul className="icon-list problem-list">
//                   <li>Manual, disconnected sales processes</li>
//                   <li>Scattered marketing efforts</li>
//                   <li>Missing or incomplete RevOps</li>
//                   <li>Founder doing everything</li>
//                   <li>Slow revenue growth</li>
//                 </ul>
//               </div>
//               <div className="transformation-arrow">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
//                 </svg>
//                 <span className="arrow-label">COS</span>
//               </div>
//               <div className="solution-column">
//                 <h3>✓ The Companies That Win</h3>
//                 <ul className="winning-criteria-list">
//                   {[
//                     "Build a unified GTM engine",
//                     "Align sales, marketing, and RevOps",
//                     "Turn founder-led selling into a scalable system",
//                     "Create clarity around who they serve and how they win",
//                     "Track performance and fix what's not working in real time"
//                   ].map((text, idx) => (
//                     <li key={idx}>
//                       <div className="checkmark-icon">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                           <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
//                         </svg>
//                       </div>
//                       <span className="criteria-text">{text}</span>
//                       <span className="criteria-number">{idx + 1}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="opportunity-statement">
//               <p>Most InsurTechs don't have this — but <span className="opportunity-highlight">that's the opportunity.</span></p>
//             </div>
//             <div className="cos-callout-box">
//               <p>The Conversion Operating System shows you how to build it <span className="cos-highlight">before you need a rescue plan.</span></p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="cos-framework">
//         <div className="container">
//           <h2>The Conversion Operating System</h2>
//           <p className="section-subtitle">This Is Not Consulting. It's a GTM Operating System.</p>
//           <div className="cos-intro">
//             <p>The COS is delivered in modular phases designed to minimize founder bandwidth while maximizing early wins. Each phase builds on the last, and you'll always know what to do now and what can wait.</p>
//           </div>
//           <div className="cos-framework-visual">
//             <img src="/cos-framework-diagram.jpg" alt="Conversion Operating System Framework" />
//           </div>
//           <div className="cos-framework-grid">
//             {[
//               { num: 1, title: "Signal Scan", desc: "Revenue Engine Diagnose your GTM and sales performance to identify conversion gaps and systemic bottlenecks." },
//               { num: 2, title: "Ideal Fit Blueprint", desc: "Precisely define your Ideal Customer Profile (ICP), target accounts, and buyer personas based on real buying behavior, not assumptions." },
//               { num: 3, title: "Messaging Framework & Content Sync", desc: "Create unified, pain-first messaging that speaks to insurance buyer realities and is consistent across every touchpoint, that creates urgency, trust, and conversion." },
//               { num: 4, title: "GTM Engine Upgrade", desc: "Integrate a process-driven GTM motion that supports one cohesive system that creates the foundation for future scale, including structure, process, and RevOps." },
//               { num: 5, title: "Performance Loop", desc: "Operationalize a weekly GTM performance reviews and leading indicators to course-correct in real time." }
//             ].map((phase, idx) => (
//               <div key={idx} className="cos-phase">
//                 <div className="cos-number">{phase.num}</div>
//                 <h3>{phase.title}</h3>
//                 <p>{phase.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="assessment-section-neon" id="assessment">
//         <div className="container">
//           <h2>Revenue Engine Diagnose</h2>
//           <p className="section-subtitle">Discover your GTM health in 5 minutes with our comprehensive diagnostic assessment</p>
//           <div className="assessment-hero">
//             <h3>The GTM Signal Scan</h3>
//             <p>Get a personalized diagnostic showing exactly where your revenue engine is breaking down—and how to fix it</p>
//             <Link href="/assessment" className="cta-button">Take the Assessment</Link>
//           </div>
//         </div>
//         <div className="categories-neon-dark">
//           <div className="container">
//             <h2>What We Measure</h2>
//             <div className="categories">
//               {[
//                 { title: "GTM Strategy & Offer Clarity", desc: "Do you know who you're selling to and why they should choose you?", icon: "M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" },
//                 { title: "Sales Process & Conversion", desc: "Is your sales motion repeatable or does every deal feel like starting over?", icon: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" },
//                 { title: "Tooling & Visibility", desc: "Can you see your pipeline and track what's actually happening?", icon: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" },
//                 { title: "Sales Motion & Founder Time", desc: "Is your time allocated efficiently and do you have the right team structure?", icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" },
//                 { title: "Learning & Sales Tracking", desc: "Are you measuring what matters and learning from every interaction?", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" },
//                 { title: "Lead Flow Confidence", desc: "Do you have a reliable way to generate qualified leads consistently?", icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" }
//               ].map((cat, idx) => (
//                 <div key={idx} className="category-card">
//                   <div className="icon-wrapper">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                       <path d={cat.icon}/>
//                     </svg>
//                   </div>
//                   <h3>{cat.title}</h3>
//                   <p>{cat.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//    <section id="speaking" className="speaking-premium">
//   <div className="container">
//     <h2>Speaking with Impact</h2>
//     <p className="section-subtitle">Driving conversations that move from strategy to action</p>
    
//     <div className="speaking-grid">
//       {[
//         { img: "/insurtech.jpeg", title: "Shaping the Future of InsurTech", desc: "As a go-to-market strategist with decades of experience across insurance and enterprise technology, I bring a practical, real-world lens to InsurTech stages. I speak on the Industry challenges and how to overcome them with clarity, alignment, and speed. Whether addressing founders, product leaders, or sales teams, my goal is to move conversations from abstract strategy to executable action." },
//         { img: "/WIIT Conference Panel.jpg", title: "Championing Women in Insurance and Tech", desc: "I'm passionate about helping women step into leadership with confidence and conviction. I speak at industry events focused on elevating women in insurance and technology, sharing the lessons I've learned from the boardroom to the front lines of GTM. Through candid storytelling and actionable takeaways, I empower women to lead authentically, build influence, and drive meaningful change." },
//         { img: "/RISE Professional Panel.jpg", title: "Inspiring the Next Generation of Leaders", desc: "One of the most rewarding parts of my work is mentoring and speaking to emerging professionals through organizations like RISE Professional. I help early-career talent understand how to navigate the industry, position themselves for leadership, and build careers aligned with who they are. My talks are designed to spark ambition, build resilience, and remind young professionals that their voice matters now more than ever." }
//       ].map((speaking, idx) => (
//         <div key={idx} className="speaking-card">
//           <div className="speaking-image">
//             <img src={speaking.img} alt={speaking.title} />
//           </div>
//           <div className="speaking-content">
//             <h3>{speaking.title}</h3>
//             <p>{speaking.desc}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       <section className="final-cta">
//         <div className="final-cta-content">
//           <div className="container-narrow">
//             <h2>Ready to Accelerate Your Growth?</h2>
//             <p>Let's discuss how we can transform your GTM strategy and unlock your revenue potential</p>
//             <a href="https://calendly.com/kerry-gtm-collective/30min" className="cta-button">Book Your Call</a>
//           </div>
//         </div>
//       </section>

//       <footer>
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-brand">
//               <h3>GTM Collective</h3>
//               <p style={{ color: '#00D4BB', fontWeight: 600 }}>Bridging Strategy, Sales & Revenue Execution</p>
//               <p>Accelerating growth for InsurTech founders, CEOs, and solution providers through proven go-to-market strategies.</p>
//             </div>
//             <div className="footer-section">
//               <h4>Navigation</h4>
//               <a href="#about">About Kerry</a>
//               <a href="#why-gtm">Why GTM Collective</a>
//               <a href="#cos-framework">COS Framework</a>
//               <a href="#assessment">Revenue Diagnostic</a>
//               <a href="#speaking">Speaking</a>
//             </div>
//             <div className="footer-section">
//               <h4>Connect</h4>
//               <a href="mailto:kerry@gtmcollective.com">kerry@gtmcollective.com</a>
//               <a href="https://calendly.com/kerry-gtm-collective/30min">Book a Call</a>
//               <a href="https://www.linkedin.com/in/kerrymacca">LinkedIn</a>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>© 2025 GTM Collective LLC. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '4px',
          background: 'linear-gradient(90deg, #1e3a5f 0%, #00B89F 100%)',
          zIndex: 10000,
          transition: 'width 0.1s ease-out',
          boxShadow: '0 0 10px rgba(0, 184, 159, 0.5)'
        }}
      />

      {/* Navigation - UPDATED ORDER: Why GTM, Services, Diagnostic, Speaking, About, Contact Us */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <Link href="/" className="logo">
            <img src="/logo.jpg" alt="GTM Collective" className="logo-img" />
          </Link>
          <div className="nav-links">
            <a href="#why-gtm">Why GTM</a>
            <a href="#services">Services</a>
            <a href="#assessment">Diagnostic</a>
            <a href="#speaking">Speaking</a>
            <a href="#about">About</a>
            <a href="https://calendly.com/kerry-gtm-collective/30min" className="nav-cta">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - REMOVED GTM COLLECTIVE TAGLINE */}
      <section className="hero">
        <div className="hero-content">
          <div className="container-narrow">
            <h1>Accelerating Growth for InsurTech Leaders</h1>
            <p>Success requires more than funding; it demands operational GTM discipline in a complex, relationship-driven industry.</p>
            <a href="#assessment" className="cta-button">Discover Your GTM Health</a>
          </div>
        </div>
      </section>

    {/* Why GTM Section - WITH 4 FEATURE CARDS */}
<section className="why-gtm-premium" id="why-gtm">
  <div className="container">
    <h2>Why GTM Collective?</h2>
    
    {/* 4 Feature Cards with Images */}
    <div className="why-gtm-features-grid">
      {[
        {
          img: "/expertise-card.jpg",
          title: "Deep Insurance & Tech Expertise",
          desc: "Enterprise tech, underwriting, and sales knowledge combined"
        },
        {
          img: "/framework-card.jpg",
          title: "Proven COS Framework",
          desc: "We build systems that align message, motion, and market"
        },
        {
          img: "/ai-enabled-card.jpg",
          title: "AI-Enabled Execution",
          desc: "Leveraging AI and proven frameworks for competitive edge"
        },
        {
          img: "/results-card.jpg",
          title: "Real-World Growth",
          desc: "Hands-on support built for real-world growth"
        }
      ].map((feature, idx) => (
        <div key={idx} className="why-gtm-feature-card">
          <div className="feature-image">
            <img src={feature.img} alt={feature.title} />
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </div>
    
    {/* Summary Text */}
    <div className="why-gtm-summary">
      <p>Working with GTM Collective gives you a clear, scalable path to revenue growth. Your sales and marketing teams operate in sync, targeting the right buyers with precision. No more guesswork, just a streamlined Go-To-Market (GTM) engine that converts.</p>
    </div>
    
    {/* Core Services */}
    <div className="services-showcase-dark">
      <h3>What We Deliver</h3>
      <p>Go-To-Market Strategy | Sales System Design | Messaging & Positioning | AI-Enabled GTM Execution | Revenue Growth Planning | Unified GTM Engineering | Revenue Operations | Fractional CRO</p>
    </div>
  </div>
</section>

      {/* Impact Section */}
      <section className="impact-section-premium">
        <div className="container">
          <div className="impact-stats-grid">
            <div className="impact-content-center">
              <div className="impact-tagline">GTM COLLECTIVE:</div>
              <h2 className="impact-title">Proven Results That Drive Real Growth</h2>
              <p className="impact-description">We don't just consult—we transform. Our clients see measurable improvements in conversion rates, sales efficiency, and revenue acceleration through our data-driven COS framework.</p>
              <a href="#services" className="impact-cta-button">Explore Our Services</a>
            </div>
            
            <div className="impact-visual">
              <div className="growth-arrows">
                <div className="arrow arrow-1"></div>
                <div className="arrow arrow-2"></div>
                <div className="arrow arrow-3"></div>
                <div className="arrow arrow-4"></div>
                <div className="arrow arrow-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - COMBINED WHY COS + FRAMEWORK */}
      <section id="services" className="why-cos-matters-section">
        <div className="container">
          <h2>Why Every InsurTech Founder Needs COS Right Now</h2>
          <div className="why-cos-matters">
            <div className="why-cos-intro">
              <p>Most InsurTech startups aren't failing because of product, they're stalling because their go-to-market engine is built on guesswork. Sales is manual. Marketing is scattered. RevOps is missing entirely. And the founder is still doing everything.</p>
              <p>Revenue growth is slow, messaging is unclear, and teams can't tell what's actually working.</p>
              <p>Meanwhile, buyers are more skeptical. Sales cycles are longer. Investors are asking hard questions about GTM repeatability and most founders don't have answers.</p>
            </div>
            <div className="highlight-box">
              <p>The reality? Deals are stalling. Pipelines are leaking. And without a unified GTM engine, founders are burning time, capital and trust. Go-to-market clarity is now table stakes.</p>
            </div>
            <div className="problem-solution-grid">
              <div className="problem-column">
                <h3>The Challenge</h3>
                <ul className="icon-list problem-list">
                  <li>Manual, disconnected sales processes</li>
                  <li>Scattered marketing efforts</li>
                  <li>Missing or incomplete RevOps</li>
                  <li>Founder doing everything</li>
                  <li>Slow revenue growth</li>
                </ul>
              </div>
              <div className="transformation-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
                <span className="arrow-label">COS</span>
              </div>
              <div className="solution-column">
                <h3>✓ The Companies That Win</h3>
                <ul className="winning-criteria-list">
                  {[
                    "Build a unified GTM engine",
                    "Align sales, marketing, and RevOps",
                    "Turn founder-led selling into a scalable system",
                    "Create clarity around who they serve and how they win",
                    "Track performance and fix what's not working in real time"
                  ].map((text, idx) => (
                    <li key={idx}>
                      <div className="checkmark-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <span className="criteria-text">{text}</span>
                      <span className="criteria-number">{idx + 1}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="opportunity-statement">
              <p>Most InsurTechs don't have this — but <span className="opportunity-highlight">that's the opportunity.</span></p>
            </div>
            <div className="cos-callout-box">
              <p>The Conversion Operating System (COS) shows you how to build it <span className="cos-highlight">before you need a rescue plan.</span></p>
            </div>
          </div>
        </div>

        {/* COS Framework - MERGED INTO SERVICES */}
        <div className="container" style={{ marginTop: '100px' }}>
          <h2 style={{ color: 'white', WebkitTextFillColor: 'white' }}>The Conversion Operating System</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>This Is Not Consulting. It's a GTM Operating System.</p>
          <div className="cos-intro">
            <p>The Conversion Operating System (COS) is delivered in modular phases designed to minimize founder bandwidth while maximizing early wins. Each phase builds on the last, and you'll always know what to do now and what can wait.</p>
          </div>
          <div className="cos-framework-visual">
            <img src="/cos-framework-diagram.jpg" alt="Conversion Operating System Framework" />
          </div>
          <div className="cos-framework-grid">
            {[
              { num: 1, title: "Signal Scan", desc: "Revenue Engine Diagnose your GTM and sales performance to identify conversion gaps and systemic bottlenecks." },
              { num: 2, title: "Ideal Fit Blueprint", desc: "Precisely define your Ideal Customer Profile (ICP), target accounts, and buyer personas based on real buying behavior, not assumptions." },
              { num: 3, title: "Messaging Framework & Content Sync", desc: "Create unified, pain-first messaging that speaks to insurance buyer realities and is consistent across every touchpoint, that creates urgency, trust, and conversion." },
              { num: 4, title: "GTM Engine Upgrade", desc: "Integrate a process-driven GTM motion that supports one cohesive system that creates the foundation for future scale, including structure, process, and RevOps." },
              { num: 5, title: "Performance Loop", desc: "Operationalize a weekly GTM performance reviews and leading indicators to course-correct in real time." }
            ].map((phase, idx) => (
              <div key={idx} className="cos-phase">
                <div className="cos-number">{phase.num}</div>
                <h3>{phase.title}</h3>
                <p>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who COS Is For - REDUCED TO 3 BOXES WITH PERSONA IMAGES */}
<section className="who-cos-for-section">
  <div className="container">
    <h2>Who the Conversion Operating System Is Built For</h2>
    
    <div className="client-types-grid">
      {[
        { 
          title: "InsurTech Founders", 
          desc: "InsurTech founders still leading sales",
          image: "/founder-persona.jpg",
          icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" 
        },
        { 
          title: "CEOs Brought in to Scale Go-To-Market", 
          desc: "Experienced executives scaling revenue operations",
          image: "/ceo-persona.jpg",
          icon: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" 
        },
        { 
          title: "Growth-Stage B2B Insurance Platforms", 
          desc: "Seed to Series B startups with broken handoffs and siloed teams",
          image: "/platform-persona.jpg",
          icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" 
        }
      ].map((item, idx) => (
        <div key={idx} className="client-type-card">
          <div className="persona-image-top">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d={item.icon}/>
            </svg>
          </div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Assessment Section */}
      <section className="assessment-section-neon" id="assessment">
        <div className="container">
          <h2>Revenue Engine Diagnose</h2>
          <p className="section-subtitle">Discover your GTM health in 5 minutes with our comprehensive diagnostic assessment</p>
          <div className="assessment-hero">
            <h3>The GTM Signal Scan</h3>
            <p>Get a personalized diagnostic showing exactly where your revenue engine is breaking down—and how to fix it</p>
            <Link href="/assessment" className="cta-button">Take the Assessment</Link>
          </div>
        </div>
        <div className="categories-neon-dark">
          <div className="container">
            <h2>What We Measure</h2>
            <div className="categories">
              {[
                { title: "GTM Strategy & Offer Clarity", desc: "Do you know who you're selling to and why they should choose you?", icon: "M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" },
                { title: "Sales Process & Conversion", desc: "Is your sales motion repeatable or does every deal feel like starting over?", icon: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" },
                { title: "Tooling & Visibility", desc: "Can you see your pipeline and track what's actually happening?", icon: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" },
                { title: "Sales Motion & Founder Time", desc: "Is your time allocated efficiently and do you have the right team structure?", icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" },
                { title: "Learning & Sales Tracking", desc: "Are you measuring what matters and learning from every interaction?", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" },
                { title: "Lead Flow Confidence", desc: "Do you have a reliable way to generate qualified leads consistently?", icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" }
              ].map((cat, idx) => (
                <div key={idx} className="category-card">
                  <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d={cat.icon}/>
                    </svg>
                  </div>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Section - WITH NEW CTA */}
      <section id="speaking" className="speaking-premium">
        <div className="container">
          <h2>Speaking with Impact</h2>
          <p className="section-subtitle">Driving conversations that move from strategy to action</p>
          
          {/* NEW SPEAKING CTA BOX */}
<div className="speaking-cta-box">
  <h3>Speaking Engagements</h3>
  <p>Kerry is available to speak at industry conferences and seminars, as well as lead or host client councils, advisory boards, and other professional gatherings. Whether it's sharing her insights and knowledge of industry topics or trends, or her perspective on the vision and future of insurance, Kerry will create an impactful and insightful experience for attendees.</p>
  <a 
    href="mailto:kerry@gtmcollective.com?subject=Speaking Inquiry" 
    className="speaking-cta-button"
  >
    Request Kerry as a Speaker
  </a>
</div>
          
          <div className="speaking-grid">
            {[
              { img: "/insurtech.jpeg", title: "Shaping the Future of InsurTech", desc: "As a go-to-market strategist with decades of experience across insurance and enterprise technology, I bring a practical, real-world lens to InsurTech stages. I speak on the industry challenges and how to overcome them with clarity, alignment, and speed. Whether addressing founders, product leaders, or sales teams, my goal is to move conversations from abstract strategy to executable action." },
              { img: "/WIIT Conference Panel.jpg", title: "Championing Women in Insurance and Tech", desc: "I'm passionate about helping women step into leadership with confidence and conviction. I speak at industry events focused on elevating women in insurance and technology, sharing the lessons I've learned from the boardroom to the front lines of GTM. Through candid storytelling and actionable takeaways, I empower women to lead authentically, build influence, and drive meaningful change." },
              { img: "/RISE Professional Panel.jpg", title: "Inspiring the Next Generation of Leaders", desc: "One of the most rewarding parts of my work is mentoring and speaking to emerging professionals through organizations like RISE Professional. I help early-career talent understand how to navigate the industry, position themselves for leadership, and build careers aligned with who they are. My talks are designed to spark ambition, build resilience, and remind young professionals that their voice matters now more than ever." }
            ].map((speaking, idx) => (
              <div key={idx} className="speaking-card">
                <div className="speaking-image">
                  <img src={speaking.img} alt={speaking.title} />
                </div>
                <div className="speaking-content">
                  <h3>{speaking.title}</h3>
                  <p>{speaking.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - MOVED TO BOTTOM BEFORE FINAL CTA */}
      <section id="about" className="about-section-premium">
        <div className="container">
          <h2>Meet Kerry Macca</h2>
          
          <div className="about-kerry">
            <div className="about-image">
              {/* REPLACE THIS WITH NEW PHOTO WHEN KERRY SENDS IT */}
              <img src="/kerry-headshot.jpg" alt="Kerry Macca" />
            </div>
            
            <div className="about-content">
              <h3>Hi, I'm Kerry - Founder of GTM Collective</h3>
              <p>I'm a strategist, growth advisor, and executive partner with over 30 years of experience at the intersection of insurance, technology, and enterprise sales. I've worked across the full spectrum of the industry from established carriers to disruptive InsurTechs helping companies build and scale go-to-market strategies that actually convert.</p>
              <p>What sets my approach apart is my ability to connect strategy with execution. I understand the full insurance lifecycle, the mindset of the buyer, and the internal complexity that slows growth. I work closely with founders, CEOs, and innovation solution providers to bring clarity, alignment, and momentum to their GTM efforts especially when they're ready to move from founder-led selling to scalable systems.</p>
              <p>At GTM Collective, I combine decades of domain expertise with a modern, data-driven mindset. I use emerging technologies, including AI, to help my clients stand out in crowded markets, close the right customers faster, and unlock their next stage of growth.</p>
              <p>Known for my straightforward and collaborative style, I bring structure, speed, and strategic clarity to every engagement so you can stop guessing and start growing with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <div className="container-narrow">
            <h2>Ready to Accelerate Your Growth?</h2>
            <p>Let's discuss how we can transform your GTM strategy and unlock your revenue potential</p>
            <a href="https://calendly.com/kerry-gtm-collective/30min" className="cta-button">Book Your Call</a>
          </div>
        </div>
      </section>

      {/* Footer - UPDATED NAV ORDER */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>GTM Collective</h3>
              <p style={{ color: '#00D4BB', fontWeight: 600 }}>Bridging Strategy, Sales & Revenue Execution</p>
              <p>Accelerating growth for InsurTech founders, CEOs, and solution providers through proven go-to-market strategies.</p>
            </div>
            <div className="footer-section">
              <h4>Navigation</h4>
              <a href="#why-gtm">Why GTM Collective</a>
              <a href="#services">Services</a>
              <a href="#assessment">Revenue Diagnostic</a>
              <a href="#speaking">Speaking</a>
              <a href="#about">About Kerry</a>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <a href="mailto:kerry@gtmcollective.com">kerry@gtmcollective.com</a>
              <a href="https://calendly.com/kerry-gtm-collective/30min">Book a Call</a>
              <a href="https://www.linkedin.com/in/kerrymacca">LinkedIn</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 GTM Collective LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}