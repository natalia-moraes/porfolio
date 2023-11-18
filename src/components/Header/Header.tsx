import Sidebar from '../Sidebar/Sidebar'
import Styles from './Header.styles'
import {Us, Br} from 'react-flags-select'

const FLAG_SIZE = 50

const Header = () => {
  return (
    <Styles.Header>
       <Sidebar />
      <Styles.Wrapper>
        <Styles.Title 
          initial={{opacity:0, scale:0.5}} 
          animate={{opacity:1, scale:1}} 
          transition={{duration:0.5}}
        >
          Front Dev
        </Styles.Title>
        <Styles.Language>
            <Br lang='Brasil' width={FLAG_SIZE} height={FLAG_SIZE}/>
            <Us lang='Estados Unidos' width={FLAG_SIZE} height={FLAG_SIZE}/>
        </Styles.Language>
      </Styles.Wrapper>
    </Styles.Header>
  )
}

export default Header
