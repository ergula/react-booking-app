import React from 'react'

type Props = {
    title: string
    content: string
    icon: string
}

export default function InfoCard({title, content, icon}: Props) {
  return (
    <div>

        <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg shadow-md shadow-darkBlue md:flex-row md:max-w-xl hover:bg-gray-100"
          >
            {/* Info Image */}
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
              src={icon}
            />
            {/* Info Title */}
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
               {title}
              </h5>
              {/* Info Content */}
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {content}
              </p>
            </div>
          </a>
    </div>
  )
}


