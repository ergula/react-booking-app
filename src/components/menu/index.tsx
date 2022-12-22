import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menubar } from 'primereact/menubar'
import { Button} from 'primereact/button'

import Logo from "../../assets/images/logo_white.gif"

const NavigationBar = () => {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate('/')
  }

  const items = [
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      command: () => {navigate('/dashboard')}
    },
    {
      label: 'Add Hotel',
      icon: 'pi pi-plus',
      command: () => {navigate('/add-hotel')}

    },
    {
      label: 'About Us',
      icon: 'pi pi-table',
      command: () => {navigate('/about-us')}

    },
    {
      label: 'Team',
      icon: 'pi pi-users',
      command: () => {navigate('/team')}
    },
  ]
  return (
    <div>
      <div className='card' style={{zIndex:22, position: 'relative'}}>
        <Menubar model={items}
        start= {
          <img  src={Logo} height="40" width="40" className='mr-4' />
        }
        end={<Button label="Logout" icon="pi pi-power-off" onClick={loginClick} />}
        />
      </div>
    </div>
  )
}

export default NavigationBar