import Devicon from "devicons-react";

const skillset = {
  languages: [
    {
      name: "JavaScript",
      url: "https://en.wikipedia.org/wiki/JavaScript",
      group: "programming_languages",
      proficiency: 3,
      description:
        "JavaScript is a versatile language that powers interactive and dynamic web experiences. I self-taught JavaScript in high school to add interactivity to my web projects, creating engaging user interfaces.",
      icon: {
        component: (size: number) => <Devicon.JavascriptOriginal size={size} />,
      },
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
      group: "programming_languages",
      proficiency: 2,
      description:
        "TypeScript, a JavaScript superset by Microsoft, adds static typing for reliable and scalable code. I learned TypeScript after learning JavaScript in my first year of college to build more robust, more maintainable web applications.",
      icon: {
        component: (size: number) => <Devicon.TypescriptOriginal size={size} />,
      },
    },
    {
      name: "C++",
      url: "https://en.wikipedia.org/wiki/C%2B%2B",
      group: "programming_languages",
      proficiency: 2,
      description:
        "C++ is a high-performance language used in system-level and application development. I studied C++ in my first year of college, mastering low-level programming and problem-solving for efficient applications.",
      icon: {
        component: (size: number) => <Devicon.CplusplusOriginal size={size} />,
      },
    },
    {
      name: "PHP",
      url: "https://www.php.net/",
      group: "programming_languages",
      proficiency: 2,
      description:
        "PHP is a server-side scripting language for dynamic web development and backend logic. I learned PHP in my first college semester to build server-side applications. I developed a dynamic website using PHP and MySQL for a course project.",
      icon: {
        component: (size: number) => <Devicon.PhpOriginal size={size} />,
      },
    },
    {
      name: "Python",
      url: "https://www.python.org/",
      group: "programming_languages",
      proficiency: 2,
      description:
        "Python is a versatile, readable language programming language used in web development, data science, and automation. I learnt Python in my second college semester to explore its applications in web development and data analysis. And spend more time to learn Machine Learning.",
      icon: {
        component: (size: number) => <Devicon.PythonOriginal size={size} />,
      },
    },
  ],
  techStacks: [
    {
      name: "HTML",
      url: "https://en.wikipedia.org/wiki/HTML",
      group: "web_development",
      proficiency: 3,
      description: "HTML is the standard markup language for structuring web content, forming the backbone of websites and applications. I self-taught HTML in high school, driven by curiosity about web mechanics, and built my first website.",
      icon: {
        component: (size: number) => <Devicon.Html5Original size={size} />,
      }
    },
    {
      name: "CSS",
      url: "https://en.wikipedia.org/wiki/CSS",
      group: "web_development",
      proficiency: 3,
      description:
        "CSS is a styling language that defines the visual presentation of web documents, enabling responsive and appealing designs. I learned CSS in high school alongside HTML to create visually engaging and functional web projects.",
      icon: {
        component: (size: number) => <Devicon.Css3Original size={size} />,
      },
    },
    {
      name: "NodeJS",
      url: "https://nodejs.org/en",
      group: "web_development",
      proficiency: 2,
      description:
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside of a browser. I’ve self-learned when i wanted to create some backend for my web projects.",
      icon: {
        component: (size: number) => <Devicon.NodejsOriginal size={size} />,
      },
    },
    {
      name: "ExpressJS",
      url: "https://expressjs.com/",
      group: "web_development",
      proficiency: 2,
      description:
        "Express.js, or simply Express, is a back end web application framework for Node.js. I’ve self-learned it when i wanted to create some backend for my web projects.",
      icon: {
        component: (size: number) => <Devicon.ExpressOriginal fill="#fff" size={size} />,
      },
    },
    {
      name: "React",
      url: "https://react.dev/",
      group: "web_development",
      proficiency: 2,
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components (size: number) =>. I’ve self-learned React after learning JavaScript.",
      icon: {
        component: (size: number) => <Devicon.ReactOriginal size={size} />,
      },
    },
    {
      name: "Firebase",
      url: "https://firebase.google.com/",
      group: "baas",
      proficiency: 1,
      description:
        "Firebase is a platform developed by Google for creating mobile and web applications. I self-taught Firebase in my first year of college to add backend services to my web projects.",
      icon: {
        component: (size: number) => <Devicon.FirebaseOriginal size={size} />,
      },
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
      group: "database",
      proficiency: 1,
      description:
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. I explored it when I was learning Firebase as an alternative.",
      icon: {
        component: (size: number) => <Devicon.MongodbOriginal size={size} />,
      },
    },
    {
      name: "MySQL",
      url: "https://www.mysql.com/",
      group: "database",
      proficiency: 2,
      description:
        "MySQL is an open-source relational database management system. I used MySQL for some course projects.",
      icon: {
        component: (size: number) => <Devicon.MysqlOriginal size={size} />,
      },
    },
    {
      name: "Vite",
      url: "https://vite.dev/",
      group: "developing_tools",
      proficiency: 2,
      description:
        "Vite is a build tool that allows you to serve your code in development mode and build it for production. I’ve been using it from day one when i started learning React, leveraging its speed for efficient development.",
      icon: {
        component: (size: number) => <Devicon.VitejsOriginal size={size} />,
      },
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      group: "web_development",
      proficiency: 2,
      description:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. I found it out when was finding a framework for my porftolio project aka this website.",
      icon: {
        component: (size: number) => <Devicon.TailwindcssOriginal size={size} />,
      },
    },
    {
      name: "Figma",
      url: "https://www.figma.com/",
      group: "design_tools",
      proficiency: 1,
      description:
        "Figma is a collaborative tool for designing and prototyping user interfaces for web and mobile apps. I used Figma to create intuitive designs for my web projects.",
      icon: {
        component: (size: number) => <Devicon.FigmaOriginal size={size} />,
      },
    },
    {
      name: "Docker",
      url: "https://www.docker.com/",
      group: "developing_tools",
      proficiency: 1,
      description:
        "Docker is a platform that uses containers for consistent development, testing, and production environments. I self-taught Docker in my first year of college, applying it to development, streamline deployment in course projects.",
      icon: {
        component: (size: number) => <Devicon.DockerPlainWordmark size={size} />,
      },
    },
    {
      name: "Git",
      url: "https://git-scm.com/",
      group: "developing_tools",
      proficiency: 2,
      description:
        "Git is a distributed version-control system for tracking code changes. I learned Git in my first year of college to manage collaborative software projects effectively.",
      icon: {
        component: (size: number) => <Devicon.GitOriginal size={size} />,
      },
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      group: "developing_tools",
      proficiency: 2,
      description:
        "GitHub is a web-based platform for version control and collaboration using Git. I’ve used GitHub since my first year of college to host and collaborate on course projects.",
      icon: {
        component: (size: number) => <Devicon.GithubOriginal size={size} className="[&>g]:fill-white"/>,
      },
    },
  ],
};
export default skillset;
