import React, { useState } from 'react'
import Styles from './Sidebar.styles'
import ToggleButton from '../toggleButton/ToggleButton'
import Links from '../links/Links'

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const variants = {
        open:{
          clipPath: "circle(1200px at 50px 50px)",
          transition: {
            type: "spring",
            stiffness: 20,
          }
        },
        closed:{
            clipPath: "circle(30px at 50px 50px)",
            transition: {
              delay: 0.5,
              type: "srping",
              stiffness:400,
              damping: 40,
            }
        },
    }
  return (
    <Styles.Sidebar animate={open? 'open' : 'closed'}>
      <Styles.ContainerLinks variants={variants}>
        <Links />
      </Styles.ContainerLinks>
      <ToggleButton openNavbar={setOpen}/>
    </Styles.Sidebar>
  )
}

export default Sidebar
