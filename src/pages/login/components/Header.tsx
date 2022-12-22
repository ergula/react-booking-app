import React from 'react'
import Button from './Button'
import Heading from './Heading'
import Text from './Text'

import logo from '../../../assets/images/login_logo.gif'

function Header() {
  return (
    <div className='w-full h-20 pt-1 bg-darkBlue flex px-20 items-center justify-between'>
        <Heading>
        <img src={logo} width={55} height={55}/>
        </Heading>
        <div className='flex items-center gap-8'>
            <Text size='md'>Login</Text>
            <Button size='md'>Contact Me</Button>
        </div>
    </div>
  )
}

export default Header