import { InputHTMLAttributes } from "react"

export interface TextInputProps extends InputHTMLAttributes<HTMLElement> {}

export default function TextInput(props: TextInputProps) {
  return (
    <input
    className="bg-darkBlue border border-gray-100t py-2 px-5 w-full text-gray-100 rounded-lg outline-none placeholder:text-gray-700 text-sm focus:ring-2 ring-cyan-500"
    {...props}/>
  )
}
