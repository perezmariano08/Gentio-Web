import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

const Button = ({children}) => {
    return (
        <ButtonWrapper>{children}</ButtonWrapper>
    )
}

export default Button