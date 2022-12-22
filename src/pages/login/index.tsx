import React from 'react'
import Header from './components/Header'
import Heading from './components/Heading'

import Text from './components/Text'
import TextInput from './components/TextInput'
import Button from './components/Button'

export default function LoginPage ()  {
  return (
    <div className='w-screen h-screen flex-col overflow-hidden'>
     <Header />
     <div className='w-full h-full bg-white grid place-items-center  pt-4'>
       <div className='bg-darkBlue py-6 px-14 w-96 rounded-3xl flex flex-col  text-center mb-16'>
         <div className='mb-4'>
           <Heading size='lg'>LOGIN</Heading>
         </div>
         <div className='mb-4'>
           <Text size='md'>Hey! You can login to  Booking App</Text>
         </div>
         <div className='mb-2'>
           <TextInput placeholder='Username'></TextInput>
         </div>
         <div className='mb-2'>
           <TextInput placeholder='Password*'></TextInput>
         </div>
         <div className='mb-4 flex justify-start'>
           <Text size='sm'>Forgotten your password ?</Text>
         </div>
         <div className='mb-4'>
           <Button>Login</Button>
         </div>
       </div>
     </div>
    </div>
  )
}

