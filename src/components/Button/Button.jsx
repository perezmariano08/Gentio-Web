import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

const Button = ({children, ...props}) => {
    return (
        <ButtonWrapper {...props}>
            {children}
        </ButtonWrapper>
    )
}

export default Button