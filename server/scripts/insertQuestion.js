import connectDB from "../config/db.js";
import Question from "../models/questionsModel.js";


const questions = [
  {
    questionText: "What part of technology excites you the most?",
    options: [
      {
        text: "Designing interactive and engaging user experiences",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Building and managing systems that run applications",
        field: "Backend",
        points: 10,
      },
      {
        text: "Creating intelligent systems that can learn from data",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Creating beautiful and functional designs",
        field: "Design",
        points: 10,
      },
      {
        text: "Building systems that scale and work globally",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "How do you prefer to work?",
    options: [
      {
        text: "Making sure everything looks great and works smoothly for users",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Building the behind-the-scenes infrastructure that powers applications",
        field: "Backend",
        points: 10,
      },
      {
        text: "Using data to find trends and predict future outcomes",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Creating secure systems and networks",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Building games that people can enjoy on different platforms",
        field: "Game Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which activity do you enjoy the most?",
    options: [
      {
        text: "Creating apps or websites that are easy for users to navigate",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Developing the logic that powers websites and apps",
        field: "Backend",
        points: 10,
      },
      {
        text: "Building smart systems that can make decisions on their own",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Building the tools that other developers use to deploy and manage applications",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Ensuring the safety of data and networks",
        field: "Cybersecurity",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "What motivates you to learn more about technology?",
    options: [
      {
        text: "The ability to create something that people will use daily",
        field: "Frontend",
        points: 10,
      },
      {
        text: "The opportunity to improve how things work behind the scenes",
        field: "Backend",
        points: 10,
      },
      {
        text: "Understanding how data can be used to make decisions",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Protecting people and systems from security threats",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Making games that are fun and immersive",
        field: "Game Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText:
      "Which area do you think is the most important for technology today?",
    options: [
      {
        text: "Building software that is efficient and easy to use",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Creating powerful, secure systems that users never see",
        field: "Backend",
        points: 10,
      },
      {
        text: "Analyzing data to predict future trends and behaviors",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Securing systems to ensure that data is protected",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Developing systems that can handle the complex infrastructure of the cloud",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText:
      "If you could choose a project, which one would you be most excited to work on?",
    options: [
      {
        text: "Building a mobile app with a great user interface",
        field: "Mobile Development",
        points: 10,
      },
      {
        text: "Creating a machine learning model that can predict future behavior",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Designing a system to handle millions of users without slowing down",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Ensuring users' data is safe and secure on the web",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Creating a game that can be enjoyed across multiple platforms",
        field: "Game Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText:
      "What do you like to focus on when you're learning something new?",
    options: [
      {
        text: "The visual design and usability of the interface",
        field: "Design",
        points: 10,
      },
      {
        text: "How to make the system work efficiently and scale",
        field: "DevOps",
        points: 10,
      },
      {
        text: "The logic and algorithms behind the application",
        field: "Backend",
        points: 10,
      },
      {
        text: "Building systems that can understand and process data",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Creating smooth user interactions and experiences",
        field: "Frontend",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText:
      "What part of a game would you find most challenging to work on?",
    options: [
      {
        text: "Designing levels and user interactions",
        field: "Game Development",
        points: 10,
      },
      {
        text: "Building complex game logic and AI",
        field: "Game Development",
        points: 10,
      },
      {
        text: "Optimizing the game to run smoothly on different devices",
        field: "Mobile Development",
        points: 10,
      },
      {
        text: "Creating multiplayer experiences with secure interactions",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Building tools that developers use to create the game",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText:
      "Which of the following best describes your ideal work environment?",
    options: [
      {
        text: "Working on the user interface and ensuring it's intuitive",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Writing code to ensure applications run smoothly and efficiently",
        field: "Backend",
        points: 10,
      },
      {
        text: "Building algorithms that can learn from large sets of data",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Protecting systems from vulnerabilities and breaches",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Helping organizations deploy and manage their IT systems",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which area of development interests you the most?",
    options: [
      {
        text: "Building and maintaining websites and apps that people use every day",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Creating secure and scalable infrastructure for applications",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Optimizing applications for performance and scalability",
        field: "Backend",
        points: 10,
      },
      {
        text: "Building intelligent systems that can learn and evolve",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Creating engaging and innovative game experiences",
        field: "Game Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
];

// Additional questions for tech field assessment quiz
const additionalQuestions = [
  // EASY DIFFICULTY QUESTIONS (General life preferences)
  {
    questionText: "How do you approach solving a complex problem?",
    options: [
      {
        text: "Visualize it and create a user-friendly solution",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Break it down into logical components and solve systematically",
        field: "Backend",
        points: 10,
      },
      {
        text: "Analyze patterns and look for connections in the data",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Consider potential vulnerabilities and risks first",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Create a robust system that can handle the problem at scale",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "When working on a group project, which role do you naturally gravitate toward?",
    options: [
      {
        text: "The creative who makes sure everything looks good and is user-friendly",
        field: "Design",
        points: 10,
      },
      {
        text: "The architect who plans how everything will work together",
        field: "Backend",
        points: 10,
      },
      {
        text: "The analyzer who looks at data and metrics to measure success",
        field: "Data Science",
        points: 10,
      },
      {
        text: "The optimizer who ensures everything runs efficiently",
        field: "DevOps",
        points: 10,
      },
      {
        text: "The innovator who suggests cutting-edge approaches to problems",
        field: "AI/ML",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "How do you prefer to learn something new?",
    options: [
      {
        text: "Through visual tutorials and interactive examples",
        field: "Frontend",
        points: 10,
      },
      {
        text: "By understanding the underlying concepts and theory first",
        field: "Backend",
        points: 10,
      },
      {
        text: "By analyzing examples and finding patterns",
        field: "Data Science",
        points: 10,
      },
      {
        text: "By building small projects and learning hands-on",
        field: "Mobile Development",
        points: 10,
      },
      {
        text: "By understanding how it connects to existing systems",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "What aspect of a smartphone app would you be most interested in improving?",
    options: [
      {
        text: "The user interface and overall user experience",
        field: "Design",
        points: 10,
      },
      {
        text: "How quickly and efficiently it processes data",
        field: "Backend",
        points: 10,
      },
      {
        text: "How well it predicts and suggests content for users",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "How secure it is against potential breaches",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "How it performs across different devices and platforms",
        field: "Mobile Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "When you encounter a bug or issue with a website, what's your first thought?",
    options: [
      {
        text: "How is this affecting the user experience?",
        field: "Frontend",
        points: 10,
      },
      {
        text: "What might be happening in the backend code?",
        field: "Backend",
        points: 10,
      },
      {
        text: "Could this be a security vulnerability?",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "How could this be systematically tested and prevented?",
        field: "Software Testing",
        points: 10,
      },
      {
        text: "Is this an infrastructure or deployment issue?",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which of these activities would you enjoy most in your free time?",
    options: [
      {
        text: "Redesigning websites or apps to make them more user-friendly",
        field: "Design",
        points: 10,
      },
      {
        text: "Building automation tools to make daily tasks easier",
        field: "Backend",
        points: 10,
      },
      {
        text: "Playing strategic games that require logical thinking",
        field: "Game Development",
        points: 10,
      },
      {
        text: "Reading about the latest tech innovations and breakthroughs",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Configuring and optimizing your personal devices and networks",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "What would your friends or colleagues say you're best at?",
    options: [
      {
        text: "Making things look good and creating great user experiences",
        field: "Design",
        points: 10,
      },
      {
        text: "Solving complex problems with logical solutions",
        field: "Backend",
        points: 10,
      },
      {
        text: "Finding patterns and insights in information",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Being cautious and considering all security implications",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Innovating and coming up with new approaches",
        field: "AI/ML",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "If you could instantly master one skill, which would you choose?",
    options: [
      {
        text: "Creating beautiful and intuitive designs",
        field: "Design",
        points: 10,
      },
      {
        text: "Building complex and efficient systems",
        field: "Backend",
        points: 10,
      },
      {
        text: "Understanding and applying advanced mathematics",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Securing systems against any possible threat",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Building immersive virtual worlds and experiences",
        field: "Game Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "How do you organize your personal digital files?",
    options: [
      {
        text: "Visually with color coding and intuitive naming",
        field: "Design",
        points: 10,
      },
      {
        text: "With a structured hierarchy and logical naming conventions",
        field: "Backend",
        points: 10,
      },
      {
        text: "Using tags and metadata for easy searching and analysis",
        field: "Data Science",
        points: 10,
      },
      {
        text: "With backup systems and access controls in place",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "In the cloud with automated organization and syncing",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "When watching a movie with advanced special effects, what impresses you most?",
    options: [
      {
        text: "How realistic and visually stunning the effects look",
        field: "Design",
        points: 10,
      },
      {
        text: "How they created the underlying technology to make it possible",
        field: "Backend",
        points: 10,
      },
      {
        text: "How AI might have been used to enhance the scenes",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "How multiple systems worked together to create the final product",
        field: "DevOps",
        points: 10,
      },
      {
        text: "How interactive elements might translate to gaming experiences",
        field: "Game Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "How do you typically react when facing a tight deadline?",
    options: [
      {
        text: "Focus on making the most visible and impactful improvements first",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Prioritize core functionality over additional features",
        field: "Backend",
        points: 10,
      },
      {
        text: "Use data to determine what's most important to complete",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Ensure no security corners are cut despite the pressure",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Automate repetitive tasks to save time",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which aspect of a smart home would you be most interested in working on?",
    options: [
      {
        text: "The user interfaces and control panels",
        field: "Frontend",
        points: 10,
      },
      {
        text: "The systems that connect and control devices",
        field: "Backend",
        points: 10,
      },
      {
        text: "The AI that learns user preferences and behaviors",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Ensuring the home network and devices are secure",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "The mobile apps that allow remote control",
        field: "Mobile Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "What would your ideal workspace look like?",
    options: [
      {
        text: "Visually inspiring with good design and aesthetics",
        field: "Design",
        points: 10,
      },
      {
        text: "Organized and structured for maximum productivity",
        field: "Backend",
        points: 10,
      },
      {
        text: "Surrounded by the latest tech gadgets and innovations",
        field: "Mobile Development",
        points: 10,
      },
      {
        text: "Secure and private with controlled access",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Collaborative and integrated with cloud tools",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "When you hear about a new technology, what's your first question?",
    options: [
      {
        text: "How will users interact with it?",
        field: "Frontend",
        points: 10,
      },
      {
        text: "How does it work under the hood?",
        field: "Backend",
        points: 10,
      },
      {
        text: "What kind of data does it generate or use?",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Is it secure and how could it be compromised?",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "How could it be integrated into existing systems?",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "What aspect of social media platforms interests you most?",
    options: [
      {
        text: "How they create engaging user experiences",
        field: "Frontend",
        points: 10,
      },
      {
        text: "How they handle millions of users simultaneously",
        field: "Backend",
        points: 10,
      },
      {
        text: "How they personalize content using algorithms",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "How they protect user data and privacy",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "How they deploy updates without disruption",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "If you were to create a personal project, what would it likely involve?",
    options: [
      {
        text: "A beautiful website or app with great usability",
        field: "Frontend",
        points: 10,
      },
      {
        text: "A useful tool that solves a specific problem efficiently",
        field: "Backend",
        points: 10,
      },
      {
        text: "An AI that can help with daily tasks or decisions",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "A secure system for managing personal information",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "A mobile app that works across different devices",
        field: "Mobile Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "How do you feel about working with other people's code?",
    options: [
      {
        text: "I enjoy improving the user interface and experience",
        field: "Frontend",
        points: 10,
      },
      {
        text: "I like optimizing and enhancing the underlying functionality",
        field: "Backend",
        points: 10,
      },
      {
        text: "I'm interested in how the data flows through the system",
        field: "Data Science",
        points: 10,
      },
      {
        text: "I focus on identifying and fixing security vulnerabilities",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "I enjoy improving how the code is deployed and maintained",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which of these statements best describes you?",
    options: [
      {
        text: "I notice when things don't look right or feel intuitive",
        field: "Design",
        points: 10,
      },
      {
        text: "I like to understand how systems work from the inside out",
        field: "Backend",
        points: 10,
      },
      {
        text: "I'm fascinated by patterns and what data can tell us",
        field: "Data Science",
        points: 10,
      },
      {
        text: "I'm always thinking about potential risks and how to mitigate them",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "I enjoy building things that respond intelligently to input",
        field: "AI/ML",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "When playing video games, what aspect do you appreciate most?",
    options: [
      {
        text: "The visual design and user interface",
        field: "Design",
        points: 10,
      },
      {
        text: "The game mechanics and how systems interact",
        field: "Backend",
        points: 10,
      },
      {
        text: "The AI and how enemies or NPCs behave",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "The online security and fairness of multiplayer",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "The overall performance and lack of technical issues",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "What would you most like to automate in your daily life?",
    options: [
      {
        text: "Organization of information for easy access",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Repetitive tasks that follow predictable patterns",
        field: "Backend",
        points: 10,
      },
      {
        text: "Decision-making based on available data",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Security monitoring and threat detection",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Synchronization across multiple devices and platforms",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which of these historical figures would you most want to meet?",
    options: [
      {
        text: "Leonardo da Vinci, for his artistic and design innovations",
        field: "Design",
        points: 10,
      },
      {
        text: "Alan Turing, for his contributions to computing fundamentals",
        field: "Backend",
        points: 10,
      },
      {
        text: "Ada Lovelace, the first computer programmer",
        field: "Software Testing",
        points: 10,
      },
      {
        text: "Nikola Tesla, for his revolutionary technological innovations",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Grace Hopper, pioneer in computer programming languages",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "What do you do first when trying a new app or software?",
    options: [
      {
        text: "Explore the interface and see how it looks and feels",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Try to understand how the core features work",
        field: "Backend",
        points: 10,
      },
      {
        text: "Check the privacy settings and permissions it requires",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Look for integration capabilities with other tools I use",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Test its performance on different devices or platforms",
        field: "Mobile Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which of these books would you most likely pick up?",
    options: [
      {
        text: "A guide to creating intuitive user experiences",
        field: "Design",
        points: 10,
      },
      {
        text: "An exploration of efficient algorithms and data structures",
        field: "Backend",
        points: 10,
      },
      {
        text: "A deep dive into machine learning and neural networks",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "A handbook on ethical hacking and cybersecurity",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "A guide to building scalable cloud infrastructures",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "What aspect of a self-driving car would you find most fascinating?",
    options: [
      {
        text: "The user interface and how people interact with it",
        field: "Frontend",
        points: 10,
      },
      {
        text: "The underlying systems that control the vehicle",
        field: "Backend",
        points: 10,
      },
      {
        text: "The AI that makes driving decisions",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "The security measures to prevent hacking",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "The real-time data processing and analysis",
        field: "Data Science",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  {
    questionText: "If you were to teach someone about technology, what would you focus on?",
    options: [
      {
        text: "How to create intuitive and accessible interfaces",
        field: "Frontend",
        points: 10,
      },
      {
        text: "How systems work behind the scenes",
        field: "Backend",
        points: 10,
      },
      {
        text: "How to analyze and interpret data",
        field: "Data Science",
        points: 10,
      },
      {
        text: "How to stay safe and protect privacy online",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "How to build and deploy applications efficiently",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "easy",
    questionType: "multipleChoice",
  },
  // MEDIUM DIFFICULTY QUESTIONS (More technical)
  {
    questionText: "Which programming paradigm do you prefer working with?",
    options: [
      {
        text: "Event-driven programming for interactive interfaces",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Object-oriented programming for structured systems",
        field: "Backend",
        points: 10,
      },
      {
        text: "Functional programming for data processing pipelines",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Protocol-oriented programming for secure communications",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Declarative programming for configuration management",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which of these tools would you be most excited to master?",
    options: [
      {
        text: "React or Vue.js for building interactive UIs",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Node.js or Django for server-side applications",
        field: "Backend",
        points: 10,
      },
      {
        text: "TensorFlow or PyTorch for machine learning",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Docker or Kubernetes for containerization",
        field: "DevOps",
        points: 10,
      },
      {
        text: "AWS or Azure for cloud services",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "When debugging an issue, what's your usual approach?",
    options: [
      {
        text: "Check the UI for visual clues and inspect element behavior",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Trace through the code execution and check logs",
        field: "Backend",
        points: 10,
      },
      {
        text: "Analyze the data flow and look for anomalies",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Monitor system resources and infrastructure status",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Write tests to isolate and reproduce the issue",
        field: "Software Testing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which aspect of application performance would you prioritize?",
    options: [
      {
        text: "Fast load times and responsive UI interactions",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Efficient database queries and API responses",
        field: "Backend",
        points: 10,
      },
      {
        text: "Optimized algorithm execution and data processing",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Resource usage and infrastructure scaling",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Memory management and battery efficiency on devices",
        field: "Mobile Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "What type of data structure do you find most interesting?",
    options: [
      {
        text: "DOM trees for managing UI elements",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Graphs and trees for modeling relationships",
        field: "Backend",
        points: 10,
      },
      {
        text: "Matrices and tensors for data analysis",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Hash tables and encryption algorithms",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Distributed data stores and caches",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which of these coding tasks would you enjoy most?",
    options: [
      {
        text: "Creating responsive layouts and animations",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Optimizing database queries and API endpoints",
        field: "Backend",
        points: 10,
      },
      {
        text: "Building and training machine learning models",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Setting up CI/CD pipelines and deployment scripts",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Implementing secure authentication systems",
        field: "Cybersecurity",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which technology trend are you most excited about?",
    options: [
      {
        text: "WebAssembly and progressive web apps",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Serverless architectures and microservices",
        field: "Backend",
        points: 10,
      },
      {
        text: "Advanced AI and generative models",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Zero-trust security and advanced threat protection",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Blockchain and decentralized applications",
        field: "Blockchain",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "What's your preferred development methodology?",
    options: [
      {
        text: "Design-driven development with user feedback",
        field: "Design",
        points: 10,
      },
      {
        text: "Test-driven development with clear specifications",
        field: "Software Testing",
        points: 10,
      },
      {
        text: "Data-driven development with metrics and analysis",
        field: "Data Science",
        points: 10,
      },
      {
        text: "DevOps methodology with continuous deployment",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Agile methodology with frequent iterations",
        field: "Backend",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "When evaluating a tech stack for a new project, what's your top priority?",
    options: [
      {
        text: "Rich UI capabilities and component libraries",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Performance, scalability, and reliability",
        field: "Backend",
        points: 10,
      },
      {
        text: "Available libraries for data processing and ML",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Security features and vulnerability management",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Ease of deployment and infrastructure management",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",  
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    
      questionText: "Which of these APIs or services would you be most interested in working with?",
      options: [
        {
          text: "Canvas API or WebGL for graphics and animations",
          field: "Frontend",
          points: 10,
        },
        {
          text: "GraphQL or REST APIs for data exchange",
          field: "Backend",
          points: 10,
        },
        {
          text: "Natural Language Processing APIs for text analysis",
          field: "AI/ML",
          points: 10,
        },
        {
          text: "OAuth or JWT for secure authentication",
          field: "Cybersecurity",
          points: 10,
        },
        {
          text: "Cloud Functions or Lambda for serverless computing",
          field: "DevOps",
          points: 10,
        }
      ],
      category: "General",
      difficulty: "medium",
      questionType: "multipleChoice"
    
  } 
]   


    // MEDIUM DIFFICULTY QUESTIONS (More technical)
const additionalMediumQuestions = [
  {
    questionText: "Which programming paradigm do you prefer working with?",
    options: [
      {
        text: "Event-driven programming for interactive interfaces",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Object-oriented programming for structured systems",
        field: "Backend",
        points: 10,
      },
      {
        text: "Functional programming for data processing pipelines",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Protocol-oriented programming for secure communications",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Declarative programming for configuration management",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which of these tools would you be most excited to master?",
    options: [
      {
        text: "React or Vue.js for building interactive UIs",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Node.js or Django for server-side applications",
        field: "Backend",
        points: 10,
      },
      {
        text: "TensorFlow or PyTorch for machine learning",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Docker or Kubernetes for containerization",
        field: "DevOps",
        points: 10,
      },
      {
        text: "AWS or Azure for cloud services",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "When debugging an issue, what's your usual approach?",
    options: [
      {
        text: "Check the UI for visual clues and inspect element behavior",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Trace through the code execution and check logs",
        field: "Backend",
        points: 10,
      },
      {
        text: "Analyze the data flow and look for anomalies",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Monitor system resources and infrastructure status",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Write tests to isolate and reproduce the issue",
        field: "Software Testing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which aspect of application performance would you prioritize?",
    options: [
      {
        text: "Fast load times and responsive UI interactions",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Efficient database queries and API responses",
        field: "Backend",
        points: 10,
      },
      {
        text: "Optimized algorithm execution and data processing",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Resource usage and infrastructure scaling",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Memory management and battery efficiency on devices",
        field: "Mobile Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "What type of data structure do you find most interesting?",
    options: [
      {
        text: "DOM trees for managing UI elements",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Graphs and trees for modeling relationships",
        field: "Backend",
        points: 10,
      },
      {
        text: "Matrices and tensors for data analysis",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Hash tables and encryption algorithms",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Distributed data stores and caches",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which of these coding tasks would you enjoy most?",
    options: [
      {
        text: "Creating responsive layouts and animations",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Optimizing database queries and API endpoints",
        field: "Backend",
        points: 10,
      },
      {
        text: "Building and training machine learning models",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Setting up CI/CD pipelines and deployment scripts",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Implementing secure authentication systems",
        field: "Cybersecurity",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which technology trend are you most excited about?",
    options: [
      {
        text: "WebAssembly and progressive web apps",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Serverless architectures and microservices",
        field: "Backend",
        points: 10,
      },
      {
        text: "Advanced AI and generative models",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Zero-trust security and advanced threat protection",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Blockchain and decentralized applications",
        field: "Blockchain",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "What's your preferred development methodology?",
    options: [
      {
        text: "Design-driven development with user feedback",
        field: "Design",
        points: 10,
      },
      {
        text: "Test-driven development with clear specifications",
        field: "Software Testing",
        points: 10,
      },
      {
        text: "Data-driven development with metrics and analysis",
        field: "Data Science",
        points: 10,
      },
      {
        text: "DevOps methodology with continuous deployment",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Agile methodology with frequent iterations",
        field: "Backend",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "When evaluating a tech stack for a new project, what's your top priority?",
    options: [
      {
        text: "Rich UI capabilities and component libraries",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Performance, scalability, and reliability",
        field: "Backend",
        points: 10,
      },
      {
        text: "Available libraries for data processing and ML",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Security features and vulnerability management",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Ease of deployment and infrastructure management",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",  
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which of these APIs or services would you be most interested in working with?",
    options: [
      {
        text: "Canvas API or WebGL for graphics and animations",
        field: "Frontend",
        points: 10,
      },
      {
        text: "GraphQL or REST APIs for data exchange",
        field: "Backend",
        points: 10,
      },
      {
        text: "Natural Language Processing APIs for text analysis",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Authentication and identity management services",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Blockchain APIs for smart contracts",
        field: "Blockchain",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "How do you approach code optimization?",
    options: [
      {
        text: "Focus on rendering performance and UI responsiveness",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Optimize database queries and server response times",
        field: "Backend",
        points: 10,
      },
      {
        text: "Improve algorithm efficiency and data processing speed",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Streamline deployment pipelines and resource utilization",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Balance security measures with performance needs",
        field: "Cybersecurity",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which of these challenges would you find most interesting to solve?",
    options: [
      {
        text: "Optimizing a web application for various screen sizes and devices",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Designing a database schema that can handle complex relationships efficiently",
        field: "Backend",
        points: 10,
      },
      {
        text: "Creating an AI model that can accurately classify images or text",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Building a secure authentication system resistant to common attacks",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Setting up an automated deployment pipeline that scales with traffic",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which type of testing do you consider most important?",
    options: [
      {
        text: "User interface and end-to-end testing",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Unit testing and integration testing of backend components",
        field: "Backend",
        points: 10,
      },
      {
        text: "Testing model accuracy and preventing data drift",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Penetration testing and security vulnerability scanning",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Automated regression testing for continuous integration",
        field: "Software Testing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "When working with APIs, what do you focus on most?",
    options: [
      {
        text: "Creating intuitive client-side API consumption patterns",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Designing RESTful endpoints with clear documentation",
        field: "Backend",
        points: 10,
      },
      {
        text: "Optimizing data processing and analysis pipelines",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Implementing secure authentication and rate limiting",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Ensuring seamless integration with various services",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "What's your approach to handling technical debt?",
    options: [
      {
        text: "Refactor UI components for better reusability and maintenance",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Improve database design and optimize query performance",
        field: "Backend",
        points: 10,
      },
      {
        text: "Update models and algorithms with more efficient implementations",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Automate more of the deployment and testing process",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Address security vulnerabilities and update authentication methods",
        field: "Cybersecurity",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which aspect of software architecture is most important to you?",
    options: [
      {
        text: "Component-based architecture for reusable UI elements",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Service-oriented architecture with clear separation of concerns",
        field: "Backend",
        points: 10,
      },
      {
        text: "Data pipeline architecture for efficient processing",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Security-first architecture with defense in depth",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Cloud-native architecture with containerization",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which of these technologies would you most want to learn next?",
    options: [
      {
        text: "WebAssembly for high-performance web applications",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Rust for safe and efficient systems programming",
        field: "Backend",
        points: 10,
      },
      {
        text: "Reinforcement learning for advanced AI applications",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Blockchain development for decentralized applications",
        field: "Blockchain",
        points: 10,
      },
      {
        text: "Kubernetes for advanced container orchestration",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "How do you prefer to handle state management in applications?",
    options: [
      {
        text: "Using client-side state management libraries like Redux or Vuex",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Implementing stateless APIs with database persistence",
        field: "Backend",
        points: 10,
      },
      {
        text: "Using streaming data processing for real-time state updates",
        field: "Data Science",
        points: 10,
      },
      {
        text: "With secure session management and encryption",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Through distributed state management across services",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "What interests you most about mobile development?",
    options: [
      {
        text: "Creating intuitive and responsive mobile interfaces",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Building efficient APIs that work well on mobile networks",
        field: "Backend",
        points: 10,
      },
      {
        text: "Implementing on-device machine learning capabilities",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Ensuring secure data storage and transmission on mobile",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Creating cross-platform apps that work on multiple devices",
        field: "Mobile Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which database technology do you prefer working with?",
    options: [
      {
        text: "Client-side databases like IndexedDB for offline apps",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Relational databases like PostgreSQL for structured data",
        field: "Backend",
        points: 10,
      },
      {
        text: "NoSQL databases like MongoDB for flexible schemas",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Encrypted databases with strong access controls",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Distributed databases for highly available systems",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "What aspect of blockchain technology interests you most?",
    options: [
      {
        text: "Building user interfaces for decentralized applications",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Implementing smart contracts and blockchain logic",
        field: "Backend",
        points: 10,
      },
      {
        text: "Using AI for blockchain data analysis and prediction",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "The cryptographic security aspects of blockchain",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Building decentralized applications and tokenomics",
        field: "Blockchain",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which cloud computing concept do you find most interesting?",
    options: [
      {
        text: "Static site hosting and content delivery networks",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Serverless functions and backend-as-a-service",
        field: "Backend",
        points: 10,
      },
      {
        text: "Cloud-based machine learning and data processing",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Identity management and access control",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Infrastructure as code and automated provisioning",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "How do you approach learning a new programming language?",
    options: [
      {
        text: "Build a simple UI to understand how the language handles interactions",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Focus on the core language features and data structures",
        field: "Backend",
        points: 10,
      },
      {
        text: "Try to implement data analysis or machine learning algorithms",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Explore security features and potential vulnerabilities",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Set up CI/CD and testing frameworks for the language",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "What's your preferred way of handling concurrent operations?",
    options: [
      {
        text: "Using asynchronous JavaScript with promises or async/await",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Implementing threading or process-based concurrency",
        field: "Backend",
        points: 10,
      },
      {
        text: "Using data parallelism for large-scale processing",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Ensuring thread-safe operations with proper locking",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Orchestrating distributed tasks across multiple servers",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which software design pattern do you find most useful?",
    options: [
      {
        text: "Observer pattern for reactive UIs",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Repository pattern for data access",
        field: "Backend",
        points: 10,
      },
      {
        text: "Strategy pattern for algorithm implementation",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Decorator pattern for adding security layers",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Factory pattern for flexible object creation",
        field: "Software Testing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "What excites you most about the Internet of Things (IoT)?",
    options: [
      {
        text: "Creating user interfaces to control smart devices",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Building backend systems that manage device communication",
        field: "Backend",
        points: 10,
      },
      {
        text: "Using sensor data for predictive analytics",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Implementing security protocols for IoT networks",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Creating cloud infrastructures for IoT data processing",
        field: "Cloud Computing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "How do you approach accessibility in software development?",
    options: [
      {
        text: "Ensuring UI components are keyboard navigable and screen reader friendly",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Implementing standards-compliant APIs and data structures",
        field: "Backend",
        points: 10,
      },
      {
        text: "Creating AI models that are inclusive and unbiased",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Ensuring security measures don't impact accessibility",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Testing extensively across different devices and configurations",
        field: "Software Testing",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which aspect of game development interests you most?",
    options: [
      {
        text: "Creating compelling user interfaces and visual effects",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Implementing game mechanics and physics engines",
        field: "Backend",
        points: 10,
      },
      {
        text: "Developing AI for non-player characters and enemies",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Creating secure multiplayer experiences",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Optimizing performance across different hardware",
        field: "Game Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "What's your approach to code documentation?",
    options: [
      {
        text: "Focus on component usage examples and UI guidelines",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Document APIs, data models, and system architecture",
        field: "Backend",
        points: 10,
      },
      {
        text: "Explain algorithms and data processing techniques",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Detail security considerations and authentication flows",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Create comprehensive deployment and operation guides",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which performance optimization technique do you find most effective?",
    options: [
      {
        text: "Code splitting and lazy loading of UI components",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Database indexing and query optimization",
        field: "Backend",
        points: 10,
      },
      {
        text: "Vectorization and parallel processing for data analysis",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Load balancing and horizontal scaling",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Optimizing mobile app battery and memory usage",
        field: "Mobile Development",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "What's your preferred way to handle error management?",
    options: [
      {
        text: "Graceful UI degradation with user-friendly error messages",
        field: "Frontend",
        points: 10,
      },
      {
        text: "Structured error handling with detailed logging",
        field: "Backend",
        points: 10,
      },
      {
        text: "Statistical approaches to identify and handle outliers",
        field: "Data Science",
        points: 10,
      },
      {
        text: "Circuit breakers and fallback mechanisms",
        field: "DevOps",
        points: 10,
      },
      {
        text: "Fail-secure approaches that prioritize data protection",
        field: "Cybersecurity",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  },
  {
    questionText: "Which software quality attribute do you value most?",
    options: [
      {
        text: "Usability and aesthetic design",
        field: "Design",
        points: 10,
      },
      {
        text: "Performance and reliability",
        field: "Backend",
        points: 10,
      },
      {
        text: "Accuracy and predictability",
        field: "AI/ML",
        points: 10,
      },
      {
        text: "Security and data protection",
        field: "Cybersecurity",
        points: 10,
      },
      {
        text: "Scalability and availability",
        field: "DevOps",
        points: 10,
      },
    ],
    category: "General",
    difficulty: "medium",
    questionType: "multipleChoice",
  }
];



export const insertQuestions = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Insert all questions at once
    await Question.insertMany(questions);
    await Question.insertMany(additionalQuestions);
    await Question.insertMany(additionalMediumQuestions);


    console.log("Questions successfully inserted");

    // Close the connection
    mongoose.disconnect();
  } catch (err) {
    console.error("Error inserting questions:", err);
    mongoose.disconnect();
  }
};
