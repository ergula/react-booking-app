import clsx from 'clsx';

interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: any
}

export default function Heading({ size= 'md', children}: HeadingProps) {
  return (
    <div className={clsx('text-white font-bold',
    {
        'text-md': size == 'sm',
        'text-lg': size == 'md',
        'text-xl': size == 'lg',
    }
    )}>{children}</div>
  )
}
