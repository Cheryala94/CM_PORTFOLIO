import {
    mobile,
    backend,
    creator,
    web,
    css,
    git,
    html,
    javascript,
    reactjs,
    tailwind,
    DevOps,
    CSharp,
    VB,
    SQL,
    Azure,
    VS,
    CMS,
    Freelancer,
    Streamline,
    PureSoftware,
    CTMSMaster,
    TsIpass,
    SmartCare,
  } from "../assets";
  
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
      id: "profile",
      title: "Profile",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: ".NET Full Stack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Azure DevOps Engineer",
      icon: backend,
    },
    {
      title: "Server & Infrastructure Specialist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "DevOps",
      icon: DevOps,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "CSharp",
      icon: CSharp,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "VB",
      icon: VB,
    },
    {
      name: "SQL",
      icon: SQL,
    },
    {
      name: "Azure",
      icon: Azure,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "VS",
      icon: VS,
    },
  ];
  
  const experiences = [
    {
      title: "Front-End Developer",
      company_name: "Freelancer",
      icon: Freelancer,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - Feb 2023",
      points: [
        "Build dynamic and responsive single-page applications using HTML, CSS, and JavaScript.",
        "Work with clients to understand project needs and deliver solutions aligned with their business goals.",
        "Optimize web page performance, ensure fast load times, and improve cross-browser compatibility.",
        "Manage website deployment, troubleshoot issues, and maintain code for optimal functionality.",
      ],
    },
    {
      title: "Dot Net Full Stack Developer",
      company_name: "CMS Computers Limited",
      icon: CMS,
      iconBg: "#E6DEDD",
      date: "March 2023 - April 2024",
      points: [
        "Developing and maintaining a user-friendly government application interface to support entrepreneurs in starting small-scale industries.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "DevOPS Engineer",
      company_name: "Streamline HEALTHCARE",
      icon: Streamline,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Managed repositories using Git and Fork to ensure version control and efficient collaboration.",
        "Collaborated with clients to resolve bugs and address raised issues promptly.",
        "Ensured compliance with healthcare regulations (e.g., HIPAA) through robust security measures.",
        "Optimized system performance by automating workflows and collaborating with cross-functional teams.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "PureSoftware [A Happiest Minds Company]",
      icon: PureSoftware,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Madhu collaborated with product owners to explore new concepts and connected with clients to align the product with their needs.",
      name: "Sara Johnson",
      designation: "Lead Engineer",
      company: "CMS",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Madhu launched our app, increasing engagement by 60% and streamlining user feedback integration. User interaction is show stopper.",
      name: "Chris Simson",
      designation: "Product Owner",
      company: "SmartCare",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Madhu optimized our website, our traffic increased by 50%. Users with concerns were addressed with Quick Support and effective resolution.",
      name: "Anna Huang",
      designation: "CTO",
      company: "PureSoftware",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CTMS MASTER",
      description:
        "A premier clinical trial management system that enhances accessibility, streamlines operations, and eliminates redundancies for efficient trial conduct.",
      tags: [
        {
          name: "VB.Net",
          color: "blue-text-gradient",
        },
        {
          name: "CI/CDPipelines",
          color: "green-text-gradient",
        },
        {
          name: "MSSQL2019",
          color: "pink-text-gradient",
        },
      ],
      image: CTMSMaster,
    },
    {
      name: "SmartCare EHR",
      description:
        "SmartCare is a cloud-based, all-in-one solution for Behavioral Health and Human Services, designed to empower those improving lives.",
      tags: [
        {
          name: ".NetCore",
          color: "blue-text-gradient",
        },
        {
          name: "WebHosting",
          color: "green-text-gradient",
        },
        {
          name: "MSSQL2019",
          color: "pink-text-gradient",
        },
      ],
      image: SmartCare,
    },
    {
      name: "TS-IPASS",
      description:
        "The TS-iPASS Act, 2014 streamlines industrial approvals, enabling swift, single-point clearances based on self-certification, fostering an investor-friendly environment.",
      tags: [
        {
          name: "Asp.Net",
          color: "blue-text-gradient",
        },
        {
          name: "NTierArchitecture",
          color: "green-text-gradient",
        },
        {
          name: "MSSQL2019",
          color: "pink-text-gradient",
        },
      ],
      image: TsIpass,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };