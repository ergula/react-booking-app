import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menubar } from 'primereact/menubar'
import { Button} from 'primereact/button'

import Logo from "../../assets/images/logo_white.gif"

const NavigationBar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      command: () => {navigate('/dashboard')}
    },
    {
      label: 'Add Hotel',
      icon: 'pi pi-plus',
      command: () => {navigate('/addHotel')}

    },
    {
      label: 'About Us',
      icon: 'pi pi-table',
      command: () => {navigate('/aboutUs')}

    },
    {
      label: 'Blog',
      icon: 'pi pi-comment',
      command: () => {navigate('/blog')}

    },
    {
      label: 'Contact',
      icon: 'pi pi-phone',
      command: () => {navigate('/contact')}

    },
  ]
  return (
    <div>
      <div className='card' style={{zIndex:22, position: 'relative'}}>
        <Menubar model={items}
        start= {
          <img  src={Logo} height="40" width="40" className='mr-6' />
        }
        end={<Button label="Logout" icon="pi pi-power-off"  />}
        />
      </div>
    </div>
  )
}

export default NavigationBar