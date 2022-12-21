import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menubar } from 'primereact/menubar'

const NavigationBar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Dashboard',
      command: () => {navigate('/dashboard')}
    },
    
  ]
  return (
    <div>
      <div className='card' style={{zIndex:20, position: 'relative'}}>
        <Menubar model={items}

        />
      </div>
    </div>
  )
}

export default NavigationBar