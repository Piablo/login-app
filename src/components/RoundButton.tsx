import React from 'react'
import styled from 'styled-components'

interface Props {
    onClick: () => void
}
const RoundButton:React.FC<Props> = ({onClick}) => {
    return(
        <Container onClick={onClick}>RB</Container>
    )
}

const Container = styled.div`
    width: 50px;
    height: 50px;
    background-color: pink;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export default RoundButton