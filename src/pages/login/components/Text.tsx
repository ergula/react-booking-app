import React from 'react'

interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: string;
}

export default function Text({ size= 'md', children}: TextProps) {
  return (
    <span className='text-white font-sans'>
        {children}
    </span>
  )
}

