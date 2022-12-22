import React, { ReactNode} from 'react'
import { containerMax } from '../../../config'


type Props = {
    children: ReactNode
}

export default function SectionMain({ children }: Props) {
  return (
    <section className={`p-6 ${containerMax}`}>{children}</section>
  )
}
