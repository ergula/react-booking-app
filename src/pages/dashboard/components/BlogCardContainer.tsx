import React, {ReactNode} from 'react'

type Props = {
    children: ReactNode
}
export default function BlogCardContainer({children}: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-4">
        {children}
        </div>
  )
}
