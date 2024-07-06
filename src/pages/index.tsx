import About from "@/components/About"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Portfolio from "@/components/Portfolio"
import Project from "@/components/Project"
import { AboutData, ExperienceData, ProjectData, FooterData, PortfolioData } from "@/constants"

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto flex flex-col gap-10 md:gap-16">
      <Header title="Mid-Level Frontend Developer" />
      <About description={AboutData} />
      <Experience data={ExperienceData} />
      <Portfolio data={PortfolioData} />
      {/* <Project data={ProjectData} /> */}
      <Footer data={FooterData} />
    </main>
  )
}
