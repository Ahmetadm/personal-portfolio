import Linkedin from "./img/linkedin.png";
import Github from "./img/github.png";
import Gitlab from "./img/gitlab.png";
import Phone from "./img/phone.png";
import Email from "./img/email.png";
export const myProjects = [
  {
    id: "1",
    title: "Brainster Labs",
    description:
      "Brainster Labs is a project on which we will place all the projects Brainster students (Design Academy, Coding Academy, Marketing Academy) have made.",
    stacks: ["HTML", "Javascript", "SASS", "RegEx"],
    img: "project01.png",
    demo: "https://ahmetadm-project01.netlify.app/",
    code: "https://gitlab.com/ahmetadm/brainsterprojects_ahmetademfe1/-/tree/Project01",
  },
  {
    id: "2",
    title: "Street ARTists",
    description:
      "Mobile web space for every street artist that will allow them to be able to track their income, and to have a place on the web where they can showcase their masterpieces.",
    stacks: [
      "HTML",
      "Javascript",
      "SASS",
      "ChartJS",
      "AJAX",
      "Web API - Media Devices -Camera",
    ],
    img: "project02.png",
    demo: "https://ahmetadm-project02.netlify.app/app/index.html",
    code: "https://gitlab.com/ahmetadm/brainsterprojects_ahmetademfe1/-/tree/Project02",
  },
  {
    id: "3",
    title: "This Awesome Portfolio",
    description:
      "My personal portfolio website to provide professional information about an myself and presents a showcase of my projects. It also represents me in digital platform.",
    stacks: ["React", "Contex API", "SASS", "EmailJS"],
    img: "project03.png",
    demo: "https://www.ahmetadm.dev",
    code: "https://github.com/Ahmetadm/personal-portfolio",
  },
];
export const aboutMe = {
  p1: [
    "Front-end developer with many years of experience as a Supervisor for training and development in the retail industry and a graduate IT engineer",
    "After 7 years working as a training and development supervisor at LC Waikiki International Retail, I decided to make a career change so that I could combine my Front-end programming skills with my training and development skills and experience. As a personality, I am passionate not only about learning new things, but also about passing on my knowledge to other people.",
    "If you are looking for a developer with high motivation, great communication skills with high potential for being the mentor of newcomers in your company, I'm the right person for you. I'm excited to contribute, bring value to your company and do my best to achieve your company's goals and vision.",
    "Technologies i am using:",
  ],
  stacks: [
    "HTML",
    "CSS",
    "Sass",
    "Javascript",
    "React",
    "Next.js",
    "Bootstrap",
    "MUI",
    "Tailwind CSS",
    "GraphQL",
    "Styled-Components",
  ],
};

export const contactInfo = [
  {
    id: "c1",
    link: "tel:+38972321268",
    text: "+389 72 321 268",
    img: Phone,
  },
  {
    id: "c2",
    link: "mailto:contact@ahmetadm.dev",
    text: "contact@ahmetadm.dev",
    img: Email,
  },
  {
    id: "c3",
    link: "https://linkedin.com/in/ahmetadem",
    text: "linkedin/ahmetadem",
    img: Linkedin,
  },
  {
    id: "c4",
    link: "https://github.com/ahmetadm",
    text: "github/ahmetadm",
    img: Github,
  },
  {
    id: "c5",
    link: "https://gitlab.com/ahmetadm",
    text: "gitlab/ahmetadm",
    img: Gitlab,
  },
];
