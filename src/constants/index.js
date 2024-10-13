import { frontend, uidesigner, web, javascript, html, css, reactjs, vuejs, tailwind, nodejs, git, figma, itpln, iconplus, diamond, cordial, face, threejs } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "UI/UX Designer",
    icon: uidesigner,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Occupational Health & Safety (K3)",
    company_name: "Institut Teknologi PLN | Pelatihan Sri Kandi",
    icon: itpln,
    iconBg: "#E6DEDD",
    date: "April 2023",
    points: [
      "Risk Assessment: Identifying potential hazards associated with the event, such as electrical equipment, crowded spaces, or use of chemicals.",
      "Safety Equipment: Ensuring the availability and proper use of safety equipment like fire extinguishers, first aid kits, and personal protective gear for staff and participants.",
      "Monitoring and Enforcement: Regularly inspecting the event venue to ensure compliance with safety regulations and promptly addressing any safety concerns or violations.",
      "Post Event Evaluation: Reviewing safety measures and incidents post-event to identify areas for improvement and implementing necessary changes for future events.",
    ],
  },
  {
    title: "Student Mentor",
    company_name: "Institut Teknologi PLN | LKMM Pra TD",
    icon: itpln,
    iconBg: "#E6DEDD",
    date: "Aug 2023",
    points: [
      "Guiding Participants: Assist participants in understanding the event's objectives, exploring ideas, and providing guidance to achieve desired outcomes.",
      "Providing Support: Offer moral support and motivation to participants, especially when they face challenges or confusion during the process.",
      "Sharing Insights and Knowledge: Sharing knowledge and experiences in the relevant field of the event to help participants broaden their understanding and skills.",
      "Facilitating Discussion Sessions: Facilitate discussion sessions or workshops to promote the exchange of ideas and experiences among participants and expand their insights.",
    ],
  },
  {
    title: "Student Co-Mentor",
    company_name: "Institut Teknologi PLN x PLN Group | Energize Project",
    icon: itpln,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Jan 2024",
    points: [
      "Supporting the lead mentor: Involves discussing event goals, setting agendas, and determining implementation strategies.",
      "Guiding participants: Answering their questions, providing advice, and helping them solve any issues that may arise during the event.",
      "Developing materials: Gathering resources, designing presentations, and preparing additional materials.",
      "Supporting administration: Assist with administrative tasks related to the event, such as participant registration, document processing, or other tasks necessary to ensure the smooth running of the event.",
    ],
  },
  {
    title: "Student Mentor",
    company_name: "Institut Teknologi PLN | LDKM",
    icon: itpln,
    iconBg: "#E6DEDD",
    date: "Jul 2024",
    points: [
      "Provide one-on-one mentorship to mentees, helping them set and achieve personal and leadership goals.",
      "Facilitate group discussions and activities that promote teamwork and peer learning.",
      "Assist mentees in setting realistic and achievable goals, and monitor their progress throughout the program.",
      "Offering constructive feedback and support to help mentees overcome challenges and enhance their leadership skills.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "PLN Icon Plus",
    icon: iconplus,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Nov 2024",
    points: [
      "Building the User Interface for the PLN (Diamond) Application using Vue.js and Tailwind CSS, focusing on creating a responsive and user-friendly experience.",
      "Designing and developed Login Page, Main Dashboard, Manager Dashboard, Staff Dashboard, Process Dashboard, Submission Details Dashboard of Diamond.",
      "Collaborated with a team of developers and designers to ensure alignment with project goals and client requirements.",
      "Perform testing and debugging of application to ensure optimal performance and user experience.",
      "Gain hands-on experience working on real-world projects and exposure to industry practices.",
    ],
  },
];

const projects = [
  {
    name: "Diamond PLN Application",
    description: "The main purpose of this application is as a means for various fields within PLN Icon Plus to submit requests for cooperation or partnerships with external parties. cooperation or partnership with external parties.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: diamond,
    source_code_link: "https://github.com/christvann/HIFI-Kemitraan-PLN-Application-Diamond-",
  },
  {
    name: "Cordial",
    description:
      "The project focused on creating an aesthetically pleasing, user-friendly interface that reflects the artistry and quality of the crafts. Key features include a clean layout, high-quality images, intuitive navigation, and responsive design.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: cordial,
    source_code_link: "https://github.com/christvann/Crafts-Shop-Website-Landing-Page-",
  },
  {
    name: "Face Recognition",
    description: "The project involved collecting and preprocessing facial images, training a machine learning model, and deploying the system for practical applications like security and authentication.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: face,
    source_code_link: "https://github.com/christvann/Face-Recognition",
  },
];

export { services, technologies, experiences, projects };
