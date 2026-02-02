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
    Honeywell,
    MAXPRO,
    CTMSMaster,
    TsIpass,
    SmartCare,
    HarithaNidhi,
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
      id: "skills",
      title: "Tech",
    },
    {
      id: "projects",
      title: "Projects",
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
      title: "Software Engineer II",
      company_name: "Honeywell Technology Solutions",
      icon: Honeywell,
      iconBg: "#E6DEDD",
      date: "Aug. 11, 2025 - Jan. 13, 2026",
      points: [
        "Designed, developed, and maintained scalable APIs that fetch data from multiple internal services, ensuring reliability and performance.",
        "Led UI enhancements and executed SQL database schema and data modifications to align with evolving product needs.",
        "Managed end-to-end service deployments using Octopus Deploy and built serverless solutions leveraging Azure Function Apps.",
        "Worked closely with cross-functional teams and successfully delivered product feature demonstrations to international stakeholders and clients."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "PureSoftware [A Happiest Minds Company]",
      icon: PureSoftware,
      iconBg: "#E6DEDD",
      date: "Oct. 03, 2024 - Aug. 05, 2025",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Streamline HEALTHCARE",
      icon: Streamline,
      iconBg: "#E6DEDD",
      date: "Apr. 22, 2024 - Sep. 27, 2024",
      points: [
        "Managed repositories using Git and Fork to ensure version control and efficient collaboration.",
        "Collaborated with clients to resolve bugs and address raised issues promptly.",
        "Ensured compliance with healthcare regulations (e.g., HIPAA) through robust security measures.",
        "Optimized system performance by automating workflows and collaborating with cross-functional teams.",
      ],
    },
    {
      title: "Dot Net Full Stack Developer",
      company_name: "CMS Computers Limited",
      icon: CMS,
      iconBg: "#E6DEDD",
      date: "Mar. 27, 2023 - Apr. 20, 2024",
      points: [
        "Developing and maintaining a user-friendly government application interface to support entrepreneurs in starting small-scale industries.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Software Engineer",
    //   company_name: "Kingston Info Solution Services Pvt. Ltd.",
    //   icon: Freelancer,
    //   iconBg: "#E6DEDD",
    //   date: "Dec. 10, 2018 - Mar. 24, 2023",
    //   points: [
    //     "Build dynamic and responsive single-page applications using HTML, CSS, and JavaScript.",
    //     "Work with clients to understand project needs and deliver solutions aligned with their business goals.",
    //     "Optimize web page performance, ensure fast load times, and improve cross-browser compatibility.",
    //     "Manage website deployment, troubleshoot issues, and maintain code for optimal functionality.",
    //   ],
    // },
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
      name: "MAXPRO Cloud",
      description:
        "Integrated cloud-based security management system that provides real-time access control and video surveillance to any mobile device, enabling on-the-go management of single or multiple buildings.",
        tags: [
        {
          name: "KnockOut.Js",
          color: "blue-text-gradient",
        },
        {
          name: "Function App",
          color: "green-text-gradient",
        },
        {
          name: "ServiceBus",
          color: "pink-text-gradient",
        },
      ],
      image: MAXPRO,
    },
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
    {
      name: "HARITHA NIDHI",
      description:
        "Telangana Haritha Nidhi (Green Fund) in 2022 focused on sustaining the massive Telanganaku Harithaharam (greenery drive) by collecting a 1% contribution from principal employers.",
      tags: [
        {
          name: "Asp.Net",
          color: "blue-text-gradient",
        },
        {
          name: "WebForms",
          color: "green-text-gradient",
        },
        {
          name: "MSSQL2019",
          color: "pink-text-gradient",
        },
      ],
      image: HarithaNidhi,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };