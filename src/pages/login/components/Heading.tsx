import React from 'react'

interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: any
}

export default function Heading({ size= 'md', children}: HeadingProps) {
  return (
    <div className='text-white font-bold font-sans'>{children}</div>
  )
}
