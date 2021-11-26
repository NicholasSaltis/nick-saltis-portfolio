import React from 'react'
import { Logo, NavContainer, StyledLink } from '../styled-components'

export const Navbar = () => {
    return (
        <NavContainer>
            <Logo>Nick Saltis</Logo>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            <StyledLink to="/bio">Bio</StyledLink>
        </NavContainer>
    )
}
