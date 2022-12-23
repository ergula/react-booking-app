import React from 'react'

import linkedin from '../../../assets/images/linkedin.svg'
import github from '../../../assets/images/github.svg'
import twitter from '../../../assets/images/twitter.svg'
import email from '../../../assets/images/email.svg'

type Props = {
    name: string
    title: string
    id?: string
}

export default function TeamCard({name, title, id}: Props) {
  return (
    <div className="flex flex-col shadow shadow-black justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-800">
          <img
             alt='profile'
            className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
            src={`https://source.unsplash.com/100x100/?portrait?${id}`}
          />
          <div className="flex-1 my-4">
            <p className="text-xl text-black text-black font-semibold leading-snug">
              {name}
            </p>
            <p className="text-black">{title}</p>
          </div>
          <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
            <a
            href='/team'
              title="Email"
              className="text-darkBlue hover:text-orange"
            >
              <img src={email} alt="email" />
            </a>
            <a
              href="/team"
              title="Twitter"
              className="text-gray-700 hover:text-orange"
            >
              <img src={twitter} alt="twitter"  />
            </a>
            <a
              href="/team"
              title="LinkedIn"
              className="text-darkBlue hover:text-orange"
            >
             <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="/team"
              title="GitHub"
              className="text-darkBlue hover:text-orange"
            >
             <img src={github} alt="github" />
            </a>
          </div>
        </div>
  )
}
