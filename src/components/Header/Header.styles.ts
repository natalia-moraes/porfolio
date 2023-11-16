import styled from 'styled-components'
import {motion} from 'framer-motion'

const Header = styled.div`
    height: 100px;
`

const Wrapper = styled.div`
    max-width: 1366px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`

const Title = styled(motion.span)`
    font-weight: bold;
`

const Language = styled.div`
    display: flex;
    gap: 20px;
`

export default {
    Header,
    Wrapper,
    Title,
    Language,
}