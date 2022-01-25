import React from 'react'
import { Logo, NavContainer, StyledLink } from '../styled-components'

export const Navbar = () => {
    return (
        <NavContainer>
            <Logo to="/">Nick Saltis</Logo>
            <StyledLink to="/projects">Projects</StyledLink>
            <StyledLink to="/bio">Contact/About</StyledLink>
        </NavContainer>
    )
}
