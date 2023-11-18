import styled from 'styled-components'
import {motion} from 'framer-motion'


const Links = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    a {
        font-size: 40px;
    }
`

const Item = styled(motion.a)``

export default {
    Links,
    Item,
}