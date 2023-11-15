import Styles from './Header.styles'
import {Us, Br} from 'react-flags-select'

const FLAG_SIZE = 25

const Header = () => {
  return (
    <Styles.Header>
      <Styles.Wrapper>
        <Styles.Title>Front Dev</Styles.Title>
        <Styles.Language>
            <Br lang='Brasil' width={FLAG_SIZE} height={FLAG_SIZE}/>
            <Us lang='Estados Unidos' width={FLAG_SIZE} height={FLAG_SIZE}/>
        </Styles.Language>
      </Styles.Wrapper>
    </Styles.Header>
  )
}

export default Header
