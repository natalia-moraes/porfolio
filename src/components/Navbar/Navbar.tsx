import Styles from './Navbar.styles'
import Header from '../Header/Header'

const Navbar = () => {
  return (
    <Styles.Navbar>  
        <Styles.Item>
            <Header />
        </Styles.Item>
        <Styles.Item>Sobre</Styles.Item>
        <Styles.Item>Serviços</Styles.Item>
        <Styles.Item>Tecnologias</Styles.Item>
        <Styles.Item>Projetos</Styles.Item>
        <Styles.Item>Contato</Styles.Item>
    </Styles.Navbar>
  )
}

export default Navbar
