import React from 'react'
import styled from 'styled-components'

interface Props {
    children: string
}

const Button: React.FC<Props> = ({children}) => {
    const text = children
    return(
        <div>
            <StyledButton>{text}</StyledButton>
        </div>
    )
}

const StyledButton = styled.button`

`

export default Button