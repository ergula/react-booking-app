import React, { ReactNode } from "react";


type Props = {
    title: string
    main?: boolean
    children?: ReactNode
}
export default function SectionTitle({  title, main = false, children}: Props) {
    return (
    <section className={`${main ? '' : 'pt-6'} mb-6 flex items-center justify-between`}>
        <div className="flex items-center justify-start">
            <h1 className="text-2xl text-gray-700">{title}</h1>
        </div>
        {children}
    </section>
    )
}