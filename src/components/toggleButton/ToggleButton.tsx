import Styles from './ToggleButton.styles'

interface IToggleButton {
  openNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}
const ToggleButton = ({openNavbar}: IToggleButton) => {
  return (
    <Styles.Button onClick={() => openNavbar(prev => !prev)}>
      Button
    </Styles.Button>
  )
}

export default ToggleButton
