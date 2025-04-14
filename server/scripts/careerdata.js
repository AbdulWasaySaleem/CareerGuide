// careerDataInsertion.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Career from '../models/careerModel.js';

// Load environment variables
dotenv.config();


// Career data with short and long descriptions
const careerData = [
  { 
    title: 'Web Developer', 
    icon: '🌐', 
    shortDescription: 'Build responsive and interactive websites and web applications',
    longDescription: 'Web Developers are digital architects who craft the online experiences we interact with daily. They combine technical expertise in languages like HTML, CSS, and JavaScript with creative problem-solving to build websites and web applications that are both functional and visually appealing. The field encompasses frontend development (client-side interfaces users interact with), backend development (server-side logic and databases), and full-stack development (covering both). Modern web developers work with frameworks like React, Angular, or Vue.js for frontend, and Node.js, Django, or Ruby on Rails for backend. They must consider responsive design for various screen sizes, accessibility standards, performance optimization, and security best practices. The career offers abundant opportunities in virtually every industry, from tech startups to established corporations, with the flexibility to work in-house, at agencies, or as freelancers. As businesses increasingly rely on their online presence, skilled web developers remain in high demand across the global job market.',
    prerequisites: [
      'Foundational knowledge of HTML, CSS, and JavaScript',
      'Understanding of web architecture and HTTP protocols',
      'Basic computer science concepts and problem-solving skills',
      'Familiarity with version control systems (e.g., Git)',
      'Knowledge of responsive design principles'
    ],
    skillsToLearn: [
      'Frontend frameworks (React, Angular, Vue.js)',
      'Backend technologies (Node.js, Django, Ruby on Rails)',
      'Database management (SQL and NoSQL)',
      'RESTful API design and implementation',
      'Web performance optimization techniques',
      'Cross-browser compatibility',
      'Web accessibility standards (WCAG)',
      'Testing methodologies (unit, integration, E2E)',
      'Modern build tools and bundlers (Webpack, Vite)',
      'State management patterns and libraries'
    ],
    potentialCareerPaths: [
      'Frontend Developer',
      'Backend Developer',
      'Full Stack Developer',
      'UI Developer',
      'JavaScript Engineer',
      'Web Application Architect',
      'DevOps Engineer (web-focused)',
      'Technical Lead',
      'Web Development Instructor',
      'Independent Consultant/Freelancer'
    ]
  },
  { 
    title: 'Mobile Development', 
    icon: '📱', 
    shortDescription: 'Create applications for iOS, Android, and other mobile platforms',
    longDescription: 'Mobile Development is a dynamic field focused on creating software applications specifically designed for mobile devices like smartphones and tablets. Developers in this space typically specialize in either iOS development (using Swift or Objective-C), Android development (using Kotlin or Java), or cross-platform development (using frameworks like React Native, Flutter, or Xamarin). The work involves much more than coding—mobile developers must understand platform-specific design guidelines, optimize for battery life and processing limitations, implement responsive interfaces for various screen sizes, and ensure security in applications that often handle sensitive user data. They collaborate closely with designers, backend developers, and quality assurance testers to create seamless user experiences. The mobile development field continues to evolve rapidly with emerging technologies like augmented reality, mobile payment systems, and integration with wearable devices. With billions of smartphone users worldwide and the app economy continuing to grow, skilled mobile developers enjoy excellent career prospects with opportunities in enterprises, tech companies, startups, gaming studios, and freelance work.',
    prerequisites: [
      'Object-oriented programming fundamentals',
      'Understanding of software development lifecycle',
      'Basic UI/UX design principles',
      'Knowledge of mobile device capabilities and constraints',
      'Problem-solving skills and algorithmic thinking'
    ],
    skillsToLearn: [
      'Platform-specific languages (Swift/Objective-C for iOS, Kotlin/Java for Android)',
      'Cross-platform frameworks (React Native, Flutter, Xamarin)',
      'Mobile UI design patterns and guidelines',
      'Local data storage and synchronization',
      'API integration and networking',
      'Push notifications implementation',
      'Mobile authentication and security practices',
      'Performance optimization for resource-constrained devices',
      'App publishing and distribution processes',
      'Mobile analytics and crash reporting'
    ],
    potentialCareerPaths: [
      'iOS Developer',
      'Android Developer',
      'Cross-Platform Mobile Developer',
      'Mobile UI/UX Developer',
      'Mobile App Architect',
      'Mobile Game Developer',
      'Mobile DevOps Engineer',
      'Mobile Team Lead',
      'App Entrepreneur',
      'AR/VR Mobile Developer'
    ]
  },
  { 
    title: 'Data Science', 
    icon: '📊', 
    shortDescription: 'Analyze complex data and extract valuable insights',
    longDescription: 'Data Science combines multiple disciplines to extract actionable insights from vast and complex datasets. Data scientists are analytical experts who utilize their skills in statistics, mathematics, and programming to identify patterns, make predictions, and solve organizational problems through data-driven approaches. The role typically involves data collection and cleaning, exploratory data analysis, statistical modeling, machine learning implementation, and data visualization. Proficiency in programming languages like Python or R is essential, along with knowledge of SQL for database querying. Data scientists work across diverse industries including finance, healthcare, retail, technology, and government sectors to optimize operations, enhance decision-making, and drive innovation. They might develop recommendation systems for e-commerce, create risk assessment models for insurance companies, optimize supply chains, or identify disease patterns in medical research. The profession requires both technical expertise and business acumen to translate analytical findings into strategic recommendations. As organizations increasingly recognize the competitive advantage data-driven decision making provides, data scientists continue to be among the most in-demand and well-compensated professionals in the technology sector.',
    prerequisites: [
      'Strong mathematical foundation (statistics, linear algebra, calculus)',
      'Programming basics (preferably Python or R)',
      'Understanding of database concepts and SQL',
      'Critical thinking and analytical problem-solving skills',
      'Basic understanding of business metrics and KPIs'
    ],
    skillsToLearn: [
      'Advanced data manipulation and cleaning techniques',
      'Statistical analysis and hypothesis testing',
      'Machine learning algorithms and implementation',
      'Data visualization tools and techniques (Matplotlib, Seaborn, Tableau)',
      'Big data technologies (Hadoop, Spark)',
      'Natural Language Processing fundamentals',
      'Time series analysis and forecasting',
      'Experiment design and A/B testing',
      'Feature engineering techniques',
      'Communication of technical findings to non-technical stakeholders'
    ],
    potentialCareerPaths: [
      'Data Scientist',
      'Machine Learning Engineer',
      'Data Analyst',
      'Business Intelligence Developer',
      'Quantitative Analyst',
      'Research Scientist',
      'AI Specialist',
      'Data Science Manager',
      'Decision Scientist',
      'Data Product Manager'
    ]
  },
  { 
    title: 'AI/ML', 
    icon: '🤖', 
    shortDescription: 'Develop systems that can learn and make intelligent decisions',
    longDescription: 'Artificial Intelligence and Machine Learning (AI/ML) represents one of the most transformative technological fields of our era. Professionals in this domain create systems that can learn from data, recognize patterns, and make decisions with minimal human intervention. The work spans multiple specializations including natural language processing, computer vision, deep learning, reinforcement learning, and robotics. AI/ML engineers develop algorithms that power everything from virtual assistants and recommendation systems to autonomous vehicles and medical diagnostic tools. The role requires strong foundations in mathematics (particularly linear algebra, calculus, and probability), programming skills (typically in Python, with frameworks like TensorFlow or PyTorch), and domain expertise in the specific application area. Beyond technical implementation, AI/ML professionals must address ethical considerations including bias in training data, model transparency, privacy concerns, and societal impact. The field continues to evolve rapidly, with practitioners often needing to stay current with research breakthroughs and emerging techniques. As AI adoption accelerates across industries, skilled professionals in this field enjoy exceptional career opportunities with the potential to create technologies that fundamentally reshape how we work, communicate, and live.',
    prerequisites: [
      'Advanced mathematics (linear algebra, calculus, probability, statistics)',
      'Strong programming skills, particularly in Python',
      'Data structures and algorithms knowledge',
      'Understanding of data processing and database concepts',
      'Basic machine learning concepts and terminology'
    ],
    skillsToLearn: [
      'Deep learning frameworks (TensorFlow, PyTorch)',
      'Neural network architectures and training techniques',
      'Natural Language Processing methods and applications',
      'Computer Vision algorithms and implementations',
      'Reinforcement learning concepts and frameworks',
      'MLOps and model deployment practices',
      'Model evaluation, validation, and performance metrics',
      'AI ethics, fairness, and bias mitigation',
      'High-performance computing and GPU programming',
      'Research paper comprehension and implementation'
    ],
    potentialCareerPaths: [
      'Machine Learning Engineer',
      'AI Research Scientist',
      'NLP Engineer/Scientist',
      'Computer Vision Engineer',
      'Deep Learning Specialist',
      'AI Ethics Consultant',
      'Reinforcement Learning Engineer',
      'MLOps Engineer',
      'Conversational AI Developer',
      'AI Product Manager'
    ]
  },
  { 
    title: 'Cybersecurity', 
    icon: '🔒', 
    shortDescription: 'Protect systems and networks from digital threats',
    longDescription: 'Cybersecurity professionals serve as the digital guardians of our increasingly connected world, defending organizations against a constantly evolving landscape of threats. This multifaceted field encompasses network security, application security, information security, operational security, disaster recovery, and business continuity planning. Practitioners develop expertise in vulnerability assessment, penetration testing, security architecture, incident response, digital forensics, and security governance. The work involves implementing protective measures like firewalls and encryption, monitoring systems for suspicious activity, responding to security breaches, and developing security policies and procedures. Cybersecurity requires both technical proficiency and strategic thinking—understanding not just how to implement security controls but also how to balance security requirements with business needs and user experience. With cyber threats growing in sophistication and frequency, organizations across all sectors—from government and finance to healthcare and retail—have critical needs for security expertise. The field offers diverse career paths including security analyst, ethical hacker, security architect, chief information security officer (CISO), and security consultant. As digital transformation continues across industries and cyber threats become increasingly sophisticated, skilled cybersecurity professionals remain among the most sought-after technology specialists worldwide.',
    prerequisites: [
      'Fundamental networking concepts (TCP/IP, routing, firewalls)',
      'Basic understanding of operating systems (Windows, Linux)',
      'Programming/scripting fundamentals',
      'Knowledge of authentication and authorization principles',
      'Understanding of basic cryptography concepts'
    ],
    skillsToLearn: [
      'Vulnerability assessment and penetration testing techniques',
      'Security monitoring and incident response procedures',
      'Network security and defense mechanisms',
      'Application security testing and secure coding practices',
      'Digital forensics and malware analysis',
      'Cloud security architecture and controls',
      'Security compliance frameworks (NIST, ISO, GDPR)',
      'Risk assessment and management methodologies',
      'Security automation and orchestration',
      'Threat intelligence and analysis'
    ],
    potentialCareerPaths: [
      'Security Analyst/Engineer',
      'Penetration Tester/Ethical Hacker',
      'Security Architect',
      'Incident Responder',
      'Digital Forensics Specialist',
      'Security Consultant',
      'Compliance Analyst',
      'Cloud Security Engineer',
      'Security Operations Center (SOC) Analyst',
      'Chief Information Security Officer (CISO)'
    ]
  },
  { 
    title: 'Game Development', 
    icon: '🎮', 
    shortDescription: 'Create interactive experiences for various gaming platforms',
    longDescription: 'Game Development combines technical expertise with creative artistry to craft interactive entertainment experiences that engage billions of players worldwide. This multidisciplinary field brings together programmers, artists, designers, writers, audio engineers, and producers who collaborate to transform concepts into immersive digital worlds. Game developers work across multiple platforms including consoles, PCs, mobile devices, virtual reality, and augmented reality. The technical aspects involve proficiency in programming languages like C++, C#, or JavaScript, and familiarity with game engines such as Unity or Unreal Engine. The creative side encompasses character design, environmental modeling, animation, narrative development, and sound design. Game development processes typically follow stages including concept development, pre-production planning, production, testing, and post-launch support. The industry demands both technical problem-solving skills and artistic vision—developers must create experiences that are not only visually compelling and narratively engaging but also technically optimized and bug-free. The field continues to evolve with advances in real-time rendering, procedural generation, artificial intelligence, and hardware capabilities. With the global games market exceeding $200 billion annually and continuing to grow, game development offers diverse career opportunities from indie studios and AAA publishers to educational game companies and emerging technologies like the metaverse.',
    prerequisites: [
      'Programming fundamentals (preferably C++, C#, or JavaScript)',
      'Understanding of object-oriented design principles',
      'Basic mathematics for game development (linear algebra, physics)',
      'Problem-solving and analytical thinking skills',
      'Familiarity with game design concepts and player psychology'
    ],
    skillsToLearn: [
      'Game engine proficiency (Unity, Unreal Engine)',
      'Game physics programming and implementation',
      'Graphics programming and shader development',
      '2D/3D asset creation and integration',
      'Game UI/UX design and implementation',
      'Multiplayer networking and architecture',
      'Game AI programming techniques',
      'Performance optimization for targeted platforms',
      'Sound integration and audio programming',
      'Version control and collaborative development practices'
    ],
    potentialCareerPaths: [
      'Game Programmer/Developer',
      'Game Designer',
      'Graphics Programmer',
      'AI Programmer',
      'Game Engine Developer',
      'Technical Artist',
      'VR/AR Developer',
      'Game Producer',
      'Mobile Game Developer',
      'Independent Game Developer'
    ]
  },
  { 
    title: 'Design', 
    icon: '🎨', 
    shortDescription: 'Create user interfaces and experiences that are both beautiful and functional',
    longDescription: 'Design in the technology sector encompasses several specialized disciplines focused on creating intuitive, accessible, and visually appealing digital experiences. UX (User Experience) designers conduct user research, create personas, develop information architecture, and design user flows to ensure products address actual user needs and behaviors. UI (User Interface) designers focus on visual elements including typography, color schemes, iconography, and interactive components that users directly engage with. Interaction designers specialize in creating meaningful relationships between users and products, determining how interfaces respond to user inputs. Product designers often integrate all these aspects, overseeing the end-to-end design process from concept to implementation. The work involves proficiency with design tools like Figma, Adobe XD, or Sketch, and understanding of design systems, accessibility standards, and responsive design principles. Beyond technical skills, designers need empathy to understand user perspectives, communication skills to articulate design decisions, and collaboration abilities to work effectively with developers, product managers, and other stakeholders. As organizations increasingly recognize that exceptional design provides competitive advantage, opportunities for design professionals continue to expand across technology companies, digital agencies, enterprises undergoing digital transformation, and product-focused startups.',
    prerequisites: [
      'Visual design fundamentals (color theory, typography, layout)',
      'Basic understanding of user-centered design principles',
      'Knowledge of design thinking methodology',
      'Familiarity with web and mobile interface conventions',
      'Critical thinking and problem-solving abilities'
    ],
    skillsToLearn: [
      'Proficiency in design tools (Figma, Adobe XD, Sketch)',
      'User research methods and usability testing',
      'Information architecture and content strategy',
      'Wireframing and prototyping techniques',
      'Interaction design patterns and microinteractions',
      'Design systems creation and maintenance',
      'Accessibility standards and inclusive design',
      'Visual communication and presentation skills',
      'HTML/CSS for designers (understanding capabilities)',
      'Animation and motion design principles'
    ],
    potentialCareerPaths: [
      'UX Designer',
      'UI Designer',
      'Product Designer',
      'Interaction Designer',
      'UX Researcher',
      'Design System Specialist',
      'Creative Director',
      'Design Manager',
      'Design Strategist',
      'Service Designer'
    ]
  },
  { 
    title: 'DevOps', 
    icon: '⚙️', 
    shortDescription: 'Bridge development and operations to streamline software delivery',
    longDescription: 'DevOps represents both a cultural philosophy and technical practice that bridges the traditional gap between software development and IT operations teams. DevOps engineers facilitate collaboration between these previously siloed departments, implementing processes and tools that enable continuous integration, continuous delivery, and infrastructure automation. Their responsibilities include building and maintaining CI/CD pipelines, implementing infrastructure as code using tools like Terraform or CloudFormation, containerizing applications with Docker, orchestrating deployments with Kubernetes, and monitoring system performance. The role requires proficiency in scripting languages (like Python or Bash), version control systems, configuration management tools, cloud platforms (AWS, Azure, GCP), and observability solutions. Beyond technical implementation, DevOps practitioners champion organizational changes that promote faster delivery cycles, increased deployment frequency, more reliable releases, and improved recovery times. They balance the development team\'s drive for rapid innovation with operations\' focus on stability and reliability. As organizations increasingly adopt cloud-native architectures and microservices, DevOps expertise becomes essential for managing complex, distributed systems. The field continues to evolve with emerging practices like DevSecOps (integrating security throughout the development lifecycle) and platform engineering (creating self-service developer platforms), offering abundant career opportunities across organizations seeking to modernize their software delivery capabilities.',
    prerequisites: [
      'System administration fundamentals (Linux/Windows)',
      'Understanding of software development lifecycle',
      'Basic networking knowledge',
      'Command line and scripting experience (Bash, Python)',
      'Version control concepts (particularly Git)'
    ],
    skillsToLearn: [
      'CI/CD pipeline implementation (Jenkins, GitHub Actions, GitLab CI)',
      'Infrastructure as Code (Terraform, CloudFormation, Ansible)',
      'Containerization and orchestration (Docker, Kubernetes)',
      'Cloud platform expertise (AWS, Azure, GCP)',
      'Monitoring and observability tools (Prometheus, Grafana, ELK stack)',
      'Configuration management tools (Ansible, Chef, Puppet)',
      'Site Reliability Engineering practices',
      'Database administration and optimization',
      'Security automation and DevSecOps principles',
      'Incident management and postmortem processes'
    ],
    potentialCareerPaths: [
      'DevOps Engineer',
      'Site Reliability Engineer (SRE)',
      'Cloud Engineer',
      'Platform Engineer',
      'DevSecOps Engineer',
      'Infrastructure Engineer',
      'Automation Specialist',
      'Release Engineer',
      'DevOps Architect',
      'DevOps Manager/Director'
    ]
  },
  { 
    title: 'Cloud Computing', 
    icon: '☁️', 
    shortDescription: 'Build and manage scalable infrastructure and services in the cloud',
    longDescription: 'Cloud Computing has fundamentally transformed how organizations build, deploy, and scale technology infrastructure and services. Cloud professionals architect and manage computing resources that are delivered over the internet, enabling businesses to access computing power, storage, databases, and applications without directly managing physical hardware. The field encompasses various service models including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), with practitioners specializing in major platforms like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform. Cloud architects design resilient, secure, and cost-effective cloud environments, implementing best practices for high availability, disaster recovery, and performance optimization. Cloud engineers automate infrastructure provisioning and management using infrastructure as code tools, integrate cloud services, and develop cloud-native applications. Cloud security specialists focus on implementing appropriate access controls, encryption, network security, and compliance measures for cloud environments. The work requires understanding of networking fundamentals, virtualization technologies, containerization, serverless computing, and distributed systems architecture. As businesses continue digital transformation initiatives and migrate from traditional data centers to cloud environments, demand for cloud expertise remains exceptionally strong across all industries, offering diverse career paths from cloud architect and engineer to cloud security specialist and FinOps (cloud financial operations) professional.',
    prerequisites: [
      'Networking fundamentals (TCP/IP, DNS, load balancing)',
      'Understanding of virtualization concepts',
      'Basic system administration skills',
      'Familiarity with distributed systems concepts',
      'Knowledge of security principles'
    ],
    skillsToLearn: [
      'Major cloud platform expertise (AWS, Azure, GCP)',
      'Infrastructure as Code and automation (Terraform, CloudFormation)',
      'Cloud architecture patterns and best practices',
      'Containerization and orchestration (Docker, Kubernetes)',
      'Serverless computing and FaaS (Lambda, Azure Functions)',
      'Cloud security and compliance implementation',
      'High availability and disaster recovery design',
      'Cloud cost optimization and FinOps principles',
      'Multi-cloud and hybrid cloud strategies',
      'CI/CD for cloud-native applications'
    ],
    potentialCareerPaths: [
      'Cloud Solutions Architect',
      'Cloud Engineer/Administrator',
      'Cloud Security Specialist',
      'Cloud DevOps Engineer',
      'Cloud Network Engineer',
      'Multi-cloud Specialist',
      'FinOps/Cloud Financial Analyst',
      'Cloud Migration Specialist',
      'Serverless Applications Developer',
      'Cloud Platform Manager'
    ]
  },
  { 
    title: 'Blockchain', 
    icon: '🔗', 
    shortDescription: 'Develop decentralized applications and smart contracts',
    longDescription: 'Blockchain technology represents a revolutionary approach to storing and transmitting data through a distributed, immutable ledger system. Blockchain developers create decentralized applications (dApps) and platforms that operate without central authorities, enabling peer-to-peer transactions with enhanced security, transparency, and trust. The field encompasses several specializations including core blockchain development (building and optimizing blockchain protocols), smart contract development (programming self-executing contracts on platforms like Ethereum using languages such as Solidity), and dApp development (creating front-end interfaces that interact with blockchain backends). The work involves understanding cryptographic principles, consensus mechanisms, distributed systems architecture, and tokenomics. Beyond cryptocurrency applications, blockchain technology is being implemented across diverse sectors including supply chain management, healthcare record systems, digital identity verification, intellectual property protection, and decentralized finance (DeFi). Blockchain developers must navigate technical challenges including scalability limitations, interoperability between different blockchain networks, and security considerations unique to decentralized systems. The field continues to evolve rapidly with emerging approaches like layer-2 scaling solutions, cross-chain protocols, and non-fungible tokens (NFTs). While the blockchain space experiences cyclical market fluctuations, the underlying technology continues to mature, offering career opportunities for developers passionate about building the infrastructure for a more decentralized digital economy.',
    prerequisites: [
      'Programming fundamentals (JavaScript, Python, or other languages)',
      'Understanding of cryptographic principles',
      'Knowledge of distributed systems concepts',
      'Familiarity with web development technologies',
      'Basic understanding of economic and game theory principles'
    ],
    skillsToLearn: [
      'Blockchain-specific languages (Solidity, Rust, Go)',
      'Smart contract development and best practices',
      'Web3 libraries and development tools (ethers.js, web3.js, Truffle)',
      'Decentralized application (dApp) architecture',
      'Consensus mechanisms and blockchain protocols',
      'Cryptographic techniques and implementations',
      'Security audit processes for blockchain applications',
      'Tokenomics and blockchain-based business models',
      'Layer 2 scaling solutions and interoperability protocols',
      'Decentralized finance (DeFi) concepts and implementations'
    ],
    potentialCareerPaths: [
      'Blockchain Developer',
      'Smart Contract Engineer',
      'DApp Developer',
      'Blockchain Solutions Architect',
      'Blockchain Security Auditor',
      'Protocol Developer',
      'Tokenomics Designer',
      'Blockchain Consultant',
      'DeFi Developer',
      'Blockchain Researcher'
    ]
  },
  { 
    title: 'Software Testing', 
    icon: '✅', 
    shortDescription: 'Ensure quality and reliability of software applications',
    longDescription: 'Software Testing plays a critical role in delivering reliable, functional, and user-friendly applications by systematically identifying defects and verifying that software meets specified requirements. Quality Assurance (QA) engineers and testers implement comprehensive testing strategies across the software development lifecycle, from requirements validation through post-release monitoring. The field encompasses multiple testing methodologies including manual testing (executing test cases without automation tools), automated testing (using frameworks like Selenium, Cypress, or Jest to programmatically verify functionality), and specialized testing types such as performance testing, security testing, accessibility testing, and usability testing. Testing professionals develop test plans, design test cases, create testing environments, execute tests, document defects, and validate fixes. Modern testing practices emphasize shift-left approaches that integrate testing earlier in development cycles and continuous testing within CI/CD pipelines. The role requires technical knowledge to understand application architecture, analytical skills to identify potential failure scenarios, and communication abilities to effectively report issues to development teams. As software complexity increases and organizations adopt DevOps practices with faster release cycles, the testing field has evolved from a purely verification role to a quality engineering discipline focused on building quality into products from the beginning. Software testing offers diverse career paths including test automation engineer, performance engineer, security tester, and quality engineering leader.',
    prerequisites: [
      'Understanding of software development lifecycle',
      'Basic programming knowledge',
      'Analytical thinking and attention to detail',
      'Problem-solving and debugging skills',
      'Communication and documentation abilities'
    ],
    skillsToLearn: [
      'Test planning and strategy development',
      'Test case design techniques',
      'Automated testing frameworks (Selenium, Cypress, JUnit, TestNG)',
      'API testing tools and methodologies',
      'Performance testing tools (JMeter, Locust)',
      'Mobile application testing approaches',
      'Continuous integration testing integration',
      'Test management tools and processes',
      'Security testing fundamentals',
      'Accessibility and usability testing principles'
    ],
    potentialCareerPaths: [
      'QA Engineer/Tester',
      'Test Automation Engineer',
      'Performance Test Engineer',
      'Security Test Engineer',
      'API Test Specialist',
      'Mobile Test Engineer',
      'QA Analyst',
      'Test Architect',
      'Quality Engineering Manager',
      'DevOps Tester'
    ]
  },
  { 
    title: 'Backend Development', 
    icon: '🖥️', 
    shortDescription: 'Build robust server-side applications and APIs',
    longDescription: 'Backend Development focuses on creating and maintaining the server-side components that power digital products and services. Backend developers build the core application logic, database interactions, and APIs (Application Programming Interfaces) that enable frontend interfaces to function effectively. The work involves designing efficient database schemas, implementing business logic, processing user inputs, handling authentication and authorization, optimizing server performance, and ensuring data security. Backend developers typically specialize in server-side languages and frameworks such as Node.js, Python with Django or Flask, Ruby on Rails, Java with Spring, PHP with Laravel, or .NET with C#. Database expertise is essential, encompassing both relational databases (like PostgreSQL, MySQL) and NoSQL solutions (like MongoDB, Redis). Modern backend development increasingly incorporates cloud services, containerization, microservices architecture, message queues, and serverless computing paradigms. The role requires not only technical proficiency but also systems thinking to architect scalable solutions that can handle growing user bases and data volumes while maintaining reliability and performance. As digital transformation continues across industries and applications become more complex and data-intensive, backend developers remain fundamental to creating the robust foundations that support innovative user experiences.',
    prerequisites: [
      'Core programming concepts and at least one backend language',
      'Understanding of data structures and algorithms',
      'Basic database knowledge and SQL fundamentals',
      'API concepts and HTTP protocol basics',
      'Command line and version control proficiency'
    ],
    skillsToLearn: [
      'Backend frameworks (Node.js/Express, Django, Rails, Spring, Laravel)',
      'Database design, optimization, and management',
      'RESTful and GraphQL API design and implementation',
      'Authentication and authorization mechanisms',
      'Asynchronous processing and message queues',
      'Caching strategies and implementations',
      'Microservices architecture patterns',
      'Serverless computing concepts and frameworks',
      'API security best practices and implementation',
      'Logging, monitoring, and debugging techniques'
    ],
    potentialCareerPaths: [
      'Backend Developer',
      'API Developer',
      'Database Administrator/Developer',
      'Server-side Engineer',
      'Systems Architect',
      'DevOps Engineer (backend-focused)',
      'Cloud Backend Engineer',
      'Microservices Specialist',
      'Technical Lead/Engineering Manager',
      'Enterprise Solutions Developer'
    ]
  }
];

export default careerData;

// Function to insert all career data
export const insertCareerData = async () => {
  try {
    // Delete existing data first (optional - remove if you want to keep existing data)
    await Career.deleteMany({});
    console.log('Cleared existing career data');
    
    // Insert all career data at once
    const result = await Career.insertMany(careerData);
    console.log(`Successfully inserted ${result.length} career records`);
    
    // Disconnect from MongoDB
    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error inserting career data:', error);
    mongoose.disconnect();
  }
};
