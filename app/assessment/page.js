// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// export default function AssessmentPage() {
//   const [page, setPage] = useState('landing');
//   const [currentSection, setCurrentSection] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [responses, setResponses] = useState({});
//   const [userInfo, setUserInfo] = useState({
//     firstName: '',
//     email: '',
//     company: '',
//     revenueStage: ''
//   });

//   const sections = [
//     {
//       title: "Offer Clarity & Positioning",
//       questions: [
//         {
//           id: 1,
//           text: "Do your team members consistently describe the same Ideal Customer Profile (ICP)?",
//           type: "binary",
//           options: [
//             { text: "Yes", score: 5 },
//             { text: "No", score: 0 }
//           ]
//         },
//         {
//           id: 2,
//           text: "How confident are you in articulating your core offer in a single, clear sentence?",
//           type: "scale",
//           max: 5,
//           multiplier: 2,
//           labels: ["Not at all", "Crystal clear"]
//         },
//         {
//           id: 3,
//           text: "Do your buyers immediately get why you are different from the competition?",
//           type: "scale",
//           max: 5,
//           multiplier: 1.6,
//           labels: ["Not at all", "Absolutely"]
//         },
//         {
//           id: 4,
//           text: "When you pitch, do buyers ask questions about the outcomes or the features?",
//           type: "multiple",
//           options: [
//             { text: "Mostly outcomes", score: 5 },
//             { text: "Mostly features", score: 2 },
//             { text: "It varies", score: 3 },
//             { text: "Not sure", score: 0 }
//           ]
//         },
//         {
//           id: 5,
//           text: "Do you know why you win or lose deals?",
//           type: "binary",
//           options: [
//             { text: "Yes", score: 5 },
//             { text: "No", score: 0 }
//           ]
//         }
//       ]
//     },
//     {
//       title: "Sales Process & Consistency",
//       questions: [
//         {
//           id: 6,
//           text: "Do you have a clearly defined sales process (stages, actions, exit criteria)?",
//           type: "binary",
//           options: [
//             { text: "Yes", score: 10 },
//             { text: "No", score: 0 }
//           ]
//         },
//         {
//           id: 7,
//           text: "How consistently is that sales process followed today?",
//           type: "scale",
//           max: 5,
//           multiplier: 2,
//           labels: ["Not at all", "Very consistently"]
//         },
//         {
//           id: 8,
//           text: "How do you currently qualify leads?",
//           type: "multiple",
//           options: [
//             { text: "SPICED or MEDDIC", score: 8 },
//             { text: "BANT or similar", score: 5 },
//             { text: "We don't", score: 0 }
//           ]
//         },
//         {
//           id: 9,
//           text: "What is your average sales cycle length?",
//           type: "multiple",
//           options: [
//             { text: "Less than 15 days", score: 10 },
//             { text: "15 to 30 days", score: 8 },
//             { text: "30 to 60 days", score: 6 },
//             { text: "60 to 90 days", score: 4 },
//             { text: "90+ days", score: 2 },
//             { text: "Don't know", score: 0 }
//           ]
//         },
//         {
//           id: 10,
//           text: "Are your demos or sales calls mostly product walkthroughs or value-driven conversations?",
//           type: "multiple",
//           options: [
//             { text: "Mostly product", score: 2 },
//             { text: "Mostly value-driven", score: 8 },
//             { text: "A mix", score: 5 }
//           ]
//         }
//       ]
//     },
//     {
//       title: "Visibility & Tools",
//       questions: [
//         {
//           id: 11,
//           text: "Do you use a CRM (e.g. HubSpot, Salesforce)?",
//           type: "binary",
//           options: [
//             { text: "Yes", score: 5 },
//             { text: "No", score: 0 }
//           ]
//         },
//         {
//           id: 12,
//           text: "What percentage of deals are actively tracked in your CRM?",
//           type: "multiple",
//           options: [
//             { text: "90% or more", score: 10 },
//             { text: "75 to 90%", score: 7 },
//             { text: "50 to 75%", score: 4 },
//             { text: "Less than 50%", score: 2 }
//           ]
//         },
//         {
//           id: 13,
//           text: "Can you view pipeline by stage in seconds without asking your team?",
//           type: "binary",
//           options: [
//             { text: "Yes", score: 7 },
//             { text: "No", score: 0 }
//           ]
//         },
//         {
//           id: 14,
//           text: "Can you name your current close rate or pipeline velocity off the top of your head?",
//           type: "binary",
//           options: [
//             { text: "Yes", score: 8 },
//             { text: "No", score: 0 }
//           ]
//         }
//       ]
//     },
//     {
//       title: "Founder Time & Sales Ownership",
//       questions: [
//         {
//           id: 15,
//           text: "What percentage of your time is currently spent on sales or pre-sales activities?",
//           type: "multiple",
//           options: [
//             { text: "Less than 10%", score: 0 },
//             { text: "10 to 25%", score: 4 },
//             { text: "25 to 50%", score: 8 },
//             { text: "50 to 75%", score: 10 },
//             { text: "75% or more", score: 8 }
//           ]
//         },
//         {
//           id: 16,
//           text: "Who owns sales right now?",
//           type: "multiple",
//           options: [
//             { text: "Founder", score: 5 },
//             { text: "First sales hire", score: 7 },
//             { text: "Team of reps", score: 10 },
//             { text: "No one yet", score: 0 }
//           ]
//         },
//         {
//           id: 17,
//           text: "How often do you personally talk to prospects or customers?",
//           type: "multiple",
//           options: [
//             { text: "Daily", score: 10 },
//             { text: "Few times per week", score: 7 },
//             { text: "Once a week", score: 5 },
//             { text: "Rarely", score: 0 }
//           ]
//         },
//         {
//           id: 18,
//           text: "Do you have a consistent sales handoff or onboarding process post-sale?",
//           type: "binary",
//           options: [
//             { text: "Yes", score: 7 },
//             { text: "No", score: 0 }
//           ]
//         }
//       ]
//     },
//     {
//       title: "Tracking & Forecasting",
//       questions: [
//         {
//           id: 19,
//           text: "How often do you review sales performance with your team?",
//           type: "multiple",
//           options: [
//             { text: "Weekly", score: 10 },
//             { text: "Monthly", score: 8 },
//             { text: "Rarely", score: 2 },
//             { text: "Never", score: 0 }
//           ]
//         },
//         {
//           id: 20,
//           text: "What is your current forecasting method?",
//           type: "multiple",
//           options: [
//             { text: "Pipeline-based data", score: 10 },
//             { text: "Historical average", score: 6 },
//             { text: "Gut feel", score: 2 },
//             { text: "No forecast", score: 0 }
//           ]
//         },
//         {
//           id: 21,
//           text: "Do you track leading indicators (like outreach or calls) and lagging ones (like revenue)?",
//           type: "multiple",
//           options: [
//             { text: "Yes both", score: 10 },
//             { text: "Only one", score: 5 },
//             { text: "Neither", score: 0 }
//           ]
//         },
//         {
//           id: 22,
//           text: "Do you have a living document or system tracking objections or lessons from calls?",
//           type: "binary",
//           options: [
//             { text: "Yes", score: 8 },
//             { text: "No", score: 0 }
//           ]
//         }
//       ]
//     },
//     {
//       title: "Lead Flow & Pipeline Confidence",
//       questions: [
//         {
//           id: 23,
//           text: "Do you have a consistent, repeatable way to generate new leads weekly?",
//           type: "binary",
//           options: [
//             { text: "Yes", score: 10 },
//             { text: "No", score: 0 }
//           ]
//         },
//         {
//           id: 24,
//           text: "Are you confident your current lead flow will help hit your next revenue milestone?",
//           type: "scale",
//           max: 5,
//           multiplier: 2,
//           labels: ["Not at all", "Very confident"]
//         },
//         {
//           id: 25,
//           text: "Do you track where your highest-converting leads are coming from?",
//           type: "multiple",
//           options: [
//             { text: "Yes", score: 10 },
//             { text: "No", score: 0 }
//           ]
//         }
//       ]
//     }
//   ];

//   const calculateScore = () => {
//     let total = 0;
//     Object.entries(responses).forEach(([qId, answer]) => {
//       const allQuestions = sections.flatMap(s => s.questions);
//       const question = allQuestions.find(q => q.id === parseInt(qId));

//       if (question && question.type === 'scale') {
//         total += answer * question.multiplier;
//       } else if (question && (question.type === 'binary' || question.type === 'multiple')) {
//         const option = question.options.find(o => o.text === answer);
//         if (option) total += option.score;
//       }
//     });
//     return Math.round(total);
//   };

//   const getTier = (score) => {
//     if (score < 100) {
//       return {
//         level: "CRITICAL",
//         title: "You're Flying Blind",
//         message: "Your GTM engine has some serious gaps and you likely feel it every day. If you're still leading sales, chasing leads manually, and struggling to scale, you're not alone.",
//         subMessage: "Most teams in this phase are running on hustle, not a system. The good news? That's fixable.",
//         color: "bg-red-100 border-red-500"
//       };
//     }
//     if (score < 140) {
//       return {
//         level: "UNDERPERFORMING",
//         title: "You've Got Leaks",
//         message: "You're not starting from zero but right now, you're leaving deals on the table. Your GTM engine has real potential but it's not firing on all cylinders.",
//         subMessage: "Founder still doing most of the selling? No clear sales process or forecasting? Weak lead flow? If that sounds familiar, let's plug the leaks so you can scale without spinning.",
//         color: "bg-orange-100 border-orange-500"
//       };
//     }
//     if (score < 170) {
//       return {
//         level: "DEVELOPING",
//         title: "You're Close to Consistency",
//         message: "You're out of survival mode now it's time to scale with confidence. You've got solid GTM bones: some process, some pipeline, some predictability.",
//         subMessage: "But you're probably still the bottleneck. Some GTM systems aren't fully connected. You're missing leverage. Let's get you out of the weeds and into growth mode.",
//         color: "bg-yellow-100 border-yellow-500"
//       };
//     }
//     return {
//       level: "MATURE",
//       title: "Ready to Optimize & Scale",
//       message: "Solid work - your GTM engine is mature and structured. But even great systems leak over time.",
//       subMessage: "I usually see 1 to 2 blind spots in even the best-run teams: messaging gaps, role confusion, broken handoffs. Want an outside perspective before your next stage of growth?",
//       color: "bg-green-100 border-green-500"
//     };
//   };

//   const totalQuestions = sections.reduce((acc, s) => acc + s.questions.length, 0);
//   const answeredQuestions = Object.keys(responses).length;
//   const progress = (answeredQuestions / totalQuestions) * 100;

//   const currentQ = sections[currentSection]?.questions[currentQuestion];

//   const handleAnswer = (answer) => {
//     setResponses({ ...responses, [currentQ.id]: answer });
//   };

//   const nextQuestion = () => {
//     if (currentQuestion < sections[currentSection].questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else if (currentSection < sections.length - 1) {
//       setCurrentSection(currentSection + 1);
//       setCurrentQuestion(0);
//     } else {
//       const finalData = {
//         ...userInfo,
//         responses,
//         score: calculateScore(),
//         tier: getTier(calculateScore()).level,
//         timestamp: new Date().toISOString()
//       };
//       console.log('Assessment completed:', finalData);
//       setPage('results');
//     }
//   };

//   const prevQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     } else if (currentSection > 0) {
//       setCurrentSection(currentSection - 1);
//       setCurrentQuestion(sections[currentSection - 1].questions.length - 1);
//     }
//   };

//   const canProceed = () => {
//     return responses[currentQ?.id] !== undefined;
//   };

//   if (page === 'landing') {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//         <div className="max-w-2xl bg-white rounded-2xl shadow-2xl p-8 md:p-12">
//           <div className="text-center">
//             <Link href="/" className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold mb-4 inline-block">
//               Back to Home
//             </Link>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Is Your GTM Strategy the Reason You are Stuck in Founder-Led Sales?
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               Take the 5-minute GTM Signal Scan to see how your go-to-market engine stacks up. 
//               Get your score instantly and uncover where you are leaving revenue on the table.
//             </p>
//             <button
//               onClick={() => setPage('info')}
//               className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition flex items-center gap-2 mx-auto"
//             >
//               Start the Scan
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (page === 'info') {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//         <div className="max-w-xl bg-white rounded-2xl shadow-2xl p-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Before We Begin...</h2>
//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="First Name"
//               value={userInfo.firstName}
//               onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={userInfo.email}
//               onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             />
//             <input
//               type="text"
//               placeholder="Company Name"
//               value={userInfo.company}
//               onChange={(e) => setUserInfo({...userInfo, company: e.target.value})}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             />
//             <select
//               value={userInfo.revenueStage}
//               onChange={(e) => setUserInfo({...userInfo, revenueStage: e.target.value})}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             >
//               <option value="">Revenue Stage</option>
//               <option value="pre-revenue">Pre-revenue</option>
//               <option value="less-100k">Less than $100K</option>
//               <option value="100k-500k">$100K to $500K</option>
//               <option value="500k-1m">$500K to $1M</option>
//               <option value="1m-5m">$1M to $5M</option>
//               <option value="5m-plus">$5M+</option>
//             </select>
//             <button
//               onClick={() => setPage('assessment')}
//               disabled={!userInfo.firstName || !userInfo.email || !userInfo.company || !userInfo.revenueStage}
//               className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
//             >
//               Start Assessment
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (page === 'assessment') {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 py-8">
//         <div className="max-w-3xl mx-auto">
//           <div className="bg-white rounded-lg p-4 mb-6 shadow">
//             <div className="flex justify-between text-sm text-gray-600 mb-2">
//               <span>Progress: {answeredQuestions} of {totalQuestions}</span>
//               <span>{Math.round(progress)}%</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div 
//                 className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-2xl p-8">
//             <div className="mb-6">
//               <span className="text-sm font-semibold text-indigo-600">
//                 {sections[currentSection].title}
//               </span>
//               <h2 className="text-2xl font-bold text-gray-900 mt-2">
//                 {currentQ?.text}
//               </h2>
//             </div>

//             <div className="space-y-3">
//               {currentQ?.type === 'scale' ? (
//                 <div className="space-y-4">
//                   <div className="flex justify-between text-sm text-gray-600">
//                     <span>{currentQ.labels[0]}</span>
//                     <span>{currentQ.labels[1]}</span>
//                   </div>
//                   <div className="flex gap-2 justify-between">
//                     {[1, 2, 3, 4, 5].map((val) => (
//                       <button
//                         key={val}
//                         onClick={() => handleAnswer(val)}
//                         className={`flex-1 py-3 rounded-lg border-2 font-semibold transition ${
//                           responses[currentQ.id] === val
//                             ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
//                             : 'border-gray-300 hover:border-indigo-300'
//                         }`}
//                       >
//                         {val}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 currentQ?.options.map((option, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => handleAnswer(option.text)}
//                     className={`w-full text-left px-6 py-4 rounded-lg border-2 transition ${
//                       responses[currentQ.id] === option.text
//                         ? 'border-indigo-600 bg-indigo-50'
//                         : 'border-gray-300 hover:border-indigo-300'
//                     }`}
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className="font-medium">{option.text}</span>
//                       {responses[currentQ.id] === option.text && (
//                         <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                       )}
//                     </div>
//                   </button>
//                 ))
//               )}
//             </div>

//             <div className="flex gap-3 mt-8">
//               {(currentSection > 0 || currentQuestion > 0) && (
//                 <button
//                   onClick={prevQuestion}
//                   className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center gap-2"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
//                   </svg>
//                   Back
//                 </button>
//               )}
//               <button
//                 onClick={nextQuestion}
//                 disabled={!canProceed()}
//                 className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 {currentSection === sections.length - 1 && 
//                  currentQuestion === sections[currentSection].questions.length - 1
//                   ? 'See My Results'
//                   : 'Next'
//                 }
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (page === 'results') {
//     const score = calculateScore();
//     const tier = getTier(score);

//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//         <div className="max-w-2xl bg-white rounded-2xl shadow-2xl p-8 md:p-12">
//           <div className="text-center mb-8">
//             <div className={`inline-block px-6 py-3 rounded-lg border-2 ${tier.color} mb-4`}>
//               <span className="text-2xl font-bold">{tier.level}</span>
//             </div>
//             <h1 className="text-4xl font-bold text-gray-900 mb-2">
//               Your GTM Score: {score} / 200
//             </h1>
//             <h2 className="text-2xl font-semibold text-gray-700 mb-4">
//               {tier.title}
//             </h2>
//           </div>

//           <div className="bg-gray-50 rounded-lg p-6 mb-6">
//             <p className="text-lg text-gray-700 mb-4">
//               {tier.message}
//             </p>
//             <p className="text-gray-600">
//               {tier.subMessage}
//             </p>
//           </div>

//           <div className="text-center">
//             <p className="text-lg font-semibold text-gray-900 mb-4">
//               Want help fixing your GTM engine and scaling without doing all the selling yourself?
//             </p>
//             <a
//               href="https://calendly.com/kerry-gtm-collective/30min"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
//             >
//               Book a Free GTM Audit Call
//             </a>
//           </div>

//           <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
//             <p>Check your email - Kerry will be sending you a personalized breakdown shortly.</p>
//             <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-semibold mt-4 inline-block">
//               Back to Home
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return null;
// }


'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AssessmentPage() {
  const [page, setPage] = useState('landing');
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    email: '',
    company: '',
    revenueStage: ''
  });

  const sections = [
    {
      title: "Offer Clarity & Positioning",
      questions: [
        {
          id: 1,
          text: "Do your team members consistently describe the same Ideal Customer Profile (ICP)?",
          type: "binary",
          options: [
            { text: "Yes", score: 5 },
            { text: "No", score: 0 }
          ]
        },
        {
          id: 2,
          text: "How confident are you in articulating your core offer in a single, clear sentence?",
          type: "scale",
          max: 5,
          multiplier: 2,
          labels: ["Not at all", "Crystal clear"]
        },
        {
          id: 3,
          text: "Do your buyers immediately get why you are different from the competition?",
          type: "scale",
          max: 5,
          multiplier: 1.6,
          labels: ["Not at all", "Absolutely"]
        },
        {
          id: 4,
          text: "When you pitch, do buyers ask questions about the outcomes or the features?",
          type: "multiple",
          options: [
            { text: "Mostly outcomes", score: 5 },
            { text: "Mostly features", score: 2 },
            { text: "It varies", score: 3 },
            { text: "Not sure", score: 0 }
          ]
        },
        {
          id: 5,
          text: "Do you know why you win or lose deals?",
          type: "binary",
          options: [
            { text: "Yes", score: 5 },
            { text: "No", score: 0 }
          ]
        }
      ]
    },
    {
      title: "Sales Process & Consistency",
      questions: [
        {
          id: 6,
          text: "Do you have a clearly defined sales process (stages, actions, exit criteria)?",
          type: "binary",
          options: [
            { text: "Yes", score: 10 },
            { text: "No", score: 0 }
          ]
        },
        {
          id: 7,
          text: "How consistently is that sales process followed today?",
          type: "scale",
          max: 5,
          multiplier: 2,
          labels: ["Not at all", "Very consistently"]
        },
        {
          id: 8,
          text: "How do you currently qualify leads?",
          type: "multiple",
          options: [
            { text: "SPICED or MEDDIC", score: 8 },
            { text: "BANT or similar", score: 5 },
            { text: "We don't", score: 0 }
          ]
        },
        {
          id: 9,
          text: "What is your average sales cycle length?",
          type: "multiple",
          options: [
            { text: "Less than 15 days", score: 10 },
            { text: "15 to 30 days", score: 8 },
            { text: "30 to 60 days", score: 6 },
            { text: "60 to 90 days", score: 4 },
            { text: "90+ days", score: 2 },
            { text: "Don't know", score: 0 }
          ]
        },
        {
          id: 10,
          text: "Are your demos or sales calls mostly product walkthroughs or value-driven conversations?",
          type: "multiple",
          options: [
            { text: "Mostly product", score: 2 },
            { text: "Mostly value-driven", score: 8 },
            { text: "A mix", score: 5 }
          ]
        }
      ]
    },
    {
      title: "Visibility & Tools",
      questions: [
        {
          id: 11,
          text: "Do you use a CRM (e.g. HubSpot, Salesforce)?",
          type: "binary",
          options: [
            { text: "Yes", score: 5 },
            { text: "No", score: 0 }
          ]
        },
        {
          id: 12,
          text: "What percentage of deals are actively tracked in your CRM?",
          type: "multiple",
          options: [
            { text: "90% or more", score: 10 },
            { text: "75 to 90%", score: 7 },
            { text: "50 to 75%", score: 4 },
            { text: "Less than 50%", score: 2 }
          ]
        },
        {
          id: 13,
          text: "Can you view pipeline by stage in seconds without asking your team?",
          type: "binary",
          options: [
            { text: "Yes", score: 7 },
            { text: "No", score: 0 }
          ]
        },
        {
          id: 14,
          text: "Can you name your current close rate or pipeline velocity off the top of your head?",
          type: "binary",
          options: [
            { text: "Yes", score: 8 },
            { text: "No", score: 0 }
          ]
        }
      ]
    },
    {
      title: "Founder Time & Sales Ownership",
      questions: [
        {
          id: 15,
          text: "What percentage of your time is currently spent on sales or pre-sales activities?",
          type: "multiple",
          options: [
            { text: "Less than 10%", score: 0 },
            { text: "10 to 25%", score: 4 },
            { text: "25 to 50%", score: 8 },
            { text: "50 to 75%", score: 10 },
            { text: "75% or more", score: 8 }
          ]
        },
        {
          id: 16,
          text: "Who owns sales right now?",
          type: "multiple",
          options: [
            { text: "Founder", score: 5 },
            { text: "First sales hire", score: 7 },
            { text: "Team of reps", score: 10 },
            { text: "No one yet", score: 0 }
          ]
        },
        {
          id: 17,
          text: "How often do you personally talk to prospects or customers?",
          type: "multiple",
          options: [
            { text: "Daily", score: 10 },
            { text: "Few times per week", score: 7 },
            { text: "Once a week", score: 5 },
            { text: "Rarely", score: 0 }
          ]
        },
        {
          id: 18,
          text: "Do you have a consistent sales handoff or onboarding process post-sale?",
          type: "binary",
          options: [
            { text: "Yes", score: 7 },
            { text: "No", score: 0 }
          ]
        }
      ]
    },
    {
      title: "Tracking & Forecasting",
      questions: [
        {
          id: 19,
          text: "How often do you review sales performance with your team?",
          type: "multiple",
          options: [
            { text: "Weekly", score: 10 },
            { text: "Monthly", score: 8 },
            { text: "Rarely", score: 2 },
            { text: "Never", score: 0 }
          ]
        },
        {
          id: 20,
          text: "What is your current forecasting method?",
          type: "multiple",
          options: [
            { text: "Pipeline-based data", score: 10 },
            { text: "Historical average", score: 6 },
            { text: "Gut feel", score: 2 },
            { text: "No forecast", score: 0 }
          ]
        },
        {
          id: 21,
          text: "Do you track leading indicators (like outreach or calls) and lagging ones (like revenue)?",
          type: "multiple",
          options: [
            { text: "Yes both", score: 10 },
            { text: "Only one", score: 5 },
            { text: "Neither", score: 0 }
          ]
        },
        {
          id: 22,
          text: "Do you have a living document or system tracking objections or lessons from calls?",
          type: "binary",
          options: [
            { text: "Yes", score: 8 },
            { text: "No", score: 0 }
          ]
        }
      ]
    },
    {
      title: "Lead Flow & Pipeline Confidence",
      questions: [
        {
          id: 23,
          text: "Do you have a consistent, repeatable way to generate new leads weekly?",
          type: "binary",
          options: [
            { text: "Yes", score: 10 },
            { text: "No", score: 0 }
          ]
        },
        {
          id: 24,
          text: "Are you confident your current lead flow will help hit your next revenue milestone?",
          type: "scale",
          max: 5,
          multiplier: 2,
          labels: ["Not at all", "Very confident"]
        },
        {
          id: 25,
          text: "Do you track where your highest-converting leads are coming from?",
          type: "multiple",
          options: [
            { text: "Yes", score: 10 },
            { text: "No", score: 0 }
          ]
        }
      ]
    }
  ];

  const calculateScore = () => {
    let total = 0;
    Object.entries(responses).forEach(([qId, answer]) => {
      const allQuestions = sections.flatMap(s => s.questions);
      const question = allQuestions.find(q => q.id === parseInt(qId));

      if (question && question.type === 'scale') {
        total += answer * question.multiplier;
      } else if (question && (question.type === 'binary' || question.type === 'multiple')) {
        const option = question.options.find(o => o.text === answer);
        if (option) total += option.score;
      }
    });
    return Math.round(total);
  };

  const getTier = (score) => {
    if (score < 100) {
      return {
        level: "CRITICAL",
        title: "You're Flying Blind",
        message: "Your GTM engine has some serious gaps and you likely feel it every day. If you're still leading sales, chasing leads manually, and struggling to scale, you're not alone.",
        subMessage: "Most teams in this phase are running on hustle, not a system. The good news? That's fixable.",
        color: "#ef4444",
        bgGradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15))",
        borderColor: "rgba(239, 68, 68, 0.5)"
      };
    }
    if (score < 140) {
      return {
        level: "UNDERPERFORMING",
        title: "You've Got Leaks",
        message: "You're not starting from zero but right now, you're leaving deals on the table. Your GTM engine has real potential but it's not firing on all cylinders.",
        subMessage: "Founder still doing most of the selling? No clear sales process or forecasting? Weak lead flow? If that sounds familiar, let's plug the leaks so you can scale without spinning.",
        color: "#f97316",
        bgGradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(234, 88, 12, 0.15))",
        borderColor: "rgba(249, 115, 22, 0.5)"
      };
    }
    if (score < 170) {
      return {
        level: "DEVELOPING",
        title: "You're Close to Consistency",
        message: "You're out of survival mode now it's time to scale with confidence. You've got solid GTM bones: some process, some pipeline, some predictability.",
        subMessage: "But you're probably still the bottleneck. Some GTM systems aren't fully connected. You're missing leverage. Let's get you out of the weeds and into growth mode.",
        color: "#eab308",
        bgGradient: "linear-gradient(135deg, rgba(234, 179, 8, 0.15), rgba(202, 138, 4, 0.15))",
        borderColor: "rgba(234, 179, 8, 0.5)"
      };
    }
    return {
      level: "MATURE",
      title: "Ready to Optimize & Scale",
      message: "Solid work - your GTM engine is mature and structured. But even great systems leak over time.",
      subMessage: "I usually see 1 to 2 blind spots in even the best-run teams: messaging gaps, role confusion, broken handoffs. Want an outside perspective before your next stage of growth?",
      color: "#22c55e",
      bgGradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(21, 128, 61, 0.15))",
      borderColor: "rgba(34, 197, 94, 0.5)"
    };
  };

  const totalQuestions = sections.reduce((acc, s) => acc + s.questions.length, 0);
  const answeredQuestions = Object.keys(responses).length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  const currentQ = sections[currentSection]?.questions[currentQuestion];

  const handleAnswer = (answer) => {
    setResponses({ ...responses, [currentQ.id]: answer });
  };

  const sendToGoogleSheets = async (finalData, score, tier) => {
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyhjur0BaKqWJu97iEI-bwsmj8uE_OkEc5cXJINyD6yg5MDC9qt8fe_KLfNxlP34XPO/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: finalData.firstName,
          email: finalData.email,
          company: finalData.company,
          revenueStage: finalData.revenueStage,
          score: score,
          tier: tier.level,
          tierTitle: tier.title,
          tierMessage: tier.message,
          tierSubMessage: tier.subMessage,
          responses: finalData.responses
        })
      });
      
      console.log('✅ Data sent to Google Sheets and email sent to Kerry!');
    } catch (error) {
      console.error('❌ Error sending to Google Sheets:', error);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < sections[currentSection].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    } else {
      const finalScore = calculateScore();
      const finalTier = getTier(finalScore);
      
      const finalData = {
        ...userInfo,
        responses,
        score: finalScore,
        tier: finalTier.level,
        timestamp: new Date().toISOString()
      };
      
      console.log('Assessment completed:', finalData);
      
      sendToGoogleSheets(finalData, finalScore, finalTier);
      
      setPage('results');
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestion(sections[currentSection - 1].questions.length - 1);
    }
  };

  const canProceed = () => {
    return responses[currentQ?.id] !== undefined;
  };

  if (page === 'landing') {
    return (
      <div className="assessment-landing-page">
        <div className="assessment-hero-section">
          <div className="assessment-container">
            <Link href="/" className="back-link">
              ← Back to Home
            </Link>
            <div className="assessment-hero-content">
              <div className="pulse-badge">
                <span className="pulse-dot-small"></span>
                GTM SIGNAL SCAN
              </div>
              <h1 className="assessment-hero-title">
                Is Your GTM Strategy the Reason You're Stuck in Founder-Led Sales?
              </h1>
              <p className="assessment-hero-description">
                Take the 5-minute GTM Signal Scan to see how your go-to-market engine stacks up.
                Get your score instantly and uncover where you're leaving revenue on the table.
              </p>
              <button
                onClick={() => setPage('info')}
                className="assessment-cta-button"
              >
                Start the Scan
                <svg className="button-arrow" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'info') {
    return (
      <div className="assessment-info-page">
        <div className="assessment-container-narrow">
          <Link href="/" className="back-link">
            ← Back to Home
          </Link>
          <div className="info-card">
            <h2 className="info-title">Before We Begin...</h2>
            <p className="info-subtitle">Help us personalize your results</p>
            <div className="info-form">
              <input
                type="text"
                placeholder="First Name *"
                value={userInfo.firstName}
                onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                className="assessment-input"
              />
              <input
                type="email"
                placeholder="Email *"
                value={userInfo.email}
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                className="assessment-input"
              />
              <input
                type="text"
                placeholder="Company Name *"
                value={userInfo.company}
                onChange={(e) => setUserInfo({ ...userInfo, company: e.target.value })}
                className="assessment-input"
              />
              <select
                value={userInfo.revenueStage}
                onChange={(e) => setUserInfo({ ...userInfo, revenueStage: e.target.value })}
                className="assessment-input"
              >
                <option value="">Revenue Stage *</option>
                <option value="pre-revenue">Pre-revenue</option>
                <option value="less-100k">Less than $100K</option>
                <option value="100k-500k">$100K to $500K</option>
                <option value="500k-1m">$500K to $1M</option>
                <option value="1m-5m">$1M to $5M</option>
                <option value="5m-plus">$5M+</option>
              </select>
              <button
                onClick={() => setPage('assessment')}
                disabled={!userInfo.firstName || !userInfo.email || !userInfo.company || !userInfo.revenueStage}
                className="assessment-submit-button"
              >
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'assessment') {
    return (
      <div className="assessment-quiz-page">
        <div className="assessment-container">
          <div className="progress-card">
            <div className="progress-info">
              <span className="progress-text">Progress: {answeredQuestions} of {totalQuestions}</span>
              <span className="progress-percent">{Math.round(progress)}%</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="question-card">
            <div className="question-header">
              <span className="section-badge">
                {sections[currentSection].title}
              </span>
              <h2 className="question-text">
                {currentQ?.text}
              </h2>
            </div>

            <div className="answers-container">
              {currentQ?.type === 'scale' ? (
                <div className="scale-container">
                  <div className="scale-labels">
                    <span>{currentQ.labels[0]}</span>
                    <span>{currentQ.labels[1]}</span>
                  </div>
                  <div className="scale-buttons">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        onClick={() => handleAnswer(val)}
                        className={`scale-button ${responses[currentQ.id] === val ? 'scale-button-active' : ''}`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                currentQ?.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.text)}
                    className={`option-button ${responses[currentQ.id] === option.text ? 'option-button-active' : ''}`}
                  >
                    <span className="option-text">{option.text}</span>
                    {responses[currentQ.id] === option.text && (
                      <svg className="checkmark-icon-small" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))
              )}
            </div>

            <div className="navigation-buttons">
              {(currentSection > 0 || currentQuestion > 0) && (
                <button
                  onClick={prevQuestion}
                  className="nav-button-back"
                >
                  <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back
                </button>
              )}
              <button
                onClick={nextQuestion}
                disabled={!canProceed()}
                className="nav-button-next"
              >
                {currentSection === sections.length - 1 &&
                  currentQuestion === sections[currentSection].questions.length - 1
                  ? 'See My Results'
                  : 'Next'
                }
                <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'results') {
    const score = calculateScore();
    const tier = getTier(score);

    return (
      <div className="assessment-results-page">
        <div className="results-container">
          <div className="results-card">
            <div className="results-header">
              <div
                className="tier-badge"
                style={{
                  background: tier.bgGradient,
                  borderColor: tier.borderColor,
                  color: tier.color
                }}
              >
                <span className="tier-level">{tier.level}</span>
              </div>
              <h1 className="results-score">
                Your GTM Score: <span className="score-number">{score}</span> / 200
              </h1>
              <h2 className="results-title">
                {tier.title}
              </h2>
            </div>

            <div className="results-content">
              <p className="results-message">
                {tier.message}
              </p>
              <p className="results-submessage">
                {tier.subMessage}
              </p>
            </div>

            <div className="results-cta">
              <p className="cta-question">
                Want help fixing your GTM engine and scaling without doing all the selling yourself?
              </p>
              <a
                href="https://calendly.com/kerry-gtm-collective/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="results-cta-button"
              >
                Book a Free GTM Audit Call
              </a>
            </div>

            <div className="results-footer">
              <p>Thank you for completing the assessment. We will review your results and reach out personally within 24 hours.</p>
              <Link href="/" className="home-link">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}