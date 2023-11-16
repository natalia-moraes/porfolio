import Styles from './ToggleButton.styles'

interface IToggleButton {
  openNavbar: () => void
}
const ToggleButton = ({openNavbar}:IToggleButton) => {
  return (
    <Styles.Button onClick={openNavbar}>
      Button
    </Styles.Button>
  )
}

export default ToggleButton
