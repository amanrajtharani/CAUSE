export interface ProjectItem {
  sr: number;
  partner: string;
  project: string;
  sector: string;
  year: string;
  location: string;
  trades: string[];
  trainees: number;
  remarks: string;
  description?: string;
  keyOutcomes?: string[];
}

export interface RegistrationItem {
  id: string;
  authority: string;
  title: string;
  regNumber?: string;
  date?: string;
  actOrOrdinance: string;
  details: string;
  locationOrPremises?: string;
  trades?: { name: string; duration: string; shift?: string; intake?: number }[];
}

export interface PartnerItem {
  name: string;
  category: 'International & Bilateral' | 'Government & Statutory' | 'Technical & Academic' | 'Civil Society & Private';
  notes?: string;
}

export interface MediaArticle {
  publication: string;
  date?: string;
  headline: string;
  reporter?: string;
  location?: string;
  summary: string;
  highlights: string[];
}

export const ORGANIZATION_INFO = {
  name: "CAUSE DEVELOPMENT ORGANIZATION",
  instituteName: "CAUSE The Institute of Skills Development & Enterprise Enhancement",
  networkName: "Organization & Institutes Network",
  tagline: "Community Action for Unity & Social Empowerment",
  establishedYear: 2013,
  tenureYears: "11+ Years",
  status: "Non-Governmental Organization / Non-Profit Organization",
  leadership: [
    {
      name: "Mr. Riaz Ahmed Magsi",
      title: "President",
      qualification: "MA Sociology, LLB"
    },
    {
      name: "Mr. Khawar Khan Khilji",
      title: "CEO - CAUSE",
      qualification: "MA Sociology"
    }
  ],
  contacts: {
    emails: ["cause.org.kk@gmail.com"],
    phones: ["0722 570 235", "+92 333 3325325", "+92 333 7125436"],
    website: "www.cause.org.pk",
    addresses: [
      {
        type: "Head Office",
        address: "CAUSE Complex Near Naik Muhammad Suhryani House Sabzi Mandi Road Kandhkot, District Kashmore, Sindh Pakistan"
      },
      {
        type: "Institute Complex",
        address: "CAUSE Complex 2nd Floor Bismillah Plaza/Market opposite Meezan Bank DC office Road Kandhkot District Kashmore, Sindh"
      },
      {
        type: "Guddu Center",
        address: "Main Bazar Barrage Road, Guddu District Kashmore, Sindh"
      }
    ]
  }
};

export const VISION_TEXT = "A Developed, Well Aware and Initiative taker Society guided by sustainable and Participatory principals, having full potential and access to their basic human right";

export const MISSION_TEXT = "CAUSE is committed to accent basic human rights & to build the capacities of rural communities and empowering them to laborite their true human, Social and economic potential for an improved quality of Life, Especially in Marginalized Communities.";

export const INTRODUCTION_TEXT = `The CAUSE Development Organization (CAUSE The Institute of Skills Development) was established in 2013, since then the organization has been expanding continuously in terms of social development service. It has worked for the promotion of sustainable, equitable and participatory development, social welfare and social justice through different social activities, Trainings, field action and through other social research, dissemination of socially relevant knowledge, social intervention through, contribution to social and welfare policy and program at area.

Especially focused on Formal/Non Formal Education, Technical and Vocational, Education and Trainings TVET, Environment, Gender Development, Social, Cultural and Economic matters. Ranging from sustainable rural and urban development to education, and Human Rights, in all case, the focus has been on the disadvantaged and marginalized section of societies, such as women, children and tribal.

Organization declare its work as "Non-Governmental Organization/ Non-Profit Organization" and the organization registered, since the Eleven Years we are working in Different sectors specially focused Non Formal Education and Technical and Vocational Education and Trainings TVET is Education and Training which providing Knowledge and Skills for Employment.`;

export const GOALS_AND_OBJECTIVES = [
  {
    number: 1,
    title: "Basic Human Rights Awareness",
    description: "Aware on Basic Human Rights through awareness campaigns, Advocacy, Seminars and Research based Activities. (Especially on Protection, Formal/Non Formal Education, TVET Health, Environment, Gender Development, Social, Cultural and Economic matters)."
  },
  {
    number: 2,
    title: "Educational Promotion & Scholarships",
    description: "To Lead Educational Promotion through conducting inter-school competitions, co-curricular activities, resource mobilization for scholarship."
  },
  {
    number: 3,
    title: "Community Health & Positive Practices",
    description: "To Aware Communities on Basic Health Issues, viral & Seasonal Diseases. And to Develop Plans for Positive Practices especially in Youth."
  },
  {
    number: 4,
    title: "Environmental Friendly Planning",
    description: "Develop Environment Friendly Plans and Educate through Awareness Campaigns."
  },
  {
    number: 5,
    title: "Economic Empowerment via TVET & Enterprises",
    description: "Empower the poor/lower middle class communities through TVET Sector & Enterprises Development, as they can be able to earn and to support their families."
  },
  {
    number: 6,
    title: "Disaster Management & Volunteer Mobilization",
    description: "Organize Volunteer groups from Village to District Level for Disaster Management (Rescue, Relief and Rehabilitation) through Resource Mobilization or resolve their local day to day issues through available resources."
  },
  {
    number: 7,
    title: "CAUSE Institute of Skills Development & Enterprise Enhancement",
    description: "To Establish the CAUSE Institute of Skills Development & Enterprise Enhancement Creation of Abilities, Unique Skills & Enterprise Enhancement, and to initiate (Like Audio, visual libraries, Information Technology, Research activities) for creating educational environment as our youth can compete with global world."
  },
  {
    number: 8,
    title: "Multi-Stakeholder Coordination",
    description: "Coordinate Local CBOs/ VDOs, NGOs, GOs, and Donor Agencies for Achieving organizational Goals."
  }
];

export const CORE_VALUES = [
  {
    name: "Accountability + Transparency",
    description: "Commitment to open governance, clear reporting, and responsible management in all community actions."
  },
  {
    name: "Respect",
    description: "Honoring the dignity, culture, and individual potential of every community member and stakeholder."
  },
  {
    name: "Social Empowerment & Equity",
    description: "Fostering inclusive opportunities and equal access for marginalized groups, women, and vulnerable populations."
  },
  {
    name: "Responsibility + Reliability",
    description: "Delivering dependable, sustained development interventions that stand the test of time."
  },
  {
    name: "Unity",
    description: "Bringing communities, local groups, and organizations together for collaborative uplift."
  },
  {
    name: "Honesty",
    description: "Ethical integrity and sincerity at the heart of all programs and partnerships."
  },
  {
    name: "Innovation",
    description: "Applying creative, demand-driven training models and market linkages tailored to rural needs."
  }
];

export const KEY_STATISTICS = [
  {
    value: "4,406",
    label: "Total Trainees Graduated",
    detail: "Calculated across all 11 documented completed project interventions"
  },
  {
    value: "11",
    label: "Major Completed Projects",
    detail: "Spanning TVET, NFE, Disaster Recovery, and Enterprise Linkages"
  },
  {
    value: "2013",
    label: "Established Year",
    detail: "Over 11+ continuous years of dedicated community service in Sindh"
  },
  {
    value: "7",
    label: "Districts Served in Sindh",
    detail: "Kashmore, Jacobabad, Larkana, Qambar Shahdadkot, Umerkot, Dadu, Jamshoro"
  },
  {
    value: "5",
    label: "Government Registrations",
    detail: "Social Welfare Dept, SECP, STEVTA, Trade Testing Board (TTB), and SDC"
  },
  {
    value: "40%",
    label: "Trainee Enterprise Launch Rate",
    detail: "Documented in Flood-affected Areas Program (40% of 258 graduates started businesses)"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    sr: 1,
    partner: "ACTED Pakistan, European Union",
    project: "Improving access, Quality and Service Delivery of the TVET sector to the marginalized rural communities through innovative approaches",
    sector: "NFE & TVET",
    year: "2015",
    location: "Kashmore & Jacobabad",
    trades: ["Solar Power", "Building Electrician", "Dress Making", "Embroidery"],
    trainees: 750,
    remarks: "Successfully Completed",
    description: "Improving access, Quality and Service Delivery of the TVET sector to marginalized rural communities through innovative approaches across Kashmore and Jacobabad."
  },
  {
    sr: 2,
    partner: "Social Welfare Department Govt Sindh",
    project: "Youth Empowerment through Skills Development",
    sector: "NFE & TVET",
    year: "2017-2019",
    location: "Kashmore",
    trades: ["Dress Making", "Embroidery & Handicraft", "Beautician", "IT Courses"],
    trainees: 500,
    remarks: "Successfully Completed",
    description: "Two-year youth empowerment initiative with the Social Welfare Department Government of Sindh providing marketable technical and vocational skills."
  },
  {
    sr: 3,
    partner: "Benazir Bhutto Shaheed Human Resource Research & Development Board (BBSHRRDB)",
    project: "Youth Employable Skill Sets Initiative (Act of Assembly, Sindh 2013)",
    sector: "TVET",
    year: "2018-2024",
    location: "Kashmore, Umerkot, Jamshoro",
    trades: ["Dress Making", "Embroidery & Handicraft", "Beautician", "CIT", "Digital Marketing"],
    trainees: 850,
    remarks: "Successfully Completed",
    description: "Established through Act of Assembly, Sindh 2013 as a public service initiative to develop human resource in Sindh by empowering youth (aged between 18-35 years) with employable skill sets that will multiply work avenues for them."
  },
  {
    sr: 4,
    partner: "ACTED Pakistan",
    project: "Leave No Girl Behind (LNGB)",
    sector: "NFE & TVET",
    year: "2022-2023",
    location: "Jacobabad & Kashmore",
    trades: ["Dress Making", "Beautician", "Embroidery"],
    trainees: 800,
    remarks: "Successfully Completed",
    description: "Leave No Girl Behind (LNGB) project implemented in two districts of Sindh to support marginalized girls into education, vocational training, and employment."
  },
  {
    sr: 5,
    partner: "ACTED Pakistan",
    project: "Strengthening Resilience Through Food Security and Livelihoods Support to Drought-Affected Communities",
    sector: "NFE & TVET",
    year: "2023",
    location: "Umerkot",
    trades: ["Ladies handmade Bag & Mobile Pouch", "Wall Hanging Decoration & organizer", "Sindhi Cap"],
    trainees: 115,
    remarks: "Successfully Completed",
    description: "Livelihood support and traditional craft skills for drought-affected communities in Umerkot District, Sindh."
  },
  {
    sr: 6,
    partner: "Social Welfare Department Govt Sindh District Kashmore at Kandhkot",
    project: "Women Welfare Centers",
    sector: "NFE & TVET",
    year: "2023-2024",
    location: "Kashmore (Kandhkot & Guddu)",
    trades: ["Dress Making", "Beautician", "Embroidery"],
    trainees: 500,
    remarks: "Successfully Completed",
    description: "Collaborative initiative under the supervision of Deputy Commissioner Kashmore@Kandhkot empowering women through skill acquisition at dedicated welfare centers."
  },
  {
    sr: 7,
    partner: "Human Appeal International",
    project: "Enhanced Food and Nutrition Security for Vulnerable People in Flood-affected Areas of Pakistan",
    sector: "NFE & TVET",
    year: "2023",
    location: "Dadu",
    trades: ["Dress Making", "Embroidery", "Solar Energy Technician", "Motorcycle Mechanic", "Beautician", "Mobile Phone Repairing"],
    trainees: 400,
    remarks: "Successfully Completed",
    description: "Integrated TVET & livelihood response providing flood-affected vulnerable populations with technical repair and trade skills to generate immediate and lasting income."
  },
  {
    sr: 8,
    partner: "Secours Islamique France (SIF)",
    project: "Enhanced Food and Nutrition Security for Vulnerable People in Flood-affected Areas of Pakistan (Phase 1)",
    sector: "NFE & TVET",
    year: "2023",
    location: "Larkana (Dokri)",
    trades: ["Solar Energy Technician", "Beautician", "Applique Work", "Embroidery"],
    trainees: 100,
    remarks: "Successfully Completed",
    description: "Early Recovery Project generously supported by the World Food Program (WFP) establishing 4 TVET centers for demand-driven trades in Taluka Dokri."
  },
  {
    sr: 9,
    partner: "Secours Islamique France (SIF)",
    project: "Enhanced Food and Nutrition Security for Vulnerable People in Flood-affected Areas of Pakistan (IT & Marketing)",
    sector: "IT and Marketing",
    year: "2024",
    location: "Larkana",
    trades: ["Digital Marketing Trainings"],
    trainees: 100,
    remarks: "Successfully Completed",
    description: "Digital marketing trainings enabling beneficiaries to link their skills and artisanal products with broader digital commerce and market channels."
  },
  {
    sr: 10,
    partner: "ACTED Pakistan & Sindh Education Foundation (SEF)",
    project: "Adult and Adolescent Learning and Training Program (AALTP)",
    sector: "NFE & TVET",
    year: "2024",
    location: "Kashmore",
    trades: ["Car Driving & Digital Application", "Dress Making", "Beautician", "Embroidery"],
    trainees: 216,
    remarks: "Successfully Completed",
    description: "Implemented with support of Sindh Education Foundation (SEF) delivering modern vocational skills including car driving and digital applications alongside traditional trades."
  },
  {
    sr: 11,
    partner: "Qatar Charity, WFP & Norwegian Ministry of Foreign Affairs",
    project: "Building Long Term resilience of Flood Affected Communities Food security interventions in sindh province",
    sector: "NFE & TVET",
    year: "2024",
    location: "Jacobabad & Qambar Shahdadkot",
    trades: ["Motorcycle Mechanic", "Solar Power Technician", "Embroidery"],
    trainees: 75,
    remarks: "Successfully Completed",
    description: "Resilience-building program supported by WFP and Norwegian MFA establishing 2 TVET centers focusing on market-linked technical trades and enterprise development."
  }
];

export const DETAILED_CASE_STUDIES = [
  {
    id: "lngb",
    title: "Closing the Gap: Girls Education Challenge – Leave No Girls Behind (LNGB)",
    partners: "ACTED Pakistan & UK Aid",
    locations: "Districts Kashmore and Jacobabad, Sindh",
    targetAudience: "Marginalized Girls: aged 10-13 years (Accelerated Learning Programme) & aged 14-19 years (Literacy/Numeracy + Livelihood)",
    purpose: "Deliver Technical and Vocational Training to 1,000 Girls in Districts Jacobabad and Kashmore across 5 trades through Temporary Satellite TVET centres.",
    trades: [
      "Dress Making",
      "Hand And Machine Embroidery",
      "Solar Light Technology",
      "Beautician",
      "Handy Crafts & Rali Making"
    ],
    duration: "3 Months (2.5 months intensive training followed by 15 days internship program)",
    threeOutcomes: [
      "Learning: referring to the learning outcomes of marginalized girls",
      "Transition: to formal education, training or employment",
      "Sustainability: of these transitions and project impact on education"
    ],
    theoryOfChange: "Education is valuable for girls in and of itself, delivering significant economic, social and health benefits (increased maternal health outcomes, reduced rates of HIV, increased income generating capacity) to girls, families and communities. Improved literacy and numeracy is complemented by confidence, preparatory classes for formal exams, internships, and start-up business grants to reduce barriers to transition.",
    placementAndLinkage: "Market-driven trade/skill approach exploring job placement and on-job trainings with public and private sector organizations, sensitizing employers and linking trainees with markets and Microfinance Institutions (MFIs)."
  },
  {
    id: "wwc",
    title: "Women Welfare Centers",
    partners: "Social Welfare Department, Government of Sindh",
    supervision: "Supervision of worthy Deputy Commissioner Kashmore@Kandhkot",
    locations: "Kandhkot and Guddu (District Kashmore)",
    traineesCount: "200 Trainees (100 from Kandhkot and 100 from Guddu)",
    trades: ["Dress Making", "Beautification", "Embroidery"],
    primaryGoal: "Empowering women through skill development and training programs to enhance lives through education, skill acquisition, and economic empowerment.",
    achievementsOverview: [
      "100% Completion: All 200 trainees successfully completed their respective courses with dedication and enthusiasm.",
      "Practical Skills: Significant improvement demonstrated in dress making, beautification, and embroidery.",
      "Economic Independence: Graduates equipped with practical skills allowing them to explore employment opportunities or initiate entrepreneurial ventures.",
      "Confidence Building: Positive changes in self-confidence reported, impacting personal and professional life aspects.",
      "Community Integration: Trainees actively shared acquired skills within their communities, fostering a supportive local network."
    ]
  },
  {
    id: "human-appeal",
    title: "Enhanced Food and Nutrition Security for Vulnerable People in Flood-Affected Areas",
    partners: "Human Appeal International, World Food Programme (WFP), European Union Humanitarian Aid, Government of Sindh",
    trainingModel: "One Month Skills Development & Enterprise Development Training Program (Two Batches)",
    tradesCovered: [
      {
        name: "Motorcycle Mechanic Training",
        curriculum: "Comprehensive curriculum covering various aspects of Motorcycle mechanics with practical hands-on sessions in mechanics applications, oil works, and engine works."
      },
      {
        name: "Hand Embroidery Training",
        curriculum: "In-depth instruction on hand and machine embroidery techniques, creative design exploration, fabric selection, and understanding cultural/historical significance."
      },
      {
        name: "Dress Making Training",
        curriculum: "Garment construction, pattern making, fabric selection, precision stitching with sewing machines and sergers, and exploring fashion industry styles."
      },
      {
        name: "Solar Energy Technician",
        curriculum: "Principles of solar energy, solar panel installations, maintenance, and connection with renewable energy opportunities."
      }
    ],
    highlightResult: "40% of 258 Trainees have started their own small businesses within relevant fields, resolving local technical issues while lifting living standards and social appearance."
  },
  {
    id: "sif-larkana",
    title: "Early Recovery Project in District Larkana (Taluka Dokri)",
    partners: "Secours Islamique France (SIF) & World Food Program (WFP)",
    location: "Taluka Dokri, District Larkana, Rural Sindh",
    scope: "100 Male & Female Beneficiaries across 4 strategically established TVET centers",
    trades: ["Solar Power Technician", "Beautician", "Dress Making", "Hand Embroidery (scratches, bedsheets, pillow covers, applique work)"],
    integratedModel: "Adopted an integrated demand-led model rather than failed supply-led models, aligning skills with current market demands and ensuring inclusion of destitute beneficiaries in dignified livelihoods.",
    keyComponents: [
      "Four community-based TVET institutes established in Taluka Dokri",
      "Enterprise Development and Know About Business (KAB) training integrated into curricula",
      "STEVTA, TTB, and NAVTTC-certified training modules adopted",
      "Counseling and business linkage sessions connecting trainees with potential employers",
      "Cultural heritage preservation through traditional craft skills",
      "Provision of certificates recognized by both public and private institutions"
    ]
  },
  {
    id: "qatar-charity",
    title: "Building Long Term Resilience of Flood-Affected Communities",
    partners: "Qatar Charity (QC), World Food Program (WFP) & Norwegian Ministry of Foreign Affairs",
    locations: "Districts Jacobabad and Qambar Shahdadkot, Rural Sindh",
    scope: "75 Male & Female Beneficiaries across 2 main TVET centers",
    trades: ["Motorcycle Mechanic", "Solar Power Technician", "Hand Embroidery & Dress Making"],
    methodology: "One-month comprehensive program combining hands-on technical training, simulated workshop environments, customer service education, and business development sessions to bridge the gap between rural talent and market demand."
  }
];

export const TVET_STRATEGY = {
  headline: "Strong Community Awareness/Mobilization Plan/Strategy",
  subheadline: "Regarding Non Formal Education and TVET Implementation for Maximum Results/Outputs",
  narrative: `CAUSE Organization and Institutions Network developed strategy from the beginning of the start in TVET Sector. We done the introductory coordination procedure with different stakeholders, Government Departments, Employers, Trade Unions, CBOs, Villages, Organizations and with individuals. We found very productive results, and CAUSE is planning for a strong TVET Quality Program within self-resources.`,
  targetAudiences: [
    {
      segment: "Potential Beneficiaries",
      description: "Skilled, Semi-Skilled and unskilled Workers, Schools Boys and Girls. Priority given to 18 to 35 Youth, Marginalized Groups, Orphans and PWDs.",
      cycleSteps: [
        "Create awareness about the importance of economic, social, developmental benefits of quality TVET and Employers particularly market based.",
        "Create awareness in communities about the benefits of the quality TVET provisions.",
        "Ensure that the beneficiaries and target audience are aware of the roles of the Program.",
        "Targeted campaigns to build awareness among Male and Female youth Groups and their Communities about the Project's existing benefits of TVET education."
      ]
    },
    {
      segment: "Private Sector",
      description: "Employers, Industry Associations, Chamber of Commerce, Trade Unions, Private Education Institutes, Social Welfare Department, Communities.",
      cycleSteps: [
        "Creating community awareness campaign with private sector.",
        "To focus on Selected Trades and regularly follow up meetings with relevant Employers.",
        "Inform the private sector of Projects efforts improved quality, relevance TVET opportunities within the existing system.",
        "Encourage employers that the economic benefits of a skilled workforce are value the investment.",
        "Create awareness among the target groups about quality TVET and Employers particular as a means to increased employability & employment and better earnings."
      ]
    },
    {
      segment: "Government Authorities / Representatives",
      description: "District Government, Elected representatives / political leaders, Government and Relevant Departments, Social Welfare, Education, Youth Affairs and Labour etc.",
      cycleSteps: [
        "Meetings with relevant Department regarding Awareness Sessions in respective area of competent Beneficiaries for program, also verification and confirmation of Beneficiaries.",
        "Coordination Meetings with social welfare department for the sustainability & social support.",
        "Meetings with Department of Empowerment of Persons with Disability (DEPD) for getting lists of PWDs Youth Group for potential Beneficiaries.",
        "Meetings with Usher Zakat Department for Identification of Orphans, Poor Marginalized communities for potential Beneficiaries."
      ]
    },
    {
      segment: "Opinion Makers",
      description: "Social Activists, Religious Leaders, Media, NGOs/CBOs, Female LSOs, Teachers Associations, Local Influencers.",
      cycleSteps: [
        "Engage the opinion makers for highlighting to increase employment opportunities for vulnerable and disadvantaged youth.",
        "To Involve CBOs for Beneficiaries Identification and Verification in their respective areas.",
        "Inform the audience of the capacity constraints and requirements of projects its growth objectives.",
        "Create understanding among the audience and Enable project regarding opportunity in District Kashmore."
      ]
    }
  ],
  functioningSector: {
    points: [
      "We have implemented the TVET Projects and established institutes across the district, with the Support of Organizations, NAVTTC, BBSYDP, Social Welfare Department, with the support of philanthropist & within the self-resources.",
      "Our involvement to sustain the TVET Development Programs in Disadvantaged, Rural Areas of Sindh. To Ensure a Strong linkage with the Markets & Employers & Develop Demand Driven Skills, initiated several Interventions to bridge the Gap between TVET Institutes and Markets & Employers.",
      "We have Extreme Experience of to open Technical & Vocational Institutes in Rural Outreach area satellite Centers in perspective Local contents.",
      "And to Linkage Trainees & Graduates with Market for Their Income Generation as they spend prosperous Empowered Lives.",
      "We have most competent Team, Master Trainers, Instructors, and Trade Experts also very strong Team for Enterprise Development, Market Linkages & Development of Business Ideas and Great Network for Empowerment of Youth also a successful Mechanism of TVET sector's activities & project implementation & Rich Experience of Labor Market Survey."
    ]
  },
  additionalPractices: [
    "Improve the match between Institutes' classroom and workplace learning through apprenticeships, strong coordination with Employers, Business Players, and Exposure of Market.",
    "Involve the private sector, trade unions and employers' associations in designing TVET to ensure its relevance to market needs.",
    "Organize Career Counseling Sessions, Market Linkages Sessions, Motivational Sessions for our Trainees and Exposure Visits to Relevant Fields.",
    "Promote basic skills and cross-cutting skills to enable Trainees to meet new and emerging skills needs.",
    "Promotion of basic skills (Literacy, Numeracy) as the foundation of employability and further learning throughout life.",
    "Coordination with all Stakeholders to Increase the capacity of education and training systems and institutions.",
    "Enhance education for entrepreneurship skills to promote the launch of new enterprises and self-employment directly and indirectly related to the economy.",
    "Improve the match between classroom instruction and on-the-job industrial application.",
    "Involve the Government sector, Private sector, trade unions and employers' associations in designing TVET Trainings.",
    "Investment Support for promising trainees and enterprise ideas.",
    "Enhanced Brand Building for local artisanal products.",
    "Access to Market via structured linkages and e-commerce platforms.",
    "Business Development Support and mentorship.",
    "Economic Opportunities creation for vulnerable households.",
    "Demand Driven Skills identified through rigorous local labor market assessments."
  ]
};

export const REGISTRATIONS_DATA: RegistrationItem[] = [
  {
    id: "social-welfare",
    authority: "Social Welfare Department, Government of Sindh",
    title: "Certificate of Registration",
    regNumber: "F.DO/SW/KKot/2013/88",
    date: "06-02-2013",
    actOrOrdinance: "Voluntary Social Welfare Agencies Registration and Control Ordinance 1961 (XLVI of 1961)",
    details: "Registered as CAUSE DEVELOPMENT ORGANIZATION (CAUSE The Institute of Skills Development), District Kashmore @ Kandhkot under the seal of District Officer Social Welfare Kashmore @ Kandhkot.",
    locationOrPremises: "District Kashmore @ Kandhkot, Sindh"
  },
  {
    id: "secp",
    authority: "Securities and Exchange Commission of Pakistan (SECP)",
    title: "Certificate of Incorporation",
    regNumber: "Corporate Unique Identification No. 0277301",
    date: "04-12-2024",
    actOrOrdinance: "Section 16 of the Companies Act, 2017 (XIX of 2017)",
    details: "Incorporated under the name 'CAUSE THE INSTITUTE OF SKILLS DEVELOPMENT (PRIVATE) LIMITED' as a company Limited by Shares, registered at Business Centre at Head Office Islamabad.",
    locationOrPremises: "Head Office Islamabad / Kandhkot, Sindh"
  },
  {
    id: "stevta",
    authority: "Sindh Technical Education & Vocational Training Authority (STEVTA)",
    title: "Certificate of Registration (Govt of Sindh)",
    regNumber: "STEVTA/HQ/A&T/PMI'S/REG-04(09/537)/2024/809",
    date: "Valid 15 October 2024 to 14 October 2027 (03 Years)",
    actOrOrdinance: "STEVTA Act & Regulations for Technical/Vocational Institutes",
    details: "Awarded to 'CAUSE THE INSTITUTE OF SKILLS DEVELOPMENT & ENTERPRISE ENHANCEMENT', 2nd Floor Bismillah Market, DC Office Road Kandhkot for 8 specialized trades/courses.",
    locationOrPremises: "2nd Floor Bismillah Market, DC Office Road Kandhkot",
    trades: [
      { name: "Advanced Diploma Information Technology (ADIT)", duration: "01 Year", shift: "Evening", intake: 20 },
      { name: "Embroidery (Machine & Hand)", duration: "06 Months", shift: "Morning", intake: 20 },
      { name: "Mobile Repairing", duration: "06 Months", shift: "Evening", intake: 20 },
      { name: "Digital Marketing", duration: "06 Months", shift: "Morning", intake: 20 },
      { name: "Graphic Designing", duration: "06 Months", shift: "Morning", intake: 20 },
      { name: "Solar & UPS Technician", duration: "06 Months", shift: "Evening", intake: 20 },
      { name: "Dress Making", duration: "06 Months", shift: "Morning", intake: 20 },
      { name: "Beautician", duration: "06 Months", shift: "Morning", intake: 20 }
    ]
  },
  {
    id: "ttb-kandhkot",
    authority: "Trade Testing Board (TTB) Sindh",
    title: "Institute Affiliation Certificate (Kandhkot Campus)",
    regNumber: "Serial # 2748, Code # P-1295-22 (Ref # TTB/AFF/P-1295/2022/2/ Date: 28 July 2024)",
    date: "Valid upto 31st Dec, 2024",
    actOrOrdinance: "Section 5 National Training Ordinance 1980 & Notification No. Lab (1) 8-7/76",
    details: "Affiliated to 'Cause the Institute of Skills Development & Enterprise Enhancement', 2nd Floor Bismillah Market DC Office Road, Kandhkot for recognition of 9 Vocational Qualification Training Programs.",
    locationOrPremises: "2nd Floor Bismillah Market DC Office Road, Kandhkot",
    trades: [
      { name: "D.I.T (Diploma in Information Technology)", duration: "12 Months" },
      { name: "Graphic Designing", duration: "06 Months" },
      { name: "Digital Marketing", duration: "06 Months" },
      { name: "Mobile Phone Repairing", duration: "06 Months" },
      { name: "Solar Power Technician", duration: "06 Months" },
      { name: "Beautician", duration: "06 Months" },
      { name: "Dress Making", duration: "06 Months" },
      { name: "Hand & Machine Embroidery", duration: "06 Months" },
      { name: "Early Childhood Education (ECE)", duration: "12 Months" }
    ]
  },
  {
    id: "ttb-guddu",
    authority: "Trade Testing Board (TTB) Sindh",
    title: "Institute Affiliation Certificate (Guddu Branch)",
    regNumber: "Serial # 2355, Code # P-1420-23 (Ref # TTB/AFF/P-1420/2023/1/ Date: 05 June 2023)",
    date: "Valid upto 31st Dec, 2024",
    actOrOrdinance: "Section 5 National Training Ordinance 1980 & Notification No. Lab (1) 8-7/76",
    details: "Affiliated to CAUSE Development Organization, Main Bazar Barrage Road, Guddu Distt Kashmore for 2 Vocational Qualification Programs.",
    locationOrPremises: "Main Bazar Barrage Road, Guddu District Kashmore",
    trades: [
      { name: "Beautician", duration: "06 Months" },
      { name: "Sewing & Stitching", duration: "06 Months" }
    ]
  },
  {
    id: "sdc",
    authority: "Skill Development Council Islamabad (SDC)",
    title: "Official Recognition & Working Affiliation",
    actOrOrdinance: "National Skills Development Framework",
    details: "Earned recognition for delivery of competency-based technical and vocational skills development programs."
  }
];

export const PARTNERS_LIST: PartnerItem[] = [
  { name: "USAID (From the American People)", category: "International & Bilateral" },
  { name: "UK Aid (From the British People)", category: "International & Bilateral" },
  { name: "European Union Humanitarian Aid", category: "International & Bilateral" },
  { name: "World Food Programme (WFP)", category: "International & Bilateral" },
  { name: "Secours Islamique France (SIF)", category: "International & Bilateral" },
  { name: "Human Appeal International", category: "International & Bilateral" },
  { name: "Qatar Charity (QC)", category: "International & Bilateral" },
  { name: "ACTED Pakistan", category: "International & Bilateral" },
  { name: "Norwegian Ministry of Foreign Affairs", category: "International & Bilateral" },
  { name: "Government of Sindh", category: "Government & Statutory" },
  { name: "Social Welfare Department, Govt of Sindh", category: "Government & Statutory" },
  { name: "Sindh Education Foundation (SEF)", category: "Government & Statutory" },
  { name: "STEVTA (Sindh Technical Education & Vocational Training Authority)", category: "Government & Statutory" },
  { name: "Trade Testing Board (TTB) Sindh", category: "Government & Statutory" },
  { name: "NAVTTC (National Vocational & Technical Training Commission)", category: "Government & Statutory" },
  { name: "BBSHRRDB (Benazir Bhutto Shaheed Human Resource Research & Development Board)", category: "Government & Statutory" },
  { name: "BBSYDP (Benazir Bhutto Shaheed Youth Development Program)", category: "Government & Statutory" },
  { name: "Skill Development Council Islamabad (SDC)", category: "Government & Statutory" },
  { name: "Pakistan Sports Board", category: "Government & Statutory" },
  { name: "Sukkur IBA University", category: "Technical & Academic" },
  { name: "DESCON", category: "Technical & Academic" },
  { name: "TUSDEC (Technology Upgradation and Skill Development Company)", category: "Technical & Academic" },
  { name: "Thul Institute of Information Technology", category: "Technical & Academic" },
  { name: "Society for Alternative Media and Research", category: "Civil Society & Private" },
  { name: "CTc (Coalition For Tobacco Control - Pak)", category: "Civil Society & Private" },
  { name: "Pakistan Microfinance Network", category: "Civil Society & Private" },
  { name: "EFU Life", category: "Civil Society & Private" },
  { name: "Unique Digital Creation", category: "Civil Society & Private" },
  { name: "PBBF (Pakistan Body Building Federation)", category: "Civil Society & Private" },
  { name: "IFBB (International Federation of Bodybuilding & Fitness)", category: "Civil Society & Private" },
  { name: "SBBA (Sindh Body Building Association)", category: "Civil Society & Private" },
  { name: "Larkana Division Body Building Association", category: "Civil Society & Private" },
  { name: "Al-Ubed Welfare Association Wagan Road Jacobabad", category: "Civil Society & Private" },
  { name: "DUA Rent-A-Car Services", category: "Civil Society & Private" }
];

export const MEDIA_UPDATES: MediaArticle[] = [
  {
    publication: "The Best Times",
    date: "28 January 2023",
    reporter: "Special reporter: Awais Bilal Farooq",
    headline: "Seminar Organized by CAUSE & ACTED for Empowering Women in the Field of TVET & Enterprenourship Digital Marketing Work",
    location: "Jubilee Hall, Jacobabad",
    summary: "With the good efforts of CAUSE & ACTED a program was held at Jacobabad empowering Girls in TVET Sector. Stalls of tailoring, stitching, embroidery and beautician were set up with active participation. IT experts provided presentations on selling handmade products in digital markets through e-commerce platforms like Daraz, Shophive, Cybermart, Guruapp, and Chikoo.",
    highlights: [
      "Stalls exhibiting handmade products of tailoring, stitching, embroidery and beautician",
      "E-commerce & digital marketing training on selling through Daraz, Shophive, Cybermart, Guruapp, Chikoo",
      "Attended by Mr. Hassan Lashari (RSU Education dept), Madam Khairnisa (TEO), Iram Baloch, Raja Muhammad Farooq Daudpoto (Technical advisor CAUSE), Wing Commander Abdul Samad Bhatti, Abdul Wahid Brohi (Principal Nursing college), Sumair Siddiqui (Micro finance Bank), Janib Khan Khoso, Ubedullah Brohi (Chairman Al-Ubed), Ashiq Zaman (Manager Programs ACTED), Riaz Ahmed Magsi (President CAUSE), Khawar Khan Khilji (CEO CAUSE)",
      "Presentations delivered by IT experts Mr. Sohail Malik & Mr. Sooraj Kumar on digital market access"
    ]
  },
  {
    publication: "The Nation",
    date: "Saturday, February 11, 2023",
    headline: "CAUSE Organization Hosted Bodybuilding Healthy Competition with Title of Mr./Champion of Larkana Division",
    location: "Larkana Division, Sindh",
    summary: "Organized with collaboration of Sindh & Pakistan Body Building Federation (PBBF) and International Body Building Federation (IFBB) to educate and inspire youth to make positive lifestyle choices, providing a healthy platform for physical fitness and community sports engagement.",
    highlights: [
      "Collaboration with Sindh & Pakistan Body Building Federation (PBBF) / IFBB",
      "Guests included Mr. Zeeshan Shah (General Secretary), Mr. Rashid Ali (Program coordinator), Tariq Zafar, Faiz Baloch (Asia Champion), Mr. Khawar Khan Khilji (CEO CAUSE), Mr. Riaz Ahmed Magsi, Shabbir Hussain Alvi, Sardar Shahrukh Siyal, Mr. Wazir Solangi",
      "Promoting healthy lifestyle and drug-free youth empowerment in Larkana region"
    ]
  },
  {
    publication: "Balochistan Times",
    headline: "CAUSE Organization Hold a Seminar to Promote Women Skills",
    reporter: "By Correspondent",
    location: "Jubilee Hall, Jacobabad",
    summary: "According to details, a seminar was organized by the CAUSE Organization at Jubilee Hall in Jacobabad to encourage women. In the seminar, different stalls were set up by the women for their hand-made items. Heads of various local and international organizations participated. Trainees were trained in various trades for three consecutive months and awarded certificates.",
    highlights: [
      "Display of hand-made crafts and items by women graduates",
      "Three consecutive months of intensive technical training",
      "Awarding of official vocational certificates",
      "Attended by CEO CAUSE Khawar Khan Khilji, Riaz Magsi, Raja Farooq Daudpoto, Hayat Jamali, Ubaidullah Brohi, Wing Commander Abdul Samad Bhatti"
    ]
  },
  {
    publication: "Regional Times",
    headline: "CAUSE Organization Holds a Seminar for Skilled Women in Jacobabad",
    reporter: "By Hashim Brohi",
    location: "Jubilee Hall, Jacobabad",
    summary: "A seminar was organized by the CAUSE Organization at Jubilee Hall in Jacobabad to encourage women, exhibiting handmade items and celebrating the dedication of women graduates across multiple technical trades.",
    highlights: [
      "Stalls set up for handmade embroidery, tailoring, and craft products",
      "Appreciation of women's determination and economic contribution",
      "Certificates distributed to successful trainees"
    ]
  }
];

export const GALLERY_ITEMS = [
  {
    title: "Vocational & Technical Training Workshop",
    category: "TVET Training",
    caption: "Trainees engaged in hands-on technical skills and enterprise enhancement in rural Sindh."
  },
  {
    title: "Women Welfare Center - Hand & Machine Embroidery",
    category: "Women Empowerment",
    caption: "Women trainees at Women Welfare Center mastering traditional Sindhi embroidery, applique work, and garment stitching."
  },
  {
    title: "Solar Energy & Power System Practical Session",
    category: "Renewable Energy",
    caption: "Solar Technician practical session: hands-on wiring, inverter setup, and solar panel installation techniques."
  },
  {
    title: "Motorcycle Mechanics Workshop",
    category: "Technical Trades",
    caption: "Practical training on motorcycle engine overhauling, oil works, and mechanical troubleshooting."
  },
  {
    title: "Graduation & Certificate Distribution Ceremony",
    category: "Certificates & Events",
    caption: "Awarding of course completion certificates to graduates in presence of government officials, partner agencies, and community leaders."
  }
];
