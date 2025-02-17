import { useTranslation } from "react-i18next";
import waterWell from "./assets/images/water_well.png";
import doctorsAtHome from "./assets/images/doctors_at_home.png";
import colibid from "./assets/images/colibid.com_.png";
import devMediacomp from "./assets/images/devmedia.png";
import suspencionesToyopana from "./assets/images/suspensionestoyopana.com_.png";
import tourAventuras from "./assets/images/touraventuras.png";
const logotext = "Diego Sastoque";
const meta = {
  title: "Diego Sastoque",
  description:
    "Desarrollador de Software, Freelancer, entusiasta en tecnología",
};

const introdata = {
  title: "Diego Sastoque",
  animated: {
    first: "Software Developer",
    second: "Entusiasta",
    third: "Freelancer",
  },
  description:
    "Desarrollador de software freelance con pasión por los negocios. Destaca por su habilidad técnica y adaptabilidad en proyectos variados. Su enfoque combina innovación técnica con visión empresarial.",
  your_img_url:
    "https://media.licdn.com/dms/image/D4E03AQGCjoR_ekEhYg/profile-displayphoto-shrink_200_200/0/1701883704149?e=1707955200&v=beta&t=TSKw5LgmBjPQVFMURMktiazZAujxefHMliZCTRUNHgM",
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [
  {
    jobtitle: "Sofware Engineer",
    where: "Daugherty / CGI",
    date: "2024 / 2025",
  },
  {
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2024",
  },
  {
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2022",
  },
  {
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2021",
  },
];

const skills = [
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "Typescrypt",
    value: 70,
  },
  {
    name: "Node Js",
    value: 60,
  },
  {
    name: "Python",
    value: 35,
  },
  {
    name: "Java",
    value: 35,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Wordpress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: waterWell,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://www.waterwellonline.com/",
  },
  {
    img: doctorsAtHome,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://www.doctorsathome.com/",
  },
  {
    img: colibid,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://colibid.com/",
  },
  {
    img: devMediacomp,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://www.devmediacompany.com/",
  },
  {
    img: suspencionesToyopana,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://suspensionestoyopana.com/",
  },
  {
    img: tourAventuras,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://touraventuraspty.com/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "contact@diegosastoque.com",

  description:
    "Contact me anytime. I am open to hearing any idea and collaborating with knowledge to provide the best solution.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_1gthz8i",
  YOUR_TEMPLATE_ID: "template_pr45wrp",
  YOUR_USER_ID: "ms4eDcJ7fHnYHLT0K",
};

const socialprofils = {
  github: "https://github.com/diegobeltran97",
  linkedin: "https://www.linkedin.com/in/diego-sastoque97/",
  twitter: "https://twitter.com",
  medium: "https://medium.com/@diegobeltran97",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
