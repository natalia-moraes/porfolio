import Styles from './Navbar.styles'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'

const Navbar = () => {
  return (
    <Styles.Navbar>  
        <Styles.Item id="Homepage">
            <Header />
            <Hero />
        </Styles.Item>
        <Styles.Item id="Homepage">Homepage</Styles.Item>
        <Styles.Item id="Services">Services</Styles.Item>
        <Styles.Item id="Portfolio">Portfolio</Styles.Item>
        <Styles.Item id="Contact">Contact</Styles.Item>
        <Styles.Item id="About">About</Styles.Item>
    </Styles.Navbar>
  )
}

export default Navbar
