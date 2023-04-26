import { BehaviorSubject } from "rxjs";

type Contacts = {
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
    structure:{
        references: string;
        skills: string;
        languages: string;
        education: string;
        experience: string;
        hobbies: string;
    };
  name: string;
  position: string;
  about: string;
  education: School[];
  experience: Experience[];
  skills: Skills[];
  reference: Reference[];
  contacts: Contacts;
  languages: Skills[]
};

const english: Content = {
    structure:{
        references: "References",
        skills: "Skills",
        languages: "Languages",
        education: "Education",
        experience: "Experience",
        hobbies: "Hobbies"
    },
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
      tools: ["React, ", "MUI"],
      description:
        "Teamwork with back-end, sysadmin and tester teams. Front-end page for an online gallery, where users can register and log in to the site, browse and add artworks to their favorites, using a museum API to fetch data from artworks.",
      link: "",
    },
    {
      name: "Weather app",
      tools: ["Angular, ", " Ionic"],
      description:
        "This is a web based weather application. User can browse for location and see a 5 day forecast, using a weather API.",
      link: "https://bokanyi.github.io/weather-app-angular/",
    },
    {
      name: "To do app",
      tools: ["React, ", "MUI"],
      description:
        "A simple to do list application, where users can manage their list, plus feature a drag and drop to set priority.",
      link: "https://bokanyi.github.io/todo-app-react/",
    },
  ],
  contacts: {
    github: "github.com/bokanyi",
    email: "bokanyiimre@gmail.com",
    linkedIn: "linkedin.com/in/imre-bokányi-0795b5265",
    tel: "+36 70 457 4865",
  },
  languages: [
    {
        name: "hungarian",
        value: 10
    },
    {
        name: "german",
        value: 6
    },
    {
        name: "english",
        value: 8
    },
  ]
};

const hungarian: Content = {
    structure:{
        references: "Referenciák",
        skills: "Skillek",
        languages: "Nyelvtudás",
        education: "Végzettség",
        experience: "Tapasztalat",
        hobbies: "Hobbi"
    },
  name: "Bokányi Imre",
  position: `Junior Front-end Fejlesztő`,
  about: `Elhivatott front-end fejlesztő vagyok, holisztikus szemlélettel és tapasztalt problémamegoldó kézséggel. 
  Építészként számos szakággal, mérnökökkel és művészekkel folytatott közös munka segített olyan perspektíva kialakításában, ahol kulcsfontosságú a technikai részletek és a nagyvonalú tervezés közötti folyamatos oszcillálás.
  Új célom a kódolási eszköztáram folyamatos fejlesztése, egy dinamikus, jól strukturált csapaton belül.`,

  education: [
    {
      name: "codecool",
      degree: "Full-Stack Api",
      year: "2023",
    },
    {
      name: "codecool",
      degree: "Junior Front-end fejlesztő",
      year: "2023",
    },
    {
      name: "Budapesti Műszaki és Gazdaságtudományi Egyetem",
      degree: "Okleveles építészmérnök",
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
      company: "Budapest Főváros Városépítészeti Főosztály",
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
      tools: ["React, ", "MUI"],
      description:
        "Csapatamunka back-end, sysadmin and tester csapatokkal. Online galéria frontend felületének építése, ahol a felhasználó autentikáció után tud a műalkotások között keresni, egy külső múzeum API adatbázisán keresztül, és az alkotásokat elmenteni saját gyűjteményébe.",
      link: "",
    },
    {
      name: "Weather app",
      tools: ["Angular, ", "Ionic"],
      description:
        "Web alapú időjárás applikáció, a felhasználó lokáció alapján keres, egy időjárás API-t használva 5 napos előrejelzást kapunk a megadott városról.",
      link: "https://bokanyi.github.io/weather-app-angular/",
    },
    {
      name: "To do app",
      tools: ["React, ", "MUI"],
      description:
        " Egy egyszerű to do applikáció, melyen menedzselni tudjuk a teendők listáját, időpontok kiválasztásával, priorizálni tudunk egy drag and drop mozdullattal.",
      link: "https://bokanyi.github.io/todo-app-react/",
    },
  ],
  contacts: {
    github: "github.com/bokanyi",
    email: "bokanyiimre@gmail.com",
    linkedIn: "linkedin.com/in/imre-bokányi-0795b5265",
    tel: "+36 70 457 4865",
  },
  languages: [
    {
        name: "magyar",
        value: 10
    },
    {
        name: "német",
        value: 6
    },
    {
        name: "angol",
        value: 8
    },
  ]
};

export const $content = new BehaviorSubject<Content | null>(english);

// export const switchLanguage = () => {
//     if($content.getValue() === english) $content.next(hungarian)
//     else $content.next(english)
// }

export const switchLanguage = (language: string) => {
    if( language === "english") $content.next(english)
    else $content.next(hungarian)
}
