import React, {ReactNode} from 'react'

type Props = {
    className?: string
    children?: ReactNode
}

export default function CardBoxFooter({className, children}: Props) {
  return (
    <footer className={`p-6 ${className}`}>{children}</footer>
  )
}
