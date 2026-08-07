const projects = [
  {
    id: 1,
    title: "Expense Tracker",
    description:
      "A full-stack expense management system with secure authentication and transaction tracking.",

    technologies: ["Java", "Spring Boot", "JWT", "MySQL"],

    github: "#",
    demo: "#",

    problemStatement:
      "Managing personal expenses manually becomes difficult as transaction volume increases. This application helps users track, categorize, and monitor expenses efficiently.",

    features: [
      "JWT Authentication",
      "Expense Categorization",
      "Transaction History",
      "Monthly Reports",
      "Secure APIs"
    ],

    challenges: [
      "Implementing JWT Authentication",
      "Designing database relationships",
      "Handling secure API access"
    ],

    learnings: [
      "Spring Security",
      "REST API Design",
      "Database Optimization"
    ]
  },

  {
    id: 2,
    title: "Notification System",
    description:
      "Automated notification platform supporting email and SMS alerts.",

    technologies: [
      "Spring Boot",
      "Email Service",
      "SMS Gateway"
    ],

    github: "#",
    demo: "#",

    problemStatement:
      "Organizations need automated notifications to improve communication and reduce manual effort.",

    features: [
      "Email Notifications",
      "SMS Notifications",
      "Template Support",
      "Scheduling System"
    ],

    challenges: [
      "Third-party API Integration",
      "Message Delivery Reliability"
    ],

    learnings: [
      "Notification Architecture",
      "External API Integration",
      "Error Handling"
    ]
  },

  {
    id: 3,
    title: "Student Management System",
    description:
      "A system for managing student records, academic details, and database operations.",

    technologies: [
      "Java",
      "MySQL",
      "JDBC"
    ],

    github: "#",
    demo: "#",

    problemStatement:
      "Educational institutions require a centralized platform for managing student information efficiently.",

    features: [
      "Student Records",
      "CRUD Operations",
      "Search Functionality",
      "Database Integration"
    ],

    challenges: [
      "Database Normalization",
      "Data Validation"
    ],

    learnings: [
      "JDBC Connectivity",
      "Database Design",
      "Java OOP Principles"
    ]
  }
];

export default projects;