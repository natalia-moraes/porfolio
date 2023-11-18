import Styles from './Hero.styles'
const descriptionVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}
const Hero = () => {
  return (
    <Styles.Hero>
        <Styles.Wrapper>
            <Styles.Description 
                variants={descriptionVariants}
                initial="initial"
                animate="animate"
            >
                <Styles.Name variants={descriptionVariants}>NATÁLIA MORAES</Styles.Name>
                <Styles.Title variants={descriptionVariants}>Web developer Front-end</Styles.Title>
                <Styles.ButtonsContainer variants={descriptionVariants}>
                    <Styles.Button variants={descriptionVariants}>Veja os Últimos Trabalhos</Styles.Button>
                    <Styles.Button variants={descriptionVariants}>Contato</Styles.Button>
                </Styles.ButtonsContainer>
                <Styles.Scroll src="../src/assets/scroll.png" alt="" variants={descriptionVariants}/>
            </Styles.Description>
        </Styles.Wrapper>
        <Styles.SlidingTextContainer>
            Welcome to my creative world - Explore my portfolio.
        </Styles.SlidingTextContainer>
        <Styles.Container>
            <Styles.Image src="../src/assets/nati-moraes.png" alt=""/>
        </Styles.Container>
    </Styles.Hero>
    
  )
}

export default Hero
