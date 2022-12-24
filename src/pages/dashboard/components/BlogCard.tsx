import React from 'react'

type Props = {
    icon: string
}
export default function BlogCard({icon}: Props) {
  return (
    <div>
      {/* Blog Image */}
        <div className="max-w-sm bg-white  rounded-lg shadow-md shadow-darkBlue dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={icon}
            />
          </a>
          {/* Blog Card title */}
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                Lorem
              </h5>
            </a>
            {/* Blog Content */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
          </div>
        </div>
        
    </div>
  )
}
