const courses = [
                {
                    id: 1,
                    title: "Frontend Development",
                    syllabus: [
                        { name: "HTML & CSS Basics", subtopics: ["HTML Structure", "Headings & Paragraphs", "Lists & Tables", "Forms & Inputs", "Semantic Tags", "CSS Selectors", "Colors & Typography", "Box Model", "Flexbox", "Grid Layout", "CSS Animations", "Media Queries"], progress: 0 },
                        { name: "JavaScript ES6+", subtopics: ["Variables & Scope", "Data Types", "Operators", "Functions", "Arrow Functions", "Objects & Arrays", "Loops & Conditionals", "DOM Manipulation", "Events & Event Listeners", "Promises & Async/Await", "Modules & Imports", "Fetch API", "Local Storage"], progress: 0 },
                        { name: "Responsive Design", subtopics: ["Mobile First Design", "Media Queries", "Bootstrap Basics", "Bootstrap Grid System", "CSS Grid & Flexbox", "Viewport Units", "Responsive Images", "Typography Scaling"], progress: 0 },
                        { name: "Version Control & Git", subtopics: ["Git Init", "Commit, Push & Pull", "Branching & Merging", "GitHub Repository Management", "Pull Requests", "Git Rebase", "Conflict Resolution"], progress: 0 },
                        { name: "Frontend Frameworks", subtopics: ["React.js Basics", "Component Lifecycle", "State & Props", "Hooks", "Routing & Navigation", "Redux State Management", "Context API", "Forms Handling", "React Router", "React Animations", "Vue.js Basics", "Angular Basics"], progress: 0 }
                    ]
                },
                {
                    id: 2,
                    title: "Backend Development",
                    syllabus: [
                        { name: "Java Programming", subtopics: ["OOP Concepts", "Classes & Objects", "Inheritance & Polymorphism", "Interfaces & Abstract Classes", "Collections Framework", "Streams API", "Exception Handling", "Generics", "File I/O", "Lambda Expressions"], progress: 0 },
                        { name: "Spring Boot", subtopics: ["Controllers & Routing", "Dependency Injection", "Service Layer", "Repositories & JPA", "Database Connectivity", "REST API Development", "Exception Handling", "Spring Security Basics", "Validation & DTOs", "Configuration & Profiles"], progress: 0 },
                        { name: "Node.js & Express.js", subtopics: ["Node.js Basics", "Express Routing", "Middleware", "REST API", "Authentication & JWT", "File Handling", "Error Handling", "Environment Variables", "Logging", "Database Integration"], progress: 0 },
                        { name: "Databases", subtopics: ["Relational Databases", "SQL Queries & Joins", "Indexes & Constraints", "Normalization", "Transactions", "Stored Procedures", "NoSQL Databases", "MongoDB CRUD", "Database Design Principles", "Data Backup & Recovery"], progress: 0 },
                        { name: "Authentication & Security", subtopics: ["JWT Tokens", "Spring Security Basics", "Role-Based Access Control", "Password Encryption", "OAuth2 Integration", "API Security Best Practices", "CORS Handling"], progress: 0 }
                    ]
                },
                {
                    id: 3,
                    title: "Full Stack Development",
                    syllabus: [
                        { name: "Frontend Frameworks", subtopics: ["React.js Basics", "Component Lifecycle", "State & Props", "Hooks", "Routing & Navigation", "Redux State Management", "Context API", "Forms Handling", "React Router", "React Animations", "Vue.js Basics", "Angular Basics"], progress: 0 },
                        { name: "Backend Frameworks", subtopics: ["Node.js Fundamentals", "Express.js Routing", "REST API Development", "Middleware & Error Handling", "Authentication & JWT", "Spring Boot Overview", "Database Integration", "Logging & Monitoring", "Caching & Optimization"], progress: 0 },
                        { name: "Database Integration", subtopics: ["MongoDB CRUD", "Mongoose ORM", "MySQL Queries", "PostgreSQL Basics", "Data Modeling", "Indexing & Optimization", "Relationships & Joins", "Transactions", "Stored Procedures", "Database Security"], progress: 0 },
                        { name: "DevOps for Full Stack", subtopics: ["Docker Basics", "Docker Compose", "CI/CD Pipelines", "Heroku Deployment", "AWS EC2 Deployment", "NGINX Setup", "Environment Variables", "Application Monitoring"], progress: 0 },
                        { name: "Testing & Debugging", subtopics: ["Unit Testing", "Integration Testing", "Jest & Mocha", "Debugging Techniques", "Postman API Testing", "End-to-End Testing"], progress: 0 }
                    ]
                },
                {
                    id: 4,
                    title: "Data Science & Analytics",
                    syllabus: [
                        { name: "Python for Data Science", subtopics: ["Python Basics", "NumPy Arrays", "Pandas DataFrames", "Data Cleaning & Preprocessing", "Functions & Loops", "File Handling", "Visualization with Matplotlib", "Data Aggregation & Grouping", "String & Date Operations", "Python Libraries Overview"], progress: 0 },
                        { name: "Statistics & Probability", subtopics: ["Descriptive Statistics", "Probability Theory", "Distributions", "Hypothesis Testing", "Confidence Intervals", "Correlation & Covariance", "Bayesian Statistics", "Sampling Techniques"], progress: 0 },
                        { name: "Machine Learning", subtopics: ["Supervised Learning", "Unsupervised Learning", "Regression Models", "Classification Models", "Clustering Algorithms", "Feature Engineering", "Model Evaluation Metrics", "Hyperparameter Tuning", "Scikit-learn Basics", "Overfitting & Regularization"], progress: 0 },
                        { name: "Deep Learning", subtopics: ["Neural Networks Basics", "TensorFlow Basics", "Keras API", "PyTorch Basics", "CNNs & RNNs", "Activation Functions", "Backpropagation", "Overfitting & Regularization", "Optimization Algorithms", "Transfer Learning"], progress: 0 },
                        { name: "Data Visualization", subtopics: ["Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau Dashboards", "Interactive Dashboards", "Data Storytelling", "Infographics Design", "Visualization Best Practices"], progress: 0 },
                        { name: "Big Data Basics", subtopics: ["Hadoop Ecosystem", "Spark Basics", "MapReduce Concepts", "Data Lakes", "Data Warehousing", "ETL Processes", "Data Pipelines", "Real-Time Analytics"], progress: 0 }
                    ]
                },
                {
                    id: 5,
                    title: "DevOps",
                    syllabus: [
                        { name: "Linux & Shell", subtopics: ["Linux Commands", "File Permissions", "Processes & Jobs", "Shell Scripting", "Cron Jobs", "Package Management", "System Monitoring"], progress: 0 },
                        { name: "CI/CD", subtopics: ["Jenkins Basics", "GitHub Actions", "GitLab CI", "Pipeline Creation", "Deployment Automation", "Versioning Strategies"], progress: 0 },
                        { name: "Containers & Orchestration", subtopics: ["Docker Basics", "Docker Compose", "Kubernetes Basics", "Pods & Deployments", "Services & Networking", "Scaling & Load Balancing"], progress: 0 },
                        { name: "Cloud Deployment", subtopics: ["AWS EC2", "S3", "Lambda Functions", "Azure App Services", "GCP Compute Engine", "Serverless Architecture"], progress: 0 },
                        { name: "Monitoring & Logging", subtopics: ["Prometheus", "Grafana Dashboards", "ELK Stack", "Log Rotation", "Alerting", "Metrics & KPIs"], progress: 0 }
                    ]
                },
                {
                    id: 6,
                    title: "Cybersecurity",
                    syllabus: [
                        { name: "Basics of Security", subtopics: ["CIA Triad", "Threats & Attacks", "Types of Malware", "Cryptography Basics", "Hashing", "Digital Signatures"], progress: 0 },
                        { name: "Network Security", subtopics: ["Firewalls", "VPNs", "IDS/IPS", "Packet Analysis", "Network Scanning Tools", "Secure Protocols"], progress: 0 },
                        { name: "Web Security", subtopics: ["SQL Injection", "XSS", "CSRF", "Session Management", "Input Validation", "Secure Coding Practices"], progress: 0 },
                        { name: "Ethical Hacking", subtopics: ["Reconnaissance", "Exploitation", "Post Exploitation", "Penetration Testing Methodology", "Bug Bounty Programs"], progress: 0 },
                        { name: "Security Tools", subtopics: ["Wireshark", "Metasploit", "Burp Suite", "Nmap", "Kali Linux Tools"], progress: 0 }
                    ]
                },
                {
                    id: 7,
                    title: "Cloud Computing",
                    syllabus: [
                        { name: "Cloud Fundamentals", subtopics: ["IaaS, PaaS, SaaS", "Cloud Architecture", "Virtualization", "Deployment Models", "Scaling Strategies", "Cost Management"], progress: 0 },
                        { name: "AWS Services", subtopics: ["EC2", "S3", "Lambda", "RDS", "VPC & Networking", "CloudWatch", "IAM Roles"], progress: 0 },
                        { name: "Azure Services", subtopics: ["App Services", "Functions", "Cosmos DB", "Virtual Machines", "Azure Storage", "Azure Security Center"], progress: 0 },
                        { name: "GCP Services", subtopics: ["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Functions", "IAM", "Logging & Monitoring"], progress: 0 },
                        { name: "Cloud Security", subtopics: ["Identity & Access Management", "Encryption", "Compliance Standards", "Network Security", "Best Practices"], progress: 0 }
                    ]
                },
                {
                    id: 8,
                    title: "Mobile App Development",
                    syllabus: [
                        { name: "Android Development", subtopics: ["Activities & Intents", "Layouts & Views", "Fragments", "RecyclerView", "Room Database", "ViewModel & LiveData", "Jetpack Components", "Permissions & Security"], progress: 0 },
                        { name: "iOS Development", subtopics: ["Swift Basics", "UIKit", "SwiftUI", "Core Data", "Networking & APIs", "Xcode Tools", "App Lifecycle", "iOS Testing"], progress: 0 },
                        { name: "Cross-Platform", subtopics: ["Flutter Basics", "Widgets & State Management", "Dart Programming", "React Native Basics", "Expo", "Xamarin Basics"], progress: 0 },
                        { name: "APIs & Services", subtopics: ["REST APIs", "GraphQL Basics", "Firebase", "Push Notifications", "OAuth2 Integration", "Data Storage & Sync"], progress: 0 },
                        { name: "App Deployment", subtopics: ["Google Play Store", "App Store", "CI/CD for Mobile", "Beta Testing", "Crash Reporting & Analytics"], progress: 0 }
                    ]
                },
                {
                    id: 9,
                    title: "Artificial Intelligence",
                    syllabus: [
                        { name: "AI Fundamentals", subtopics: ["History of AI", "AI Applications", "Problem Solving Techniques", "Search Algorithms", "Knowledge Representation"], progress: 0 },
                        { name: "Machine Learning", subtopics: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Feature Engineering", "Model Selection", "Evaluation Metrics"], progress: 0 },
                        { name: "Natural Language Processing", subtopics: ["Text Processing", "Tokenization", "Word Embeddings", "Sentiment Analysis", "Language Models"], progress: 0 },
                        { name: "Computer Vision", subtopics: ["Image Processing", "Convolutional Neural Networks", "Object Detection", "Segmentation", "OpenCV Basics"], progress: 0 },
                        { name: "AI Tools & Frameworks", subtopics: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV"], progress: 0 }
                    ]
                },
                {
                    id: 10,
                    title: "Blockchain Development",
                    syllabus: [
                        { name: "Blockchain Basics", subtopics: ["Blockchain Concept", "Cryptography in Blockchain", "Distributed Ledger", "Consensus Mechanisms"], progress: 0 },
                        { name: "Ethereum & Smart Contracts", subtopics: ["Solidity Basics", "Smart Contract Deployment", "Ethereum Network", "Truffle & Hardhat"], progress: 0 },
                        { name: "Decentralized Applications", subtopics: ["DApp Architecture", "Web3.js Integration", "Wallets & Transactions"], progress: 0 },
                        { name: "NFTs & Tokens", subtopics: ["ERC20 & ERC721 Tokens", "Minting NFTs", "NFT Marketplaces"], progress: 0 },
                        { name: "Blockchain Security", subtopics: ["Smart Contract Auditing", "Vulnerabilities", "Best Practices"], progress: 0 }
                    ]
                }
            ];


let currentCourse = null, currentTopic = null;

// Compute progress %
function getCourseProgress(course) {
  let total = 0, done = 0;
  course.syllabus.forEach(topic => {
    total += topic.subtopics.length;
    done += topic.progress;
  });
  return total ? Math.round((done/total)*100) : 0;
}

// Render all courses
function renderCourses() {
  const container = document.getElementById("main-content");
  container.innerHTML = `<h2>Available Courses</h2><div class="app-row" id="course-grid"></div>`;
  const grid = document.getElementById("course-grid");

  courses.forEach(course => {
    const col = document.createElement("div");
    col.className = "app-col";
    col.innerHTML = `
      <div class="course-card">
        <h4>${course.title}</h4>
        <div class="progress-wrapper">
          <div class="progress-fill fill-green" style="width:${getCourseProgress(course)}%">
            ${getCourseProgress(course)}%
          </div>
        </div>
        <button class="app-btn full btn-blue-outline">📖 View Syllabus</button>
      </div>
    `;
    col.querySelector("button").onclick = () => renderSyllabus(course);
    grid.appendChild(col);
  });
}

// Render syllabus
function renderSyllabus(course) {
  currentCourse = course;
  const container = document.getElementById("main-content");
  container.innerHTML = `
    <button class="app-btn btn-gray">⬅ Back</button>
    <h2>${course.title} - Syllabus</h2>
    <div class="app-row" id="syllabus-grid"></div>`;
  container.querySelector("button").onclick = renderCourses;

  const grid = document.getElementById("syllabus-grid");
  course.syllabus.forEach(topic => {
    const col = document.createElement("div");
    col.className = "app-col";
    col.innerHTML = `
      <div class="course-card">
        <h5>${topic.name}</h5>
        <div class="progress-wrapper">
          <div class="progress-fill fill-blue" style="width:${(topic.progress / topic.subtopics.length)*100}%">
            ${Math.round((topic.progress/topic.subtopics.length)*100)}%
          </div>
        </div>
        <button class="app-btn full btn-blue-outline">📋 View Subtopics</button>
      </div>
    `;
    col.querySelector("button").onclick = () => renderSubtopics(topic);
    grid.appendChild(col);
  });
}

// Render subtopics
function renderSubtopics(topic) {
  currentTopic = topic;
  const container = document.getElementById("main-content");
  container.innerHTML = `
    <button class="app-btn btn-gray">⬅ Back</button>
    <h2>${topic.name} - Subtopics</h2>
    <div class="app-row" id="subtopic-grid"></div>`;
  container.querySelector("button").onclick = () => renderSyllabus(currentCourse);

  const grid = document.getElementById("subtopic-grid");
  topic.subtopics.forEach((sub, idx) => {
    const col = document.createElement("div");
    col.className = "app-col";
    col.innerHTML = `
      <div class="subtopic-card">
        <span>${sub}</span>
        <button class="app-btn btn-small ${idx < topic.progress ? 'btn-green' : 'btn-green-outline'}">
          ${idx < topic.progress ? "✔ Completed" : "Mark as Done"}
        </button>
      </div>`;
    col.querySelector("button").onclick = () => {
      if(idx >= topic.progress) {
        topic.progress++;
        renderSubtopics(topic);
      }
    };
    grid.appendChild(col);
  });
}

// Initial Load
renderCourses();