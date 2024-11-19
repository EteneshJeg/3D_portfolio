import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  linktech,
  aipro2,
  aipro1
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Generative AI Solutions",
    icon: creator
  },
  {
    title: "Web Developer",
    icon: web
  },
  {
    title: "React Developer",
    icon: mobile
  },
  {
    title: "Backend Developer",
    icon: backend
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "Redux Toolkit",
    icon: redux
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "Three JS",
    icon: threejs
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "figma",
    icon: figma
  },
  {
    name: "docker",
    icon: docker
  }
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Evangadi Network Team",
    icon: starbucks,
    iconBg: "#4A90E2",
    date: "May 2024 - Sep 2024",
    points: [
      "My team and I developed an Electronics Repair platform with integrated RIA (money transfer) functionality.",
      "Built a user-friendly frontend using React, Vite, HTML, and Tailwind CSS.",
      "Implemented backend with Node.js, Express, and PostgreSQL for seamless user interaction.",
      "Enabled device registration and repair service requests for phones, tablets, laptops, and computers.",
      "Integrated secure RIA payments for a smooth customer experience."
    ]
  },
  {
    title: "Odoo Application Developer Intern",
    company_name: "Purpose Black Ethiopia",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Sep 2024",
    points: [
      "Assisted in developing and maintaining Odoo applications to support business processes.",
      "Collaborated with the team to customize and enhance Odoo modules based on client needs.",
      "Supported the implementation of new features, workflows, and reports.",
      "Contributed to optimizing Odoo performance and integrating it with other systems."
    ]
  },
  {
    title: "Web Development Instructor",
    company_name: "Koders Lab",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2023 - Jan 2024",
    points: [
      "Taught web development fundamentals including HTML, CSS, JavaScript.",
      "Guided students in building full-stack web applications with practical, hands-on exercises.",
      "Provided mentorship and code reviews, helping students solve problems and improve their coding skills.",
      "Created course materials, tutorials, and assignments to enhance learning and student engagement."
    ]
  },
  {
    title: "Web Developer Intern",
    company_name: "Prodigy Info Tech",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "April 2024 - Jun 2024",
    points: [
      "Developed and maintained web applications using modern technologies such as HTML, CSS, JavaScript.",
      "Participated in code reviews and helped troubleshoot issues in frontend.",
      "Received certification and Recommendation letter for successful completion of internship and demonstrated strong problem-solving skills."
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "Her passion for technology and attention to detail make her a standout in any project.",
    name: "Adugna Bekele",
    designation: "CEO",
    company: "Evangadi Networks",
    image: ""
  },
  {
    testimonial:
      "Etenesh consistently delivers high-quality work, making her an invaluable asset to any team.",
    name: "Ashenafi",
    designation: "CEO",
    company: "Purpose Black Ethiopia",
    image: ""
  },
  {
    testimonial:
      "Etenesh is incredibly talented and always up for a challenge.",
    name: "Samrawit Amare",
    designation: "Backend developer",
    company: "Perago Info Tech",
    image: ""
  }
];

const projects = [
  {
    name: "Information Retrieval/ Q&A System",
    description:
      "Leveraging LlamaIndex and Google Gemini, this system allows you to upload a file, ask any question, and get instant, accurate answers. Plus, it can summarize the content.",
    tags: [
      {
        name: "LlamaIndex",
        color: "blue-text-gradient"
      },
      {
        name: "Google Gemini",
        color: "green-text-gradient"
      },
      {
        name: "VectorStoreIndex",
        color: "pink-text-gradient"
      }
    ],
    image: aipro1,
    source_code_link: "https://github.com/EteneshJeg/Q-ASystem"
  },
  {
    name: "Essay & Poem Writer",
    description:
      "A chatbot that generates essays and poems based on user-provided topics, powered by Langchain and LLAMA2. The app leverages Langchain for prompt management and LLAMA2 for high-quality content generation.",
    tags: [
      {
        name: "Langchain",
        color: "blue-text-gradient"
      },
      {
        name: "LLAMA2",
        color: "green-text-gradient"
      },
      {
        name: "langchainembbeding",
        color: "pink-text-gradient"
      }
    ],
    image: aipro2,
    source_code_link:
      "https://github.com/EteneshJeg/SecLangchianChatbot/tree/main/api"
  },
  {
    name: "LinkTech Wireless",
    description:
      "The Electronics Repair Service platform streamlines device repairs with easy online registration and integrated RIA money transfer, delivering a seamless experience for customers and service providers.",
    tags: [
      {
        name: "React Vite",
        color: "blue-text-gradient"
      },
      {
        name: "Tailwind CSS,PostgreSQL",
        color: "green-text-gradient"
      },
      {
        name: "Node.js,Express",
        color: "pink-text-gradient"
      }
    ],
    image: linktech,
    source_code_link: "https://https://linktech12.com/"
  },
  {
    name: "Exam Preparation Platform",
    description:
      "The Exam Prep Platform is a user-friendly resource with study materials, summaries, practice questions, and quizzes to help students excel in exams.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient"
      },
      {
        name: "Mysql",
        color: "green-text-gradient"
      },
      {
        name: "javascript",
        color: "pink-text-gradient"
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/EteneshJeg/Exam_Preparation"
  },
  {
    name: "Netflix Clone",
    description:
      "Explore My Netflix Clone – your go-to destination for endless entertainment. Stream your favorite shows and movies effortlessly. Join us for a seamless viewing experience!",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient"
      },
      {
        name: "css",
        color: "green-text-gradient"
      },
      {
        name: "javascript",
        color: "pink-text-gradient"
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/EteneshJeg/Netflix-Clone"
  },
  {
    name: "Apple Clone",
    description:
      "I developed a clone of Apple.com that mirrors the original's sleek design and user-friendly experience. This project demonstrates my web development skills, attention to detail, and commitment to brand aesthetics.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient"
      },
      {
        name: "css",
        color: "green-text-gradient"
      },
      {
        name: "javascript",
        color: "pink-text-gradient"
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/EteneshJeg/Apple-with-Api"
  }
];

export { services, technologies, experiences, testimonials, projects };
