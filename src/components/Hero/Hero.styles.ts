import styled from 'styled-components'
import {motion} from 'framer-motion'

const Hero = styled.div`
    height: calc(100vh - 100px);
    overflow: hidden;
    background: linear-gradient(180deg, #0c0c1d, #111132);
    position: relative;
`

const Wrapper = styled.div`
    max-width: 1366px;
    height: 100%;
    margin: auto;
`

const Description = styled(motion.div)`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
`

const Name = styled(motion.h2)`
    font-size: 30px;
    color: rebeccapurple;
    letter-spacing: 10px;
`

const Title = styled(motion.h1)`
    font-size: 88px;
`

const Scroll = styled(motion.img)`
    width: 50px;

`

const Container = styled.div``

const Image = styled.img`
    height: 1250px;
    position: absolute;
    top: 0;
    right: 0px;
    
`
const SlidingTextContainer = styled.div`
    position: absolute;
    font-size: 40vh;
    bottom: -80px;
    white-space: nowrap;
    color: #ffffff09;
`

const ButtonsContainer = styled(motion.div)``

const Button = styled(motion.button)`
    padding: 20px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: transparent;
    color: white;
    margin-right: 20px;
    cursor: pointer;
    font-weight: 300;
`

export default {
    Hero,
    Wrapper,
    Description,
    Name,
    Title,
    Scroll,
    Container,
    Image,
    ButtonsContainer, 
    Button,  
    SlidingTextContainer,
}