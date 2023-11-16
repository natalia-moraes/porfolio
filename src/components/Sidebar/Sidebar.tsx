import React, { useState } from 'react'
import Styles from './Sidebar.styles'
import ToggleButton from '../toggleButton/ToggleButton'
import Links from '../links/Links'

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const variants = {
        open:{},
        closed:{
            clipPath: "circle(30px at 50px 50px)",
        },
    }
  return (
    <Styles.Sidebar animate={open? 'open' : 'closed'}>
      <Styles.ContainerLinks variants={variants}>
        <Links />
      </Styles.ContainerLinks>
      <ToggleButton openNavbar={()=>setOpen}/>
    </Styles.Sidebar>
  )
}

export default Sidebar
