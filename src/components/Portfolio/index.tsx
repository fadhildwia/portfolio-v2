import { PortfolioDataInterface } from "@/types"
import React, { useState } from "react"
import { CardOne } from "../Card";

interface Props {
  data: Array<PortfolioDataInterface>;
}

const Portfolio = ({ data }: Props) => {
  const [expand, setExpand] = useState<Boolean>(false);
  const limitedData = data.slice(0, 2);

  return (
    <section>
      <div>
        <h2 className="font-medium md:text-lg md:font-normal mb-3">
          Previous Portfolio
        </h2>
        <div className="flex flex-col gap-3">
          {expand ? (
            data.map((item, index) => (
              <CardOne key={index} {...item} />
            ))
          ) : (
            limitedData.map((item, index) => (
              <CardOne key={index} {...item} />
            ))
          )}
          <div
            className="border-2 border-primary bg-background-3 text-center p-2 rounded-lg hover:bg-primary/50 cursor-pointer shadow-md shadow-primary/50"
            onClick={() => setExpand(!expand)}
          >
            {expand ? 'Show Less' : 'Show More'}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
