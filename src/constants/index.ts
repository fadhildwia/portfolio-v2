import { ExperienceDataInterface, CardOneInterface } from "@/types"

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
  },
]

export const PortfolioData: CardOneInterface[] = [
  {
    link: "/detail/sricandy",
    title: "SriCandy - Uang Cermat (Akal Karya Indonesia) - 2024",
    desc: `SriCandy is an e-commerce application selling jewelry,
    currently available only in Singapore. The website, serving
    as the CMS, is built using Next.js, while the mobile application
    for customers is developed using React Native.`,
    platform: [
      {
        url: '',
        title: 'website'
      },
      {
        url: 'https://play.google.com/store/apps/details?id=com.sricandy.sricandy&hl=en_US',
        title: 'android'
      },
      {
        url: '',
        title: 'ios'
      },
    ]
  },
  {
    link: "/detail/cas-ion",
    title: "Cas-ion - Technopartner Indonesia - 2023",
    desc: `Cas-ion is an electronic vehicle (EV) charging application
      integrated with the third-party payment system Midtrans. In this
      project, I am responsible for the Frontend development from inception
      to publishing the app on the App Store and Play Store. The
      application is built using React Native.`,
    platform: [
      {
        url: 'https://play.google.com/store/apps/details?id=id.technopartner.casion&hl=en',
        title: 'android'
      },
      {
        url: 'https://apps.apple.com/id/app/cas-ion/id6452981898',
        title: 'ios'
      },
    ]
  },
  {
    link: "/detail/ruparupa",
    title: "Ruparupa - Technopartner Indonesia - 2023",
    desc: `Ruparupa is an e-commerce application focusing on household items.
      This application includes a website and mobile applications for Android
      and iOS. The website is built using Next.js, and the mobile applications
      are developed using React Native. My scope of work for this project includes
      optimizing the product list, search product, and product detail sections
      using the third-party service Algolia.`,
    platform: [
      {
        url: 'https://www.ruparupa.com/',
        title: 'website'
      },
      {
        url: 'https://play.google.com/store/apps/details?id=com.mobileappruparupa&hl=id',
        title: 'android'
      },
      {
        url: 'https://apps.apple.com/id/app/ruparupa/id1324434624?l=id',
        title: 'ios'
      },
    ]
  },
  {
    link: "/detail/selma",
    title: "Selma - Technopartner Indonesia - 2022",
    desc: `Selma is an e-commerce application focusing on furniture products.
      This mobile application is available for both Android and iOS, built using
      React Native and based on the codebase of the Informa app,
      where I am responsible for the Frontend development.`,
    platform: [
      {
        url: 'https://play.google.com/store/apps/details?id=mobi.mobileforce.selma&hl=id',
        title: 'android'
      },
      {
        url: 'https://apps.apple.com/us/app/selma/id1628040383',
        title: 'ios'
      },
    ]
  },
  {
    link: "/detail/sosialoka",
    title: "Sosialoka - Technopartner Indonesia - 2022",
    desc: `Sosialoka is a CMS application designed for Music Cover Producers
      and Label Clearance, enabling them to operate within a creative and legal
      ecosystem according to Indonesian regulations. The application is
      built using React and Ionic for cross-platform support.`,
    platform: [
      {
        url: 'https://studio.coverclearance.id/',
        title: 'website'
      },
      {
        url: '',
        title: 'android'
      },
      {
        url: '',
        title: 'ios'
      },
    ]
  },
]

export const ArticleData: CardOneInterface[] = [
  {
    link: "https://medium.com/@fadhilahdwi.a/memahami-ssg-isr-dan-ssr-di-next-js-panduan-praktis-6f016e75c0a4",
    title: "Memahami SSG, ISR, dan SSR di Next.js: Panduan Praktis",
    desc: `August 2, 2024 • ☕️☕️ 3 min read`,
  },
  {
    link: "https://medium.com/@fadhilahdwi.a/testing-di-aplikasi-react-unit-testing-dan-integration-testing-dengan-jest-dan-react-testing-eb974a4f7275",
    title: "Testing di Aplikasi React: Unit Testing dan Integration Testing dengan Jest dan React Testing Library",
    desc: `July 31, 2024 • ☕️☕️ 3 min read`,
  },
  {
    link: "https://medium.com/@fadhilahdwi.a/mengoptimalkan-performa-aplikasi-react-memoization-lazy-loading-dan-code-splitting-dengan-7694c5ed8215",
    title: "Mengoptimalkan Performa Aplikasi React: Memoization, Lazy Loading, dan Code Splitting dengan TypeScript",
    desc: `July 31, 2024 • ☕️☕️ 3 min read`,
  },
  {
    link: "https://medium.com/@fadhilahdwi.a/menguasai-react-hooks-a-deep-dive-d7de073e10d9",
    title: "Menguasai React Hooks: A Deep Dive",
    desc: `July 31, 2024 • ☕️ 2 min read`,
  },
  {
    link: "https://medium.com/@fadhilahdwi.a/penjelasan-dari-csr-ssr-ssg-dan-isr-35239990ba3c",
    title: "Penjelasan dari CSR, SSR, SSG, dan ISR",
    desc: `May 27, 2024 • ☕️☕️ 4 min read`,
  },
]
