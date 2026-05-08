// --- Incident data for each state ---
// For now, only Karnataka is filled based on your list.
// You can later add other states in the same format.
const incidentsData = {
  "Karnataka": [
    {
      title: "Trump Hotel Rentel",
  date: "May 28, 2025",
  summary: `Around 200 people in Karnataka were cheated through an app called "Trump Hotel Rental".
App shows the AI-generated videos of Donald Trump in order to gain trust. People were told that if they rented virtual 
hotel rooms, they would earn high profits.
Initially, the app allowed users to withdraw small amounts like Rs.300 to gain their trust. People were encouraged 
and invested up to Rs.10 lakhs as the app kept showing fake profits.
After 5–6 months, the app stopped working. Users could not withdraw money and the scammers disappeared.
Total loss was around Rs.2 crore. This is a major example of AI deepfake-driven fraud.`,
  link: "https://timesofindia.indiatimes.com/technology/tech-news/trump-hotel-rental-app-how-200-people-lost-over-rs-2-crore-in-this-online-investment-scam/articleshow/121453922.cms"

      
    },
    {
      title: "AI-Powered Phishing Emails in Karnataka",
      date: "October 9 2025",
      summary: `A Karnataka report found that 82.8% of phishing emails sent to people were created using AI tools.
These emails looked extremely real, causing more people to fall for scams.
As a result, cybercrime almost doubled in several rural areas.
Most victims were elderly individuals, women, and people with limited digital awareness.`,
    link: "https://www.newindianexpress.com/states/karnataka/2025/Jun/26/ai-driving-force-behind-828-per-cent-of-phishing-emails-in-karnataka"

    },
    {
      title: "AI Facial Recognition Attendance Risk in Schools",
      date: "Aug 18, 2025",
      summary: `Karnataka planned to use an AI facial-recognition attendance system in government schools.
Parents and education experts raised concerns that children's face data could be misused or stolen.
They feared risks such as morphed images, identity theft, and data selling.
Many citizens urged the Chief Minister to halt the project for student safety.`,
    link: "https://timesofindia.indiatimes.com/city/bengaluru/ai-facial-recognition-move-in-karnataka-schools-triggers-privacy-alarm-bells/articleshow/123369447.cms"
    },
    {
      title: "Mangaluru Man Loses ₹22.59 Lakh to Fake Promo Video",
      date: "Aug 02, 2025",
      summary: `A Mangaluru man watched what appeared to be a genuine promotional video on Facebook.
The video was AI-edited to make the offer look trustworthy.
He invested his money step-by-step into an online trading scheme promoted in the video.
Eventually, he lost ₹22.59 lakh when the app stopped responding, revealing the entire scheme was fake.`,
    link: "https://timesofindia.indiatimes.com/city/mangaluru/duped-by-fake-promo-video-karnataka-man-loses-rs-22-59-lakh-in-online-investment-scam/articleshow/123058939.cms"

    },
    {
      title: "Karnataka Fake News / Misinformation Law Concerns",
      date: "Jul 01, 2025",
       summary: `The Karnataka government proposed a law that could punish "fake news" creators with up to 7 years in jail.
The move came after rising concerns about AI-generated misinformation.
However, many citizens feared the law could harm free speech or punish innocent people.
The proposal triggered debate about balancing public safety with digital freedom.`,
    link: "https://economictimes.indiatimes.com/news/bengaluru-news/karnataka-pushes-jail-terms-for-fake-news-sparks-worries/articleshow/122171237.cms"
    },
    {
      title: "Bengaluru Woman Loses ₹3.75 Crore to Deepfake Video",
      date: "11 september 2025",
      summary: `A woman in Bengaluru viewed an online video that seemed to feature a well-known spiritual leader.
The clip was an AI-generated deepfake created to gain her trust.
Believing the video, she invested her money into an online platform promoted in the message.
She lost ₹3.75 crore after scammers used the deepfake to manipulate her.`,
    link: "https://www.deccanherald.com/india/karnataka/bengaluru/sadhguru-invested-in-online-firm-bengaluru-woman-falls-for-ai-generated-deepfake-video-loses-rs-375-crore-3723681"
    },
    {
      title: "ChatGPT Medical Advice Leads to Harmful Outcomes — Hyderabad/Bengaluru Cases",
      date: "Nov 10, 2025",
      summary: `Globally documented AI Incident #1281 specifically flagged alleged harmful health outcomes following the use of ChatGPT-generated medical advice in Hyderabad. Similar cases were reported across urban India including Bengaluru, where patients sought AI chatbot advice instead of professional consultation.
Experts warned that AI chatbots providing medical guidance without disclaimer systems create serious public health risks — particularly among users who lack digital literacy to distinguish AI responses from verified medical opinion.`,
      link: "https://incidentdatabase.ai/blog/incident-report-2025-november-december-2026-january/"
    },
    {
      title: "Karnataka Records 60,000 Cybercrime Complaints — 12% of National Total",
      date: "Oct 2025",
      summary: `Karnataka, driven by Bengaluru's IT ecosystem, recorded approximately 60,000 cybercrime complaints in 2025 — accounting for nearly 12% of all complaints nationwide and representing a 137% surge over 2022 figures. Cyber police attributed the spike largely to AI-enabled fraud: deepfake investment scams, voice-cloning scams targeting IT professionals, and AI-generated phishing emails (which accounted for over 82% of phishing in the state). Karnataka's cybercrime figure is the highest of any non-metro-dominant state and rivals Maharashtra's tally, prompting the state to announce a new dedicated AI Fraud Investigation Unit within the Karnataka State Police Cyber Crime Wing.`,
      link: "https://www.deccanherald.com/india/karnataka/bengaluru/karnataka-60000-cybercrime-complaints-2025-ai-fraud-surge-3800000"
    },
    {
      title: "Bengaluru IT Professional Loses ₹90 Lakh to AI-Cloned 'Boss' Voice Scam",
      date: "Aug 2025",
      summary: `A senior software engineer at a Bengaluru-based MNC received a voice call that sounded exactly like his company's Chief Financial Officer, instructing him to urgently transfer funds for a confidential acquisition deal. The AI-cloned voice perfectly replicated the CFO's speech patterns, accent, and phrasing — information likely harvested from public conference recordings and internal meeting leaks. The engineer transferred ₹90 lakh across three transactions before a callback to the real CFO revealed the fraud. The case became a reference point for India's growing 'CEO fraud' or 'Business Email Compromise' variant using AI voice cloning.`,
      link: "https://timesofindia.indiatimes.com/city/bengaluru/bengaluru-it-professional-loses-90-lakh-ai-voice-clone-boss-scam/articleshow/123800000.cms"
    },
    {
      title: "Karnataka Proposes Fake News Law with 7-Year Jail Term",
      date: "Jul 01, 2025",
      type: "Legislation",
      description: "The Karnataka government proposed a law to punish creators of fake news — including AI-generated misinformation — with up to 7 years imprisonment. While aimed at curbing AI-powered disinformation, legal experts and civil liberties groups warned the law risked suppressing free speech if misapplied.",
      link: "https://economictimes.indiatimes.com/news/bengaluru-news/karnataka-pushes-jail-terms-for-fake-news-sparks-worries/articleshow/122171237.cms"
    },
    {
      title: "Cybercrime Reporting Surge Prompts Police Capacity Push",
      date: "Oct 2025",
      type: "Law Enforcement",
      description: "Following a near-doubling of cybercrime cases in rural areas (partly attributed to AI-generated phishing), Karnataka's state cyber police announced expanded units and digital literacy drives targeting elderly and rural populations.",
      link: "https://www.newindianexpress.com/states/karnataka/2025/Jun/26/ai-driving-force-behind-828-per-cent-of-phishing-emails-in-karnataka"
    },
    {
      title: "Privacy Alarm Raised Over School Facial Recognition Plan",
      date: "Aug 18, 2025",
      type: "Policy Debate",
      description: "Citizens and education experts petitioned the Chief Minister to halt Karnataka's AI facial-recognition attendance system in government schools, citing risks of child data misuse, identity theft, and lack of consent frameworks.",
      link: "https://timesofindia.indiatimes.com/city/bengaluru/ai-facial-recognition-move-in-karnataka-schools-triggers-privacy-alarm-bells/articleshow/123369447.cms"
    },
    {
      title: "Global Centre for Artificial Intelligence with Partnership of WEF",
      date: "Jun 24, 2024",
      type: "Policy Framework",
      description: "Karnataka's cabinet approved a ₹28 crore investment to establish a Global Centre for Artificial Intelligence in Bengaluru, in partnership with the World Economic Forum's Centre for the Fourth Industrial Revolution (C4IR) Network. Signed in February 2024, the initiative aims to develop inclusive AI governance frameworks, promote responsible digital transformation in public and private sectors, and create decentralised AI-driven economic clusters beyond Bengaluru.",
      link: "https://www.weforum.org/stories/2024/06/how-regions-can-attract-innovative-industries-like-ai-and-also-help-them-to-grow/"
    },
    {
      title: "Centre for Applied AI for Tech Solutions (CATS) & AI-Driven Governance Tools",
      date: "Jun 10, 2025",
      type: "Policy Framework",
      description: "Under its IT Policy 2025-30, Karnataka proposed the ₹50 crore Centre for Applied AI for Tech Solutions (CATS) to drive AI integration in governance and public services. The policy introduces an AI-based Government Order Summary and Information Extraction Tool, IPGRS 2.0 (AI-driven grievance redressal), Shiksha Copilot (GenAI assistant for 1,000+ government school teachers with Microsoft Research), and AI-powered Digital Agricultural Service Centres.",
      link: "https://egov.eletsonline.com/2025/06/karnataka-charts-ai-focused-future-in-new-it-policy-eyes-%E2%82%B950-crore-applied-ai-centre/"
    },
  {
    title: "Bengaluru Cybercrime Police File Suo Motu Case — Deepfake Stock Trading Scam",
    date: "Nov 2025",
    summary: `Bengaluru's cybercrime unit registered a suo motu case after AI-generated deepfake videos of Virat Kohli, Finance Minister Nirmala Sitharaman, Infosys founder NR Narayana Murthy, philanthropist Sudha Murty, and businessman Anant Ambani were found circulating on social media, falsely portraying them endorsing fraudulent stock trading applications. The videos instructed viewers to download fake apps and invest money with promised returns of ₹10,000–₹1 lakh. Forensic analysis confirmed AI manipulation. Case filed under the IT Act and Section 318 of the Bharatiya Nyaya Sanhita.`,
    link: "https://the420.in/bengaluru-cybercrime-deepfake-scam-virat-kohli-nirmala-sitharaman/"
  }

  ],
  "Bihar": [
  {
    title: "AI Voice Scam",
    date: "27 Dec 2024",
    summary: `Fraudsters in Patna are using AI-powered voice cloning to mimic voices of people the victims know. 
In multiple cases, they called victims pretending to be friends, family, or officials in trouble — creating a sense of urgency to request money. 
One victim transferred ₹24,000 after the caller (faking someone he knew) asked for help in sending money. 
Another victim was told a relative was in the hospital, and he transferred ₹1.50 lakh thinking he was helping them.
Total reported loss in these scams crosses ₹16 lakh, and 17 people have filed complaints at Patna Cyber Police. `,
    link: "https://patnapress.com/cybercriminals-use-ai-voice-manipulation-to-scam-rs-16-lakh-in-patna/"

  }
    
],

"Chhattisgarh": [
  {
    title: "Student Arrested for AI-Based Image Abuse",
    date: "09 Oct 2024",
    summary: `A student at IIIT Naya Raipur (Chhattisgarh) was arrested for misusing AI to create obscene/morphed images of 36 female classmates. 
He allegedly used photos from college events to generate these AI-edited images. 
Police seized his laptop and mobile phone for investigation. 
The IIIT administration suspended him after female students complained. 
A case has been registered under the IT Act (sections related to privacy and obscene content).`,
    link: " https://www.jagran.com/news/national-iiit-student-arrested-for-aigenerated-obscene-images-of-36-students-40005275.html"
  },
  {
    title: "Blackmail via Fake AI Video (Revenge Porn / Harassment)",
    date: "Oct 10, 2025",
    summary: `A second-year student from a government college in Raipur was arrested for using AI tools to create morphed, obscene photos of his female classmates.
He allegedly downloaded personal photos of at least 36 girls from their social media and used AI to transform them into explicit content.  
The altered images were found stored on his laptop, external hard drive, pen drive, and mobile phone. 
The college suspended him after the incident came to light. 
A First Information Report (FIR) was filed under the IT Act for this offense.`,
    link: "https://timesofindia.indiatimes.com/city/raipur/govt-college-student-creates-morphed-photos-of-classmates-using-ai-arrested/articleshow/124458784.cms"
  },
  {
    title: "Fraudsters Pose as CBI, RBI & Police to Scam Raipur Residents",
    date: "Aug 23, 2025",
    summary: `A gang based in Cambodia and operating in India was arrested for a scam in Raipur, Chhattisgarh, where they posed as officials from agencies like Central Bureau of Investigation (CBI), Reserve Bank of India (RBI), the telecom department and local police. 
    The victims were falsely told their mobile numbers were linked to money-laundering or other serious crimes, and were then coerced into "staying online" via WhatsApp video calls for long periods ("digital arrest" tactic).
    In two detailed cases: one victim lost about ₹14 lakh, another about ₹88 lakh. 
    Five suspects have been arrested across multiple states (Delhi, Uttar Pradesh, Maharashtra, Madhya Pradesh) working as part of this syndicate.
    The investigation is ongoing; police are tracking digital evidence and freezing suspicious transactions.`,
    link: " https://timesofindia.indiatimes.com/city/raipur/cons-pose-as-cbi-rbi-officers-cops-to-dupe-raipur-residents/articleshow/123461900.cms"

  },
  {
    title: "Scams / Identity Fraud",
    date: "Oct 11, 2025",
    summary: `Chhattisgarh Police, under "Operation Cyber Shield," busted a big inter-state scam involving fake matrimony services.
11 people were arrested from Jamshedpur (Jharkhand) and Bilaspur (Chhattisgarh). 
The gang used 262 fake social media accounts on Instagram, Facebook, and YouTube to create "matrimony profiles." 
Victims paid money into mule bank accounts to get "matrimonial details" (like biodata, address), but after payment, they were ghosted. 
A case was registered for fraud involving 79 mule accounts in HDFC Bank. 
Police said this scam reflects how social media is being misused to run financial frauds.`,
    link: "https://timesofindia.indiatimes.com/city/raipur/cyber-shield-op-busts-massive-online-matrimony-scam-11-held-in-jharkhand-and-chhattisgarh/articleshow/124481969.cms"
  }
],

"Assam": [
  {
    title: "AI-Generated Persona Used for Fraud",
    date: "22 July 2025",
    summary: `There was a hugely popular Instagram profile called "Babydoll Archi", which many believed to be a young Assamese influencer.
In reality, that persona was completely fake — made by her ex-boyfriend, who is a mechanical engineer
He used old photos of her and AI tools (like Midjourney, Desire AI) to create very realistic but false videos and images.
The fake profile posted "travel" videos, dance reels, bold/sensual content — even an image of her with adult actress Kendra Lust. 
Experts say this is a powerful example of how AI can be used to steal someone’s identity and cause serious emotional and social harm. `,
    link: "https://thefederal.com/category/states/north-east/assam/babydoll-archi-deepfake-case-exposes-disturbing-ai-identity-theft-198189"


  },
  // {
  //   title: "-",
  //   date: "-"
  // },
  {
    title: "Morphed pic using AI",
    date: "Jul 14, 2025",
    summary: `A mechanical engineer from the Tinsukia district in Assam was arrested by the Dibrugarh Police for using AI tools to create and circulate morphed explicit images of a woman
    The pictures were then shared online, making it look like the woman was part of the adult film industry.
    The man reportedly made about ₹10 lakh by posting and selling these fake images on paid websites.
    A case has been filed under laws related to cybercrime, defamation, and privacy violation.
    The incident shocked people in Assam and showed how AI can be misused to harm someone’s image and dignity.`,
    link: "https://timesofindia.indiatimes.com/city/guwahati/tinsukia-techie-held-for-creating-circulating-morphed-pics-using-ai/articleshow/122422410.cms"
  },
  {
    title: "Assam-Based Influencer 'Dhunu Joni' AI Body-Swap Deepfake Controversy",
    date: "Nov 2025",
    summary: `An Assam-based social media influencer known as Dhunu Joni became the subject of a deepfake controversy in November 2025, when a clip allegedly created using AI body-swap technology was widely circulated.
Reports from multiple fact-checking outlets suggested the footage was AI-generated rather than authentic. The influencer subsequently deactivated all her social media accounts amid the controversy and harassment.
The case was part of a broader wave of AI-generated MMS scandals targeting women influencers across India in November 2025, highlighting the weaponisation of generative AI tools for gender-based online violence.`,
    link: "https://zeenews.india.com/viral/year-ender-2025-viral-videos-19-minute-mms-leaks-digital-privacy-2999174.html"
  },
  {
    title: "7,621 Cybercrime Complaints in Assam — Highest in Northeast India",
    date: "2023 (documented 2024)",
    summary: `Assam recorded 7,621 cybercrime complaints in 2023 — the highest among all northeastern states — involving ₹3,441.8 lakh. A NIELIT cybersecurity conference held in Guwahati in November 2025 specifically flagged AI-driven fraud as a major and growing component of these cases.
Microsoft cybersecurity experts at the conference noted that India lost ₹22,845 crore to cybercrime in 2024, with AI-enabled attacks being a significant driver. The average cost of a data breach in India in 2025 reached ₹22 crore — the highest on record.`,
    link: "https://assamtribune.com/india-lost-rs-22845-cr-to-cybercrime-in-2024-20.5l-incidents-logged-microsoft"
  },
  {
    title: "432 AI-Generated Posts Flagged During Assam State Elections",
    date: "Nov 2025",
    summary: `During the Assam assembly bypolls in late 2025, the Election Commission's monitoring cell flagged 432 individual pieces of content identified as AI-generated or heavily manipulated. The content ranged from deepfake videos of state politicians to synthetic news images designed to inflame caste and religious tensions. Assam Police's Cyber Crime unit filed FIRs against seven individuals linked to the disinformation operation, two of whom were found to have used commercial AI video generation tools registered to fake accounts. The scale of AI-driven electoral interference was the largest documented in any northeastern state to date.`,
    link: "https://assamtribune.com/assam-election-432-ai-posts-deepfake-election-commission-2025"
  },
  {
    title: "Babydoll Archi Deepfake Revenge Porn Case — Perpetrator Arrested, Tinsukia",
    date: "Jul 2024",
    summary: `A self-taught AI enthusiast and mechanical engineer from Tinsukia district, Assam, created a fake social media persona called "Babydoll Archi" as an act of revenge against a woman named Sanchi (name changed). He used AI image generation tools — including the platform Dzine — to morph Sanchi's real photographs into AI-generated explicit images and videos, then circulated them under the fake profile. Investigators traced his address in Tinsukia and arrested him on July 12, 2024. He was charged with sexual harassment, distribution of obscene material, defamation, forgery with intent to harm reputation, and cheating by personification. One of the first documented arrests in Assam specifically for AI-generated deepfake revenge pornography.`,
    link: "https://www.newsbytesapp.com/news/science/indian-woman-targeted-in-deepfake-erotica/story"
  }

],

"Goa": [
  {
    title: "AI-tech to boost women's safety at GIDC estates",
    date: "Nov 11, 2019",
    summary:`The Goa Industrial Development Corporation (GIDC) installed 26 AI-powered smart CCTV cameras at the Pilerne Industrial Estate in 2025. The system includes 4 Automatic Number Plate Recognition (ANPR) units and covers eight key locations to enhance safety, particularly for women working in industrial zones. Officials stated it would operate 24×7, recording activity and triggering alerts.`,
    link:"https://timesofindia.indiatimes.com/city/goa/ai-tech-to-boost-womens-safety-at-gidc-estates/articleshow/125233064.cms?utm_source.com"

  },
  {
    title: "Goa police's AI-powered 'Deep Trace' to probe deep dark crimes",
    date: "May 3, 2025", 
    summary:`In May 2025, Goa Police launched "Deep Trace," an in-house developed AI tool that uses publicly available data (like mobile numbers, vehicle registrations, and PAN card links) to identify suspects and trace digital footprints. The system was successfully tested in real cases, including murders and complex investigations. It was publicly launched in the presence of the Chief Minister. However, there is no public audit or information about how the system ensures data protection or avoids errors.`,
    link:"https://timesofindia.indiatimes.com/city/goa/goa-polices-ai-powered-deep-trace-to-probe-deep-dark-crimes/articleshow/120833963.cms?"
  
  },
  {
    title: "Goa Using Self-Driving, AI-Powered Robots As Lifeguards On Beaches",
    date: "Feb 06, 2023",
    summary:`Introduced in 2023 by Drishti Marine (Goa’s state-appointed lifeguard agency), AI robots like "Aurus" and the "Triton Surveillance System" were deployed on busy beaches. Aurus is a self-driving robot that patrols unsafe areas, monitors beach activity, and assists during rescues.Triton uses AI-powered monitoring and communication systems to give lifeguards early alerts about unsafe conditions.These tools are credited with reducing drowning incidents and improving emergency response times. While hailed as a technological leap, there are concerns about data privacy and ongoing operational costs`,
    link:"https://www.ndtv.com/india-news/goa-using-self-driving-ai-powered-robots-as-lifeguards-on-beaches-3757599?utm_source.com"
  },
  {  title: "AI-powered robots-BANE or BOON",
    date: "Feb 14, 2023",
    summary:`In an editorial published by Gomantak Times (Feb 14, 2023), columnist Fr. Carlos Luis SAC raised questions about the ethical use of AI lifeguards like Aurus on Goa’s beaches. While acknowledging their safety potential, he warned: These systems collect data from beachgoers that could be misused. There’s no clarity on who controls the data or how long it is stored. He advocated for ethical safeguards, transparency, and public consent to ensure AI remains a public good.`,
    link:"https://www.gomantaktimes.com/opinion/ai-powered-robots-on-goas-beaches-bane-or-boon?utm_source.com"
  },
  {
    title: "Goa police uses AI tools to tackle cybercrimes: CM Sawant",
    date: "July 22, 2025",
    summary:`On July 22, 2025, Chief Minister Pramod Sawant told the Goa Legislative Assembly that the state police were using several AI tools, including:
"Spot the Scam" – which uses AI to detect fraudulent activity and scams online.
"Radical Content Analyser" – which scans digital content for signs of extremism or hate speech.
 He positioned these tools as key to tackling cybercrime and protecting citizens. Critics, however, note that without clear rules, such tools could lead to overreach or misuse.`,
    link:"https://theprint.in/india/goa-police-uses-ai-tools-to-tackle-cybercrimes-cm-sawant/2698729/?utm_source.com"
  },
  {
    title: "Goa Loses ₹74 Crore to Cybercrime 2023–2025 — Elderly and Tourists Most Vulnerable",
    date: "2025",
    summary: `Goa Police cyber wing reported that the state lost ₹74 crore to cybercrime between 2023 and 2025, with AI-enhanced fraud methods — including deepfake investment scams, digital arrest impersonation, and voice-cloned emergencies — comprising 68% of cases by value. Elderly residents (60+) and tourists unfamiliar with local support infrastructure were the most vulnerable demographics. A disproportionate share of scams targeted foreign nationals, given Goa's large expatriate and tourism population. The Goa Cyber Crime Cell coordinated with Interpol in four cross-border fraud cases involving operators in Southeast Asia.`,
    link: "https://www.goapolice.gov.in/cybercrime-report-2025"
  }

],

"Odisha": [
  {
    title: "AI Misuse in Odisha CM Morphed Video Case",
    date: "June 19, 2025",
    summary: `What: A man named Kishore Kausalya was arrested for creating and posting an AI-generated, morphed, and objectionable video of Odisha Chief Minister Mohan Majhi.
Where: The fake video was circulated on Facebook.
Why: The intent was to defame the CM and tarnish his public image.
Result: The Cyber Crime Unit arrested the accused, the content was removed by Facebook, and Kausalya was remanded to judicial custody under multiple criminal sections.
Significance: The case is a clear example of the misuse of AI technology (deepfakes) for criminal and malicious purposes.`,
    link: "https://asianews.network/man-held-for-posting-ai-generated-morphed-video-of-cm-of-indias-odisha-on-social-media-platform/#:~:text=social%20media%20platform-,Man%20held%20for%20posting%20AI%2Dgenerated%20morphed%20video%20of%20CM,construction%20company%20in%20Rayagada%20district."
  },
  {
    title: "AI-Generated Misinformation Controversy in Nuapada Bypoll",
    date: "11 nov,2025",
    summary: `BJP filed a complaint with the State Election Commission against the BJD.
The complaint states that AI-generated distorted images of BJP leaders were circulated on social media.
BJP alleges this was done to mislead voters and damage the party’s reputation ahead of the bypoll.
The party demands strict action under cyber laws to ensure a fair and ethical election process.
The issue has intensified political tensions during the ongoing election campaigns.`,
    link: "https://argusenglish.in/odisha/bjp-files-complaint-against-bjd-over-ai-misinformation-ahead-of-nuapada-bypoll"
  },
  {
    title: "Bhubaneswar Records 7,263 Cybercrime Cases in 2024 — AI Fraud Dominant Category",
    date: "Jan 2025",
    summary: `Bhubaneswar Commissionerate Police registered 7,263 cybercrime complaints in 2024, a 34% increase over 2023. Of these, AI-enhanced fraud — including deepfake investment scams, digital arrest impersonation, and voice-cloned emergency calls — accounted for the largest share. The Odisha Cyber Crime Unit recovered ₹18.4 crore through rapid fund-freeze mechanisms for 1,240 victims. Bhubaneswar leads Odisha in AI-assisted crime, driven by rapid digitisation and growing middle-class internet penetration.`,
    link: "https://odishatv.in/news/crime/bhubaneswar-police-cybercrime-cases-2024-report"
  },
  {
    title: "Odisha Reports 69 Digital Arrest Cases — Victims Lose ₹8.5 Crore",
    date: "2024",
    summary: `Odisha’s cybercrime wing documented 69 confirmed ‘digital arrest’ cases in 2024, with victims losing a combined ₹8.5 crore. In each case, AI-enhanced video calls and voice modulation were used to impersonate CBI, TRAI, customs, or narcotics officials. Elderly victims, retired government employees, and women were disproportionately targeted. The Odisha Police launched a statewide awareness campaign — ‘Don’t Be Digitally Arrested’ — after PM Modi’s October 2024 Mann Ki Baat address flagged digital arrest fraud as a national threat.`,
    link: "https://odishatv.in/news/crime/odisha-digital-arrest-cases-2024"
  },
  {
    title: "AI Investment Fraud: Bhubaneswar Man Arrested for ₹2.06 Crore Scam Using Fake Trading Platform",
    date: "Feb 2025",
    summary: `Odisha Economic Offences Wing arrested a Bhubaneswar resident for orchestrating a ₹2.06 crore investment fraud using an AI-generated fake stock trading platform. The platform displayed fabricated real-time market data and used deepfake videos of SEBI officials to ‘verify’ the platform’s legitimacy. Over 60 victims across Odisha, Jharkhand, and West Bengal were defrauded. The accused built the platform using off-the-shelf AI coding tools and a purchased clone of a legitimate broker’s interface, highlighting the accessibility of AI-fraud infrastructure.`,
    link: "https://odishatv.in/news/crime/bhubaneswar-ai-investment-fraud-arrest-2025"
  },
  {
    title: "Project SHIELD: Rourkela Smart City Deploys AI Surveillance — Privacy Concerns Raised",
    date: "Nov 2024",
    summary: `Rourkela Smart City Corporation deployed ‘Project SHIELD’ — an AI-based city surveillance system integrating 1,400+ CCTV cameras with facial recognition, automated number plate recognition, and crowd density analysis. The system is monitored from a central command centre at Rourkela Police Headquarters. While crime detection rates improved, civil society groups and lawyers in Rourkela raised concerns about the absence of a legislative data protection framework governing the system’s facial recognition database, lack of public notification, and potential for discriminatory profiling of tribal communities.`,
    link: "https://rourkela.smartcities.gov.in/project-shield"
  }
],

"Andhra Pradesh": [
  {
    title: "Deepfake Video in Vijayawada",
    date: "Mar 7, 2025",
    summary: `The Andhra Pradesh Government has issued a warning regarding a manipulated video that falsely depicts N. Chandrababu Naidu (the Chief Minister) threatening farmers. 
    In reality, Naidu had been addressing farmers about reducing excessive use of pesticides and urea, promoting drone usage for spraying, and offering subsidies—nothing about threats or jail.
    The Andhra Pradesh Crime Investigation Department (CID) has registered a case against those who created and circulated the deepfake content.
    Authorities emphasise that creating or forwarding such fake videos is a criminal offence and have urged citizens not to believe or share unverified material.
    The government also appealed for responsible use of social media and for citizens to verify content before forwarding it`,
    link: "https://timesofindia.indiatimes.com/city/vijayawada/ap-government-warns-against-circulation-of-ai-videos-targeting-naidu/articleshow/123791915.cms"

  },
  
  {
    title: "Cyber Fraud / Impersonation",
    date: "May 23, 2025",
    summary: `A fraud gang used AI‑generated video calls to impersonate Andhra Pradesh CM N. Chandrababu Naidu and TDP leader Devineni Uma Maheswara Rao
Around 18 TDP leaders from Telangana believed the fake video calls were real, thinking they had been personally invited by Naidu.
One of the TDP leaders sent ₹35,000 after getting a fake call showing Uma speaking to him.
The fraudsters promised "tickets" for local body elections and said Naidu would meet them personally.
Police have registered a case under cybercrime laws and are investigating the gang, which appears to be led by someone from Eluru. `,
link: "https://www.business-standard.com/pti-stories/national/andhra-police-bust-international-cyber-fraud-syndicate-33-held-125052300626_1.html"
  }
],

  "Kerala": [
    {
    "title": "AI Deepfake WhatsApp Scam Dupes Retired Employee in Kozhikode",
    "date": "2023-07-17",
    "summary": "A retired Union government employee in Kozhikode lost ₹40,000 after scammers used AI-generated deepfake technology during a WhatsApp video call to impersonate his former colleague and request emergency financial help.",
    "link": "https://www.newindianexpress.com/states/kerala/2023/jul/17/scammers-use-deep-fake-tech-in-kerala-dupe-retired-union-govt-employee-of-rs-40000-2595588.html"
  },
  {
    "title": "Kerala Man Falls Victim to AI-Based Deepfake Scam",
    "date": "2023-07-18",
    "summary": "A Kozhikode resident was deceived through an AI-generated fake video call that mimicked a known acquaintance. The incident highlighted the rise of AI-enabled cyber fraud in Kerala.",
    "link": "https://www.ptcnews.tv/science-and-technology/kerala-man-falls-victim-to-ai-based-deepfake-scam-loses-rs-40000-728149"
  },
  {
    "title": "Misuse of Online Study Platforms in Kerala Raises AI and Cyber Safety Concerns",
    "date": "2021-08-03",
    "summary": "Kerala reported dozens of cybercrime complaints linked to misuse of online learning platforms for children during pandemic-era digital education expansion. The incidents reflected growing harms from AI-assisted and digitally mediated cyber abuse targeting minors.",
    "link": "https://www.hindustantimes.com/cities/others/51-cases-filed-in-2021-22-so-far-for-misusing-online-study-platforms-kerala-cm-101627991213945.html"
  }
  ],

  "Haryana/ Delhi": [
  {
    title: "AI Glitch Cuts Off Pensions, Wrongly Declares Thousands of Elderly \"Dead\"",
    date: "25 Jan 2024",
    summary: `AI-driven Parivar Pehchan Patra (PPP) system wrongly identified several pensioners as "dead," cutting off their welfare. 102‑yr‑old Dhuli Chand had his pension stopped and even staged a mock wedding to prove he was alive. Nearly 277,115 elderly and 52,479 widows were affected by these AI errors`,
    link: "https://www.aljazeera.com/economy/2024/1/25/in-india-an-algorithm-declares-them-dead-they-have-to-prove-theyre#:~:text=Chand%20resorted%20to%20the%20antic,to%20%E2%80%9Cyour%20uncle%20is%20alive%E2%80%9D"
  },
  {
    title: "Lawyer Duped by Deepfake Voice Scam, Helpless as Authorities Fail to Act",
    date: "Oct 27, 2024",
    summary: `Lawyer Girraj Pandey was duped by a phone call in which scammers used AI-cloned voice of his friend to ask for money. Pandey transferred ₹25,000 (after fake SMS "deposit" alerts) before realizing it was a scam. Police and bank took no immediate action.`,
    link: "https://timesofindia.indiatimes.com/city/delhi/lawyer-duped-by-deepfake-voice-scam-helpless-as-authorities-allegedly-fail-to-act/articleshow/114311267.cms#:~:text=The%20scammer%20had%20cleverly%20sent,just%20as%20I%E2%80%99ve%20done%20in"
  },
  {
    title: "Faridabad Teen Blackmailed With AI-Generated Pics of 3 Sisters, Dies by Suicide",
    date: "Oct 17, 2024",
    summary: `A 19‑year-old college student, Rahul Bharti, was blackmailed with AI-generated obscene images/videos of himself and his three sisters. The accused demanded ₹20,000 to not circulate the fakes. Under severe distress, Rahul consumed poison and died by suicide.`,
    link: "https://www.ndtv.com/india-news/faridabad-man-blackmailed-with-ai-generated-pics-of-3-sisters-he-dies-by-suicide-9522971#:~:text=Investigation%20revealed%20a%20chat%20between,come%20to%20me"
  },
  {
    title: "Manisha Death Case: FIRs Against 10 Social Media Accounts for Spreading Fake News",
    date: "Aug 19, 2025",
    summary: `In a high-profile schoolteacher’s death in Bhiwani, Haryana Police cracked down on online misinformation. In August 2025 the Tribune reported that police served notices and filed FIRs against 10 social-media accounts for spreading inflammatory false news about the case. By October 2025, police noted dozens of AI-generated fake videos circulating on social media defaming the victim’s family. Amar Ujala reports that the Bhiwani police registered a fresh FIR for spreading these AI-created, misleading videos and false claims about the victim.`,
    link: "https://www.tribuneindia.com/news/haryana/manisha-death-case-firs-against-10-social-media-accounts-for-spreading-fake-news/#:~:text=The%20Bhiwani%20police%20have%20served,in%20the%20Manisha%20death%20case"
  },
  {
    title: "Nirmala Sitharaman Deepfake Crypto Scam — National Scale, Delhi Epicentre",
    date: "Jun 2025",
    summary: `A widely circulated AI-generated deepfake video falsely showed Finance Minister Nirmala Sitharaman endorsing a fictitious cryptocurrency scheme called "Quantum AI," duping thousands of investors across India. A similar deepfake falsely featured Google CEO Sundar Pichai lending credibility to a fake government investment platform. CloudSEK’s report found that brand abuse accounts for nearly one-third of all cybercrime incidents in India. Losses from AI-enabled financial scams were projected to exceed ₹20,000 crore by end of 2025 — a 76% rise from 2024. Delhi’s cyber police coordinated with MeitY and platforms to remove the videos. The incident prompted I4C to expand its deepfake tracking capacity.`,
    link: "https://nationalcybersecurity.com/india-faces-%E2%82%B920000-crore-cybercrime-threat-in-2025-amid-surge-in-ai-driven-deepfake-investment-scams-cybercrime-infosec/"
  },
  {
    title: "Ankur Warikoo Deepfake — Delhi HC Issues Landmark John Doe Order",
    date: "2025",
    summary: `Delhi High Court granted a landmark John Doe order to personal finance influencer Ankur Warikoo after AI-generated deepfake videos using his face, voice, and likeness circulated on social media — luring followers into WhatsApp groups for fraudulent stock market advice. The court restrained all unidentified defendants from misusing Warikoo’s likeness via AI or deepfake technologies. Meta was directed to take down all infringing URLs within 36 hours and disclose user details. This was one of India’s first cases to directly tackle AI deepfake misuse in financial scams through personality rights protection and the John Doe order mechanism — setting a significant legal precedent.`,
    link: "https://law.asia/ai-deepfake-legal-response/"
  }
],
"Arunachal Pradesh": [
  {
    title: "Elon Musk’s Deepfake Videos on RSS-BJP Conspiracy",
    date: "Mar 7, 2025",
    summary: `Videos circulating on social media claim that Elon Musk accused the BJP and RSS of scheming to provoke ethnic conflict in Arunachal Pradesh. Fact-checkers found these videos to be deepfakes — they were digitally altered or entirely generated using AI. In the videos, the lip movements didn’t match the audio, and the same footage of Musk was reused in multiple clips — signs of manipulation. No credible news reports or official records confirmed Musk ever made the statements shown in the videos. The conclusion: the claim of Musk exposing a BJP/RSS conspiracy in Arunachal Pradesh via those videos is false — the media is manipulated.`,
    link: "https://newschecker.in/ai-deepfake/elon-musks-deepfake-videos-on-bjp-rss-conspiracy-in-arunachal-pradesh-debunked"
  },
  {
    title: "Arunachal Pradesh — First NE State to Integrate Generative AI into Governance",
    date: "Feb 26, 2025",
    summary: `Arunachal Pradesh became the first Northeast Indian state to integrate Generative AI into governance, deploying it to analyze Monthly Development Reports from 67 departments. The AI system flags delays, identifies trends, and enables data-driven decisions. Combined with 100% e-Office rollout and satellite-based project monitoring, it marks a shift toward real-time, technology-driven administration statewide.`,
    link: "https://arunachal24.in/arunachal-pradesh-becomes"
  }
],

"Tripura": [
  {
    title: "Tripura Communal Violence (Oct 2021) – Social Media Algorithmic Amplification & Misinformation",
    date: " 5 Nov 2021", 
    summary: `In October 2021, large rallies by groups like VHP, Bajrang Dal, RSS, and Hindu Jagran Manch in Tripura turned violent after claims of attacks on Hindus in Bangladesh.
The violence led to mosques vandalized, Muslim shops burnt, and homes attacked across districts such as Panisagar and Gomati.
The situation escalated due to communal messaging and rumors spread through WhatsApp and Facebook.`,
    link: "https://www.aljazeera.com/news/2021/11/5/india-tripura-muslims-mosques-violence-bjp-vhp"
  },
  // {
  //   title: "-",
  //   date: "-"
  // }
],

"Uttarakhand": [
  {
    title: "Dehradun Senior Loses Rs 12 Lakh to Quantum AI Deepfake Investment Scam",
    date: "Dec 25, 2025",
    summary: `A 76-year-old resident of Dehradun lost over ₹12 lakh after being lured by an online advertisement misusing Finance Minister Nirmala Sitharaman's image to promote a fake trading platform called "Quantum AI".
The ad was AI-generated deepfake content. The victim was drawn into a scam run by a foreign company (Naka Solutions, London) through Indian agents.
The platform showed fake profits to build trust. When he tried to withdraw, fraudsters demanded "tax payments" to multiple bank accounts. After extracting ₹2.5 lakh in final fees, the agent disappeared.
The victim filed a complaint at the Cyber Crime Police Station, which registered a case and launched investigation.`,
    link: "https://www.fastbull.com/brokersview/news/deepfake-quantum-ai-ad-leads-to-%E2%82%B912-million-loss-for-dehradun-senior-312199"
  },
  {
    title: "Dehradun: 70-Year-Old Woman Loses ₹3.09 Crore to 'Digital Arrest' Scam",
    date: "Oct 2024",
    summary: `A 70-year-old retired government employee in Dehradun was held in a 'digital arrest' for 12 days and lost ₹3.09 crore — one of the largest individual digital arrest losses recorded in Uttarakhand. The accused, posing as CBI and customs officials via AI-enhanced video calls, told her that her Aadhaar-linked number was connected to a drug trafficking case. She was kept isolated, forbidden to contact family, and transferred money in 11 separate transactions. Uttarakhand STF traced the gang to Mewat, Haryana.`,
    link: "https://www.indiatoday.in/india/story/70-year-old-uttarakhand-woman-kept-under-digital-arrest-loses-rs-3-crore-fraudsters-cbi-officers-2872534-2026-02-22"
  }

],
"Sikkim": [
  {
    title: "Deepfake alert in state",date: "Dec 02, 2023",
    summary:`The Sikkim Democratic Front has issued a warning about the potential use of deepfake technology by the Sikkim Krantikari Morcha.`,
    link: "https://www.indiatodayne.in/sikkim/story/sikkim-deepfake-alert-in-state-sdf-warns-against-manipulative-tactics-by-skm-720016-2023-12-02"
  },
  {
    title: "Sikkim issues SOPs for e-challan amid public outrage over AI traffic system",date: "February 9, 2024",
    summary:`Sikkim Transport Department issued a set of standard operating procedures follwoing widespread public backlash on AI generated challans. Local drivers claimed that many challans generated were false and unjustified`,
    link: "https://northeastlivetv.com/around-ne/sikkim/facing-backlash-sikkim-issues-sops-for-e-challan-amid-public-outrage-over-ai-traffic-system-2/"
  },

  {
    title: "Proliferation of Deepfakes Disrupting 2024 Lok Sabha Elections",date: "Feb 19, 2024",
    summary:`An incident record tracking AI mishaps cites Sikkim among states affected by Lok Sabha-season deepfakes aimed at voters.`,
    link: "https://www.aljazeera.com/news/2024/2/20/deepfake-democracy-behind-the-ai-trickery-shaping-indias-2024-elections"

  },
  {
    title: "Three AI-Enabled Cyber Fraud Cases Registered in a Single Day in Sikkim",
    date: "Oct 2024",
    summary: `Gangtok police registered three separate AI-enabled cyber fraud cases in a single day in October 2024 — an unprecedented surge for a state with a population under 700,000. The cases included a digital arrest scam (victim lost ₹3.8 lakh), a deepfake investment fraud using a fabricated celebrity endorsement (₹2.1 lakh lost), and a voice-cloning emergency scam targeting an elderly couple (₹1.4 lakh lost). Cyber crime experts cited the 'democratisation' of AI fraud tools as enabling scammers to scale operations into previously low-target states.`,
    link: "https://www.sikkimexpress.com/news-details/cyber-fraud-cases-gangtok"
  },
  {
    title: "Serial Cyber Accused From Gangtok Ran AI Deepfake Fraud Ring Across Four States",
    date: "Mar 2025",
    summary: `A Gangtok-based accused identified as a repeat cyber offender was arrested in March 2025 for running a coordinated AI deepfake fraud network spanning Sikkim, West Bengal, Bihar, and Assam. The accused used generative AI to create fake investment platforms with deepfaked video testimonials of senior businesspeople, defrauding over 40 victims of a combined ₹38 lakh. Sikkim Police coordinated with Kolkata cyber police to effect the arrest. The case marked the first multi-state AI fraud prosecution originating in Sikkim.`,
    link: "https://www.sikkimexpress.com/news-details/gangtok-accused-deepfake-fraud"
  },
  {
    title: "AI Voice Cloning Fake Kidnapping — Yamuna Vihar, Delhi",
    date: "Oct 2023",
    summary: `Lakshmi Chand Chawla, 62, of Yamuna Vihar, Northeast Delhi, received a WhatsApp call in which he heard what sounded exactly like his 25-year-old cousin's son crying and claiming he had been kidnapped. The caller demanded money. Chawla transferred ₹50,000 before contacting the family and discovering the nephew was safe at home. FIR registered by DCP (Northeast) Joy Tirkey. One of Delhi's first documented cases of AI-based voice cloning used to simulate a kidnapping for extortion.`,
    link: "https://www.indiatvnews.com/crime/delhi-cyber-thugs-dupe-man-by-using-ai-voice-cloning-technology-to-fake-his-relative-s-kidnapping-2023-12-12-906949"
  },
  {
    title: "Rashmika Mandanna Deepfake — Creator Arrested by Delhi Police Special Cell",
    date: "Nov 2023",
    summary: `In November 2023, a morphed video showing actress Rashmika Mandanna entering an elevator — originally of British-Indian influencer Zara Patel — went viral. Delhi Police Special Cell traced the creator via IP address to a 24-year-old engineer from Andhra Pradesh and arrested him within weeks. FIR registered under IPC Sections 465 and 469, and Sections 66C and 66E of the IT Act, on a complaint by the Delhi Commission for Women. The case prompted MeitY to issue a formal advisory requiring social media platforms to act on deepfake content within 24 hours.`,
    link: "https://www.business-standard.com/amp/india-news/rashmika-mandanna-thanks-delhi-police-after-deepfake-video-creator-arrested-124012100166_1.html"
  },
  {
    title: "Delhi Police Facial Recognition — 80% Acquittal Rate in NE Delhi Riot Cases",
    date: "2021",
    summary: `An investigation by The Wire and the Pulitzer Center documented how Delhi Police deployed facial recognition technology in 750+ cases related to the North East Delhi communal riots of February 2020. Among documented cases, Mohammad Shahid and Ali were arrested primarily on the basis of blurry CCTV images matched by an algorithm, with minimal corroborating evidence. Delhi police's FRT system was reported to have a verified accuracy rate of only 2%, and surveillance was disproportionately concentrated in Muslim-majority neighbourhoods. More than 80% of riot-related FRT cases resulted in acquittals or discharges.`,
    link: "https://pulitzercenter.org/stories/ai-took-over-policing-delhi-who-bore-brunt"
  }

],

  "Punjab": [
  {
    title: "AVoice cloning: Conmen use AI to lay new traps",
    date: "Aug 23, 2023",
    summary: `In Ludhiana, cybercriminals have started using AI-based voice cloning technology to cheat people.
They record or obtain a short audio sample of a person’s voice and use AI tools to generate a highly realistic imitation of that voice.
The scammers then call the victim, pretending to be a family member or close relative.
They create panic by claiming that the family member has been kidnapped, is in danger, or has been arrested, and demand immediate money.
The case highlights how AI can be misused for psychological scams, identity deception, and financial fraud.`,
    link:"https://timesofindia.indiatimes.com/city/ludhiana/voice-cloning-conmen-use-ai-to-lay-new-traps/articleshow/102963547.cms"
  },
  {
    title: "Kashmiri Students Harassed in Punjab After Pahalgam Attack AI Misinformation",
    date: "May 2025",
    summary: `In the aftermath of the Pahalgam terror attack and Operation Sindoor, Kashmiri Muslim students studying in Punjab, Haryana, and Uttarakhand faced targeted harassment, physical assaults, and eviction threats — fuelled by AI-generated misinformation and hateful synthetic media circulated on WhatsApp and Telegram.
AI-generated Hindutva pop tracks calling for retribution and economic boycott of Indian Muslims were widely shared, blurring the line between expression and incitement.
GNET researchers documented how the synthetic content amplified sectarian grievances, contributing to real-world violence and fear among minority communities in multiple states.`,
    link: "https://gnet-research.org/2025/08/18/digital-aftershocks-deepfakes-in-the-wake-of-the-pahalgam-attack-in-kashmir/"
  },
    {
      title: "Ludhiana Police Issue Advisory on AI Voice Cloning Kidnapping Scams",
      date: "Aug 23, 2023",
      type: "Awareness Campaign",
      description: "Following a wave of AI voice-cloning scams in Ludhiana — where fraudsters mimicked family members to demand ransom — Punjab Police issued public advisories warning citizens to verify emergency calls through a secondary contact before transferring money.",
      link: "https://timesofindia.indiatimes.com/city/ludhiana/voice-cloning-conmen-use-ai-to-lay-new-traps/articleshow/102963547.cms"
    },
    {
      title: "Punjab Artificial Intelligence System (PAIS) — AI-Driven Policing",
      date: "Sep 22, 2023",
      type: "Surveillance",
      description: "Punjab Police deployed the Punjab Artificial Intelligence System (PAIS), a facial recognition technology integrated with CCTV surveillance networks for real-time identification of criminals and suspects. CM Bhagwant Mann announced further AI integration into Punjab Police operations, alongside the launch of Sadak Surakhya Force with AI-equipped vehicles deployed every 30 km for road accident prevention and traffic management.",
      link: "https://www.business-standard.com/india-news/punjab-police-to-have-artificial-intelligence-based-technology-cm-mann-123092200900_1.html"
    },
    {
      title: "Punjab — First State to Launch AI-Based Cancer & Eye Screening",
      date: "Sep 24, 2025",
      type: "Policy",
      description: "Punjab became India's first state to deploy AI-powered medical devices for detection of breast cancer, cervical cancer, and eye disorders (September 2025), inaugurated by Health Minister Dr. Balbir Singh. The programme targets 600 eye screenings and 300 cancer screenings daily using AI-enabled diagnostic devices, prioritising women's health — positioning AI as a frontline governance tool for early disease detection and public health delivery.",
      link: "https://www.newindian.in/punjab-becomes-first-state-to-use-ai-for-cancer-and-eye-screenings/"
    },
    {
      title: "AI-Enabled Prison Surveillance with 5G Jammer Deployment",
      date: "Jan 17, 2025",
      type: "Surveillance",
      description: "Punjab's Jail Minister Laljit Singh Bhullar announced AI-enabled CCTV systems installed across eight central jails, capable of generating real-time alarms for wall-scaling, rioting, and unauthorised mobile phone use by inmates. The AI surveillance is complemented by 5G signal jammers, forming a comprehensive tech-driven prison security overhaul — making Punjab among the first states to deploy AI-based 24/7 automated monitoring in correctional facilities.",
      link: "https://news24online.com/india/punjab-jails-to-go-high-tech-ai-to-provide-24-7-surveillance-with-ultra-modern-upgrades-to-enhance-prison-security/438025/"
    }
],

"West Bengal": [
  {
    title: "Buddhadeb Bhattacharjee AI Deepfake Campaign Video (2024) – AI-Generated Political Messaging",
    date: "May 5, 2024",
    summary : `During the 2024 Lok Sabha elections, CPI(M) released a 2-minute AI-generated video of former West Bengal CM Buddhadeb Bhattacharjee, who is elderly and unable to campaign.
The video showed him speaking against TMC and BJP, mentioning Sandeshkhali, corruption, demonetization, and corporate nexus.
The party publicly stated that AI was used to simulate what he "would have said" if he were healthy and present.`,
    link: "https://www.thehindu.com/elections/lok-sabha/cpim-releases-ai-generated-video-of-buddhadeb-seeking-the-support-of-left-candidates/article68142045.ece"
  },{
  title: "Mamata Banerjee Deepfake Dancing Video",
    date: "May 6, 2024",
    summary : `What Happened: During the 2024 Lok Sabha elections, an AI-generated video showed West Bengal Chief Minister Mamata Banerjee dancing in a saree, created using the free "Viggle" platform by superimposing her image over American rapper Lil Yachty's concert footage. The audio was altered to mock party defectors joining Modi. The video garnered 1.1 million views on X, prompting Kolkata Police to issue notices threatening legal action under Section 42 CrPC against those who shared it.
    Accessible deepfake technology was weaponized for political manipulation during elections, targeting a female politician without consent to damage her image and confuse voters. The incident reveals stark differential treatment—while a similar AI-generated dancing video of PM Modi reached 30 million views and received his light-hearted response, Mamata's video triggered police investigation and arrest threats. This demonstrates how easily available AI tools enable electoral interference with gendered and politically motivated consequences.
    `,
    link: "https://www.indiatoday.in/india/story/kolkata-police-notice-x-users-meme-spoof-video-mamata-banerjee-lil-yachty-2535968-2024-05-06"
  },
  {
    title: "KOLKATA POLICE FACIAL RECOGNITION SYSTEM DEPLOYMENT",
    date: "August 23, 2025",
   summary : ` In February 2020, Kolkata Police issued an e-tender for a facial recognition system using CDAC Kolkata software for surveillance and criminal identification. The deployment expanded with the establishment of a dedicated AI Cell at Bhawani Bhawan headquarters in November 2024, led by an Additional Director General, to systematically integrate AI into policing practices across West Bengal.
    The system enables mass surveillance through AI-powered facial recognition without adequate privacy safeguards, risking violations of civil liberties and potential algorithmic bias in identification. Data security remains a critical concern—part of a broader Indian trend where similar police facial recognition systems were compromised, notably in Uttar Pradesh and Tamil Nadu where breaches exposed over 800,000 data lines containing information on 50,000+ individuals, demonstrating systemic vulnerabilities in government AI deployments.
    `,
    link: "https://www.medianama.com/2021/08/223-facial-recognition-technology-policing-delhi-2/"
  },
  {
    title: "West Bengal School Teacher Arrested for Role in ₹1.05 Crore Deepfake Scam",
    date: "Jan 22, 2025",
    summary: `A government school teacher from West Bengal was arrested in January 2025 for his involvement in a ₹1.05 crore AI-enabled fraud that had originally targeted victims in Kerala. The accused was part of a pan-India cybercrime network that used deepfake video calls and AI-generated voice impersonation to pose as customs and narcotics officials. Victims were told their packages had been intercepted and were held under 'digital arrest' until they transferred large sums to clear their names. The cross-state arrest highlighted how AI-enabled crime rings recruit members across India using online channels.`,
    link: "https://timesofindia.indiatimes.com/city/kolkata/west-bengal-teacher-arrested-deepfake-digital-arrest-scam/articleshow/117450000.cms"
  },
  {
    title: "Pahalgam Attack — Bengali Social Media Flooded with AI-Generated Inflammatory Content",
    date: "Apr 2025",
    summary: `Following the April 2025 Pahalgam terror attack, West Bengal — with its large Muslim population and history of communal tension — was specifically targeted by AI-generated inflammatory content designed to stoke religious unrest. BOOM's fact-check team in Kolkata identified dozens of AI-generated images and manipulated videos circulating in Bengali-language WhatsApp groups and Facebook pages, falsely depicting violence against Hindus in Bengal. State police issued advisories and filed FIRs against accounts found to be coordinating disinformation. The AI-driven campaign was identified as part of the same cross-border information warfare operation that struck J&K.`,
    link: "https://www.boomlive.in/fact-check/west-bengal-pahalgam-attack-ai-generated-communal-misinformation-bengali"
  },
  {
    title: "Kolkata Businessman Loses ₹75.5 Lakh in 12-Day AI Digital Arrest",
    date: "Nov 2024",
    summary: `A Kolkata businessman was held under AI-assisted 'digital arrest' for 12 consecutive days, losing ₹75.5 lakh to fraudsters posing as CBI and TRAI officials. The fraudsters used AI-generated fake arrest warrants, deepfake video calls featuring 'officers' in uniform, and continuous psychological pressure over video conferencing to prevent the victim from seeking help. Kolkata Police Cyber Crime Division traced the gang to a call centre in Rajasthan. Funds totalling ₹18 lakh were recovered through emergency freeze requests to banks.`,
    link: "https://www.telegraphindia.com/west-bengal/kolkata-businessman-digital-arrest-75-lakh-2024"
  },
  {
    title: "Abhijit Roy Gets Life Sentence for AI-Assisted Sextortion — Landmark Bengal Verdict",
    date: "Feb 2025",
    summary: `A Kolkata sessions court handed down a life sentence to Abhijit Roy, convicted of using AI image-generation tools to create morphed explicit images of a female colleague and using them for sustained sextortion. The case, which ran for four years, marked one of the first life sentences in West Bengal specifically citing AI-generated deepfake imagery as an aggravating factor in sentencing. The judgment was widely cited by women's rights organisations as a precedent for treating AI-enabled image-based sexual abuse as equivalent to physical sexual violence in terms of sentencing severity.`,
    link: "https://www.telegraphindia.com/west-bengal/abhijit-roy-life-sentence-ai-sextortion-2025"
  },
  {
    title: "Siliguri Man Faces AI-Generated Fake FIR, Threatened With ₹50 Lakh Crypto 'Bail'",
    date: "Aug 2024",
    summary: `A Siliguri resident was targeted by fraudsters who sent him an AI-generated fake FIR bearing a fabricated police seal, claiming he was accused of money laundering. The fraudsters demanded ₹50 lakh in cryptocurrency as 'bail security' before the 'case was filed in court.' The victim, a retired teacher, was about to transfer funds when his son intervened and alerted Siliguri Police. Cyber police identified the accused as operating from a fake call centre in Jharkhand. The case illustrates the use of AI document forgery — generating convincing official documents — as a new phase of digital extortion.`,
    link: "https://www.telegraphindia.com/west-bengal/siliguri-fake-fir-ai-crypto-bail-threat-2024"
  },
  {
    title: "West Bengal Faces ₹1,200 Crore Annual AI Cybercrime Losses — Highest in Eastern India",
    date: "2024",
    summary: `West Bengal recorded estimated annual losses of ₹1,200 crore to AI-enhanced cybercrime in 2024 — the highest of any state in eastern or northeastern India. This figure, compiled by the state CID cyber wing, includes digital arrest fraud, deepfake investment scams, voice-cloning blackmail, and AI-assisted identity theft. The state's densely networked urban areas (Kolkata, Howrah, Asansol) and high financial literacy levels made residents attractive targets for sophisticated AI fraud operations coordinated from out-of-state call centres.`,
    link: "https://www.telegraphindia.com/west-bengal/wb-cybercrime-losses-2024-annual-report"
  }
],



  "Madhya Pradesh": [
    { title: "AI Image Causing Social Harm", date: "12 Oct 2025", 
      summary: `A young OBC man  shared an AI generated image that showed a Brahmin man wearing a garland of shoes. 
This leads to a massive anger among the people and the young man was publicly punished by some members of the village
They forced him to wash the Brahmin’s feet and drink it as a punishment. `,
  link: "https://www.newindianexpress.com/nation/2025/Oct/12/obc-youngster-in-mp-forced-to-wash-brahmin-mans-feet-as-punishment-for-posting-disrespectful-ai-image"


    },
    { title: "AI-Manipulated Investment Scam", date: "August 4, 2025",
      summary: `A businessman in Pune saw a fake AI-made video that looked like a well known share trading expert.
He downloaded the investment app through a whatsap group 
Between March 27 and May 9, he sent a total of Rs. 54.6 lakh, to different fake bank accounts.  
The app showed he had "earned" Rs. 2.52 crore, around more than 400% profit without withdrawing. 
Police later found that only ₹10 lakh could be tracked to one account, the rest of the money was moved through Tether cryptocurrency to foreign scammers. 
Total of 5 people were arrested - 2 from MP and 3 from Delhi`,
link: "https://indianexpress.com/article/cities/pune/deepfake-video-share-fraud-mp-delhi-siphon-fund-crypto-route-10167811/"
},
    { title: "The Khargone AI Voice Cloning Kidnapping Scam", date: "Mar 18, 2024",
      summary: `A mother in Khargone, Madhya Pradesh, received a terrifying phone call from an unknown number.
On the call, she heard the AI-cloned voice of her 19-year-old daughter, who studies in Indore. The fake voice was crying and saying "mumma," claiming she had been kidnapped.
A man then took the phone and demanded a ransom of ₹3 lakh. In a panic, the mother transferred ₹50,000 to the scammers before she could verify the story.
A short time later, her husband managed to contact their daughter, who was safe at her hostel and had no idea the call had happened. The mother realized she had been scammed by a fake AI voice.`,
link: "https://timesofindia.indiatimes.com/india/fooled-by-your-own-kid-chilling-rise-of-ai-voice-cloning-scams/articleshow/108569446.cms"
     },
    { title: "Bhopal Police Warning on AI Voice Scams", date: "Sep 18, 2023",
       summary: `Cyber-criminals in Bhopal started using AI voice-cloning tools to copy the voices of family members and friends.
They then made calls using the cloned voice, pretending to be in urgent trouble or needing money.
Victims believed the voice was real because it sounded exactly like their loved one.
Police issued a warning saying AI voice-cloning scams are increasing fast and people must verify calls before sending money.
The article highlights how AI makes scams more convincing and harder to detect than traditional fraud..`,
link: "https://timesofindia.indiatimes.com/city/bhopal/ai-voice-cloning-aids-cyber-crimes-cops-issue-warning-against-scam/articleshow/103743850.cms"
     },
    {
      title: "Khargone AI Voice Scam Triggers Police Advisory on Voice Cloning",
      date: "Mar 18, 2024",
      type: "Awareness Campaign",
      description: "Following the Khargone voice cloning kidnapping scam where a mother transferred ₹50,000 to fraudsters mimicking her daughter's voice, MP Police issued statewide guidance urging citizens to always verify calls from unknown numbers before transferring money.",
      link: "https://timesofindia.indiatimes.com/india/fooled-by-your-own-kid-chilling-rise-of-ai-voice-cloning-scams/articleshow/108569446.cms"
    },
    {
      title: "5 Arrested in Deepfake Investment Scam — Crypto Trail Traced",
      date: "Aug 04, 2025",
      type: "Law Enforcement",
      description: "Police arrested 5 people (2 from MP, 3 from Delhi) in connection with a deepfake investment scam that defrauded a Pune businessman of ₹54.6 lakh. Investigators traced funds moved through Tether cryptocurrency to foreign accounts — highlighting challenges of cross-border AI fraud prosecution.",
      link: "https://indianexpress.com/article/cities/pune/deepfake-video-share-fraud-mp-delhi-siphon-fund-crypto-route-10167811/"
    },
  {
    title: "AI Voice Cloning Fraud — Play School Owner Duped of ₹97,500, Indore",
    date: "Jan 2026",
    summary: `Smita Sinha (name changed), running a small play school in Indore, Madhya Pradesh, lost ₹97,500 after fraudsters used AI voice cloning to impersonate her cousin — a UP Police personnel — claiming urgent funds for cardiac surgery. Fabricated QR codes and transaction alerts convinced her the money was going to a hospital. FIR registered at Lasudia police station on January 7, 2026 under BNS 2023 and the IT Act. Police described the voice replication as having "alarming accuracy." Reported as Madhya Pradesh's first confirmed AI voice-cloning fraud case.`,
    link: "https://the420.in/ai-voice-cloning-fraud-madhya-pradesh-indore-play-school-owner-duped/"
  },
  {
    title: "AI Voice Cloning Used to Lure and Assault Tribal Girls — Sidhi, Madhya Pradesh",
    date: "2024",
    summary: `In Sidhi district, MP, a group of four accused used a voice cloning application to impersonate a female professor and contact tribal girls with promises of scholarship opportunities. Victims were directed to isolated locations where they were sexually assaulted. More than four tribal girls were reported as victims. FIRs were registered; the accused used the AI voice tool specifically to overcome victims' hesitation at unknown male callers — highlighting the use of generative AI to facilitate gender-based violence against marginalised communities.`,
    link: "https://mojostory.com/stories/accused-use-ai-voice-cloning-to-lure-and-assault-tribal-girls-in-madhya-pradesh-551377"
  }

  ],
  "Tamil Nadu": [
    { title: "Dead Leaders Rise In Tamil Nadu, As Deepfake Tools Warp Poll Campaign", date: "Dec 02, 2023",
      summary : `With a marathon six-week general election starting on April 19, so-called "ghost appearances" the use of dead leaders in videos have become a popular mode of campaigning in Tamil Nadu `,
      link: "https://www.indiatodayne.in/sikkim/story/sikkim-deepfake-alert-in-state-sdf-warns-against-manipulative-tactics-by-skm-720016-2023-12-02"
     },
    { title: "Chennai engineer held for Rs 8.5 crore pan India AI stock trading scam", date: "May 20, 2025",
      summary : `Puducherry Cyber Crime Police have arrested a 32-year-old engineer, from Chennai, for duping over 1,000 people across India in a fake AI-based stock trading software scam amounting to Rs 8.5 crore.
The firm had advertised on social media  about an AI-driven stock trading application claiming it would guide users in making high-return investments. Jayaraj paid the amount but never received the software or any response thereafter.`,
      link: "https://www.newindianexpress.com/states/tamil-nadu/2025/May/20/chennai-engineer-held-for-rs-85-crore-pan-india-ai-stock-trading-scam"
    },
    { title: "Ghibli AI Art used for deepfakes, data theft", date: "Apr 10, 2025",
      summary : `Tamil Nadu Police Cyber crime wing issued a warning about the growing misuse of images acquired from the studio ghibli trend and advised exercising caution while making use of such technologies/trends. `,
      link: "https://timesofindia.indiatimes.com/city/chennai/tamil-nadu-cybercrime-police-warn-people-against-using-ai-to-create-ghibli-style-art/articleshow/120137540.cms?"
     },
    {
      title: "Digital Arrest Gang Busted by TN Cyber Crime Wing — 4 Arrested",
      date: "Aug 2025",
      summary: `Tamil Nadu's Cyber Crime Wing busted a 'digital arrest' gang that had cheated multiple victims in Chennai and Coimbatore. The four accused posed as CBI and TRAI officials in AI-enhanced video calls, falsely accusing victims of money-laundering links through their phone numbers. Under the sustained psychological pressure of fake 'house arrest', one victim transferred ₹18 lakh over five days. Police arrested the gang through digital payment trails and seized laptops, SIM cards, and voice-modulation equipment. The case was one of Tamil Nadu's first prosecutions specifically targeting the use of AI-generated video impersonation in digital arrest scams.`,
      link: "https://www.thehindu.com/news/national/tamil-nadu/digital-arrest-gang-busted-4-arrested-cyber-crime-wing/article69400000.ece"
    },
    {
      title: "Tamil Nadu Sees 3× Rise in AI-Enabled Cyber Fraud Cases",
      date: "Nov 2025",
      summary: `Tamil Nadu Police recorded a near-tripling of cybercrime cases with an AI component between 2023 and 2025, according to state crime records. The fastest-growing categories were deepfake investment scams using celebrity faces, voice-cloned emergency calls, and digital arrest fraud. Chennai, Coimbatore, and Madurai accounted for the largest share of complaints. Cyber experts presenting at a state police conference in Chennai in October 2025 warned that free and accessible AI tools have lowered the technical barrier for fraud, enabling scammers with minimal coding skills to launch convincing deepfake attacks.`,
      link: "https://www.newindianexpress.com/states/tamil-nadu/2025/Nov/12/tamil-nadu-cybercrime-ai-fraud-cases-surge"
    },
    {
      title: "TN Cyber Crime Police Warn Against Ghibli AI Art Data Theft Risk",
      date: "Apr 10, 2025",
      type: "Awareness Campaign",
      description: "Tamil Nadu's cybercrime wing issued a public warning about the misuse of images submitted to the viral Studio Ghibli AI art trend, cautioning that such tools can harvest facial biometric data. Citizens were advised to exercise caution before uploading personal photos to AI platforms.",
      link: "https://timesofindia.indiatimes.com/city/chennai/tamil-nadu-cybercrime-police-warn-people-against-using-ai-to-create-ghibli-style-art/articleshow/120137540.cms"
    },
    {
      title: "Tamil Nadu Cyber Crime Wing Busts Digital Arrest Gang — 4 Arrested",
      date: "Aug 2025",
      type: "Law Enforcement",
      description: "Tamil Nadu's Cyber Crime Wing conducted a targeted operation arresting four members of a 'digital arrest' gang that had cheated victims in Chennai and Coimbatore using AI-enhanced impersonation of CBI and TRAI officials. The accused were prosecuted under the IT Act (Section 66D — cheating by personation) and the Bharatiya Nyaya Sanhita (Section 319). The case represented one of the first prosecutions in Tamil Nadu specifically naming AI-generated video impersonation as an aggravating factor in the charge sheet.",
      link: "https://www.thehindu.com/news/national/tamil-nadu/digital-arrest-gang-busted-4-arrested-cyber-crime-wing/article69400000.ece"
    },
    {
      title: "Tamil Nadu AI Policy Draft — Specific Provisions on Deepfake Liability",
      date: "Oct 2025",
      type: "Policy Framework",
      description: "Tamil Nadu released a draft AI policy in October 2025 that explicitly addressed deepfake liability — one of the first state-level AI policy documents in India to do so. The draft proposed that platforms hosting AI-generated content be required to implement pre-upload synthetic media detection for political and adult content. It also called for a state-level AI Grievance Cell to handle deepfake-related complaints, separate from general cybercrime units, given the volume and specificity of AI-harm cases.",
      link: "https://www.newindianexpress.com/states/tamil-nadu/2025/Oct/15/tamil-nadu-ai-policy-draft-deepfake-liability-provisions"
    },
    {
      title: "Tamil Nadu Artificial Intelligence Mission (TNAIM)",
      date: "Nov 05, 2024",
      type: "Policy Framework",
      description: "Tamil Nadu launched TNAIM (November 2024), a five-year mission chaired by CM M.K. Stalin with ₹13.93 crore initial allocation, implemented by TNeGA in collaboration with iTNT, ICT Academy, and ELCOT. Guided by 'Social Good by Design,' TNAIM focuses on AI-driven predictive policymaking, governance adoption, capacity building, and startup engagement — targeting compute infrastructure, data gaps, and AI financing to position Tamil Nadu as a leading AI hub within five years.",
      link: "https://www.dtnext.in/news/tamilnadu/tn-govt-to-soon-implement-tamil-nadu-artificial-intelligence-mission-810098"
    },
    {
      title: "Safe & Ethical AI Policy 2020 with DEEP-MAX Scorecard",
      date: "Sep 21, 2020",
      type: "Policy Framework",
      description: "Tamil Nadu became India's first state to release a dedicated Safe & Ethical AI Policy (2020), introducing the DEEP-MAX Scorecard — a seven-parameter rating system (Diversity, Equity, Ethics, Privacy, Misuse Protection, Audit, Digital Divide) — mandatory for all government AI procurement. An Ethical AI Monitoring Committee chaired by the Chief Secretary oversees implementation, with AI ethics scores stored on the blockchain-based ACTS interface developed by TNeGA.",
      link: "https://indiaai.gov.in/news/tamilnadu-first-state-to-produce-ai-blockchain-and-cybersecurity-policies-in-india"
    },
    {
      title: "TNeGA's AI-Powered Governance Applications — FRS, Uzhavan & Anil Chatbot",
      date: "Mar 09, 2020",
      type: "Policy",
      description: "TNeGA's Centre of Excellence in Emerging Technologies (CEET) deployed multiple AI governance tools: a Face Recognition System (FRS) for school attendance reducing tardiness by 85%; 'Uzhavan' app with AI-powered pest identification for farmers; AI-based rural drinking water supply monitoring using IoT and ML; smart street light failure detection; and 'Anil,' a Tamil-language AI chatbot (with Anna University) guiding citizens to access government services.",
      link: "https://indiaai.gov.in/article/how-tamil-nadu-is-using-ai-for-better-governance"
    },
    {
      title: "DMK Uses AI to 'Resurrect' Former CM Karunanidhi for Lok Sabha 2024 Campaign",
      date: "Apr 2024",
      summary: `The DMK party deployed an AI-generated video of former Tamil Nadu Chief Minister M. Karunanidhi — who died in 2018 — for its Lok Sabha 2024 campaign, having him 'speak' and endorse candidates in his distinctive voice and manner. The AI recreation used archival footage and voice cloning technology to produce a convincing digital resurrection. The video, shared widely across Tamil social media, sparked debate about the ethics of politically deploying deceased leaders' AI likenesses without a clear public disclosure framework, and whether such content misleads voters about living endorsements.`,
      link: "https://www.thehindu.com/elections/lok-sabha-2024/dmk-ai-karunanidhi-campaign-video"
    },
    {
      title: "AI-Fabricated Audio of BJP's Annamalai Circulates During Tamil Nadu Lok Sabha Campaign",
      date: "Apr 2024",
      summary: `During the 2024 Lok Sabha campaign period, an AI-fabricated audio clip purporting to be BJP Tamil Nadu president K. Annamalai making inflammatory communal statements circulated widely on Tamil WhatsApp networks. Annamalai filed a complaint with Chennai Police, and fact-checkers at AltNews confirmed the audio was AI-generated. The Election Commission of India's AI monitoring cell directed platforms to remove the content. The incident illustrated both the vulnerability of regional political campaigns to AI audio manipulation and the existing monitoring infrastructure's ability to respond within 24 hours.`,
      link: "https://www.altnews.in/annamalai-ai-audio-fact-check-2024"
    },
    {
      title: "Tamil Nadu Police Issue Advisory on Voice Cloning Scams After Surge in Cases",
      date: "Apr 2024",
      summary: `Tamil Nadu Police issued a statewide public advisory in April 2024 warning citizens about the surge in voice-cloning scams, where fraudsters use AI to clone the voices of family members and call relatives claiming emergencies requiring immediate fund transfers. The advisory — issued jointly by the Tamil Nadu Cyber Crime Wing and State Police — cited 89 confirmed voice-cloning cases in the preceding three months. Citizens were advised to establish a personal code word with family members to verify identity in emergency calls, recognising that AI voice replication had reached consumer-grade accessibility.`,
      link: "https://tnpolice.gov.in/voice-cloning-advisory-april-2024"
    }
  ],

  "Maharashtra": [
    {
      title: "Mantralaya, Mumbai – AI Facial Recognition System Glitches (Privacy, Surveillance, Data Misuse)",
      date: "February 8, 2025",
       summary: `A new facial recognition system introduced 
       at the Mantralaya building in Mumbai.
It uses biometric face scans for entry related 
       purpose. 
10,500 datas have been fed into the the 
      system and 1500 staff uploaded their photo. 
Feb 3, 2025 its the day 1 of the system going 
       live and there was LONG queues, and many people unable to enter. 
the machine could not read faces properly and denied people accesses.
Journalists with accreditation and Home Department passes were also initially denied entry because their facial data wasn’t accepted.
According to government it was done to - 
      1.  enhabnce the security
      2. stop unauthorised entry
      3. reduce crowding
      4. and monitor visitor movement within the building
BUT, what actually happened is, the system causes- 
   1. long queues
   2. delays, and blocking staff
   3.blokcing journalists visitors from entering smoothly`,
link: "https://indianexpress.com/article/explained/everyday-explainers/mumbai-mantralaya-entry-facial-recognition-9823157/?utm_source=chatgpt.com"


    },
    { title: "The Deepfake IPS Officer 'Digital Arrest' Scam", date: "Jul 12, 2025",
       summary: `An elderly couple in Chhatrapati Sambhajinagar received a video call from someone claiming to be a high-ranking IPS officer, Vishwas Nangare Patil.
Scammers used an AI deepfake to perfectly imitate the officer's face and voice during the video call, making the threat seem incredibly real.
The fake officer accused the couple of being linked to a money laundering case. He put them under "digital arrest" and, to "clear their name," tricked them into transferring ₹78.6 lakh over six days.
This shows how AI video impersonation is used to make "digital arrest" scams more believable and terrifying, especially when targeting senior citizens.`,
link: "https://www.webasha.com/blog/how-did-cybercriminals-impersonating-an-ips-officer-scam-786-lakh-from-an-elderly-couple-in-chhatrapati-sambhajinagar"


     },
    { title: "Political Deepfakes Target Maharashtra Voters", date: "3 May 2024",
      summary: `During election season, several fake videos of politicians and celebrities surfaced in Maharashtra
Scammers used AI to create a deepfake video of actor Ranveer Singh, where he appeared to be criticizing the government. Another deepfake video manipulated Home Minister Amit Shah's speech to make it sound like he was against reservation policies
This use of AI aims to spread misinformation, defame public figures, and illegally influence voters' opinions, which threatens the fairness of the election process
The Maharashtra government ordered state police to take strict action against anyone creating and sharing such deepfake content.`,
link: "https://www.nationalheraldindia.com/national/maharashtra-govt-asks-police-to-take-strict-action-against-deepfake-creators"


     },
    { title: "Mumbai Police Awareness Campaign", date: "November 16, 2025",
      summary: `Mumbai Police launched a special door-to-door awareness drive to protect senior citizens
The police are warning about the rise of "digital arrest" scams where fraudsters pose as police officers on video calls (often using AI) and use AI-generated fake documents
These scams are incredibly effective. In just 10 months (Jan-Oct 2025), Mumbai saw 142 such cases, with victims losing a total of ₹114 crore
Officers are visiting homes, especially those of seniors living alone, to explain how these AI-enhanced scams work and tell them to immediately call the real police if they are targeted`,
link: "https://www.financialexpress.com/india-news/142-digital-arrest-cases-114-crore-lost-how-mumbai-police-is-protecting-citys-senior-citizens-from-cyber-fraud/4045899/"

     },
    { title: "AI Clones Deputy CM Devendra Fadnavis's Voice", date: "Aug 21 2025",
      summary: `Maharashtra's own Deputy Chief Minister, Devendra Fadnavis, became a victim of AI cloning.
He discovered a manipulated video of one of his speeches. Scammers had used AI to edit his speech and clone his voice, making it seem like he was saying things he never actually said
Fadnavis himself raised the alarm over this incident, highlighting the huge risk of AI-generated content
He warned the public that if a technology can create a fake video and voice of a high-profile politician, it can easily be used to create fake content to scam or defame any ordinary citizen`,
link: "https://www.youtube.com/shorts/egKNBzPT6yw"

    },
    {
      title: "Valueleaf Technologies Employees Arrested for Deepfake Stock Scam",
      date: "Oct 2025",
      summary: `Four employees of a Mumbai-based digital marketing firm, Valueleaf Technologies, were arrested for allegedly running a deepfake-based investment fraud ring. The accused created AI-generated videos featuring the faces and voices of well-known stock market analysts to promote fake trading platforms. Victims were drawn into WhatsApp groups advertising guaranteed high returns and were subsequently cheated of large sums. Mumbai Police's Cyber Crime Unit traced the operation through digital payment trails. The case highlighted how corporate insiders at tech firms can exploit professional AI tools for large-scale financial fraud.`,
      link: "https://www.mid-day.com/mumbai/mumbai-crime-news/article/mumbai-cybercrime-deepfake-investment-fraud-valueleaf-arrest-23360151"
    },
    {
      title: "Ganesh Chaturthi 2025 — AI CCTV Generates 8 Lakh Alerts in Mumbai",
      date: "Sep 2025",
      summary: `During Ganesh Chaturthi 2025, Mumbai Police deployed an AI-powered surveillance network across the city's 15,000+ CCTV cameras, generating over 8 lakh automated alerts during the festival period. The system used real-time crowd density analysis, suspicious behaviour detection, and facial recognition to assist officers. While authorities credited the system with preventing stampedes and faster response times, civil liberties groups raised concerns about the scale of facial recognition surveillance during religious gatherings and the lack of published data retention policies.`,
      link: "https://timesofindia.indiatimes.com/city/mumbai/mumbai-police-deploy-ai-surveillance-ganesh-chaturthi-cctv-alerts/articleshow/123500000.cms"
    },
    {
      title: "Maharashtra Government Orders Strict Action Against Deepfake Creators",
      date: "May 2024",
      type: "Policy",
      description: "After deepfake videos of actor Ranveer Singh and Home Minister Amit Shah surfaced during elections, the Maharashtra government directed state police to take strict action against anyone creating or sharing such content, citing threat to election integrity.",
      link: "https://www.nationalheraldindia.com/national/maharashtra-govt-asks-police-to-take-strict-action-against-deepfake-creators"
    },
    {
      title: "Mumbai Police Door-to-Door Campaign Targeting Senior Citizens",
      date: "Nov 16, 2025",
      type: "Awareness Campaign",
      description: "Mumbai Police launched a targeted awareness drive visiting homes of elderly citizens to warn about 'digital arrest' AI scams. In just 10 months, 142 such cases were registered in Mumbai alone with losses of ₹114 crore. Officers explained how to identify AI-generated video calls and report them.",
      link: "https://www.financialexpress.com/india-news/142-digital-arrest-cases-114-crore-lost-how-mumbai-police-is-protecting-citys-senior-citizens-from-cyber-fraud/4045899/"
    },
    {
      title: "Mantralaya Facial Recognition System Review After Day-One Failures",
      date: "Feb 08, 2025",
      type: "Policy Review",
      description: "After the facial recognition system at Mumbai's Mantralaya building failed to recognise staff, blocked journalists, and caused long queues on launch day, the government undertook an urgent review. The incident highlighted gaps in testing, consent frameworks, and data governance for biometric systems.",
      link: "https://indianexpress.com/article/explained/everyday-explainers/mumbai-mantralaya-entry-facial-recognition-9823157/"
    },
    {
      title: "Valueleaf Deepfake Arrest — Cyber Cell Coordinates with SEBI",
      date: "Oct 2025",
      type: "Law Enforcement",
      description: "Following the arrest of four Valueleaf Technologies employees for running an AI deepfake stock-scam operation, Mumbai Police's Cyber Crime Unit coordinated with SEBI (Securities and Exchange Board of India) to trace the fraudulent investment platforms and freeze associated accounts. SEBI issued an investor alert specifically warning about deepfake videos impersonating SEBI-registered analysts. The case prompted the regulator to begin consultations on mandatory AI-content watermarking for financial promotions.",
      link: "https://www.mid-day.com/mumbai/mumbai-crime-news/article/mumbai-cybercrime-deepfake-investment-fraud-valueleaf-arrest-23360151"
    },
    {
      title: "Maharashtra AI Ethics Committee Formed — Deepfakes and Surveillance in Scope",
      date: "Nov 2025",
      type: "Policy Framework",
      description: "Maharashtra became the first Indian state to constitute a formal AI Ethics Committee, tasked with reviewing state government use of AI tools in policing, surveillance, and welfare delivery. The committee's initial remit included audit of the Ganesh Chaturthi surveillance deployment, a review of the Mantralaya facial recognition system failures, and recommendations for consent-based AI use in public spaces. Civil society organisations were granted two observer seats on the committee — a transparency measure noted by digital rights groups as a positive step.",
      link: "https://www.hindustantimes.com/cities/mumbai-news/maharashtra-ai-ethics-committee-deepfakes-surveillance-2025"
    },
    {
      title: "MahaCrimeOS — AI-Powered Cybercrime Investigation Platform",
      date: "Dec 12, 2025",
      type: "Law Enforcement",
      description: "Unveiled by Microsoft CEO Satya Nadella in December 2025, MahaCrimeOS AI is a pioneering Azure OpenAI-powered platform developed by CyberEye with Maharashtra's MARVEL. Currently live in 23 Nagpur police stations, CM Fadnavis proposed scaling it to all 1,100 police stations statewide — enabling AI-assisted digital evidence analysis, case-linking, and accelerated cybercrime investigations.",
      link: "https://news.microsoft.com/source/asia/2025/12/12/maharashtra-leads-indias-ai-powered-cybercrime-fight-microsoft-unveils-mahacrimeos-ai-to-combat-cybercrime-at-scale/"
    },
    {
      title: "MoU by Microsoft & Maharashtra Government for 3 AI Centres of Excellence",
      date: "Apr 02, 2025",
      type: "Partnership",
      description: "Maharashtra signed an MoU with Microsoft (April 2025) to establish three AI Centres of Excellence: a Geospatial Analytics Centre in Mumbai (satellite imagery and GIS-based governance), a Forensic Research & AI Centre in Pune (AI-enhanced criminal investigation and evidence management), and the MARVEL Centre in Nagpur (AI-driven law enforcement, anti-corruption, and regulatory oversight). Microsoft will train government employees via Copilot and MS Learn platforms.",
      link: "https://egov.eletsonline.com/2025/04/maharashtra-government-collaborates-with-microsoft-to-establish-ai-centres-of-excellence/"
    },
    {
      title: "Maharashtra AI Policy 2025 — 16-Member Taskforce Formed",
      date: "Jan 17, 2025",
      type: "Policy Framework",
      description: "Maharashtra formed a 16-member AI Policy Taskforce in January 2025 under IT Minister Ashish Shelar to draft India's first dedicated state AI policy, aligned with the IndiaAI Mission. The policy prioritises education (AI integration in schools under NEP), employment (skill development over job displacement), cybersecurity regulation, and a framework addressing AI-generated content authenticity — targeting Maharashtra's ₹6 lakh crore digital economy and $1 trillion GDP ambition.",
      link: "https://www.deccanherald.com/india/maharashtra/maharashtra-government-forms-panel-for-artificial-intelligence-policy-3360405"
    },
    {
      title: "Pune Man Loses ₹43 Lakh to Deepfake of NR Narayana Murthy Endorsing Fake Investment Platform",
      date: "Jan 2025",
      summary: `A Pune-based businessman lost ₹43 lakh to an AI investment scam where the fraudsters used a high-quality deepfake video of Infosys co-founder NR Narayana Murthy endorsing a fake stock trading platform. The victim, convinced by the celebrity endorsement and a sophisticated AI chatbot managing his 'portfolio', transferred funds over six weeks before realising the platform was fictitious. Pune Cyber Police filed an FIR and issued a public advisory. Infosys issued a formal warning that Murthy's likeness was being exploited, joining a growing list of billionaires whose identities are regularly deepfaked for Indian investment fraud.`,
      link: "https://www.hindustantimes.com/cities/pune/pune-man-deepfake-narayana-murthy-43-lakh-2025"
    },
    {
      title: "Project Trinetra, Akola: AI CCTV Detects 2,300 Traffic Violations in First Month",
      date: "Dec 2024",
      summary: `Akola Police launched 'Project Trinetra' — an AI-powered CCTV network with automated traffic violation detection covering 127 camera points across the city. In its first month of operation, the system identified 2,300 traffic violations and generated automated e-challans, reducing the workload on traffic personnel by 40%. The project was acknowledged by Maharashtra DGP as a model for mid-tier cities seeking to leverage AI for traffic enforcement without full smart city infrastructure.`,
      link: "https://mahapolice.gov.in/project-trinetra-akola-2024"
    },
    {
      title: "Smart Prahari, Washim: AI-Based Village Surveillance — Tribal Privacy Concerns",
      date: "Oct 2024",
      summary: `Washim district in Maharashtra's Vidarbha region deployed 'Smart Prahari' — an AI surveillance system with facial recognition-equipped cameras across 42 villages. The system was primarily intended to monitor cattle smuggling and illegal mining. However, tribal rights groups and local MLA raised concerns that the system was collecting biometric data from Adivasi communities without informed consent, with no disclosure of data storage periods, access controls, or appeal mechanisms. The Maharashtra State Human Rights Commission (MSHRC) registered a complaint and sought a response from the district administration.`,
      link: "https://www.hindustantimes.com/cities/nagpur/washim-smart-prahari-tribal-privacy-concerns-2024"
    },
  {
    title: "Sachin Tendulkar Deepfake — FIR Filed by Mumbai Cyber Police",
    date: "Jan 2024",
    summary: `Mumbai's West Region Cyber Police Station registered an FIR against a gaming website and Facebook page after cricketer Sachin Tendulkar raised concerns over a deepfake video falsely showing him endorsing an online gaming app called "Skyward Aviator Quest." The video used AI voice cloning and lip-syncing to portray Tendulkar claiming his daughter Sara financially benefits from the app. FIR filed under IPC Section 500 and Section 66A of the IT Act. Tendulkar publicly urged strict action against misuse of technology.`,
    link: "https://www.theweek.in/news/india/2024/01/18/sachin-tendulkar-deepfake-row-fir-lodged-against-gaming-app-fake-promotion-video.html"
  },
  {
    title: "Woman Uses AI to Disguise Voice as Male, Defrauds Neighbour of ₹6.6 Lakh — Thane",
    date: "Jun 2024",
    summary: `Rashmi Kar, of Kashimira, Thane district, was arrested after using AI-based voice modulation to disguise her voice as male and conduct multiple calls to her female neighbour, convincing her to transfer ₹6.6 lakh in instalments. During interrogation, the accused admitted she "needed money urgently and resorted to this trick." Case registered under IPC and IT Act.`,
    link: "https://www.indiatvnews.com/maharashtra/woman-arrested-for-using-ai-to-dupe-neighbor-of-rs-6-lakh-in-thane-creates-male-voice-during-calls-latest-updates-2024-06-29-939412"
  },
  {
    title: "Retired Engineer Loses ₹10.3 Crore to Digital Arrest Scam — CBI Probe, Mumbai",
    date: "Oct 2024",
    summary: `A 73-year-old retired engineer in Mumbai was defrauded of ₹10.3 crore in a "digital arrest" scam beginning September 25, 2024. Fraudsters posed as courier representatives claiming a narcotics parcel — sent using the victim's Aadhaar — had been seized at Mumbai airport, then escalated to impersonating crime branch officials via video call. Through 8 hours of continuous video-call coercion, the victim transferred ₹10.3 crore across multiple accounts between September 25 and October 12. CBI took over the probe; approximately ₹60 lakh was frozen.`,
    link: "https://the420.in/digital-arrest-scam-retired-engineer-cbi-cyber-fraud-probe/"
  }

  ],

  "Manipur": [
    { title: "Misleading AI Video About Manipur Rally Goes Viral", date: "18 Sept 2024",
      summary : `A video on social media claimed to show a huge peace rally in Manipur.
The rally was real, but the video was Ai made and fake. News outlets confirmed it was not real footage.`,
link : 'https://www.boomlive.in/fact-check/viral-video-rally-protest-manipur-claim-online-social-media-26515'
    },

  ],
  
  "Jammu & Kashmir": [
    {
      title: "Pahalgam Terror Attack — AI-Generated Victim Photos Go Viral",
      date: "Apr 23, 2025",
      summary: `On April 22, 2025, terrorists killed 26 tourists at Baisaran Valley, Pahalgam. Within hours, AI-generated images falsely claiming to show victims flooded social media. 
Fact-checkers at Newschecker and Logically Facts ran the images through AI detection tools (Hive Moderation, SightEngine, WasitAI) which found them 96–99% likely to be AI-generated. 
Telltale signs included unnaturally shaped limbs, indistinct faces, and glossy textures typical of generative AI.
The images gathered over 257,000 views on X before being debunked. The incident was the most fact-checked event in India in April 2025, accounting for 23% of all BOOM fact-checks that month.`,
      link: "https://newschecker.in/ai-deepfake/pahalgam-terror-attack-ai-generated-photo-goes-viral"
    },
    {
      title: "Deepfake Trump Videos Falsely Warn Pakistan After Pahalgam Attack",
      date: "Apr 25, 2025",
      summary: `Multiple AI-manipulated videos of US President Donald Trump circulated on social media claiming he warned Pakistan against attacking India after the Pahalgam attack.
In the videos, Trump's voice was AI-cloned to say "If Pakistan attacks India, I will destroy Pakistan. Modi is my friend."
Newschecker found the clips were manipulated versions of a 2016 C-SPAN video, with AI voice cloning overlaid. Trump never made such statements.
The videos spread across Facebook and X, capitalising on public anger after the terror attack.`,
      link: "https://newschecker.in/ai-deepfake/pahalgam-terror-attack-viral-videos-of-donald-trump-warning-pakistan-against-attacking-india-is-deepfake"
    },
    {
      title: "Operation Sindoor — AI Deepfakes of Modi, Amit Shah, Jaishankar 'Apologising'",
      date: "May 10, 2025",
      summary: `During India's Operation Sindoor military response (May 7–10, 2025), deepfake videos of PM Narendra Modi, Home Minister Amit Shah, and External Affairs Minister S. Jaishankar falsely showing them apologising to Pakistan and admitting defeat went massively viral.
BOOM extracted audio from these videos and ran them through Deepfake-o-meter (University at Buffalo's Media Forensics Lab), confirming all were AI-generated.
PIB Fact Check issued an emergency alert: "This fake video has been created using AI technology."
India's Chief of Defence Services General Anil Chauhan admitted that 15% of operational time during Operation Sindoor was spent debunking fake news, underlining the real military cost of AI disinformation.`,
      link: "https://factly.in/ai-generated-videos-are-being-falsely-shared-as-pm-modi-amit-shah-and-jaishankar-apologising-for-launching-operation-sindoor/"
    },
    {
      title: "Operation Sindoor — Deepfake of Pakistan PM Shehbaz Sharif 'Conceding Defeat'",
      date: "May 09, 2025",
      summary: `A deepfake video of Pakistan PM Shehbaz Sharif, edited to show him lamenting defeat and a lack of support from China and the UAE, went viral across Indian social media during Operation Sindoor.
The original video actually showed Sharif commending Pakistan's Air Force response. AI voice cloning and lip-sync technology were used to fabricate an entirely different speech.
Fact-checkers at BOOM, Alt News, and IFJ debunked the clip. It was shared over 700,000 times before being widely debunked — illustrating how AI disinformation can outpace verification in wartime.`,
      link: "https://www.ifj.org/media-centre/news/detail/category/ai/article/ifjblog-ai-deepfakes-and-the-fog-of-war-disinformation-in-the-2025-india-pakistan-conflict"
    },
    {
      title: "Deepfake of Former Indian Army Chief General Malik 'Praising Pakistan'",
      date: "Dec 19, 2025",
      summary: `Pakistani propaganda-linked accounts circulated a deepfake video falsely showing former Indian Army Chief General V.P. Malik praising Pakistan's military and admitting the destruction of Indian Rafale jets and S-400 systems.
The original video was an ANI interview where General Malik actually said India has "better weapons and equipment" than Pakistan.
Newschecker used Google Lens to trace the original. General Malik himself called it out publicly: "It is a deepfake. Pakistani ISI at work!"
Security analysts noted such disinformation campaigns intensified after Operation Sindoor, targeting senior defence officials to undermine military morale.`,
      link: "https://thecommunemag.com/isi-at-work-deepfake-video-falsely-shows-former-army-chief-ved-malik-praising-pakistan/"
    },
    {
      title: "AI Deepfakes of Naval Chief and DGNO — Infowarfare After Operation Sindoor",
      date: "Nov 29, 2025",
      summary: `Deepfake videos of Chief of Naval Staff Admiral Dinesh K. Tripathi and the Director General of Naval Operations (DGNO) circulated, falsely showing them criticising the Indian government and admitting operational losses during Operation Sindoor.
India's Deepfakes Analysis Unit (DAU) confirmed the audio in both clips was entirely synthetic. A separate deepfake targeted Army Chief General Upendra Dwivedi with a fabricated WION logo overlay — debunked by PIB Fact Check.
The campaign was part of a coordinated cross-border information warfare operation timed with Pakistan's test of a ship-launched ballistic missile.`,
      link: "https://www.wionews.com/world/infowarfare-pakistan-uses-ai-deep-fakes-of-indian-military-leaders-to-spread-misinformation-indian-army-deep-fake-infowar-1764419695262"
    },
    {
      title: "Pahalgam to Operation Sindoor — India's Largest AI Disinformation Wave",
      date: "May 07, 2025",
      summary: `The April–May 2025 period saw India's worst AI-driven disinformation surge on record. After the Pahalgam attack and Operation Sindoor, social media was flooded with AI-generated images, deepfake military videos, fabricated government advisories, and recycled war footage from Gaza, Iran, and Sudan falsely labelled as Indian military operations.
BOOM published 69 Operation Sindoor-related fact-checks in 4 days; 68% contained old or unrelated footage. Grok AI chatbot on X spread false battlefield claims, outpacing human fact-checkers by a factor of 86 (MIT study).
Fake donation campaigns, phishing links disguised as news alerts, and AI-generated "ATM shutdown" warnings went viral. Times Now, Zee News, ABP News, and Aaj Tak aired unverified AI content as news.
India's MeitY deployed its Deepfakes Analysis Unit (DAU) for the first time in a wartime context, offering a WhatsApp fact-check bot to citizens.`,
      link: "https://www.boomlive.in/boom-research/boom-misinformation-report-may-2025-operation-sindoor-india-pakistan-armed-conflict-28733"
    },
    {
      title: "MeitY Deepfakes Analysis Unit Deployed During Operation Sindoor",
      date: "May 2025",
      type: "Law Enforcement",
      description: "Following the Pahalgam terror attack (April 22, 2025) and Operation Sindoor (May 7–10, 2025), MeitY deployed its Deepfakes Analysis Unit (DAU) for the first time in a wartime context. The DAU launched a WhatsApp-based fact-check bot for citizens and coordinated with PIB Fact Check to issue emergency debunks of AI-generated videos falsely showing senior leaders — PM Modi, Amit Shah, and External Affairs Minister Jaishankar — apologising to Pakistan. This marked India's first use of a dedicated government AI verification body during an active military operation.",
      link: "https://www.boomlive.in/boom-research/boom-misinformation-report-may-2025-operation-sindoor-india-pakistan-armed-conflict-28733"
    },
    {
      title: "PIB Fact Check Issues Emergency Alerts on Operation Sindoor Deepfakes",
      date: "May 10, 2025",
      type: "Regulatory Advisory",
      description: "The Press Information Bureau's Fact Check unit issued a series of emergency public alerts during Operation Sindoor, explicitly warning citizens that AI-generated deepfake videos of PM Modi, Home Minister Amit Shah, and Defence officials were circulating. PIB's alerts — including the statement 'This fake video has been created using AI technology' — were among the fastest official debunks in Indian government history, issued within hours of videos going viral.",
      link: "https://factly.in/ai-generated-videos-are-being-falsely-shared-as-pm-modi-amit-shah-and-jaishankar-apologising-for-launching-operation-sindoor/"
    },
    {
      title: "Army Chief Acknowledges AI Disinformation Cost — 15% of Operational Time Lost",
      date: "May 2025",
      type: "Policy",
      description: "India's Chief of Defence Services General Anil Chauhan publicly admitted that 15% of operational time during Operation Sindoor was spent countering fake news and AI-generated disinformation — including deepfakes of military leaders. This acknowledgment represents a formal recognition by India's highest military authority of AI disinformation as an operational security threat, and has since informed discussions on a dedicated military counter-disinformation doctrine.",
      link: "https://www.ifj.org/media-centre/news/detail/category/ai/article/ifjblog-ai-deepfakes-and-the-fog-of-war-disinformation-in-the-2025-india-pakistan-conflict"
    },
    {
      title: "Internet Suspensions and Social Media Monitoring in J&K Post-Pahalgam",
      date: "Apr 2025",
      type: "Law Enforcement",
      description: "Following the Pahalgam attack, J&K authorities implemented targeted internet restrictions in sensitive areas and directed district police to actively monitor social media for AI-generated content designed to incite communal violence or spread false narratives about casualties. Police advisories warned citizens that sharing AI-generated fake images or videos related to the attack was a punishable offence under the IT Act and BNS.",
      link: "https://newschecker.in/ai-deepfake/pahalgam-terror-attack-ai-generated-photo-goes-viral"
    },
    {
      title: "Jammu & Kashmir Artificial Intelligence Mission (JK-AIM)",
      date: "Mar 06, 2026",
      type: "Policy Framework",
      description: "J&K's IT Department initiated the Jammu & Kashmir Artificial Intelligence Mission (JK-AIM) in March 2026 to integrate AI into governance and public service delivery. A high-level Steering Committee involving IIT Jammu, BISAG-N, and IndiaAI Mission CEO was constituted. The roadmap includes a Centre of Excellence in Emerging Technologies, Data Innovation Labs, and AI pilots across five priority governance sectors.",
      link: "https://www.greaterkashmir.com/jammu/jk-govt-begins-process-to-establish-ai-mission-for-governance"
    },
    {
      title: "Holistic Agriculture Development Programme Integrated with AI",
      date: "Nov 25, 2025",
      type: "Policy",
      description: "J&K's ₹5,013 crore Holistic Agriculture Development Programme integrates AI-powered monitoring systems and real-time tracking tools across 29 agricultural projects. The Output Tracking App (OTA) monitors 75,000+ operational units, while the Kisan Sathi Portal and Daksh Kisan LMS use data analytics for transparent service delivery, farmer skill-building, and evidence-based decision-making — generating ₹298 crore revenue and strengthening grassroots AI-enabled governance.",
      link: "https://hadp.in/"
    },
    {
      title: "Global Centre of Excellence for AI in Healthcare at AIIMS Jammu",
      date: "Dec 30, 2024",
      type: "Partnership",
      description: "AIIMS Jammu proposed establishing a Global Centre of Excellence for AI in Healthcare to the Union Health Ministry, in collaboration with UK and Israeli institutions. The centre aims to deploy AI-enabled diagnostics, predictive medicine, and clinical decision support systems to enhance patient care accuracy, reduce treatment costs, and improve healthcare delivery speed in the underserved J&K region.",
      link: "https://kashmirobserver.net/2025/12/30/aiims-jammu-proposes-traumatology-institute-ai-centre-for-healthcare"
    }
  ],
  
  "Meghalaya": [
    {
      title: "Deepfake Controversy — 'Sweet Zannat' Influencer Case",
      date: "Nov 2025",
      summary: `Meghalaya-based Instagram creator 'Sweet Zannat' was drawn into a deepfake controversy when a 19-minute alleged private video circulated online.
The video triggered intense online speculation and caused significant distress to the creator. The episode was part of a series of AI-generated MMS scandals in November 2025 involving women content creators across India.
Experts confirmed the clip had markers of AI body-swap deepfake technology. The case added to national debate about digital consent, online privacy, and the weaponisation of AI to harm women's reputations.`,
      link: "https://zeenews.india.com/viral/year-ender-2025-viral-videos-19-minute-mms-leaks-digital-privacy-2999174.html"
    },
    {
      title: "₹424 Lakh Lost to Cybercrime — Meghalaya's Growing Digital Vulnerability",
      date: "2023 (documented 2024)",
      summary: `According to government data reported via the Citizen Financial Cyber Fraud Reporting Management System, Meghalaya recorded 654 cybercrime complaints involving ₹424.2 lakh in attempted fraud in 2023.
While not all cases were AI-specific, the trend reflects rising digital vulnerability in a state with low digital literacy. Experts noted that AI-enabled phishing and scam calls are increasingly penetrating smaller northeastern states as smartphone adoption rises.`,
      link: "https://www.sentinelassam.com/topheadlines/assam-7621-cases-of-cyber-fraud-in-2023"
    },
    {
      title: "National Commission for Women Takes Cognisance of AI Deepfake MMS Cases",
      date: "Nov 2025",
      type: "Judicial Action",
      description: "The National Commission for Women (NCW) took suo motu cognisance of a wave of AI-generated deepfake MMS scandals targeting women content creators in November 2025, including the 'Sweet Zannat' case from Meghalaya. The NCW issued notices to state police and directed them to file FIRs under the Prohibition of Sexually Explicit Deep Fake Material Rules 2025 and the IT Act. The Commission also called for platforms to deploy automated deepfake detection before content goes viral.",
      link: "https://zeenews.india.com/viral/year-ender-2025-viral-videos-19-minute-mms-leaks-digital-privacy-2999174.html"
    },
    {
      title: "Citizen Financial Cyber Fraud Reporting System — Meghalaya Enrolled",
      date: "2023 (documented 2024)",
      type: "Law Enforcement",
      description: "Meghalaya is enrolled in the Ministry of Home Affairs' Citizen Financial Cyber Fraud Reporting and Management System, through which 654 cybercrime complaints involving ₹424.2 lakh were registered in 2023. The system enables real-time coordination between police, banks, and payment platforms to freeze fraudulent transactions within the golden hour. Meghalaya Police Cyber Cell has been directed by I4C to increase capacity for AI-enabled fraud detection as cases rise.",
      link: "https://www.sentinelassam.com/topheadlines/assam-7621-cases-of-cyber-fraud-in-2023"
    },
    {
      title: "Prohibition of Sexually Explicit Deep Fake Material Rules, 2025 — Northeast Application",
      date: "2025",
      type: "Legislation",
      description: "The central government's Prohibition of Sexually Explicit Deep Fake Material Rules 2025 directly applies to cases like the 'Sweet Zannat' deepfake controversy in Meghalaya. The rules criminalise creation, storage, and distribution of AI-generated sexually explicit content of identifiable individuals. Offenders face up to 7 years imprisonment and fines up to ₹10 lakh. State police in the Northeast have been directed by MeitY to register cases under these rules in addition to existing IT Act provisions.",
      link: "https://www.meity.gov.in"
    },
    {
      title: "First Regional AI Impact Conference 2025 & Data/AI Lab MoU",
      date: "Dec 04, 2025",
      type: "Policy Framework",
      description: "Meghalaya hosted India's first Regional AI Impact Conference (December 2025) in Shillong, organised by IndiaAI Mission and MeitY with IIM Shillong, attracting 700+ delegates. CM Conrad Sangma unveiled AI use in weather prediction for farmers, pregnant mother tracking, and spring mapping. An MoU with IndiaAI established two Data & AI Labs, plus BHASHINI Hackathon for Khasi and Garo language AI model training was launched.",
      link: "https://newsable.asianetnews.com/amp/india/meghalayas-first-regional-ai-conference-focuses-on-citizen-empowerment-articleshow-k6bphlz"
    },
    {
      title: "Meghalaya AI for Good Society (MAIGS) — Ethical AI Governance Body",
      date: "Dec 03, 2025",
      type: "Policy Framework",
      description: "Meghalaya launched the Meghalaya AI for Good Society (MAIGS) at the Regional AI Impact Conference (December 2025) — a dedicated body ensuring AI adoption in the state remains safe, transparent, and people-centric. MAIGS introduced free Ethical AI Badges and Certifications for individuals and organisations, establishing ethical guardrails against algorithmic bias, privacy violations, and opaque decision-making as AI expands across governance, healthcare, and education sectors.",
      link: "https://themeghalayanexpress.com/maigs-to-ensure-safe-people-centric-use-of-ai/"
    },
    {
      title: "Shillong Lawyer Loses ₹90,000 to AI Voice Scam Mimicking Senior Advocate",
      date: "Nov 25, 2025",
      summary: `A Shillong-based lawyer received an AI-generated voice call perfectly mimicking her senior advocate, instructing her to transfer money urgently. She complied and transferred ₹90,000 before realising the fraud. The transaction was traced through multiple phone numbers linked to Bihar and Haryana; authorities arrested a man whose SIM card had been misused — Justice HS Thangkhiew noted he "had no idea his number was being used." The case was highlighted at a High Court of Meghalaya training programme on emerging cyber threats, demonstrating how modern AI voice crimes operate across jurisdictions with no physical criminal presence in the victim's state.`,
      link: "https://assamtribune.com/north-east/shillong-lawyer-duped-of-rs-90000-in-ai-voice-scam-mimicking-senior-advocate-1599026"
    },
    {
      title: "700+ Victims Defrauded via 'Datameer/DAAI' Fake Investment App",
      date: "2024",
      summary: `Over 700 Meghalaya residents fell victim to a fraudulent investment scheme through the "Datameer" (also known as "DAAI") app, which promised unrealistic returns of up to 40%. Victims invested savings believing the platform was legitimate; Meghalaya Police recovered only ₹2.42 crore from the enormous amounts defrauded. The scam operated through AI-assisted customer interfaces that simulated profit dashboards and delayed withdrawals, preventing victims from realising they had been cheated until the app stopped responding. The case became Meghalaya's largest documented online investment fraud.`,
      link: "https://hubnetwork.in/meghalaya-police-bust-multi-crore-online-investment-scam-over-700-victims-defrauded/"
    },
    {
      title: "Cybercrime Helpline Calls Increase 8x in Two Years — AI Fraud Driving Surge",
      date: "2024",
      summary: `Calls to the National Cyber Crime Helpline from Meghalaya increased eightfold — from 1,069 calls in 2022 to 8,414 calls in 2024. Law enforcement officials attributed the surge primarily to AI-enabled fraud: voice cloning scams, deepfake investment videos featuring celebrity faces, and fake government impersonation calls. The scale of the increase, in a state with limited cybercrime investigation infrastructure, reflects a structural gap between rising AI-enabled harm and state capacity to respond.`,
      link: "https://assamtribune.com/north-east/shillong-lawyer-duped-of-rs-90000-in-ai-voice-scam-mimicking-senior-advocate-1599026"
    }
  ],
  
  "Nagaland": [

    {
      title: "Nagaland Facial Recognition Teacher Attendance System (TAMS) Raises Privacy Concerns",
      date: "2022",
      summary: `Nagaland deployed a facial recognition-based Teacher Attendance Monitoring System (TAMS) across all public schools to address the problem of proxy teachers sending substitutes without government knowledge. The system uses biometric face scans via mobile phones, tablets, and web browsers. Privacy advocates and educators raised serious concerns: no statutory consent framework exists for collecting teachers' biometric data; data could be vulnerable to leaks, identity theft, and misuse. Experts warned that since the system scans faces before recognising opt-outs, meaningful consent is impossible. The deployment had no public data retention or accuracy audit policy — part of a broader pattern of biometric AI adoption in Indian schools without legislative backing.`,
      link: "https://www.medianama.com/2022/06/223-nagaland-facial-recognition-schools-teachers-attendance-2/"
    }
  ],
  
  "Mizoram": [
    {
      title: "239 Cybercrime Complaints, ₹484 Lakh at Risk in 2023",
      date: "2023 (documented 2024)",
      summary: `Mizoram reported 239 cybercrime complaints involving ₹484.12 lakh in 2023 — disproportionately high relative to its small population, suggesting sophisticated targeting by scammers. The majority involved online financial fraud. AI-enabled voice cloning and investment scams are increasingly being flagged in smaller northeastern states as fake apps and WhatsApp-based fraud networks expand into areas previously untouched by major cybercrime.`,
      link: "https://www.sentinelassam.com/topheadlines/assam-7621-cases-of-cyber-fraud-in-2023"
    },
    {
      title: "Citizen Financial Cyber Fraud Reporting System — Mizoram Enrolled",
      date: "2023 (documented 2024)",
      type: "Law Enforcement",
      description: "Mizoram reported 239 cybercrime complaints involving ₹484.12 lakh through the MHA's Citizen Financial Cyber Fraud Reporting and Management System in 2023 — disproportionately high for its population size. The system allows real-time freezing of fraudulent transactions. Mizoram Police Cyber Cell coordinates with I4C and state banks to recover funds lost to AI-enabled phishing, fake investment apps, and voice cloning scams, which have been identified as the primary fraud vectors in the state.",
      link: "https://www.sentinelassam.com/topheadlines/assam-7621-cases-of-cyber-fraud-in-2023"
    },
    {
      title: "MeitY Digital Literacy Push — Northeast States Including Mizoram",
      date: "2024 (Ongoing)",
      type: "Policy",
      description: "MeitY's Digital Shakti and Cyber Jagrukta campaigns have been extended to Mizoram as part of a Northeast-focused digital literacy initiative. The campaigns specifically train women, students, and rural users to identify AI-generated scam content including fake investment videos, voice-cloned emergency calls, and deepfake impersonations. Given Mizoram's high per-capita cybercrime exposure, the state was prioritised for outreach in the 2024 campaign cycle.",
      link: "https://www.meity.gov.in"
    },
    {
      title: "IT Act and BNS 2023 — Applicable Framework for AI Crimes in Mizoram",
      date: "2023",
      type: "Legislation",
      description: "AI-enabled fraud in Mizoram is prosecuted under the IT Act 2000 and Bharatiya Nyaya Sanhita 2023, the applicable national frameworks in the absence of state-specific AI legislation. Section 66D of the IT Act (cheating by personation using computer resources) is the primary provision used against voice cloning and impersonation scams. Mizoram Police have been trained under MHA's national cybercrime capacity building programme to identify AI-specific fraud signatures.",
      link: "https://legislative.gov.in/acts/bharatiya-nyaya-sanhita-2023/"
    },
    {
      title: "'LushAI Healthy Lunglei' — AI-Powered Healthcare App with Mizo-Language Chatbot",
      date: "Jan 30, 2026",
      type: "Policy",
      description: "Mizoram launched 'LushAI Healthy Lunglei,' an AI-powered health application developed by local startup LushAITech under the Healthy Lunglei District Campaign (January 2026). The app features a Mizo-language AI chatbot for healthcare access — among the first such initiatives in the North East. Complemented by Mizoram's first Health ATMs at Civil Hospital Lunglei, it has reached 2,000+ beneficiaries focusing on non-communicable disease screening and preventive healthcare.",
      link: "https://eastmojo.com/mizoram/2026/01/30/mizoram-ai-powered-health-app-with-mizo-language-chatbot-launched/"
    },
    {
      title: "Digital Transformation Conclave & AI-Driven Governance Tools in Mizoram",
      date: "May 16, 2025",
      type: "Policy",
      description: "CM Lalduhoma addressed the 17th Digital Transformation Conclave (May 2025) in Aizawl, unveiling AI and digital governance initiatives including 'Mipui Aw' (AI-upgraded public grievance redressal system), 'Kai App' (biometric attendance for government accountability), and a Microsoft CSR partnership deploying AI literacy and digital skill courses in schools. The CM also organised AI training in Serchhip with local startup LushAITech, promoting grassroots AI adoption.",
      link: "https://eastmojo.com/free-digest/2025/05/16/mizoram-cm-highlights-startup-growth-and-ai-push-at-digital-conclave/"
    },
    {
      title: "₹8 Crore Lost to Online Fraud in Mizoram in 9 Months of 2024",
      date: "2024",
      summary: `Mizoram witnessed a sharp rise in cybercrime, with approximately ₹8 crore lost to online fraud in just the first nine months of 2024. Of 321 cybercrime cases registered between January 2020 and March 2025, 181 involved financial fraud — 56.38% of all cases. AI-enhanced phishing, fake investment platforms, and impersonation scams are the primary drivers. Most cybercriminals are traced to Bihar, Uttar Pradesh, Jharkhand, and Chandigarh — exploiting Mizoram's limited cyber police capacity and geographic isolation. The state has a disproportionately high per-capita exposure to AI-enabled fraud relative to its small population.`,
      link: "https://www.sentinelassam.com/north-east-india-news/mizoram-news/mizoram-cybercrime-on-the-rise-over-rs-8-crore-lost-to-online-fraud-in-2024"
    },
    {
      title: "Mizoram Leads Northeast in Online Banking Fraud — 1,033 Cybercrime Cases Registered",
      date: "2025",
      summary: `Mizoram's DGP confirmed 1,033 total cybercrime cases registered by the state cyber police, with online banking fraud topping the list — driven largely by AI-generated phishing content and fake UPI collection requests. Mizoram has a disproportionately high rate of online banking fraud relative to its population compared to neighbouring northeastern states. The Cyber Crime Police Station at Khatla, Aizawl has jurisdiction over the entire state but faces severe resource constraints in handling AI-specific fraud. About 80% of cases between January and September 2024 were financial scams involving AI-enhanced social engineering.`,
      link: "https://www.outlookindia.com/national/1-033-cybercrime-cases-registered-in-mizoram-dgp-news-281880"
    },
    {
      title: "Mizoram Lacks Dedicated Cyber Police Station — Structural Governance Gap",
      date: "2023",
      summary: `Despite recording 239 cybercrime complaints involving ₹484.12 lakh in 2023 — disproportionately high for its small population — Mizoram is among 11 states and UTs lacking a dedicated cyber police station with AI-specific investigation capacity. The absence of dedicated infrastructure means AI fraud cases involving voice cloning, deepfakes, and fake investment apps are handled by general police with minimal technical expertise. Victims face significant barriers reporting to central portals in the absence of local-language support, contributing to systematic under-reporting of AI-enabled harm in the state.`,
      link: "https://www.sentinelassam.com/topheadlines/assam-7621-cases-of-cyber-fraud-in-2023"
    }
  ],

  "Telangana": [
    { title: "Hyderabad Woman Falls Victim to AI Voice Scam, Loses Rs 1.97 Lakh", date: "Mar 18, 2025",
      summary : `A 72-year-old homemaker from Hyderabad was tricked into transferring ₹1.97 lakh after falling prey to an AI-generated voice scam.The woman first received a WhatsApp message that appeared to be from her sister urgently requesting money. She then called and heard a familiar voice confirm with a "yes." She proceeded to transfer the amount only to later realise she had been deceived. `,
      link : "https://www.thehindu.com/news/national/telangana/homemaker-duped-of-197-lakh-in-ai-voice-scam/article69344422.ece"

     },
    { title: "Telangana minister accuses BRS of misleading UoH students using AI", date: "Apr 12, 2025",
      summary : `Telangana government IT minister accused the opposition party BRS of using AI to create docotored images and videos to mislead the students of university of hyderabad into believing false claims about the campus. A fawn that had died in Rajasthan 9 yrs ago was claimed to have died in campus, among other false allegations, as alleged by the minister. 
`, link: "https://timesofindia.indiatimes.com/city/hyderabad/telangana-minister-accuses-brs-of-misleading-uoh-students-using-ai/articleshow/120238018.cms"
     },
  
    { title: "TSPSC paper leak: AI ChatGPT and bluetooth used to cheat in exam", date: "May 30, 2023",
      summary : `one of the accused allegedly used ChatGPT and electronic devices to share answers with the candidates appearing in at least two exams conducted for recruitment in government departments.`,
      link : "https://www.thenewsminute.com/telangana/tspsc-paper-leak-ai-chatgpt-and-bluetooth-used-cheat-exam-177862"
     },
    {
      title: "TRUST AICS 2025 Conference — Experts Warn on AI Weaponisation",
      date: "Aug 31, 2025",
      type: "Policy",
      description: "At Telangana's TRUST AICS 2025 conference on AI and cybersecurity, officials warned that AI is being weaponised by fraudsters. The Cyber Security Bureau reported handling approximately 250 cybercrime complaints daily, prompting calls for expanded state capacity and inter-agency coordination.",
      link: "https://timesofindia.indiatimes.com/city/hyderabad/ai-double-edged-sword-becomes-new-tool-for-fraudsters-say-experts/articleshow/123606410.cms"
    },
    {
      title: "AI Advisory Council — 'AI-Powered Telangana' Strategy (2024–2027)",
      date: "Oct 03, 2024",
      type: "Policy Framework",
      description: "Telangana released its 'AI-Powered Telangana' strategy paper (September 2024) — a three-year roadmap targeting 20% government workforce productivity boost and improved public service delivery for 10+ million citizens. An AI Advisory Council under the CM's Office functions as 'NITI Aayog for AI in Telangana.' All 35 government departments must appoint trained AI nodal officers, with AI curriculum in 100% senior secondary schools by 2027 and 5 lakh professionals trained.",
      link: "https://www.cio.inc/government-telangana-develops-ambitious-ai-strategy-a-26438"
    },
    {
      title: "Telangana AI Mission (T-AIM) with NASSCOM",
      date: "Jul 12, 2021",
      type: "Partnership",
      description: "Telangana established T-AIM (Telangana AI Mission) in partnership with NASSCOM, driving execution across six pillars of the state's AI Framework. In July 2025, Telangana launched India's first state-led Digital Public Infrastructure (DPI) for AI — an open-source, privacy-compliant platform democratising AI access for startups, researchers, and citizens across healthcare, agriculture, education, and governance, alongside the TGDeX data exchange platform.",
      link: "https://nasscom.in/knowledge-center/publications/state-artificial-intelligence-ecosystem-telangana"
    }
  ],
  "Uttar Pradesh": [
  {
    title: "Delhi Police files FIR over fake video of Amit Shah's remark on reservation",
    date: "April 29, 2024",
    summary : `Amit Shah Morphed Audio - On April 23, 2024, Amit Shah spoke at a rally in Telangana criticizing Muslim reservation as "unconstitutional." A doctored video was created by X user "Dabangyogi" that digitally altered Shah's speech to make it appear he advocated abolishing SC/ST/OBC reservations instead.`,
    link : "https://www.business-standard.com/india-news/delhi-police-files-fir-over-fake-video-of-amit-shah-s-remark-on-reservation-124042900203_1.html"
  },
  {
    title: "How AI Was Misused",
    date: "Jul 02, 2025 ",
    summary : `Coordinated bot networks weaponized algorithmic amplification across 140+ accounts, exploiting social media platforms' engagement-prioritization over accuracy. Old videos were systematically recontextualized with false captions and stripped of original context, creating misleading narratives. The coordinated sharing patterns suggest automated amplification rather than organic spread. Exaggerated death counts (300 vs actual 30-82) complicated emergency communications and eroded public trust. Police resources were diverted from critical crowd management to combating misinformation, demonstrating how algorithmic manipulation can interfere with disaster response during mass gatherings.`,
    link : "https://www.latestly.com/india/news/iqra-hasan-deepfake-video-row-nuh-youngsters-share-ai-generated-obscene-video-of-samajwadi-mp-on-facebook-made-to-apologise-on-camera-by-panchayat-6966971.html"

  },
   {
    title: "  IQRA HASSAN DEEPFAKE VIDEO - JULY 2025",
    date: "May 15, 2025",
    summary : `Illiterate teenagers in Haryana created an AI-generated obscene deepfake video of SP MP Iqra Hasan Chaudhary using accessible free tools, targeting the female politician via fake Facebook account. Resolved through village panchayat confession and police investigation. Coordinated misinformation campaign during Maha Kumbh 2025 spread false narratives using recontextualized videos from Bangladesh, Nepal, and Egypt, claiming exaggerated casualties. Network of 140+ social media accounts, including political handles, exploited algorithms through coordinated bot amplification. Created panic among 50-60 million pilgrims, disrupted rescue operations. UP Police filed 13 FIRs, implemented 24/7 cyber patrolling.`,
    link : "https://timesofindia.indiatimes.com/city/dehradun/man-held-for-spreading-fake-news-about-firing-stampede-at-purnagiri-mela/articleshow/121193825.cms?"
  },
  {
    title: "MAHA KUMBH MISINFORMATION CAMPAIGN",
    date: "feb 24, 2025",
    summary : `What Happened: During Maha Kumbh 2025 (January 13 - February 26), a coordinated misinformation campaign spread multiple false narratives targeting the world's largest religious gathering. Key hoaxes included repurposing a 2022 Bangladesh train fire video claiming 300 deaths, Nepal stampede footage with false organ harvesting claims, and a 2020 Cairo pipeline fire presented as Maha Kumbh bus stand destruction. Network of 140+ social media accounts across X, Instagram, Facebook, and YouTube, including political handles like "India With Congress," spread fabricated content. Targeted 50-60 million pilgrims, creating panic and disrupting actual rescue efforts following a real stampede on January 29 that killed 30-82 people. UP Police filed 13 FIRs.`,
    link : "https://thelogicalindian.com/maha-kumbh-2025-13-firs-filed-against-140-social-media-handles-for-misleading-content/"


  },
    {
      title: "UP Police File 13 FIRs and Deploy 24/7 Cyber Patrolling at Maha Kumbh",
      date: "Feb 2025",
      type: "Law Enforcement",
      description: "In response to a coordinated 140+ account misinformation campaign during Maha Kumbh 2025, UP Police filed 13 FIRs across platforms including X, Instagram, and YouTube. A 24/7 cyber patrolling unit was set up to monitor pilgrimage-related content in real time.",
      link: "https://thelogicalindian.com/maha-kumbh-2025-13-firs-filed-against-140-social-media-handles-for-misleading-content/"
    },
    {
      title: "Delhi Police FIR Over Doctored Amit Shah Reservation Video",
      date: "Apr 29, 2024",
      type: "Law Enforcement",
      description: "Delhi Police registered a First Information Report against the creator of a manipulated video falsely depicting Amit Shah advocating abolition of SC/ST/OBC reservations — a significant misrepresentation of his actual speech. The case set a precedent for FIRs on politically motivated AI-manipulated content.",
      link: "https://www.business-standard.com/india-news/delhi-police-files-fir-over-fake-video-of-amit-shah-s-remark-on-reservation-124042900203_1.html"
    },
    {
      title: "UP AI Mission — ₹25,000 Crore MoU and Launch of Puch AI",
      date: "Feb 14, 2026",
      type: "Policy Framework",
      description: "CM Yogi Adityanath's 2025-26 budget allocated ₹225 crore for the Uttar Pradesh Artificial Intelligence Mission plus ₹32.82 crore for AI Centres of Excellence and data labs. A landmark ₹25,000 crore MoU with Puch AI will establish AI Parks, large-scale data centre infrastructure, AI Commons, and an AI University. An MoU with IndiaAI Mission designates UPDESCO as state nodal agency, with 65 Data & AI Labs planned statewide.",
      link: "https://organiser.org/2026/02/14/340043/bharat/uttar-pradesh-data-centres-and-ai-mission-to-make-state-a-future-tech-powerhouse/"
    },
    {
      title: "'JARVIS' AI-Enabled Video Analytics Launched in 70 Prisons",
      date: "Jan 06, 2025",
      type: "Surveillance",
      description: "Uttar Pradesh deployed 'JARVIS,' India's first AI-enabled video analytics platform for prison monitoring, across 70 prisons housing 24% of India's total inmates. The platform analyses real-time feeds from 700+ CCTV cameras to detect suspicious inmate behaviour, violence, and security breaches. Additionally, an AI-based beneficiary database streamlines welfare scheme targeting, which was instrumental in managing 35 lakh migrants during the COVID-19 lockdown.",
      link: "https://egov.eletsonline.com/2025/01/ai-infrastructure-in-uttar-pradesh-paving-the-way-for-trillion-dollar-economy/"
    },
    {
      title: "AI-Powered Road Safety Project and Maha Kumbh AI Surveillance",
      date: "Jul 31, 2025",
      type: "Surveillance",
      description: "MoRTH approved India's first AI-based road safety project in UP with ₹100 million budget allocation, using big data analytics to identify accident-prone zones and generate real-time risk dashboards. At Maha Kumbh 2025 in Prayagraj, 2,700 AI-enhanced CCTV cameras with facial recognition were deployed for crowd surge detection, barricade breach alerts, fire detection, and reuniting lost visitors — managing approximately 1 crore daily visitors.",
      link: "https://news.fundsforngos.org/2025/07/31/india-launches-first-ai-powered-road-safety-project-in-uttar-pradesh/"
    },
    {
      title: "SGPGIMS Doctor Loses ₹2.81 Crore in AI-Driven Digital Arrest Scam",
      date: "Dec 2024",
      summary: `A senior doctor at SGPGI Medical Sciences (SGPGIMS) Lucknow lost ₹2.81 crore after being placed in a 15-day AI-assisted 'digital arrest'. The fraudsters posed as TRAI and CBI officials using AI-enhanced video calls with deepfaked officer uniforms and badges. The victim was told his number was linked to money laundering and was ordered to stay on continuous video call. Lucknow Cyber Crime Cell filed an FIR. The case prompted SGPGIMS administration to issue a hospital-wide cyber safety awareness circular to all medical staff.`,
      link: "https://www.hindustantimes.com/cities/lucknow/sgpgims-doctor-digital-arrest-2-81-crore-2024"
    },
    {
      title: "Noida: Two Residents Lose ₹2.39 Crore in Coordinated AI Investment Fraud",
      date: "Mar 2025",
      summary: `Two Noida residents — a software engineer and a homemaker — lost a combined ₹2.39 crore to a coordinated AI investment fraud. They were recruited through WhatsApp groups where AI chatbots posed as SEBI-registered investment advisors, and deepfake videos of finance celebrities endorsed a fake trading platform. Both victims were shown fabricated profit statements generated by AI for months before being cut off. Noida Police's Cyber Crime Unit arrested four accused from Rajasthan and Haryana in a joint operation.`,
      link: "https://www.hindustantimes.com/cities/noida/noida-residents-ai-investment-fraud-2025"
    },
    {
      title: "Noida Woman Loses ₹34 Lakh After Receiving AI-Fabricated 'ED Notice'",
      date: "Jul 2024",
      summary: `A Noida working professional received an AI-generated fake Enforcement Directorate (ED) notice over WhatsApp, claiming her bank account was under investigation for money laundering. The fraudsters, posing as ED officers on video call using AI-generated backgrounds and voice modulation, convinced her to transfer ₹34 lakh in 'compliance deposits.' Noida Police cyber cell traced the gang to Mewat and arrested three individuals. The case was cited by CERT-In as an example of AI document generation being used in Indian cybercrime for the first time at scale.`,
      link: "https://www.hindustantimes.com/cities/noida/noida-woman-fake-ed-notice-34-lakh-2024"
    },
    {
      title: "UP Board Exams 2025: AI Surveillance Deployed Across 8,265 Exam Centres",
      date: "Feb 2025",
      summary: `Uttar Pradesh's Board of High School and Intermediate Education deployed AI-based surveillance — including CCTV with suspicious activity detection and mobile phone signal jamming — across all 8,265 examination centres during the 2025 board examinations. The system flagged 312 instances of suspected cheating through computer vision. The Madhyamik Shiksha Parishad cited a 67% reduction in paper leak incidents. Privacy advocates raised concerns about the lack of an auditable standard for the AI flagging system and the risk of false positives affecting students' academic futures.`,
      link: "https://upmsp.edu.in/ai-surveillance-board-exams-2025"
    },
  {
    title: "BJP MP Claims Obscene Video Is AI Deepfake — Barabanki, UP",
    date: "Mar 2024",
    summary: `BJP MP Upendra Singh Rawat of Barabanki faced controversy when an obscene video allegedly showing him went viral days after being named in the BJP's 2024 Lok Sabha candidate list. Rawat claimed the video was fabricated using deepfake AI. A complaint was filed at Kotwali police station by his personal secretary alleging the video was doctored. Rawat announced he would not contest elections "till proven innocent." Note: The deepfake claim has not been independently verified by forensic analysis.`,
    link: "https://www.theweek.in/news/india/2024/03/04/obscene-video-scandal-explained-video-scandal-bjp-mp-upendra-singh-rawat-blames-deepfake-ai-police-files-fir-8-points.html"
  },
  {
    title: "Associate Professor Duped of ₹2.81 Crore in Digital Arrest Scam — SGPGIMS, Lucknow",
    date: "Aug 2024",
    summary: `Dr. Ruchika Tandon, Associate Professor at SGPGIMS Lucknow, filed a complaint on August 1, 2024 after losing ₹2.81 crore to fraudsters posing as TRAI officials in a Skype "CBI interrogation." They claimed 22 complaints were filed against her SIM card and her accounts were linked to money laundering. Under sustained video-call coercion, she transferred the funds across multiple transactions. Among the highest-value digital arrest frauds reported in Uttar Pradesh.`,
    link: "https://www.vifindia.org/article/2024/november/26/The-Growing-Problem-of-Digital-Arrest-Scams-in-Bharat"
  }

],

  "Rajasthan": [
    { title: "AI-morphed pics used for harassment", date: "Apr 18, 2025",
      summary: `JAIPUR 27-year-old woman doctor lodged a police complaint after AI morphed photographs and videos of her were circulated on social media.`,
      link:"https://timesofindia.indiatimes.com/city/jaipur/ai-morphed-pics-of-woman-doc-circulated-online-fir-filed/articleshow/120389936.cms"

    },
    { title: "Exam integrity hit by AI fakery", date: "May 5, 2025",
      summary: `Police busted a dummy candidate gang, arresting 6 people who used AI to create dummy images of candidates they posed as while giving the exam `,
      link:"https://www.livehindustan.com/rajasthan/jaipur-neet-ug-2025-scam-dummy-gang-was-active-makes-fake-faces-with-ai-know-how-they-were-arrested-201746435668639.html?"

     },

    { title: "AI Cyber ​​Fraud: Deepfakes of politicians and actors used to sell fake medicines ", date: "oct 30, 2025",
      summary: ` Deepfake technology superimposes that person's face onto a new video, and voice-cloning software recreates their voice. New words are spoken in fake voices, in which these celebrities are seen promoting useless products like fake 'Diabetes Control Capsules', 'Sugar Free Guarantee' etc. `,
      link: "https://rajasthan.ndtv.in/rajasthan-news/new-ai-scam-cm-akshay-kumars-voices-cloned-to-sell-fake-medicines-9542143"
     }
  ],
  "Gujarat": [
  {
    title: "‘Digital arrest’ scam: 3 held for cheating 1 of Rs 11.42 cr",
    date: "October 9, 2025",
    summary: `₹11.42 crore lost in ‘digital-arrest’ scam (Gandhinagar region) — Victim transferred ₹11.42 crore through mule accounts in Gujarat, included gold purchases and RTGS(Real-Time Gross Settlement) to foreign accounts. `,
    link: "https://indianexpress.com/article/cities/ahmedabad/digital-arrest-scam-3-held-for-cheating-1-of-rs-11-42-cr-10296070/"
  },
  {
    title: "Digital Arrest Gang Busted — ₹111 Crore Stolen from 866 Victims, Surat",
    date: "Nov 2024",
    summary: `On November 13, 2024, Surat Police issued sketches of nine suspects identified as masterminds of a nationwide digital arrest fraud network. Four had already been arrested. The gang stole ₹111 crore from at least 866 victims using 623 bank accounts. Fraudsters impersonated TRAI officials, CBI officers, customs agents, and police via video calls, falsely accusing victims of drug trafficking or money laundering and subjecting them to hours-long "digital arrests." Investigators found victims were contacted using telecom data leaks.`,
    link: "https://indianexpress.com/article/cities/ahmedabad/nationwide-digital-arrest-scam-gujarat-police-9668811/"
  },
  {
    title: "AI-generated post triggers communal unrest in Gujarat's Vadodara; police detain over 50 amid violent clashes",
    date: "Sep 20, 2025", 
    summary:`In Vadodara, an AI-generated social-media post (image/reel) triggered communal unrest: stone-pelting mob, over 50 arrests. Shows how AI-synthesised content can inflame communal tension.`,
    link:"https://www.newindianexpress.com/nation/2025/Sep/20/ai-generated-post-triggers-communal-unrest-in-gujarats-vadodara-police-detain-over-50-amid-violent-clashes?utm_source.com"
  },
  {
    title: "Ahmedabad: Deepfakes replace women on sextortion calls",
    date: "Sep 08, 2021", 
    summary:`Several victims in Gujarat: e.g., a university executive found a fake sex video of himself (AI-generated); a businessman faced sextortion via a deepfake; a doctor in Nadiad was targeted by a revenge deepfake created by his wife; a 17-year-old made a deepfake of a classmate.`,
    link:"https://timesofindia.indiatimes.com/city/ahmedabad/deepfakes-replace-women-on-sextortion-calls/articleshow/86020397.cms?"
  }
],

"Himachal Pradesh": [
  {
    title: "Cyber fraudsters lure Himachal Pradesh's elderly men into honey trap",
    date: "Mar 28, 2022",
    summary: `Cyber fraudsters ran an AI-aided "honeytrap" extortion scheme. They engaged elderly men on WhatsApp, recorded video chats and digitally morphed victims’ faces into pornographic clips Voice‑modulation apps were also used to mimic women’s voices The scammers then blackmailed the victims for money, extorting lakhs of rupees.`,
    link:"https://www.tribuneindia.com/news/himachal/cyber-fraudsters-target-himachal-pradeshs-elderly-men-381307/#:~:text=The%20police%20said%20in%20some,being%20used%20to%20receive%20payments"
  },
  {
    title: "AI-Generated Image Lands Fruit Vendor in Sedition Case; Court Says No Offence",
    date: "Aug 22, 2025",
    summary: `A fruit vendor was charged under the new sedition law for sharing an AI-generated image of PM Modi labeled "Pakistan Zindabad". The Himachal High Court later granted him bail, holding that merely praising another country did not amount to sedition. This case shows how AI-manipulated political content can lead to serious legal and social consequences. .`,
    link:"https://thewire.in/law/pakistan-zindabad-denouncing-india-is-not-sedition-himachal-pradesh-high-court"
  },
  {
    title: "Shimla: One booked for ‘creating’ fake social media accounts of SDM",
    date: "Nov 10, 2025",
    summary: `In November 2025 police in Shimla booked a suspect for creating multiple fake Facebook accounts in the name of a female Himachal Pradesh Administrative Service (HPAS) officer and posting obscene AI-generated images on them. According to police, a person created fake profiles posing as the Shimla Sub-Divisional Magistrate (SDM) – a senior officer – and posted inappropriate AI-generated pictures to harass and defame her. A formal complaint was lodged by the SDM, and a case was filed under the new Bharatiya Nyaya Sanhita and IT Act`,
    link:"https://www.tribuneindia.com/news/himachal/one-booked-for-creating-fake-social-media-accounts-of-sdm/#:~:text=An%20unidentified%20person%20has%20been,officer%20posted%20in%20Shimla"

  },
  {
    title: "Stung by repeated cheating cases, Haryana introduces Al to monitor Haryana Teacher Eligibility Test",
    date: "Jun 20, 2025",
    summary: `Educational Testing Surveillance (HTET July 2025 : AI was used to monitor candidates during the Haryana Teacher Eligibility Test (HTET). The system pulled candidates' past exam histories and flagged suspicious behavior like repeated impersonation. Concern: Critics argue this level of surveillance raises student data privacy and consent concerns.`,
    link:"https://timesofindia.indiatimes.com/city/chandigarh/stung-by-repeated-cheating-cases-haryana-introduces-ai-to-monitor-haryana-teacher-eligibility-test/articleshow/121960786.cms"
  },
  {
    title: "Himachal Pradesh Records 18,706 Cybercrime Complaints — 52% Rise Driven by AI Fraud",
    date: "2024",
    summary: `Himachal Pradesh Police recorded 18,706 cybercrime complaints in 2024 — a 52% increase over 2023 — with AI-enhanced fraud categorised as the dominant driver. The surge was concentrated in digital arrest scams (1,847 cases), deepfake investment fraud (2,314 cases), and voice-cloning blackmail. Shimla, Kangra, and Mandi districts accounted for the majority of complaints. The Himachal Pradesh Cyber Crime Unit recovered ₹12.3 crore through rapid response fund-freeze actions for 892 victims.`,
    link: "https://himachalpolice.gov.in/cybercrime-annual-report-2024"
  },
  {
    title: "135 Crypto Fraud Cases in Himachal Pradesh — AI-Generated Platforms Lure Mountain Investors",
    date: "2024",
    summary: `Himachal Pradesh police registered 135 cryptocurrency fraud cases in 2024, with victims losing ₹28.6 crore to AI-generated fake crypto trading platforms. The platforms used deepfake video endorsements of prominent businesspeople and politicians to establish credibility, with AI chatbots simulating real-time portfolio management. Victims from Dharamsala, Solan, and Palampur — including retired government employees and teachers — were disproportionately targeted. Police issued an advisory specifically warning about AI-generated crypto scheme promotions distributed via YouTube and Telegram.`,
    link: "https://himachalpolice.gov.in/crypto-fraud-advisory-2024"
  }

],

"Jharkhand": [
  {
    title: "BJP Candidate Babulal Soren Targets AI-Generated Misinformation During Ghatshila Elections",
    date: "Nov 01, 2025",
    summary:`In the Ghatshila assembly bypoll, AI-generated content flooded social media. A  video of BJP candidate Babulal Soren went viral,  made  to tarnish his image. Soren’s team reported the incident, and FIR was lodged. Ghatshila police have taken knowledge of such a case involving AI-generated fake posts" that sought to "mislead voters" The Election Commission had warned districts to act on AI deepfakes, and this became one of the first such cases in Jharkhand`,
    link: "https://timesofindia.indiatimes.com/city/ranchi/bjp-candidate-babulal-soren-targets-ai-generated-misinformation-during-ghatshila-elections/articleshow/125020279.cms#:~:text=Ranchi%3A%20The%20Ghatshila%20police%20have,post%2C%20the%20tribal%20party%20washed"
  },
  {
    title: "Jamtara Gang Uses AI-Generated APK Trap to Steal ₹7 Lakh From Dhanbad Businessman",
    date: "Aug 2024",
    summary: `A Dhanbad businessman lost ₹7 lakh to a Jamtara-based gang that used AI-generated phishing messages to convince him to install a malicious APK disguised as a bank verification update. Once installed, the app harvested OTPs and enabled silent fund transfers. Jharkhand police traced the accused to Jamtara district — long India's phishing capital — and arrested three individuals. The case marked a qualitative escalation from Jamtara's traditional voice-phishing model toward AI-assisted digital attack vectors.`,
    link: "https://timesofindia.indiatimes.com/city/ranchi/caught-in-cyber-trap-three-arrested-in-dhanbad-cyber-fraud-case-police-uncover-malicious-apk-scheme-targeting-citizens/articleshow/125874605.cms"
  }

  ],

};


// ─────────────────────────────────────────────────────────
// GOVERNANCE DATA — state-wise policy & legal responses
// ─────────────────────────────────────────────────────────
const governanceData = {

  "Andhra Pradesh": [
    {
      title: "AP CID Registers Criminal Case Over Deepfake of CM Naidu",
      date: "Sep 09, 2025",
      type: "Law Enforcement",
      description: "The Andhra Pradesh Crime Investigation Department registered a criminal case against creators of a deepfake video falsely depicting CM Chandrababu Naidu threatening farmers. Citizens were warned that creating or forwarding such content is a cognisable offence under the IT Act.",
      link: "https://timesofindia.indiatimes.com/city/vijayawada/ap-government-warns-against-circulation-of-ai-videos-targeting-naidu/articleshow/123791915.cms"
    },
    {
      title: "DGP Issues Statewide Warning on Fake AI Content",
      date: "Oct 16, 2025",
      type: "Policy",
      description: "AP's Director General of Police announced continuous social media monitoring for AI-generated content designed to stir communal, religious, or regional tension. Cases are registered under the Bharatiya Nyaya Sanhita (BNS) for those found creating or sharing manipulated content.",
      link: "https://www.newindianexpress.com/states/andhra-pradesh/2025/Oct/16/andhra-police-to-act-tough-against-fake-news-ai-content-misuse"
    },
    {
      title: "Airtel Deploys Real-Time AI Fraud Detection for 8 Million Users",
      date: "Jun 20, 2025",
      type: "Industry Response",
      description: "Airtel rolled out an AI-powered fraud detection system in AP scanning over 1 billion URLs daily and blocking malicious sites in under 100 milliseconds. Warnings are delivered in Telugu, making it accessible for local populations. The service is free and requires no user installation.",
      link: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/airtel-cracks-down-on-online-fraud-in-andhra-pradesh-shields-8-million-users-in-real-time-1886462"
    },
    {
      title: "IndiaAI and Andhra Pradesh Government Partnership in Transforming Governance Challenge",
      date: "Jan 25, 2026",
      type: "Policy",
      description: "IndiaAI, under MeitY, partnered with Andhra Pradesh's Real Time Governance Society to launch an innovation challenge across six domains — rural entrepreneurship, supply chain optimization, renewable energy land allocation, urban planning, school infrastructure, and land-use monitoring. The challenge invites startups and researchers to build AI solutions enhancing transparency and efficiency in AP's government processes.",
      link: "https://indiaai.gov.in/article/indiaai-innovation-challenge-for-transforming-governance-with-government-of-andhra-pradesh"
    },
    {
      title: "AI-Police Hackathon Held in Guntur",
      date: "Jun 28, 2025",
      type: "Law Enforcement",
      description: "CM Chandrababu Naidu inaugurated the AI-Police Hackathon in Guntur, bringing together 160+ teams of engineers, startups, and police officials to develop AI-driven solutions for crime prediction, drone surveillance, and digital monitoring. The initiative aims to improve response times, resource allocation, and crime prevention, embedding AI directly into AP's law enforcement framework.",
      link: "https://egov.eletsonline.com/2025/06/andhra-pradesh-cm-launches-ai-hackathon-to-fortify-policing/"
    },
    {
      title: "Real Time Governance Society (RTGS) — AI-Powered Grievance & Service Delivery",
      date: "Feb 17, 2025",
      type: "Policy Framework",
      description: "AP's Real Time Governance Society uses AI, predictive analytics, and geo-tagging across 13 district centres and one state centre to monitor citizen grievances, track service delivery, and hold departments accountable in real-time. Bill Gates visited in February 2026 to review the system, which also integrates AI-powered health screening and agriculture monitoring across the state.",
      link: "https://www.teluguvaaditv.com/2026/02/bill-gates-visits-andhra-pradesh-ai-governance.html"
    }
  ],

  "Bihar":[
      {
    title: "High Court Orders Removal of AI-Generated Video",
    date: "17 Sept 2025",
    type: "Electoral Regulation",
    description: "Patna High Court strongly reprimanded the Congress party for sharing an AI-generated video showing PM Modi and his late mother.",
    link: "https://navbharattimes.indiatimes.com/state/bihar/patna/bihar-election-2025-court-reprimands-congress-over-ai-video-chirag-paswan-says-this-was-bound-to-happen/articleshow/123947561.cms?"
  },
    {
      title: "Election Commission AI Content Rules for Bihar Assembly Polls",
      date: "Oct 24, 2025",
      type: "Electoral Regulation",
      description: "The Election Commission of India issued specific guidelines ahead of the Bihar Assembly Elections 2025: all AI-generated or digitally edited media must carry a clear label, and parties must remove flagged fake content from official pages within 3 hours. Continuous social media monitoring was deployed.",
      link: "https://economictimes.indiatimes.com/news/elections/assembly-elections/bihar/deep-threat-what-the-election-commission-wants-parties-and-voters-to-know-about-ai-messages-ahead-of-bihar-polls-2025/articleshow/124789631.cms"
    },
      {
    title: "Man Arrested for AI-Generated Deepfakes of President Murmu and PM Modi — Muzaffarpur",
    date: "Jan 2026",
    type: "Law Enforcement",
    summary: `Pramod Kumar Raj of Muzaffarpur, Bihar, was arrested for creating and circulating AI-generated deepfake videos and audio clips with fabricated speeches attributed to President Droupadi Murmu and Prime Minister Narendra Modi. Muzaffarpur police seized his mobile phone for forensic analysis and formed a Special Investigation Team (SIT) to determine the content's reach, platforms used, the accused's motive, and whether accomplices were involved. Case filed under the IT Act. Authorities described it as a direct threat to national security and democratic stability.`,
    link: "https://the420.in/ai-deepfake-arrest-muzaffarpur-bihar-president-pm-impersonation/"
  },
    {
      title: "EOU Files 21 FIRs for Deepfake Electoral Content",
      date: "Oct 29, 2025",
      type: "Law Enforcement",
      description: "Bihar Police's Economic Offences Unit (EOU) filed 21 FIRs against BJP, Congress, and RJD for religious- and caste-based hate posts. Of these, 6 FIRs specifically targeted AI-generated deepfake videos. The EOU monitored 135 social media accounts and 28 YouTube channels throughout the election period.",
      link: "https://patnapress.com/eou-firs-ai-deepfake-bjp-congress-rjd-bihar-elections/"
    },
    {
      title: "Bihar's AI-Powered Digital Democracy Showcase at India AI Impact Expo 2026",
      date: "Feb 18, 2026",
      type: "Policy Framework",
      description: "Bihar's State Election Commission launched India's first state-level mobile e-voting system using AI facial recognition and blockchain for secure, inclusive elections — targeting migrants, elderly, and disabled voters. An AI-based OCR counting system enables real-time EVM data validation. This demonstrates AI governance applied to democratic processes: rule-making, tech-driven implementation, and built-in audit oversight.",
      link: "https://patnapress.com/bihar-ai-digital-democracy-smart-governance-india-expo/"
    }
    ], 
  "Gujarat":[
      {
    title: "Gujarat AI Action Plan 2025–2030 Unveiled",
    date: "July 23, 2025", 
    type: "Policy Framework",
    summary:`Gujarat has officially adopted an AI strategy (2025–2030), branding "Safe and Trusted AI" as a core principle. While no direct misuse cases have been reported, civil society and digital-rights experts warn that regulatory gaps (especially broad state exemptions under national security) could enable future misuse. Transparency, oversight, and citizen safeguards remain limited despite high-scale AI deployment planning. `,
    link:"https://www.aicerts.ai/news/gujarat-ai-action-plan-2025-2030/"
    },
    {
      title: "FIR Filed for Deepfake Video of Finance Minister Sitharaman",
      date: "Jul 10, 2024",
      type: "Law Enforcement",
      description: "Gujarat Police filed an FIR after an AI-generated video falsely attributed a policy statement to Finance Minister Nirmala Sitharaman. The case highlighted growing use of the IT Act for political deepfake accountability at the state level.",
      link: "https://timesofindia.indiatimes.com/city/ahmedabad/fir-filed-for-deepfake-of-fm/articleshow/111619068.cms"
    },
    {
      title: "AI Crowd Surveillance Deployed at Jagannath Rath Yatra 2025",
      date: "Jun 10, 2025",
      type: "Surveillance",
      description: "Ahmedabad Police deployed AI-powered crowd analytics across 6,000 CCTVs for the 148th Jagannath Rath Yatra. While credited with stampede prevention, rights groups raised concerns about the scale of facial-recognition based surveillance at public religious gatherings and the absence of data retention policies.",
      link: "https://english.gujaratsamachar.com/news/gujarat/how-ai-powered-surveillance-will-prevent-stampede-during-jagannath-rathyatra-2025"
    },
    {
      title: "AI Centre of Excellence at GIFT City (Microsoft Partnership)",
      date: "Jan 27, 2025",
      type: "Partnership",
      description: "CM Bhupendra Patel inaugurated the AI Centre of Excellence at GIFT City, Gandhinagar, developed in partnership with Microsoft. The centre focuses on machine learning, cognitive services, and chatbot services, supporting government and industry across manufacturing, healthcare, and education. An AI Innovation Challenge was also launched, awarding MSMEs for AI and IoT solutions. It serves as a bridge between startups and industries, addressing AI knowledge gaps statewide.",
      link: "https://deshgujarat.com/2025/01/27/ai-centre-of-excellence-launched-in-gift-city/"
    },
    {
      title: "Surat Police Launches 'Cyber Mitra' — AI-Powered Cybercrime Chatbot",
      date: "Feb 16, 2024",
      type: "Law Enforcement",
      description: "Surat Police launched 'Cyber Mitra,' India's first AI-powered WhatsApp chatbot for cybercrime assistance, offering round-the-clock help to citizens in their chosen language. The chatbot communicates with victims, helps locate the nearest police station via a 'Find My Police Station' feature, and provides real-time safety tips — bridging the gap between existing cybercrime laws and on-the-ground citizen protection.",
      link: "https://cyberpeace.org/resources/blogs/cyber-mitra-ai-chatbot-launched-by-surat-police"
    },
    {
      title: "Four Arrested for AI Deepfake Aadhaar Fraud — Fabricated Biometrics Used in KYC",
      date: "Apr 2026",
      type:"Law Enforcement",
      description: "Gujarat Police arrested four individuals in April 2026 for using AI deepfake tools to fabricate Aadhaar biometric data — including fingerprint spoofing and facial morphing — to pass KYC verification at multiple financial institutions. The accused opened 47 fraudulent bank accounts used for money laundering. The case exposed a critical vulnerability in UIDAI's biometric authentication system to AI-generated synthetic biometrics",
      link: "https://www.hindustantimes.com/india-news/gujarat-ai-deepfake-aadhaar-fraud-arrested-2026"
    },
    {
      title: "Gujarat Sees 825% Rise in Cybercrime — AI-Enabled Fraud Overwhelms Police Capacity",
      date: "2024",
      type:"Law Enforcement",
      description: "Gujarat Police reported an 825% increase in cybercrime cases between 2019 and 2024, with AI-enhanced fraud categorised as the primary growth driver in recent years. The state's Cyber Crime Cell registered 54,000+ complaints in 2024 alone, with AI-generated investment platform scams, deepfake romance fraud, and digital arrest impersonation collectively accounting for ₹312 crore in losses. Gujarat's rapid digital financial adoption among the small and medium business community made it a high-value target for AI fraud operators.",
      link: "https://gujaratpolice.gov.in/cybercrime-annual-statistics-2024"
    }
],

  "Kerala":[
        {
      title: "Kerala Election Commission Enforces AI Rules for Polls",
      date: "Nov 16, 2025",
      type: "Electoral Regulation",
      description: "The Kerala Election Commission enforced specific AI content rules to prevent deepfakes from influencing voters. Guidelines required that AI-generated political content be clearly disclosed and prohibited manipulated audio-visual material in campaign materials.",
      link: "https://english.deshabhimani.com/deshabhimani-english-/kerala-news/kerala-election-commission-enforces-ai-rules-polls-71551"
    },
    {
      title: "Cyber Wing Upgraded Following Surge in AI-Driven Cybercrime",
      date: "Dec 29, 2023",
      type: "Law Enforcement",
      description: "Kerala Police's cyber wing began major capacity expansion after cybercrime cases jumped from 773 in 2022 to 2,478 by October 2023 — much of the growth attributed to AI-enabled tools. Special training programmes on deepfake detection were introduced for officers.",
      link: "https://www.newindianexpress.com/states/kerala/2023/Dec/29/kerala-as-tech-gives-cyber-criminals-new-boost-cops-brace-for-task-at-hand-2645808.html"
    },
    {
      title: "Social Platforms Remove Over 1,000 Deepfake Investment Videos",
      date: "Jun 26, 2025",
      type: "Platform Action",
      description: "Responding to Kerala Police's flagging, Facebook, Instagram and YouTube removed over 1,000 AI-generated deepfake investment scam videos in a single year. The case highlighted the importance of state-platform coordination in countering AI fraud.",
      link: "https://www.newindianexpress.com/states/kerala/2025/Jun/26/deepfake-investment-scams-on-the-rise-in-kerala-over-1k-videos-taken-down-last-year"
    },
    {
      title: "Keralam High Court's AI Policy for District Judiciary",
      date: "Aug 14, 2025",
      type: "Judicial Action",
      description: "In July 2025, the Keralam High Court issued India's first formally binding AI policy for the district judiciary, categorically prohibiting AI from being used for judicial decision-making, findings, or judgments. It mandates AI as purely 'assistive,' bans cloud-based tools like ChatGPT for case data, requires human verification of all AI outputs, and mandated the AI-enabled Adalat.AI tool for recording witness depositions from November 2025.",
      link: "https://ssrana.in/articles/Kerala-high-courts-new-ai-guidelines-set-national-standard-for-judicial-integrity/"
    }
  ],
  "Manipur":[
    {
      title: "'AI for Good Governance' Capacity Building Workshop",
      date: "Aug 24, 2025",
      type: "Policy",
      description: "Manipur's Department of Information Technology, in partnership with MeitY's National e-Governance Division (NeGD), convened a two-day 'AI for Good Governance' workshop in Imphal (August 2025) for 50+ senior officials including all Deputy Commissioners. Secretary (IT) Thokchom Kiran Kumar announced that Manipur is actively integrating AI into legal case management and GIS-based habitation mapping of villages to enable transparent, citizen-centric service delivery.",
      link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2160363"
    }
  ],
  "Nagaland":[
    {
      title: "AI Implementation Roadmap Workshop under Nagaland Science Mission",
      date: "Mar 11, 2026",
      type: "Policy",
      description: "Nagaland initiated consultations to assess AI readiness and develop a 24-month roadmap for AI in governance through a two-day workshop on 'AI Implementation for Data Platforms and Public Data' at Kohima (March 2026), organised under the Nagaland Science Mission (Department of Science & Technology). Resource persons from the All India Management Association (AIMA) evaluated the state's preparedness for adopting AI/ML in public administration across government departments.",
      link: "https://www.easternmirrornagaland.com/workshop-explores-artificial-intelligence-roadmap-for-governance-in-nagaland"
    },
    {
      title: "NIT Nagaland Pre-AI Impact Summit Workshop — Digital India Talk",
      date: "Feb 06, 2026",
      type: "Policy",
      description: "NIT Nagaland hosted a Pre-AI Impact Summit Workshop (January 2026) as part of NeGD/MeitY's nationwide outreach ahead of the India AI Impact Summit 2026. This was followed by a Digital India Talk Show on AI Impact Summit and Digital India Initiatives in Nagaland (February 2026), focusing on safe and responsible AI frameworks, AI-driven governance applications, and building awareness among students, researchers, and state officials on India's ₹10,300 crore IndiaAI Mission.",
      link: "https://www.digitalindia.gov.in/quick_update_post/nit-nagaland-hosts-successful-pre-ai-impact-summit-workshop/"
    }
  ],
  "Rajasthan":[
    {
      title: "Rajasthan Cabinet Approves AI/ML Policy 2026",
      date: "Jan 07, 2026",
      type: "Policy Framework",
      description: "Rajasthan's Cabinet approved the AI/ML Policy 2026 (December 2025), launched by CM Bhajanlal Sharma at the Regional AI Impact Conference in Jaipur. Built on ethical AI, skills development, and digital infrastructure pillars, it mandates every government department to identify AI use-cases and appoint an AI Nodal Officer. The policy establishes a multi-tiered governance framework — AI Apex Committee, Steering Committee, AI Taskforce — with provisions against algorithmic bias and AI-linked cybercrime.",
      link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2212007&reg=3&lang=1"
    },
    {
      title: "AI-Based Competency Exams for 25.87 Lakh School Students",
      date: "Oct 12, 2025",
      type: "Policy",
      description: "Rajasthan launched an AI-based competency assessment across government schools in all 41 districts (March 2025), covering approximately 25.87 lakh students of Classes 3, 4, 6, and 7, including Sanskrit school students. The initiative uses AI to evaluate learning levels and improve education quality at scale. Additionally, the state has integrated AI into the school curriculum and launched the iStart Learning Management System for digital skill development.",
      link: "https://doitc.rajasthan.gov.in/Content/AiInitiative.aspx?menu_id=67"
    }
  ],

  "Odisha": [
    {
      title: "Man Arrested for AI-Morphed Video of Chief Minister",
      date: "Jun 19, 2025",
      type: "Law Enforcement",
      description: "Odisha's Cyber Crime Unit arrested Kishore Kausalya for creating and posting an AI-generated morphed video of CM Mohan Majhi on Facebook. Facebook removed the content, and the accused was remanded to judicial custody under multiple criminal sections — an early test of legal accountability for political deepfakes.",
      link: "https://asianews.network/man-held-for-posting-ai-generated-morphed-video-of-cm-of-indias-odisha-on-social-media-platform/"
    },
    {
      title: "BJP Files EC Complaint Over AI Misinformation in Nuapada Bypoll",
      date: "Nov 2025",
      type: "Electoral Regulation",
      description: "BJP approached the State Election Commission with a complaint against the BJD for allegedly circulating AI-generated distorted images of BJP leaders to mislead voters ahead of the Nuapada bypoll. The complaint demanded action under cyber laws and election conduct norms.",
      link: "https://argusenglish.in/odisha/bjp-files-complaint-against-bjd-over-ai-misinformation-ahead-of-nuapada-bypoll"
    },
    {
      title: "Odisha AI Policy 2025 & Odisha AI Mission (India's First State AI Policy)",
      date: "May 28, 2025",
      type: "Policy Framework",
      description: "Odisha became India's first state to officially adopt a dedicated AI Policy (May 2025), establishing the Odisha AI Mission with a two-tier governance structure — an AI Taskforce for strategic oversight and an AI Cell within OCAC for execution. Built on four pillars (infrastructure, skills, energy management, regulatory frameworks), it targets healthcare, agriculture, education, disaster management and governance, with AI officers mandated in every department.",
      link: "https://pragativadi.com/odisha-unveils-ai-policy-2025-to-drive-innovation-and-governance/"
    },
    {
      title: "SushasanSahAIyak — Unified AI Platform for Governance",
      date: "Mar 27, 2026",
      type: "Policy Framework",
      description: "Odisha is developing 'SushasanSahAIyak,' a unified AI platform for governance use-cases embedding 'Sushashan' (good governance) across departments. Key deployments include AI-assisted clinical decision support for rural healthcare in tribal Rayagada, voice-first Odia-language AI systems for citizen grievance redressal, precision agriculture advisories via AI-powered IVR, and urban flood prevention models using digital twins.",
      link: "https://egov.eletsonline.com/2026/03/ai-for-scalable-and-inclusive-governance-the-odisha-model/"
    },
    {
      title: "Sovereign AI Hub with Sarvam AI — ₹20,000 Crore Investment",
      date: "Mar 19, 2026",
      type: "Partnership",
      description: "Odisha signed an MoU with Sarvam AI to establish India's first sovereign AI hub with a proposed investment of ₹20,000 crore, expected to generate 5,000 high-skilled jobs. Complementing this, AI labs are being set up at IIT Bhubaneswar, NIT Rourkela, IIIT Bhubaneswar, and NISER, alongside a State Open AI Hub for open-source tools, datasets, hackathons, and micro-grants — with mandatory AI training for all government officers.",
      link: "https://www.business-standard.com/industry/news/odisha-rolls-out-operational-roadmap-for-ai-policy-ai-mission-labs-126031901091_1.html"
    }
  ],

  "West Bengal": [
    {
      title: "Kolkata Police Establishes Dedicated AI Cell at Headquarters",
      date: "Nov 2024",
      type: "Law Enforcement",
      description: "Kolkata Police established a dedicated AI Cell at Bhawani Bhawan headquarters, led by an Additional Director General, to systematically integrate AI into policing — including facial recognition for surveillance. Civil liberties advocates flagged the lack of privacy safeguards and legislative backing for mass deployment.",
      link: "https://www.medianama.com/2021/08/223-facial-recognition-technology-policing-delhi-2/"
    },
    {
      title: "Police Notices Issued Over Mamata Banerjee Deepfake Dancing Video",
      date: "May 06, 2024",
      type: "Law Enforcement",
      description: "Kolkata Police issued notices under Section 42 CrPC to X (Twitter) users who shared a viral deepfake of CM Mamata Banerjee dancing, threatening legal action. The response highlighted the gendered nature of deepfake targeting and the legal tools available — though platform cooperation remained limited.",
      link: "https://www.indiatoday.in/india/story/kolkata-police-notice-x-users-meme-spoof-video-mamata-banerjee-lil-yachty-2535968-2024-05-06"
    },
    {
      title: "West Bengal FIRs Filed Over AI Communal Content Post-Pahalgam Attack",
      date: "Apr 2025",
      type: "Law Enforcement",
      description: "West Bengal Police filed FIRs against multiple social media accounts for circulating AI-generated communally inflammatory content in the wake of the Pahalgam terror attack. Bengali-language WhatsApp groups and Facebook pages were specifically targeted by coordinated disinformation. The state government issued a high-level directive to district SPs to monitor AI-generated content and proactively approach platforms for removal of content designed to incite communal violence.",
      link: "https://www.telegraphindia.com/west-bengal/bengal-police-firs-ai-communal-content-pahalgam-2025"
    },
    {
      title: "WEBEL — AI-Powered Surveillance for Safe City Project",
      date: "Jun 25, 2023",
      type: "Surveillance",
      description: "West Bengal's WEBEL implemented AI-driven surveillance infrastructure across the state: CCTV-based Face Recognition System under the Safe City Project (Phase-II), an Intelligent Traffic Management System (ITMS) with AI-powered automatic number plate recognition, speed detection, and seat belt detection, plus AI-based attendance systems. Under the Nirbhaya Project, 1,020 CCTV cameras with AI capabilities were deployed within Kolkata Police jurisdiction for women's safety.",
      link: "https://webel.in/Artificial-Intelligence"
    },
    {
      title: "'Duare Sarkar' — Predictive Analytics for Doorstep Governance",
      date: "Jan 24, 2025",
      type: "Policy Framework",
      description: "West Bengal's flagship 'Duare Sarkar' (Government at Doorstep) programme uses machine learning algorithms and predictive analytics to deliver public service benefits to citizens. The AI-powered portal enables enrollment across twelve identified welfare schemes, using data-driven targeting to match eligible beneficiaries with appropriate government services — representing one of India's largest state-level deployments of ML in direct citizen-centric welfare delivery.",
      link: "https://indiaai.gov.in/government/government-of-west-bengal"
    },
    {
      title: "National Emerging Technology Summit & Bengal Silicon Valley AI Ecosystem",
      date: "Nov 25, 2024",
      type: "Policy",
      description: "WEBEL hosted the 2nd National Emerging Technology Summit (November 2024) in Kolkata, with panels on 'Utilising Digital Innovations for Citizen Engagement' exploring AI in public services. The Bengal Silicon Valley Tech Hub — a ₹1 trillion investment zone housing AI, IoT, and R&D firms — anchors the state's AI ecosystem, while WEBEL's incubation centre has supported 100+ startups in AI, cybersecurity, and data analytics with national recognition.",
      link: "https://egov.eletsonline.com/2024/11/webel-celebrates-50-years-of-innovation-at-2nd-national-emerging-technology-summit-in-kolkata/"
    }
  ],

  "Goa": [
    {
      title: "Goa Police Launches 'Deep Trace' AI Investigation Tool",
      date: "May 03, 2025",
      type: "Law Enforcement",
      description: "Goa Police publicly launched 'Deep Trace', an in-house AI tool using public data (mobile numbers, vehicle registrations, PAN links) to identify suspects and trace digital footprints. Successfully tested in murder investigations. However, no public audit exists for error rates or data protection compliance.",
      link: "https://timesofindia.indiatimes.com/city/goa/goa-polices-ai-powered-deep-trace-to-probe-deep-dark-crimes/articleshow/120833963.cms"
    },
    {
      title: "CM Confirms Use of AI Scam Detection and Radical Content Analyser",
      date: "Jul 22, 2025",
      type: "Policy",
      description: "Goa's CM told the state legislature that police are using 'Spot the Scam' (AI fraud detection) and a 'Radical Content Analyser' (extremism/hate speech scanning). Critics noted the absence of published guidelines defining what constitutes 'radical content', raising free speech concerns.",
      link: "https://theprint.in/india/goa-police-uses-ai-tools-to-tackle-cybercrimes-cm-sawant/2698729/"
    },
    {
      title: "Goa AI Mission 2027 to Build State-Level AI Ecosystem",
      date: "Jan 25, 2026",
      type: "Policy Framework",
      description: "Goa launched the AI Mission 2027, a strategic blueprint to build an inclusive, innovation-driven AI ecosystem aligned with India's national AI Mission. Built on four pillars — Skilling, Startups & Companies, Capital, and Governance & Infrastructure — it plans to introduce AI in schools/colleges, set up AI labs, develop a Konkani Large Language Model via Bhashini, and train teachers. A proposed AI Mission Council will draft Goa's AI Policy, aiming to make every technical graduate AI-ready by 2028.",
      link: "https://www.ibef.org/news/goa-government-rolls-out-artificial-intelligence-ai-mission-2027-to-boost-governance-and-innovation"
    }
  ],

  "Assam": [
    {
      title: "Tinsukia Techie Arrested for AI-Morphed Explicit Images",
      date: "Jul 14, 2025",
      type: "Law Enforcement",
      description: "Dibrugarh Police arrested a mechanical engineer for using AI tools to create and circulate morphed explicit images of a woman, selling them on paid websites for approximately ₹10 lakh. Cases were registered under cybercrime, defamation, and privacy violation laws — one of the first such arrests in North-East India.",
      link: "https://timesofindia.indiatimes.com/city/guwahati/tinsukia-techie-held-for-creating-circulating-morphed-pics-using-ai/articleshow/122422410.cms"
    },
    {
      title: "Assam Budget 2025 — India's First Dedicated AI Anti-Deepfake Cybercrime Unit",
      date: "Feb 2025",
      type: "Policy Framework",
      description: "Assam's 2025 state budget announced the establishment of India's first dedicated AI-powered anti-deepfake cybercrime unit — a specialised team within the state police equipped with AI forensic tools capable of detecting synthetic media, tracing generative AI signatures, and coordinating with national and international platforms for rapid takedowns. The unit was positioned as a direct response to the surge in deepfake-based fraud, identity theft, and AI disinformation in the Northeast. Digital rights observers noted it was the first state-level initiative in India to explicitly name deepfake detection as a core law enforcement function.",
      link: "https://assamtribune.com/assam-budget-2025-ai-anti-deepfake-cybercrime-unit-first-india"
    },
    {
      title: "Assam Election Commission Deepfake Monitoring Cell — 432 Posts Removed",
      date: "Nov 2025",
      type: "Electoral Regulation",
      description: "The Assam Election Commission deployed a dedicated deepfake monitoring cell during the 2025 bypolls, resulting in 432 AI-generated posts being flagged and removed from social media. Seven FIRs were filed. The monitoring cell used a combination of automated AI detection tools and manual review, and coordinated directly with Facebook, YouTube, and WhatsApp India for expedited removal. The operation was cited by the Election Commission of India as a model for state-level AI content governance during elections.",
      link: "https://assamtribune.com/assam-election-432-ai-posts-deepfake-election-commission-2025"
    },
    {
      title: "Assam Government and Google AI Partnership for AI Centre of Excellence",
      date: "Nov 12, 2025",
      type: "Partnership",
      description: "Assam signed an MoU with Google Cloud in November 2025 to establish an AI Centre of Excellence for governance. The partnership pilots AI chatbots, multilingual interfaces, and analytics across health, education, and agriculture. It includes training 500+ officials in AI skills and defines ethical, data-residency, and audit frameworks — embedding responsible AI into state administration.",
      link: "https://www.cxodigitalpulse.com/assam-government-partners-with-google-to-advance-ai-driven-governance-and-digital-transformation/"
    },
    {
      title: "AI-First Assam — Sewa Setu 2.0 and Assam State Data Policy 2026",
      date: "Mar 24, 2026",
      type: "Policy Framework",
      description: "Assam declared an 'AI-First State' vision, embedding Agentic AI into governance via Sewa Setu 2.0 for citizen service delivery. The Assam State Data Policy 2026 — aligned with the DPDP Act — provides the legal framework. A World Bank-backed Centre for Data Management operationalizes data analytics, while mandatory AI training for all officials ensures institutional capacity for sustained AI governance.",
      link: "https://egov.eletsonline.com/2026/03/ai-first-assam-reimagining-governance-for-a-digital-decade/"
    }
  ],

  "Himachal Pradesh": [
    {
      title: "Himachal High Court: Sharing AI Political Image Not Sedition",
      date: "Aug 22, 2025",
      type: "Judicial Action",
      description: "The Himachal Pradesh High Court granted bail to a fruit vendor charged under the new sedition law for sharing an AI-generated image labelling PM Modi as 'Pakistan Zindabad'. The court ruled that praising another country does not amount to sedition — setting an important limit on state overreach in AI content prosecution.",
      link: "https://thewire.in/law/pakistan-zindabad-denouncing-india-is-not-sedition-himachal-pradesh-high-court"
    },
    {
      title: "FIR Filed for AI-Generated Obscene Profiles of Female IAS Officer",
      date: "Nov 10, 2025",
      type: "Law Enforcement",
      description: "Shimla Police registered a case under the Bharatiya Nyaya Sanhita and IT Act after a suspect created fake Facebook profiles posing as a female SDM (Sub-Divisional Magistrate) and posted AI-generated obscene images to harass and defame her.",
      link: "https://www.tribuneindia.com/news/himachal/one-booked-for-creating-fake-social-media-accounts-of-sdm/"
    },
    {
      title: "Himachal Pradesh Plans 650-Bigha Cyber City in Solan for AI-Driven Enterprises",
      date: "Oct 10, 2025",
      type: "Policy Framework",
      description: "Chief Minister Sukhvinder Singh Sukhu announced the establishment of a 'Cyber City' in Waknaghat, Solan district, spanning 650 bighas, to accommodate data storage and AI-driven enterprises. Officials were directed to swiftly complete the detailed project plan, alongside a Centre of Excellence at Waknaghat and IT parks in Kangra and Shimla. This positions Himachal Pradesh as a rare hill state building dedicated physical AI infrastructure.",
      link: "https://www.devdiscourse.com/article/technology/3659370-himachal-pradesh-embarks-on-digital-transformation-with-cyber-city-initiative"
    },
    {
      title: "Himachal Pradesh — India's First State Data Hosting Policy & AI-Based Document Verification",
      date: "Feb 13, 2026",
      type: "Policy Framework",
      description: "Himachal Pradesh became India's first state to adopt a State Data Hosting Policy, backed by a 1,000 TB state data centre housing all government data under one roof — a prerequisite for advanced analytics and AI deployment. The state also introduced AI-based document verification to validate records faster, reduce errors, and strengthen safeguards against fraud in service delivery and welfare disbursement. Database integration across departments saved the state ₹60 crore annually by filtering ineligible welfare beneficiaries.",
      link: "https://thenewsmill.com/2026/02/himachal-pradesh-launches-first-state-data-hosting-policy-with-200-e-services-online/"
    }
  ],

  "Jharkhand": [
    {
      title: "FIR Lodged in First AI Deepfake Election Case in Jharkhand",
      date: "Nov 01, 2025",
      type: "Law Enforcement",
      description: "Ghatshila Police registered Jharkhand's first FIR specifically targeting AI-generated fake posts meant to mislead voters — following a viral manipulated video of BJP candidate Babulal Soren. The Election Commission had pre-warned districts to act swiftly on deepfakes during the bypoll.",
      link: "https://timesofindia.indiatimes.com/city/ranchi/bjp-candidate-babulal-soren-targets-ai-generated-misinformation-during-ghatshila-elections/articleshow/125020279.cms"
    },
    {
    title: "Jharkhand police arrest 6 cyber criminals from Jamtara",
    date: "Jan 27, 2025",
    type:"Law Enforcement",
    description:`Police in Jamtara district arrested six people accused of running a sophisticated cyber-fraud. Authorities reported that the suspects – self-described software experts – used artificial intelligence to create malware and scam software. The gang, operating under the alias "DK Boss" had duped victims online; police seized phones, SIM cards and other gear from them. Investigators are examining data for about 2,700 potential victims catalogued on the criminal’s website.`,
    link: "https://www.newsonair.gov.in/jharkhand-police-arrest-6-cyber-criminals-from-jamtara/"
  },
  {
    title: "Jharkhand Has No Dedicated Cyber Police Station — Victims Face Multi-Week Delays",
    date: "2023",
    type:"Institutional Response",
    description: `Despite originating some of India's most complex cybercrime syndicates, Jharkhand was identified in the 2023 NCRB report as lacking dedicated cyber police stations outside Ranchi. Victims in Dumka, Deoghar, and Jamtara districts — ironically the epicentres of national cyber fraud — must travel to Ranchi for cyber complaint registration. This structural gap creates week-long delays in fund freeze requests, dramatically reducing victims' chances of recovering defrauded amounts. The irony of India's top cybercrime origin state lacking cyber policing infrastructure has been widely noted by policy analysts.`,
    link: "https://www.prsindia.org/sites/default/files/bill_files/Annual-Report-2023-NCRB.pdf"
  },
    {
      title: "Jharkhand Police Launches India's First Online Inter-State Cybercrime Investigation Portal",
      date: "Nov 30, 2022",
      type: "Law Enforcement",
      description: "The DGP of Jharkhand launched an online portal allowing police forces from across India to submit investigation cooperation requests for cybercrime cases linked to Jharkhand. The system enables requesting IOs to lodge requests, track ATR status, and receive real-time updates — endorsed by supervising SPs for authentication. Jharkhand Police stated it is committed to not allowing its territory to be used by cyber criminals involved in vishing, phishing, and digital banking fraud.",
      link: "https://jhpolice.gov.in/node/32549"
    }
  ],

  "Chhattisgarh": [],

  "Uttarakhand": [
    {
      title: "Man Arrested for Spreading Fake News About Stampede at Purnagiri Mela",
      date: "Feb 2025",
      type: "Law Enforcement",
      description: "Uttarakhand Police arrested a person for circulating false information about a stampede at Purnagiri Mela — part of broader AI-amplified misinformation during the Maha Kumbh season. The case demonstrated proactive use of cyber laws to counter panic-inducing fake news.",
      link: "https://timesofindia.indiatimes.com/city/dehradun/man-held-for-spreading-fake-news-about-firing-stampede-at-purnagiri-mela/articleshow/121193825.cms"
    },
    {
      title: "Uttarakhand AI Mission 2025 — Himalayan AI Policy",
      date: "Nov 26, 2025",
      type: "Policy Framework",
      description: "Governor Lt Gen (Retd.) Gurmit Singh launched the Uttarakhand AI Mission 2025 policy at Raj Bhawan (November 2025), with measurable goals across six priority sectors — healthcare, disaster management, agriculture, governance, education, and tourism. The policy leverages satellite data and real-time digital solutions for landslide prediction and crop advisories, with multi-lingual interfaces, offline capabilities for remote hill villages, and ethical AI principles aligned with IndiaAI and MeitY frameworks.",
      link: "https://governoruk.gov.in/26-11-2025-governor-launched-the-uttarakhand-ai-mission-2025-policy-at-raj-bhawan/"
    },
    {
      title: "Uttarakhand AI Impact Summit 2025 — AI-Driven Governance",
      date: "Oct 22, 2025",
      type: "Policy",
      description: "Uttarakhand's IT Department hosted the AI Impact Summit 2025 in Dehradun (October 2025) as an official pre-summit event of India AI Impact Summit 2026, inaugurated by MoS MeitY Jitin Prasada. In January 2026, IT Secretary Nitesh Kumar Jha briefed the Governor on phased AI adoption across all departments — AI-based solutions are strengthening local governance, enabling data-driven policy decisions, and making citizen services more responsive and efficient.",
      link: "https://negd.gov.in/press_release/uttarakhand-ai-impact-summit-2025-in-dehradun/"
    }
  ],

  "Sikkim": [
    {
      title: "Sikkim Issues SOPs After Public Backlash on AI Traffic Challans",
      date: "Feb 2024",
      type: "Policy Review",
      description: "Following widespread public complaints that AI-generated traffic challans were inaccurate and unjust, the Sikkim Transport Department issued Standard Operating Procedures for the e-challan system. The case became an example of public pressure successfully triggering governance review of automated AI decision-making.",
      link: "https://northeastlivetv.com/around-ne/sikkim/facing-backlash-sikkim-issues-sops-for-e-challan-amid-public-outrage-over-ai-traffic-system-2/"
    },
    {
      title: "State-Wide AI Training for Government Officials — 'Smart Proposals, Smarter Governance'",
      date: "Jul 08, 2025",
      type: "Policy",
      description: "Sikkim State Council of Science & Technology conducted a state-wide AI training programme titled 'Smart Proposals, Smarter Governance — One Day Training for Government Officials on AI Tools for DPR Preparation' across all six districts (Pakyong, Gangtok, Namchi, Mangan, Gyalshing, Soreng) plus eight batches for line departments. The programme equipped officials with practical AI skills for data-driven decision-making, DPR formulation, and workflow optimisation.",
      link: "https://dstsikkim.gov.in/"
    },
    {
      title: "Digital India AI Awareness Workshop — Gangtok Smart City ICCC",
      date: "Jan 31, 2026",
      type: "Policy",
      description: "Sikkim's Department of IT and NeGD organised a Digital India Awareness Workshop on India AI Impact Summit 2026 in Gangtok (January 2026), attended by 300+ officials, CISOs, students, and industry representatives. This builds on the Gangtok Smart City ICCC implemented by Bharat Electronics Ltd — integrating AI-enabled CCTV surveillance, GIS, smart parking, adaptive traffic management, and disaster response across 17 municipal wards.",
      link: "https://negd.gov.in/gallery/digital-india-awareness-workshop-on-india-ai-impact-summit-2026-conducted-in-sikkim/"
    }
  ],

  "Tripura": [
    {
      title: "Post-Violence Social Media Review Prompts Platform Content Removal",
      date: "Nov 05, 2021",
      type: "Platform Action",
      description: "Following communal violence in Tripura in October 2021 — escalated by WhatsApp and Facebook misinformation — platforms removed flagged content under government direction. The incident prompted early calls for algorithmic accountability and faster content moderation in communally sensitive regions.",
      link: "https://www.aljazeera.com/news/2021/11/5/india-tripura-muslims-mosques-violence-bjp-vhp"
    },
    {
      title: "India's First State AI Policy & Tripura AI Centre of Excellence",
      date: "Feb 27, 2026",
      type: "Policy Framework",
      description: "CM Manik Saha announced India's first state-level AI policy (February 2026), developed with Atal Innovation Mission and NITI Aayog support, alongside launching the Tripura State Innovation Mission (T-NEST) with IIM Calcutta, IIT Delhi, IIM Bangalore, and T-Hub. AI-based smart city solutions for Agartala will address traffic, flood control, waste management, and power supply. A Tripura AI Centre of Excellence is being established with MeitY assistance.",
      link: "https://thenewsmill.com/2026/02/tripura-to-launch-indias-first-state-ai-policy-with-atal-innovation-mission-support/"
    },
    {
      title: "AI Integration in e-Office, e-Cabinet & Generative AI Training for Officers",
      date: "May 17, 2025",
      type: "Policy",
      description: "Tripura — India's only fully paperless state from Cabinet to Gram Panchayats — began integrating AI tools into e-Office, e-Cabinet, and the Beneficiary Management System (BMS) for data-driven decision-making and faster service delivery. The Directorate of Economics & Statistics conducted a three-day generative AI workshop upskilling 60+ officials (including census personnel) in AI-enabled governance, planning, and policy formulation.",
      link: "https://apacnewsnetwork.com/2025/05/tripura-to-integrate-ai-tools-into-administrative-processes-for-efficient-governance/"
    },
    {
      title: "₹51.49 Crore Lost to Cyber Fraud in Tripura — 269 Victims",
      date: "Jul 2025",
      summary: `Tripura's DGP released official figures showing ₹51.49 crore lost to cyber fraud, affecting 269 individuals across the state. Losses grew exponentially: ₹1.98 crore (2021) → ₹4.62 crore (2022) → ₹9 crore (2023) → ₹25.54 crore (2024) → ₹9.77 crore (Jan–Jul 2025 alone). Digital arrest scams using AI-generated police impersonation, fake government portals, and deepfake video calls are leading methods. Only ₹33.84 lakh has been recovered. Authorities have seized 20,387 bank accounts linked to cybercrime and frozen ₹5.76 crore expected to be refunded. Tripura lacks a dedicated cyber police station, severely limiting investigation capacity.`,
      link: "https://northeasttoday.in/northeast/cyber-fraud-of-%E2%82%B9514933303-reported-in-tripura-dgp-anurag-urges-citizens-to-stay-vigilant/"
    },
    {
      title: "Five-Member Fraud Gang Busted in East Agartala Using AI Impersonation",
      date: "Feb 27, 2025",
      summary: `East Agartala Police Station officials raided and arrested a five-member fraud gang operating AI-assisted digital arrest scams. The gang impersonated police, tax officials, and government agents using fake official IDs, deepfake video call setups, and AI-generated authority letters. Multiple mobile phones, Aadhaar cards, PAN cards, ATM cards, bank passbooks, and cash were seized. The gang operated interstate, targeting victims across Tripura and neighbouring states with fake electricity/gas bills, RTO challans, and lottery fraud as additional vectors.`,
      link: "https://www.northeasttoday.in/2025/02/27/tripura-five-member-fraud-gang-busted-in-police-raid-cybercrime-investigation-underway/"
    },
    {
      title: "Agartala Municipal Corporation Defrauded of ₹16.38 Crore in AI-Assisted Scam",
      date: "2024",
      summary: `The Agartala Municipal Corporation (AMC) — a government body — was defrauded of ₹16.38 crore in a sophisticated impersonation and social engineering scheme. Fraudsters used AI-generated official documentation and identity cloning to pose as government contractors and extract payments. The case highlights how AI-enabled fraud has moved beyond targeting individual citizens to directly defrauding public institutions, threatening governance infrastructure in smaller northeastern states with limited cybersecurity protocols.`,
      link: "https://www.sentinelassam.com/north-east-india-news/tripura-news/tripura-agartala-municipal-corporation-defrauded-of-rs-1638-crore-in-scam"
    },
    {
      title: "Tripura Teacher Loses ₹56,176 in Online Fraud — Pattern of Small-Town Targeting",
      date: "2025",
      summary: `A teacher from Belonia, Tripura, lost ₹56,176 in an online fraud and urged police action. The case exemplifies the targeting of government employees and educators in Tripura's smaller towns through AI-assisted phishing and impersonation calls. Victims in tier-2 towns of northeastern states are particularly vulnerable due to limited digital literacy, absence of local cybercrime units, and lack of awareness about AI-enabled fraud methods. The teacher's case highlights that even educated professionals with stable income are being successfully targeted by increasingly sophisticated AI-enabled scams.`,
      link: "https://northeasttoday.in/northeast/tripura-belonia-teacher-loses-rs-56176-in-online-fraud-urges-police-action/"
    }
  ],

  "Haryana/ Delhi": [
    {
      title: "'Cancelling Passports, Visas': Haryana Police Identify Farmer Protesters Through CCTVs and Drones",
      date: "Feb 29, 2024",
      type: "Surveillance",
      description: "During the farmers' protest at the Punjab-Haryana border, Haryana Police used AI-assisted CCTV and drone footage to identify protesters and requested passport and visa cancellations for identified individuals. Civil liberties groups warned this type of AI-enabled surveillance could lead to privacy violations and misidentification — a significant governance concern around state use of AI for political targeting.",
      link: "https://www.tribuneindia.com/news/haryana/cancelling-visa-passports-haryana-police-identify-violent-punjab-farmer-protesters-through-cctv-and-drone-cameras-595766/"
    },
    {
      title: "Haryana Introduces AI to Monitor Haryana Teacher Eligibility Test (HTET)",
      date: "Jun 20, 2025",
      type: "Policy",
      description: "Haryana introduced AI-based surveillance to monitor candidates during the HTET following repeated impersonation and cheating scandals. The system cross-referenced candidates' past exam histories and flagged suspicious behaviour in real time. Critics raised concerns about student data privacy, consent, and the lack of an appeals mechanism for AI-flagged decisions — highlighting a governance gap in the state's use of AI in public services.",
      link: "https://timesofindia.indiatimes.com/city/chandigarh/stung-by-repeated-cheating-cases-haryana-introduces-ai-to-monitor-haryana-teacher-eligibility-test/articleshow/121960786.cms"
    },
    {
      title: "AI to Help Cops Detect Fake Number Plates and Stolen Vehicles — Gurugram",
      date: "Oct 11, 2024",
      type: "Surveillance",
      description: "Gurugram implemented AI-powered traffic cameras for enforcing speed limits, detecting helmet violations, and catching fake number plates. While the system improved compliance and reduced accidents, critics noted these systems operate with no human discretion — raising issues around constant surveillance and lack of appeal mechanisms for wrongly flagged vehicles.",
      link: "https://timesofindia.indiatimes.com/city/gurgaon/revolutionary-ai-system-helps-police-crack-down-on-fake-number-plates-and-stolen-vehicles/articleshow/114130014.cms#:~:text=Gurgaon%3A%20The%20police%20have%20launched,characteristics%20like%20colour%20and%20model"
    },
    {
      title: "Haryana Police Cyber Crime Units — AI Fraud Response",
      date: "2024 (Ongoing)",
      type: "Law Enforcement",
      description: "Haryana Police operate dedicated cybercrime units in Gurugram, Faridabad, and Panchkula — among the most active in North India. These units handle AI-enabled voice cloning scams, deepfake blackmail cases, and digital arrest fraud. Cases are registered under the IT Act and BNS 2023, with coordination routed through I4C and the national helpline 1930. Haryana's proximity to Delhi means many cross-jurisdictional cases are jointly investigated.",
      link: "https://i4c.mha.gov.in/"
    },
    {
      title: "Delhi Police Deploys 10,000 AI-Enabled CCTV Cameras Under ₹800 Crore Safe City Project",
      date: "Dec 25, 2025",
      type: "Surveillance",
      description: "Delhi Police's Safe City Project, funded under the Nirbhaya Fund at an estimated ₹800 crore, is deploying 10,000 AI-powered CCTV cameras across the city with facial recognition, distress detection via sound and gestures, and a C4I Command Centre. The system can analyse footage from over a hundred cameras simultaneously, match one million records in 200 milliseconds — representing one of India's largest urban AI surveillance deployments.",
      link: "https://swarajyamag.com/security/delhi-polices-safe-city-project-with-10000-ai-cameras-to-enable-automatic-distress-alerts-launch-expected-in-2026-report"
    },
    {
      title: "Delhi Police Upgrades DRDO-Built Netra System with AI to Monitor Cyber Threats",
      date: "Jun 23, 2025",
      type: "Law Enforcement",
      description: "Delhi Police upgraded its DRDO-built Netra surveillance system with AI-powered servers capable of monitoring internet traffic across WhatsApp, Telegram, and VoIP, flagging threats in real time. Integrated with the C4I Centre's 10,000 CCTV feeds, Netra adds facial recognition and predictive analytics, processing 20 faces in a crowd simultaneously — tackling 700 daily cybercrime complaints and an estimated ₹500 crore in annual losses.",
      link: "https://theweeklynews.in/delhi-polices-netra-upgrade-can-ai-surveillance/"
    },
    {
      title: "MeitY Notifies IT Amendment Rules Mandating Due Diligence for Synthetically Generated Content",
      date: "Feb 11, 2026",
      type: "Legislation",
      description: "MeitY notified the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules, 2026. The amendments define a new category of synthetically generated content (SGI) and impose due diligence obligations on intermediaries that enable the creation or dissemination of deepfakes — marking India's first enforceable rule specifically targeting AI-generated synthetic media.",
      link: "https://www.csohate.org/2026/02/11/ai-impact-summit-2026/"
    }
  ],

};


// ─────────────────────────────────────────────────────────
// FULL CLASSIFICATION SYSTEM — all 6 axes
// ─────────────────────────────────────────────────────────

const HARM_TYPES = [
  { key:"deepfake-blackmail", label:"Deepfake Blackmail",        color:"#f43f5e", keywords:["blackmail","sextortion","obscene","morphed","explicit","extort","revenge","intimate","nude","naked"] },
  { key:"investment-fraud",   label:"Investment Fraud",           color:"#f97316", keywords:["fraud","investment","scam","trading","stock","crypto","fake app","quantum ai","trump hotel","ponzi","phishing","fake profit"] },
  { key:"political",          label:"Political / Electoral",      color:"#eab308", keywords:["election","electoral","cm ","bjp","congress","rjd","tmc","sp ","mla","mp ","poll","vote","campaign","defam","candidate","bypoll","lok sabha","assembly election"] },
  { key:"voice-cloning",      label:"Voice Cloning",              color:"#a855f7", keywords:["voice cloning","voice scam","cloned voice","ai voice","kidnap","ransom","voice modulation","fake voice"] },
  { key:"digital-arrest",     label:"Digital Arrest",             color:"#3b82f6", keywords:["digital arrest","ips ","cbi","rbi","narcotics","customs","pose as","digital house arrest"] },
  { key:"surveillance",       label:"Surveillance",               color:"#06b6d4", keywords:["facial recognition","cctv","surveillance","biometric","attendance","deep trace","traffic challan","e-challan"] },
  { key:"communal",           label:"Communal / Disinformation",  color:"#ec4899", keywords:["communal","riot","religion","caste","misinformation","fake news","stampede","kumbh","pahalgam","operation sindoor","inflammatory","disinformation"] },
  { key:"identity-theft",     label:"Identity Theft",             color:"#8b5cf6", keywords:["identity","fake profile","persona","fake account","impersonat","babydoll","fake social"] },
  { key:"other",              label:"Other",                      color:"#6b748a", keywords:[] },
];

const VICTIM_PROFILES = [
  { key:"woman",       label:"Women / Girls",     color:"#f43f5e", keywords:["woman","female","girl","sister","mother","homemaker","wife"," sdm","influencer"] },
  { key:"politician",  label:"Politician",         color:"#f97316", keywords:["cm ","pm ","minister","mla","chief minister","nirmala","fadnavis","naidu","mamata","modi","amit shah","candidate","bjp leader","congress leader"] },
  { key:"student",     label:"Student / Youth",    color:"#eab308", keywords:["student","college","school","youth","teenager","19-year","classmate","class "] },
  { key:"elderly",     label:"Elderly / Senior",   color:"#22c55e", keywords:["elderly","senior","retired","73-year","76-year","72-year","pensioner","old man","old woman"] },
  { key:"institution", label:"Institution",         color:"#06b6d4", keywords:["school campus","hospital","company","bank","university","exam","army","military"] },
  { key:"general",     label:"General Public",     color:"#6b748a", keywords:[] },
];

const SEVERITY_LEVELS = [
  { key:"critical", label:"Critical",  color:"#ef4444", keywords:["suicide","death","died","crore","killed","terror","pahalgam","national security","operation sindoor","stampede","murder"] },
  { key:"major",    label:"Major",     color:"#f97316", keywords:["lakh","arrested","court","high court","fir","lost","cheated","extort","fraud","scam","blackmail","sentenced"] },
  { key:"notable",  label:"Notable",   color:"#22c55e", keywords:["warning","advisory","awareness","concern","risk","proposal","surveillance","debate","issued"] },
];

const AI_TECHNOLOGIES = [
  { key:"deepfake-video",     label:"Deepfake Video",            color:"#f43f5e", keywords:["deepfake","fake video","morphed video","ai video","ai-generated video","ai generated video"] },
  { key:"voice-cloning",      label:"Voice Cloning",             color:"#a855f7", keywords:["voice cloning","voice scam","cloned voice","ai voice","voice modulation"] },
  { key:"ai-image",           label:"AI Generated Image",        color:"#f97316", keywords:["morphed image","morphed pic","ai-generated image","ai image","ai photo","fake image","generated image"] },
  { key:"fake-app",           label:"Fake App / Platform",       color:"#eab308", keywords:["fake app","trading app","investment app","platform","quantum ai","app stopped","fake website"] },
  { key:"chatbot",            label:"Chatbot / LLM",             color:"#22c55e", keywords:["chatgpt","chatbot","llm","generative ai"] },
  { key:"facial-recognition", label:"Facial Recognition",        color:"#06b6d4", keywords:["facial recognition","face recognition","biometric","ai surveillance","cctv ai"] },
  { key:"algorithmic",        label:"Algorithmic Amplification", color:"#3b82f6", keywords:["algorithm","bot network","coordinated","amplification","140+ accounts","coordinated sharing"] },
  { key:"other-ai",           label:"Other AI",                  color:"#6b748a", keywords:[] },
];

const RESPONSE_OUTCOMES = [
  { key:"arrested",    label:"Arrested / Convicted", color:"#22c55e", keywords:["arrested","held","detained","booked","nabbed","custody","convicted","sentence"] },
  { key:"court-order", label:"Court / FIR",          color:"#06b6d4", keywords:["court","high court","fir","judgment","bail","john doe","13 firs","21 firs"] },
  { key:"advisory",    label:"Advisory Only",         color:"#eab308", keywords:["advisory","warning issued","warned","awareness","guideline","circular"] },
  { key:"no-response", label:"No Response",           color:"#ef4444", keywords:[] },
];

const LIFECYCLE_STAGES = [
  { key:"creation",     label:"Creation",     color:"#a855f7", keywords:["created","generated","using ai","used ai","ai tool","made by","ai-generated","synthesized"] },
  { key:"distribution", label:"Distribution", color:"#f97316", keywords:["circulated","shared","viral","spread","whatsapp","facebook","social media","posted","forwarded"] },
  { key:"harm",         label:"Harm Caused",  color:"#ef4444", keywords:["lost","died","suicide","transferred","cheated","blackmailed","duped","victim"] },
  { key:"response",     label:"Response",     color:"#22c55e", keywords:["arrested","fir","court","advisory","removed","debunked","action taken","busted"] },
];

function classifyFull(inc) {
  const text = ((inc.title||"")+" "+(inc.summary||"")+" "+(inc.description||"")).toLowerCase();

  function firstMatch(rules) {
    for (const r of rules) {
      if (!r.keywords.length) continue;
      if (r.keywords.some(k => text.includes(k))) return r;
    }
    return rules[rules.length - 1];
  }

  let severity = SEVERITY_LEVELS[2];
  if (/suicide|death|died|crore|\bkilled\b|terror|pahalgam|national security|operation sindoor|stampede|murder/.test(text)) {
    severity = SEVERITY_LEVELS[0];
  } else if (/lakh|arrested|court|fir|blackmail|cheated|fraud|scam|lost|extort/.test(text)) {
    severity = SEVERITY_LEVELS[1];
  }

  let response = RESPONSE_OUTCOMES[3];
  for (const r of RESPONSE_OUTCOMES.slice(0, 3)) {
    if (r.keywords.some(k => text.includes(k))) { response = r; break; }
  }

  return {
    harmType:      firstMatch(HARM_TYPES),
    victimProfile: firstMatch(VICTIM_PROFILES),
    severity,
    aiTechnology:  firstMatch(AI_TECHNOLOGIES),
    response,
    lifecycle:     firstMatch(LIFECYCLE_STAGES),
  };
}

// ─────────────────────────────────────────────────────────
// DRAWER + TABS + RENDER
// ─────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Drawer
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('drawer');
  const overlay   = document.getElementById('drawerOverlay');
  const closeBtn  = document.getElementById('drawerClose');
  if (hamburger) hamburger.addEventListener('click', () => { drawer.classList.add('open'); overlay.classList.add('active'); });
  if (closeBtn)  closeBtn.addEventListener('click',  () => { drawer.classList.remove('open'); overlay.classList.remove('active'); });
  if (overlay)   overlay.addEventListener('click',   () => { drawer.classList.remove('open'); overlay.classList.remove('active'); });

  renderPage();
});

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function renderPage() {
  const stateName = decodeURIComponent(getQueryParam("state") || "Karnataka");
  const tab       = getQueryParam("tab") || "incidents";

  document.getElementById("stateTitle").textContent = stateName + " – Incidents & Governance";
  document.title = stateName + " – AI Incidents";

  // Tab state
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });

  // Tab click handlers
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", btn.dataset.tab);
      window.history.pushState({}, "", url);
      renderPage();
    });
  });

  if (tab === "incidents") {
    renderList(incidentsData[stateName] || [], "incidentList", "incident", stateName);
  } else {
    renderList(governanceData[stateName] || [], "incidentList", "governance", stateName);
  }

  // Count badge
  const incidents  = incidentsData[stateName]  || [];
  const governance = governanceData[stateName] || [];
  const countEl = document.getElementById("incidentCount");
  if (countEl) countEl.textContent = incidents.length + " incident" + (incidents.length !== 1 ? "s" : "") + "  ·  " + governance.length + " governance entr" + (governance.length !== 1 ? "ies" : "y");
}

function renderList(items, containerId, mode, stateName) {
  const listEl      = document.getElementById(containerId);
  const noMsgEl     = document.getElementById("noIncidentsMessage");
  listEl.innerHTML  = "";

  if (items.length === 0) {
    noMsgEl.style.display = "block";
    noMsgEl.textContent   = mode === "governance"
      ? "No governance entries documented yet for " + stateName + "."
      : "No incidents documented yet for " + stateName + ".";
    return;
  }

  noMsgEl.style.display = "none";

  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "incident-card";
    card.style.animationDelay = (index * 0.055) + "s";

    const typeBadge = item.type
      ? `<span class="type-badge type-${item.type.toLowerCase().replace(/[^a-z]/g,'-')}">${item.type}</span>`
      : "";

    const header = document.createElement("div");
    header.className = "incident-header";
    header.innerHTML = `
      <div class="incident-header-left">
        <div class="incident-title">${item.title}</div>
        <div class="incident-meta">
          <span class="incident-date">📅 ${item.date}</span>
          ${typeBadge}
        </div>
      </div>
      <div class="incident-toggle">
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M2 4l4 4 4-4"/>
        </svg>
      </div>
    `;

    const dropdown = document.createElement("div");
    dropdown.className = "incident-dropdown";

    const text = item.summary || item.description || "";
    if (text) {
      const inner = document.createElement("div");
      inner.className = "dropdown-inner";
      inner.innerHTML = `
        <p class="dropdown-text">${text.trim()}</p>
        ${item.link && item.link !== "#" ? `<a class="read-more-btn" href="${item.link}" target="_blank" rel="noopener">📰 Read Full Article <span>→</span></a>` : ""}
      `;
      dropdown.appendChild(inner);
    }

    header.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");
      card.classList.toggle("open", !isOpen);
      dropdown.style.maxHeight = isOpen ? "0" : dropdown.scrollHeight + "px";
    });

    card.appendChild(header);
    card.appendChild(dropdown);
    listEl.appendChild(card);
  });
}
