import { clsx } from 'clsx'
interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: string;
    
}

export default function Text({ size= 'md', children, }: TextProps) {
  return (
    <span className={clsx('text-white',
    {
        'text-xs': size == 'sm',
        'text-sm': size == 'md',
        'text-md': size == 'lg',
    })}>
        {children}
    </span>
  )
}

