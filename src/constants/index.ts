import { ExperienceDataInterface, ProjectDataInterface, FooterDataInterface, PortfolioDataInterface } from "@/types"

export const AboutData = `Hey there! Let's get straight to it! I'm Fadhilah and I
  love learning and creating new things on the internet. 
  I am a web and mobile app developer using React.js, Next.js,
  React Native, and many more that I started in 2021. I am motivated 
  by my passion for learning new things and overcoming unusual challenges. 
  Since then I have been very passionate about creating something, building 
  simple websites or mobile apps, and expanding my knowledge to recreate 
  awesome designs. My goal is to provide an engaging and perfect user experience. 🚀`

export const ExperienceData: ExperienceDataInterface[] = [
  {
    date: "January 2024 - Present",
    position: "Mid-Level Frontend Developer",
    company: "Akal Karya Indonesia",
    desc: `Collaborate with the team that handles the project from inception to customer
      usability, collaborate with colleagues on the backend, and focus on user needs 
      and usability. Test the site thoroughly, and ensure the application is 
      user-friendly, visually appealing, and fully functional.`,
    techStack: ["Next.js", "React Native", "Styled Components", "TypeScript", "Jest"],
  },
  {
    date: "August 2021 - November 2023",
    position: "Frontend Developer",
    company: "Technopartner Indonesia",
    desc: `Collaborate with the team based on business requirements. Ensure smooth 
      platform performance across devices. Build websites and mobile applications 
      from scratch and execute the process of publishing the application to Play 
      Store and App Store. Experienced in Kanban environment, managing tasks 
      efficiently and fostering teamwork. Client included Sosialoka, Selma, Ruparupa, and Cas-Ion.`,
    techStack: ["React.js", "Next.js", "React Native", "Ionic", "Redux", "Styled Components", "JavaScript", "TypeScript"],
  },
]

export const PortfolioData: PortfolioDataInterface[] = [
  {
    slug: "sricandy",
    title: "SriCandy - Uang Cermat (Akal Karya Indonesia) - 2024",
    desc: `SriCandy is an e-commerce application selling jewelry,
    currently available only in Singapore. The website, serving
    as the CMS, is built using Next.js, while the mobile application
    for customers is developed using React Native.`,
    techStack: ["Next.js", "React Native", "TypeScript", "Jest"],
    platform: ['website', 'android', 'ios']
  },
  {
    slug: "cas-ion",
    title: "Cas-ion - Technopartner Indonesia - 2023",
    desc: `Cas-ion is an electronic vehicle (EV) charging application
      integrated with the third-party payment system Midtrans. In this
      project, I am responsible for the Frontend development from inception
      to publishing the app on the App Store and Play Store. The
      application is built using React Native.`,
    techStack: ["React Native", "TypeScript"],
    platform: ['android', 'ios']
  },
  {
    slug: "ruparupa",
    title: "Ruparupa - Technopartner Indonesia - 2023",
    desc: `Ruparupa is an e-commerce application focusing on household items.
      This application includes a website and mobile applications for Android
      and iOS. The website is built using Next.js, and the mobile applications
      are developed using React Native. My scope of work for this project includes
      optimizing the product list, search product, and product detail sections
      using the third-party service Algolia.`,
    techStack: ["Next.js", "React Native", "TypeScript", "Redux", "Algolia"],
    platform: ['website', 'android', 'ios']
  },
  {
    slug: "selma",
    title: "Selma - Technopartner Indonesia - 2022",
    desc: `Selma is an e-commerce application focusing on furniture products.
      This mobile application is available for both Android and iOS, built using
      React Native and based on the codebase of the Informa app,
      where I am responsible for the Frontend development.`,
    techStack: ["React Native", "TypeScript", "Redux"],
    platform: ['android', 'ios']
  },
  {
    slug: "sosialoka",
    title: "Sosialoka - Technopartner Indonesia - 2022",
    desc: `Sosialoka is a CMS application designed for Music Cover Producers
      and Label Clearance, enabling them to operate within a creative and legal
      ecosystem according to Indonesian regulations. The application is
      built using React and Ionic for cross-platform support.`,
    techStack: ["React", "TypeScript", "Ionic", "Redux"],
    platform: ['website', 'android', 'ios']
  },
]

export const ProjectData: ProjectDataInterface[] = [
  {
    url: "",
    title: "Test 1",
    desc: `A simple clone of Excalidraw built with React and TypeScript. I
      made this side project for learning purposes. The app isn't
      responsive, but I prioritized functionalities over responsiveness.`,
    techStack: ["React", "TypeScript"],
  },
]

export const FooterData: FooterDataInterface[] = [
  {
    title: "Github",
    url: "https://github.com/fadhildwia",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/fadhilahdwiananda/",
  },
]
