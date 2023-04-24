import { BehaviorSubject } from "rxjs";

type Contact = {
  github: string;
  email: string;
  linkedIn: string;
  tel: string;
};

type School = {
  name: string;
  degree: string;
  year: string;
};

type Skills = {
  name: string;
  value: number;
};

type Experience = {
  company: string;
  year: string;
};

type Reference = {
  name: string;
  tools: string[];
  description: string;
  link: string;
};

type Content = {
  name: string;
  position: string;
  about: string;
  education: School[];
  experience: Experience[];
  skills: Skills[];
  reference: Reference[];
  contact: Contact;
};

const english: Content = {
  name: "Imre Bokányi",
  position: `Junior Front-end Developer`,
  about: `I am an enthusiastic front-end developer with a strong holistic approach to problem solving. My aim is to continuously develop my coding skills. My 10 years of experience working with architects, engineers, and artists, has helped me develop a two-fold perspective, where oscillating between technical details and generous design is key.
  I’m seeking opportunities to further my hands-on experience in coding within a dynamic company.`,
  education: [
    {
      name: "codecool",
      degree: "Full-Stack Api",
      year: "2023",
    },
    {
      name: "codecool",
      degree: "Junior Front-end developer",
      year: "2023",
    },
    {
      name: "Budapest University of technology and Economics",
      degree: "M.Sc. in architecture and engineering",
      year: "2012",
    },
  ],
  experience: [
    {
      company: "Geon Architect Studio",
      year: "2021-2022",
    },
    {
      company: "Crecon Kft.",
      year: "2020-2021",
    },
    {
      company: "Formiconcept Kft.",
      year: "2017-2019",
    },
    {
      company: "Urban Development Department of the Municipality of Budapest Mayor’s Office",
      year: "2015-2016",
    },
  ],
  skills: [
    {
      name: "HTML + CSS",
      value: 10,
    },
    {
      name: "Javascript",
      value: 8,
    },
    {
      name: "TypescriptS",
      value: 7,
    },
    {
      name: "Node.js",
      value: 8,
    },
    {
      name: "GIT",
      value: 8,
    },
    {
      name: "MongoDB",
      value: 7,
    },
    {
      name: "React +MUI",
      value: 8,
    },
    {
      name: "Angular",
      value: 5,
    },
    {
      name: "Photoshop",
      value: 10,
    },
    {
      name: "Indesign",
      value: 8,
    },
    {
      name: "Figma",
      value: 7,
    },
  ],
  reference: [
    {
      name: "Art gallery",
      tools: ["React", "MUI"],
      description:
        "- work in group with back-end, sysadmin and tester teams - online gallery, users can register and log in to the site, browse and add artworks to their favorites",
      link: "",
    },
    {
      name: "Weather app project",
      tools: ["Angular", " Ionic"],
      description:
        "web based weather application, user can browse for location and see a 5 day forecast, using a weather API",
      link: "https://bokanyi.github.io/weather-app-angular/",
    },
    {
      name: "To do app project",
      tools: ["React", "MUI"],
      description:
        "simple to do list application, users can manage their list, plus a drag and drop feature",
      link: "https://bokanyi.github.io/todo-app-react/",
    },
  ],
  contact: {
    github: "github.com/bokanyi",
    email: "bokanyiimre@gmail.com",
    linkedIn: "linkedin.com/in/imre-bokányi-0795b5265",
    tel: "+36 70 457 4865",
  },
};

export const $content = new BehaviorSubject<Content | null>(english);
