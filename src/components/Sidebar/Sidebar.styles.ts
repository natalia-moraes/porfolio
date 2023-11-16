import styled from 'styled-components'
import {motion} from 'framer-motion'

const Sidebar = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
`

const ContainerLinks = styled(motion.div)`
    position: fixed;
    top:0;
    left: 0;
    width: 400px;
    background: white;
`

export default {
    Sidebar,
    ContainerLinks,
}