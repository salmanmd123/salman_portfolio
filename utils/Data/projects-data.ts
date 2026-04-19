export const projectsData = [
  {
    id: 1,
    name: "StreetStyleX",
    description:
      "This is a full-stack eCommerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform provides a complete online shopping experience with features like product browsing, filtering, cart management, secure checkout, and order tracking. The application includes a fully functional Admin Dashboard for managing products, orders, and inventory. It also supports user authentication and role-based access control for secure operations. For payments, the project integrates Stripe and Razorpay payment gateways, along with a Cash on Delivery option for flexible checkout. The frontend communicates with a RESTful backend API connected to a MongoDB database. The entire application is deployed on Vercel, making it accessible as a production-ready web platform.",
    tools: [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "JavaScript",
  "Tailwind CSS",
  "Axios",
  "JWT Authentication",
  "Stripe API",
  "REST API",
],
    role: "Full-stack Developer",
    code: "https://github.com/salmanmd123/StreetStyleX",
    demo: "https://streetstylex.vercel.app",
    date: "25-10-2025",
    images: [
      "/projects/StreetStyleX/1.jpeg",
      "/projects/StreetStyleX/2.jpeg",
      "/projects/StreetStyleX/3.jpeg",
    ],
    videos: [""],
    highlights: [
      "Built full-stack MERN eCommerce platform with admin dashboard and payment integration (Stripe).",
      "Implemented authentication, cart system, order management, and REST APIs.",
      "Deployed production-ready application on Vercel.",
      "Developed a complete user-facing shopping experience including product browsing, filtering, sorting, cart management, and order placement.",
      "Managed MongoDB database for storing users, products, carts, and order data ",
    ],
    challenges: [
      "Handled complex frontend-backend integration and state management.",
      "Implemented secure authentication and role-based access control.",
      "Integrated and validated multiple payment gateways.",
      "Designed scalable MongoDB schema and managed deployment issues.",
    ],
  },
  {
  id: 2,
  name: "AI Health Advisor",
  description:
    "AI Health Advisor is a smart web-based healthcare application developed using Django and Python that analyzes user-input symptoms and predicts possible medical conditions. The system uses Natural Language Processing (NLP) techniques to extract symptoms from free-text input and applies a rule-based AI engine to map them to potential diseases. It provides severity classification (mild, moderate, severe), general health advice, and emergency detection. The platform includes user authentication, history tracking, and an admin dashboard for monitoring user activity and reports. This project demonstrates the integration of AI concepts with full-stack web development to build an intelligent healthcare assistant.",

  tools: [
    "Python",
    "Django",
    "SQLite",
    "NLTK",
    "Scikit-learn",
    "HTML",
    "CSS",
    "JavaScript",
    "Matplotlib",
    "Seaborn",
    "Pillow"
  ],

  role: "Full-stack Developer (AI + Backend Focus)",

  code: "https://github.com/salmanmd123/ai_health_advisor",  
  demo: "https://ai-health-advisor-wpfo.onrender.com",  

  date: "10-04-2026",

  images: [
    "/projects/AI Health Advisor/1.jpeg",
    "/projects/AI Health Advisor/2.jpeg",
    "/projects/AI Health Advisor/3.jpeg"
  ],

  videos: [""],

  highlights: [
    "Developed an AI-powered symptom analysis system using NLP and rule-based logic.",
    "Implemented natural language input processing using NLTK for symptom extraction.",
    "Built severity classification and emergency detection system based on symptom combinations.",
    "Designed and developed user authentication and personal health history tracking.",
    "Created admin dashboard to monitor users, reports, and system activity.",
    "Integrated data visualization using Matplotlib and Seaborn for analysis insights."
  ],

  challenges: [
    "Extracting accurate symptoms from unstructured user input using NLP techniques.",
    "Mapping multiple symptoms to multiple possible diseases with proper ranking logic.",
    "Designing a reliable severity classification system without a trained ML model.",
    "Handling ambiguity and variations in user-entered text.",
    "Integrating AI logic seamlessly with Django backend and frontend templates.",
    "Managing and structuring medical data effectively in the database."
  ]
},
  {
    id: 3,
    name: "Smart Key House",
    description:
      "Smart Keys House is a simple frontend web application built using only HTML, CSS, and JavaScript. It provides a clean and easy interface to manage different types of keys such as car keys, bike keys, spare keys, remote keys, and smart programming keys. Users can view and organize key details in a structured way with basic interactive features. The application is lightweight, minimal, and designed according to client requirements without any backend complexity.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    role: "Frontend Developer",
    code: "",
    demo: "https://smartkeyhouse.netlify.app/",
    date: "",
    images: [
      "/projects/Smart Key House/1.jpeg",
      "/projects/Smart Key House/2.jpeg",
      "/projects/Smart Key House/3.jpeg",
    ],
    videos: [""],
    highlights: [
      "Simple and clean frontend built using HTML, CSS, and JavaScript.",
      "Lightweight and fast performance without backend dependency.",
      "Designed responsive UI compatible with various devices.",
    ],
    challenges: [
      "No backend support, so data cannot be permanently stored",
      "Handling dynamic updates only through frontend logic can be restrictive",
    ],
  },
];
