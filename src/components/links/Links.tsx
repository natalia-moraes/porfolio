import Styles from './Links.styles'

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  }
}

const items = [
  "Homepage",
  "Services",
  "Portfolio",
  "Contact",
  "About",
]

const Links = () => {
  return (
    <Styles.Links variants={variants}>
      {items.map((item) => (
        <Styles.Item 
          href={`#${item}`} 
          key={item} 
          variants={itemVariants}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
        >
          {item}
        </Styles.Item>
      ))}
    </Styles.Links>
  )
}

export default Links
