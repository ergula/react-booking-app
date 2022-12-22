import React, {ReactNode} from 'react'

type Props = {
    children?: ReactNode
    className?: string
    noPadding?: boolean
}
export default function CardBoxBody({children, className, noPadding= false}: Props) {
  return (
      <div className={`flex-1 ${className}`}>{children}</div>
  )
}
