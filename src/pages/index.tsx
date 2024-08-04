import About from "@/components/About"
import Article from "@/components/Article"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Portfolio from "@/components/Portfolio"
import { AboutData, ArticleData, ExperienceData, FooterData, PortfolioData } from "@/constants"
import Head from "next/head"

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto flex flex-col gap-10 md:gap-16">
      <Head>
        <title>Fadhilah Dwi Ananda</title>
      </Head>
      <Header title="Mid-Level Frontend Developer" />
      <About description={AboutData} />
      <Experience data={ExperienceData} />
      <Portfolio data={PortfolioData} />
      <Article data={ArticleData} />
      {/* <Project data={ProjectData} /> */}
      <Footer data={FooterData} />
    </main>
  )
}
