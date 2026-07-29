import { Experience, Project, Certification, Achievement, Education, SkillGroup, Testimonial, BlogPost } from '../types';

export const personalInfo = {
  name: 'M. Madhan Prakash',
  title: 'MBA Marketing Student',
  subtitles: [
    'Digital Marketing & Brand Strategy',
    'Business Analytics & Market Research',
    'SEO & Content Marketing',
    'Performance Marketing & Lead Gen'
  ],
  tagline: 'I\'m an MBA student passionate about digital marketing, business analytics, and building practical marketing solutions. Through live projects, internships, and leadership experiences, I\'m continuously learning how marketing creates real business growth.',
  email: 'Madhanprakashoff@gmail.com',
  phone: '',
  linkedin: 'https://www.linkedin.com/in/madhanprakashofficial',
  linkedinUsername: 'madhanprakashofficial',
  instagram: 'https://www.instagram.com/madhanprakash_5/',
  instagramUsername: 'madhanprakash_5',
  youtube: 'https://www.youtube.com/@classictamilofficial',
  youtubeUsername: 'classictamilofficial',
  location: 'Sivakasi, Tamil Nadu, India',
  address: 'Sivakasi, Tamil Nadu, India',
  avatarUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEij7PlnDYBCA7Au0BSXOvTk3u4IMytJyUPZpsmB3c9ax4q8P0W22SgT9Df9NSCaoz4CM4CuXh8HPV9mq1EtAt0LQB0px2VPSGg0Wmpum_e1bDlDc9sJC6uXi-1RlyzIqpk_7BDrnx03R4ATkoDa3cASXd7daqttVKziz3_gSXhIXDd6iDB1hOX4CQI5E2o',
  aboutStory: 'Hi, I\'m Madhan, an MBA student specializing in Marketing and Business Analytics. I enjoy learning by doing, whether it\'s running Meta Ads, creating marketing campaigns, analyzing business data, or working on live client projects. Every project helps me improve my skills and understand how marketing creates value for businesses. I\'m always excited to explore new ideas and take on practical challenges that help me grow professionally.',
  hobbies: ['Digital Content Creation', 'Campaign Strategy', 'Audience Analytics', 'Video Editing'],
  languages: ['English (Professional)', 'Tamil (Native)'],
  // Contact Form Provider configuration ('web3forms' or 'googleforms')
  contactFormProvider: 'web3forms', 
  // TODO: Replace this placeholder with your actual Web3Forms Access Key from https://web3forms.com/ to receive contact form emails.
  web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE', 
  // Google Forms: Use your Google Form "formResponse" URL and entry IDs if using Google Forms provider
  googleFormUrl: '', // e.g. 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSXXXXXXXXXXXXXX/formResponse'
  googleFormEntries: {
    name: 'entry.123456789',   // Change to your Google Form name entry ID
    email: 'entry.987654321',  // Change to your Google Form email entry ID
    subject: 'entry.111111111',// Change to your Google Form subject entry ID
    message: 'entry.222222222' // Change to your Google Form message entry ID
  }
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Digital Marketing',
    skills: [
      { name: 'Meta Ads', rating: 5 },
      { name: 'Google Ads', rating: 4 },
      { name: 'Mailchimp', rating: 4 },
      { name: 'Social Media Strategy', rating: 5 },
      { name: 'Performance Marketing', rating: 4 }
    ],
  },
  {
    category: 'Business Analytics',
    skills: [
      { name: 'Microsoft Excel', rating: 5 },
      { name: 'Power BI', rating: 4 },
      { name: 'SPSS', rating: 4 },
      { name: 'POM-QM', rating: 4 },
      { name: 'TORA', rating: 4 }
    ],
  },
  {
    category: 'Marketing Research',
    skills: [
      { name: 'Market Survey & Analysis', rating: 5 },
      { name: 'B2B Customer Outreach', rating: 5 },
      { name: 'Lead Generation', rating: 5 },
      { name: 'Apollo.io & Sales Nav', rating: 4 }
    ],
  },
  {
    category: 'Content Marketing',
    skills: [
      { name: 'Content Strategy', rating: 5 },
      { name: 'Social Media Strategy', rating: 5 },
      { name: 'YouTube Growth', rating: 4 },
      { name: 'Copywriting', rating: 4 }
    ],
  },
  {
    category: 'SEO',
    skills: [
      { name: 'Google Search Console', rating: 5 },
      { name: 'Google Analytics 4', rating: 4 },
      { name: 'SEMrush', rating: 4 },
      { name: 'Keyword Research', rating: 5 }
    ],
  },
  {
    category: 'Design & Creative',
    skills: [
      { name: 'Canva', rating: 5 },
      { name: 'CapCut', rating: 5 }
    ],
  }
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Marketing & Market Research Intern',
    company: 'Bruhat Logistics',
    location: 'Chennai, TN',
    period: 'Jun 2026 - Present',
    type: 'internship',
    bullets: [
      'Conducted market research to identify potential business opportunities.',
      'Built a verified database of B2B companies for outreach campaigns.',
      'Learned how freight forwarding businesses approach client acquisition and market expansion.',
      'During my internship at Bruhat Logistics, I worked on market research, lead generation, and business development activities that helped me understand the B2B sales process.'
    ],
    tags: ['Market Research', 'Lead Generation', 'Business Development', 'B2B Client Outreach']
  },
  {
    id: 'exp2',
    role: 'Marketing Campaign Specialist',
    company: 'Vettikaaran Campaign',
    location: 'Coimbatore, TN',
    period: 'Aug 2025 - Present',
    type: 'live-project',
    bullets: [
      'I managed ₹10,000 Meta ads budgets to launch targeted regional campaigns for consumer goods.',
      'I created engaging product demo videos and wrote copy that directly answered customer questions on social media.',
      'I helped sell over 150+ products during the active campaign period by following up with leads individually in chat.'
    ],
    tags: ['Meta Ads', 'Social Media Marketing', 'Customer Chat Sales', 'Campaign Copywriting']
  },
  {
    id: 'exp_youtube',
    role: 'YouTube Creator & Digital Video Producer',
    company: 'Classic Tamil (YouTube Channel)',
    location: 'Sivakasi, TN / Remote',
    period: 'Jan 2021 - Present',
    type: 'work',
    bullets: [
      'I built an organic sports gaming YouTube channel to 93.5K+ total views and 717+ subscribers with 48 videos.',
      'I created and edited 48 gameplay videos and cricket tutorials using CapCut to maintain viewer interest.',
      'I designed custom thumbnails in Canva and optimized titles to increase click-through rates (CTR).',
      'I analyzed channel statistics weekly to see what topics kept viewers watching longer.'
    ],
    tags: ['YouTube SEO', 'Video Editing', 'Audience Analytics', 'CapCut', 'Canva', 'Content Strategy']
  },
  {
    id: 'exp6',
    role: 'Freelance Video Editor & Content Optimizer',
    company: 'Mosi Trading Company',
    location: 'Sivakasi, TN',
    period: 'Jun 2024 – Jan 2026',
    type: 'work',
    bullets: [
      'I edited 15+ financial educational videos and short reels to build the company’s social media presence.',
      'I improved video pacing, added text overlays, and structured content to keep viewers engaged.',
      'I contributed to drafting video scripts with clients based on audience financial questions.'
    ],
    tags: ['Video Editing', 'Content Optimization', 'CapCut', 'Financial Video']
  },
  {
    id: 'exp5',
    role: 'Overall Event Coordinator',
    company: 'VIMSMART 2K26 Intercollege Festival',
    location: 'VIMS, Coimbatore',
    period: 'Feb 2026',
    type: 'leadership',
    bullets: [
      'Led a student team to organize VIMSMART 2K26.',
      'Coordinated 400+ participants across multiple events.',
      'Managed planning, sponsorship coordination, team communication, and event execution.'
    ],
    tags: ['Leadership', 'Event Planning', 'Public Relations', 'Team Coordination']
  },
  {
    id: 'exp_charavyuga',
    role: 'Organizing Committee Member & Event Leader',
    company: 'Charavyuga Inter-College Management Fest (2k24 & 2k25)',
    location: 'Ayya Nadar Janaki Ammal College, Sivakasi',
    period: '2024 - 2025',
    type: 'leadership',
    bullets: [
      'I organized and led the "Best Manager" event for the Charavyuga 2k24 and 2k25 management meets.',
      'I created the competition rounds, set evaluation criteria, and managed participant registrations.',
      'I coordinated logistics with college student groups to keep event timing on schedule for 100+ active participants.'
    ],
    tags: ['Event Organizing', 'Best Manager Event', 'Student Coordination', 'Event Planning']
  },
  {
    id: 'exp_intercollege_prize',
    role: 'Inter-College Competition Champion',
    company: 'Ayya Nadar Janaki Ammal College & Regional Meets',
    location: 'Tamil Nadu',
    period: '2024',
    type: 'leadership',
    bullets: [
      'I won 2 awards in inter-college business meets, pitching creative solutions and collaborating under pressure.',
      'I won 1st Prize in the Adzap (Advertising pitch) event, creating and presenting an ad strategy on the spot.',
      'I won 2nd Prize in the Treasure Hunt event, working in a group of 4 to solve analytical puzzles quickly.'
    ],
    tags: ['Competition Winner', 'Adzap 1st Prize', 'Treasure Hunt 2nd Prize', 'Group Strategy']
  },
  {
    id: 'exp_ryla',
    role: 'Rotary Youth Leadership Awards (RYLA) Scholar',
    company: 'Rotary International',
    location: 'Tamil Nadu',
    period: '2024',
    type: 'leadership',
    bullets: [
      'I was selected to attend the Rotary Youth Leadership residential entrepreneurship camp.',
      'I conducted business case exercises and practiced startup creation under expert mentor guidance.',
      'I collaborated with a group of 5 students to draft and pitch a startup concept to a panel of entrepreneurs.'
    ],
    tags: ['Entrepreneurship Training', 'RYLA Scholar', 'Pitching', 'Teamwork']
  },
  {
    id: 'exp_nss_blood',
    role: 'NSS Blood Donation Camp Leader',
    company: 'National Service Scheme (NSS)',
    location: 'S.H.N.V Higher Secondary School',
    period: '2021 - 2022',
    type: 'leadership',
    bullets: [
      'I organized a blood donation camp in cooperation with regional medical services.',
      'I managed promotional campaigns and led a team of student volunteers to collect 120+ units of blood.',
      'I earned formal recognition and appreciation from the school management for outstanding service.'
    ],
    tags: ['Community Service', 'NSS Leadership', 'Event Coordination', 'Volunteer Management']
  }
];

export const projects: Project[] = [
  {
    id: 'proj2',
    title: 'Vettikaaran Local Marketing Campaign',
    subtitle: 'Meta Ads, SMM, & Direct Message Sales Conversion',
    category: 'Digital Marketing',
    overview: 'A local social commerce campaign to launch and sell physical consumer products directly on Instagram and WhatsApp.',
    problem: 'Reaching local buyers who wanted physical products without wasting budget on wide, non-converting target locations.',
    solution: 'Designed and ran localized Meta Ads campaigns, created short-form product demonstration videos, and converted leads into buyers via direct messaging.',
    tools: ['Meta Ads', 'Instagram Marketing', 'Video Creation', 'Direct Sales Chat', 'Canva', 'CapCut'],
    skills: ['Social Commerce', 'Ads Targeting', 'Sales Funnel Design', 'Conversion Optimization', 'Meta Ads Strategy'],
    businessImpact: 'Sold over 150+ product units under tight budget limits using targeted local ads.',
    whatILearned: 'I learned that chat-based closing is extremely effective for local social commerce, and that creative video walkthroughs build far more trust with prospects than static advertising images.',
    myContribution: 'I created localized short-form product demonstration video reels, targeted high-intent regional demographics on Meta, and personally handled customer chat outreach to close sales.',
    projectOutcome: 'Successfully converted local leads to sell over 150+ products on a tight budget of ₹10,000.',
    skillsUsed: ['Meta Ads Optimization', 'Social Commerce Funnel Design', 'Video Marketing', 'Customer Relations'],
    liveDemo: 'https://www.instagram.com/madhanprakash_5/',
    results: [
      'Sold over 150+ product units directly to local customers.',
      'Created product video reels that received high local engagement.',
      'Kept cost-per-lead very low through strict geographic target filters.'
    ],
    learnings: 'Chat-based closing is extremely effective for local social commerce. Creative video walkthroughs build far more trust than static images.',
    stats: [
      { value: '150+', label: 'Products Sold' },
      { value: '₹10,000', label: 'Campaign Budget' },
      { value: 'Local', label: 'Audience Focus' }
    ]
  },
  {
    id: 'proj_bruhat',
    title: 'B2B Lead Generation & Market Intelligence',
    subtitle: 'Market Research & Verified Database Building for Freight Forwarding',
    category: 'Marketing Research',
    overview: 'A systematic B2B client acquisition campaign and market research study to identify logistics expansion opportunities in the freight forwarding sector.',
    problem: 'Finding and verifying decision-makers (Logistics Managers, Supply Chain Directors) at high-intent shipping companies without high bounce rates or wasted outreach.',
    solution: 'Leveraged Apollo.io, LinkedIn Sales Navigator, and direct verification methods to build a structured database of qualified business leads, filtering by shipping volume and trade lanes.',
    tools: ['Apollo.io', 'LinkedIn Sales Navigator', 'Microsoft Excel', 'B2B Customer Outreach'],
    skills: ['Market Research', 'Lead Generation', 'Database Building', 'B2B Strategy'],
    businessImpact: 'Identified and qualified 850+ high-potential logistics prospects, reducing sales outreach bounce rates by 95% and accelerating the B2B sales cycle.',
    whatILearned: 'I learned that thorough pre-qualification and data verification are critical for B2B logistics. Contacting the correct supply chain decision-maker directly yields far better engagement than generic info-emails.',
    myContribution: 'Conducted primary market research, harvested leads via professional sales intelligence platforms, verified email deliverability, and built a structured database of qualified contacts.',
    projectOutcome: 'Constructed a flawless, high-precision database of 850+ logistics decision-makers with detailed company profiles.',
    skillsUsed: ['Data Mining', 'B2B Client Outreach', 'Logistics Industry Research', 'Contact Data Verification'],
    results: [
      'Identified and verified 850+ high-intent corporate freight shipping leads.',
      'Sourced high-level contact details of supply chain and procurement decision-makers.',
      'Built a reliable pipeline for logistics sales campaigns with a 95% validation rate.'
    ],
    learnings: 'A verified and targeted database of high-level contacts is the absolute backbone of successful B2B client acquisition.',
    stats: [
      { value: '850+', label: 'Verified Leads' },
      { value: '95%', label: 'Accuracy Rate' },
      { value: 'B2B', label: 'Client Focus' }
    ]
  },
  {
    id: 'proj_vimsmart',
    title: 'VIMSMART 2K26 Intercollege Management Fest',
    subtitle: 'Overall Event Coordination, Sponsorship, & Venue Management',
    category: 'Digital Marketing',
    overview: 'Leading a large team of student volunteers to organize and execute a state-level intercollege management festival with multi-track competitive events.',
    problem: 'Coordinating multiple simultaneous competitions, managing participant registrations for over 400+ attendees, and securing financial sponsorships under tight timelines.',
    solution: 'Structured a multi-department team, created digital registration forms, built an automated participant tracking sheet, and drafted direct sponsorship pitches for local brands.',
    tools: ['Microsoft Excel', 'Google Forms', 'Team Communication Platforms', 'Project Management Sheets'],
    skills: ['Event Management', 'Team Leadership', 'Sponsorship Pitching', 'Logistics Coordination'],
    businessImpact: 'Successfully gathered and managed 400+ active participants from 30+ regional business schools, securing sponsorships and maintaining flawless event timings.',
    whatILearned: 'I learned that event marketing requires excellent cross-functional communication. Managing diverse student and corporate stakeholders on-site requires dynamic problem solving.',
    myContribution: 'Served as the Overall Event Coordinator, drafted team guidelines, led corporate sponsorship meetings, managed the budget, and orchestrated the final on-site execution.',
    projectOutcome: 'Executed VIMSMART 2K26 smoothly with 400+ active attendees, positive participant reviews, and balanced festival budgets.',
    skillsUsed: ['Cross-Functional Leadership', 'Sponsorship Negotiation', 'Crisis Management', 'Budgeting'],
    results: [
      'Coordinated and hosted 400+ active participants across various management events.',
      'Secured key financial sponsorships from regional brands to cover all operational costs.',
      'Organized a team of 30+ volunteers ensuring smooth event transitions and zero delays.'
    ],
    learnings: 'A clear delegation of responsibilities and real-time coordinator communication is vital for running large-scale public events.',
    stats: [
      { value: '400+', label: 'Active Attendees' },
      { value: '30+', label: 'Regional Colleges' },
      { value: '100%', label: 'Budget Covered' }
    ]
  },
  {
    id: 'proj_youtube',
    title: 'YouTube Channel & Sports Gaming Growth',
    subtitle: 'Classic Tamil Channel, CapCut Video Editing & Search SEO',
    category: 'Content Creation',
    overview: 'My personal sports gaming channel, Classic Tamil (@classictamilofficial), where I edit videos and test organic growth strategies.',
    problem: 'Getting viewers to find cricket gameplay videos in a highly saturated gaming market and keeping them watching.',
    solution: 'Created 48 video game tutorials, designed clean, high-contrast thumbnails in Canva, and tracked video retention metrics using the analytics dashboard.',
    tools: ['YouTube SEO', 'CapCut Video Editor', 'Canva Graphic Design', 'Audience Analytics'],
    skills: ['SEO Analytics', 'Thumbnail Graphic Design', 'Video Editing', 'Audience Growth Analytics', 'YouTube SEO'],
    businessImpact: 'Built an organic channel from scratch to 93.5K+ total views and 717+ subscribers.',
    whatILearned: 'I learned that organic traffic growth relies on consistent upload schedules, clickable high-contrast thumbnail design, and precise keyword integration to match search queries.',
    myContribution: 'I edited and uploaded 48 game walkthroughs using CapCut, designed high-engagement thumbnails in Canva, and analyzed weekly audience retention metrics to optimize retention.',
    projectOutcome: 'Gained over 717 subscribers with 93.5K+ total organic views and 2.1K hours of watch time without paid promotion.',
    skillsUsed: ['YouTube SEO Optimization', 'CapCut Video Production', 'Audience Metrics Analytics', 'Canva Layout Design'],
    liveDemo: 'https://www.youtube.com/@classictamilofficial',
    results: [
      'Created and uploaded 48 game walkthroughs and cricket tutorial videos.',
      'Grew an active audience to over 717 subscribers with 93.5K+ total views.',
      'Gained over 2.1K hours of organic watch time through targeted keyword search optimization.'
    ],
    learnings: 'Consistent uploads, custom high-contrast thumbnails, and clear titles are the absolute core of organic search growth.',
    stats: [
      { value: '48', label: 'Videos Created' },
      { value: '93.5K+', label: 'Total Channel Views' },
      { value: '717+', label: 'Subscribers' }
    ]
  }
];export const certifications: Certification[] = [
  {
    id: 'cert_hubspot_social',
    title: 'Social Media Certified',
    issuer: 'HubSpot Academy',
    date: 'Jul 2026',
    link: 'https://academy.hubspot.com/',
    credentialId: '90689874d34842d490a3f008ed6b13c9'
  },
  {
    id: 'cert_tacademy',
    title: 'Professional Certification Training Programme in Digital Marketing',
    issuer: 'T-Academy',
    date: 'Aug 2024',
    link: 'https://academy.thulija.com/',
    credentialId: 'TA/2023/07/004'
  },
  {
    id: 'cert_hubspot_digital',
    title: 'Digital Marketing Certified',
    issuer: 'HubSpot Academy',
    date: 'Jul 2026',
    link: 'https://academy.hubspot.com/',
    credentialId: '9ac9586049f34eb1b79215475869cae0'
  },
  {
    id: 'cert_semrush_agency',
    title: 'Getting Started with Semrush for Agencies',
    issuer: 'Semrush Academy',
    date: 'Jul 2024',
    link: 'https://www.semrush.com/academy/',
    credentialId: 'e89c0348a0'
  },
  {
    id: 'cert_google_digital',
    title: 'The Fundamentals of Digital Marketing',
    issuer: 'Google Digital Unlocked',
    date: 'May 2023',
    link: 'https://learndigital.withgoogle.com/link/1tb5mplmosg',
    credentialId: 'QZP MJ5 W2B'
  },
  {
    id: 'cert_reliance_digital',
    title: 'Certificate Course in Digital Marketing (140 Hours)',
    issuer: 'Reliance Foundation Skilling Academy',
    date: 'Jan 2026',
    link: 'https://www.skillindiadigital.gov.in/',
    credentialId: 'Skill India Verified'
  },
  {
    id: 'cert_reliance_market',
    title: 'Certificate Course in Market Research (60 Hours)',
    issuer: 'Reliance Foundation Skilling Academy',
    date: 'Jan 2026',
    link: 'https://www.skillindiadigital.gov.in/',
    credentialId: 'Skill India Verified'
  },
  {
    id: 'cert_nptel_design',
    title: 'Design Thinking - A Primer (NPTEL)',
    issuer: 'IIT Madras & Swayam',
    date: 'Aug 2024',
    link: 'https://nptel.ac.in/noc/',
    credentialId: 'NPTEL24MG72S446700350'
  },
  {
    id: 'cert_nism_quiz',
    title: 'National Financial Literacy Quiz 2026 (College Round)',
    issuer: 'National Institute of Securities Markets & SEBI',
    date: 'Feb 2026',
    link: 'https://www.nism.ac.in/',
    credentialId: 'Participation Award'
  },
  {
    id: 'cert_linkedin_questions',
    title: 'Asking Great Sales Questions',
    issuer: 'LinkedIn Learning',
    date: 'Jan 2025',
    link: 'https://www.linkedin.com/learning/',
    credentialId: 'LinkedIn Verified'
  }
];export const achievements: Achievement[] = [
  {
    id: 'ach5',
    title: 'Published Research Paper (Paper ID: 1716534)',
    description: 'Published a scientific research paper titled "A STUDY ON FACTORS INFLUENCING ONLINE SHOPPING BEHAVIOUR AMONG COLLEGE STUDENTS" analyzing modern e-commerce purchasing drivers and consumer trends.',
    date: '2025',
    category: 'paper',
  },
  {
    id: 'ach1',
    title: 'Published ISBN Book Paper: Tomorrow\'s Accountant',
    description: 'Co-authored and published a scientific paper in an ISBN-registered research book: "National Seminar Proceedings on Tomorrow\'s Accountant: Role of Cost and Management Accountant in Digital Future" (2023).',
    date: '2023',
    category: 'paper',
  },
  {
    id: 'ach2',
    title: 'Published ISBN Book Paper: Digital Currencies',
    description: 'Co-authored and published research paper titled "ENVISIONING 2047: Role of Digital Currencies in achieving Viksit Bharat" in an ISBN-registered seminar proceedings book.',
    date: '2024',
    category: 'paper',
  },
  {
    id: 'ach3',
    title: '8+ Professional Paper Presentations',
    description: 'Prepared, submitted, and orally presented over 8 academic and strategy papers covering modern business models, SEO trends, and economic reforms at various highly reputed colleges and business schools.',
    date: '2022 - 2026',
    category: 'paper',
  }
];

export const educationHistory: Education[] = [
  {
    id: 'edu1',
    degree: 'Master of Business Administration (MBA)',
    institution: 'Vivekananda Institute of Management Studies (VIMS)',
    period: '2025 - 2027',
    grade: 'Class of 2027',
    highlights: [
      'Specializing in Marketing and Business Analytics.',
      'Active leadership roles in managing college events and regional corporate connect programs.',
      'Participated in multiple state-level case study competitions and presentation seminars.'
    ],
  },
  {
    id: 'edu2',
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'Ayya Nadar Janaki Ammal College (ANJAC)',
    period: '2022 - 2025',
    grade: 'Completed BBA',
    highlights: [
      'Studied core subjects: Organizational Behavior, Financial, Cost & Management Accounting, Quantitative Techniques (QT), Statistics (STAT), Marketing Research, and Marketing Management.',
      'Active organizing committee member for Charavyuga 2k24 and Charavyuga 2k25 in the "Best Manager" event.',
      'Won totally 2 prizes in inter-college competitive events: 1st Prize in Adzap and 2nd Prize in Treasure Hunt.',
      'Published 3 research papers in total covering e-commerce and digital finance.'
    ],
  },
  {
    id: 'edu3',
    degree: 'H.S.C (Higher Secondary Certificate)',
    institution: 'S.H.N.V Higher Secondary School',
    period: '2022 Completed',
    grade: 'Commercial Focus',
    highlights: [
      'Subjects studied: Commerce, History, Economics, and Accountancy.',
      'Actively participated in NSS (National Service Scheme) and organized a blood donation camp collecting 120+ units of blood, recognized by school management.'
    ]
  },
  {
    id: 'edu4',
    degree: 'S.S.L.C (Secondary School Leaving Certificate)',
    institution: 'S.H.N.V Higher Secondary School',
    period: '2020 Completed',
    grade: 'Completed SSLC',
    highlights: [
      'Actively participated as a member of the JRC (Junior Red Cross).'
    ]
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'test1',
    name: 'M. Thilak, M.Sc.',
    role: 'Founder & Director',
    company: 'Agam Academy',
    feedback: 'Catchy, elegant, and highly professional design work. Thanks a lot for delivering an effective and efficient design, Madhan. Looking forward to many more collaborations in the future!',
    avatarLetter: 'T',
  }
];

export const blogPosts: BlogPost[] = [];

