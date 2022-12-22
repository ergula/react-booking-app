import React from 'react'

interface Buttons {
    size?: 'sm' | 'md' | 'lg';
    children: string;
}

export default function Button({size= 'lg', children}: Buttons) {
  return (
    <button className='text-white bg-orange py-2 px-2 rounded-lg font-semibold w-full font-sans  hover:bg-darkBlue'>
        {children}
    </button>
  )
}
