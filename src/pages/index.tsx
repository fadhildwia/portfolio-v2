import { databases } from "@/appwrite/config"
import About from "@/components/About"
import Article from "@/components/Article"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Portfolio from "@/components/Portfolio"
import { CardOneInterface, ExperienceDataInterface, FooterInterface } from "@/types"
import Head from "next/head"

interface Props {
  data: {
    title: string
    about: string
    experience: ExperienceDataInterface[]
    portfolio: CardOneInterface[]
    article: CardOneInterface[]
    footer: FooterInterface[]
  }
}

export default function Home({ data }: Props) {
  return (
    <main className="max-w-screen-lg mx-auto flex flex-col gap-10 md:gap-16">
      <Head>
        <title>Fadhilah Dwi Ananda</title>
      </Head>
      <Header title={data.title} />
      <About description={data.about} />
      <Experience data={data.experience} />
      <Portfolio data={data.portfolio} />
      <Article data={data.article} />
      {/* <Project data={ProjectData} /> */}
      <Footer data={data.footer} />
    </main>
  )
}

export async function getServerSideProps() {
  const response = await databases.getDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID, 
    process.env.NEXT_PUBLIC_COLLECTION_PROFILE_ID,
    "66af5dfb0021765f654e"
  )

  if (response.experience.length > 0) {
    response.experience?.sort((a: any, b: any) => {
      return new Date(b.$createdAt).getTime() - new Date(a.$createdAt).getTime();
    });
  }

  if (response.portfolio.length > 0) {
    response.portfolio?.sort((a: any, b: any) => {
      return b.order - a.order
    });
  }

  if (response.article.length > 0) {
    response.article?.sort((a: any, b: any) => {
      return b.order - a.order
    });
  }

  return {
    props: {
      data: response
    }
  }
}
