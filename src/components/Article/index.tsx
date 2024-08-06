import { CardOneInterface } from "@/types"
import React, { useState } from "react"
import { CardOne } from "../Card";
import { useGlobal } from "@/context/GlobalContext";

interface Props {
  data: Array<CardOneInterface>;
}

const Article = ({ data }: Props) => {
  const { expandArticle, setExpandArticle } = useGlobal();
  const limitedData = data.slice(0, 2);

  return (
    <section>
      <div>
        <h2 className="font-medium md:text-lg md:font-normal mb-3">
          Latest Article
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {expandArticle ? (
            data.map((item, index) => (
              <CardOne key={index} {...item} />
            ))
          ) : (
            limitedData.map((item, index) => (
              <CardOne key={index} {...item} />
            ))
          )}
        </div>
        <div
            className="border-2 border-primary bg-background-3 text-center p-2 rounded-lg hover:bg-primary/50 cursor-pointer shadow-md shadow-primary/50"
            onClick={() => setExpandArticle(!expandArticle)}
          >
            {expandArticle ? 'Show Less' : 'Show More'}
          </div>
      </div>
    </section>
  )
}

export default Article
