import Styles from './Links.styles'

const items = [
  "Homepage",
  "Services",
  "Portfolio",
  "Contact",
  "About",
]

const Links = () => {
  return (
    <Styles.Links>
      {items.map((item) => (
        <a href={`#${item}`} key={item}>{item}</a>
      ))}
    </Styles.Links>
  )
}

export default Links
