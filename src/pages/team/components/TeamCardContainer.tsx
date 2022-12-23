import React, { ReactNode } from "react";

type Props = {
    children: ReactNode
    title: string
    subTitle: string
}

export default function TeamCardContainer({children,title,subTitle} : Props) {
  return (
      <section>
          <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="p-4 text-gray-100 text-md font-bold tracking-wider text-center uppercase">
            {title}
          </p>
          <h1 className="text-4xl font-bold leading-none text-orange text-center sm:text-5xl">
            {subTitle}
          </h1>
          <div className="flex flex-row flex-wrap-reverse justify-center mt-8">{children}</div>
          </div>
      </section>
   
  )
}
