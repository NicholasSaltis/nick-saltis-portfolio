import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: lightgray;
    min-height: 6vh, auto;

`

export const StyledLink = styled(Link)`
    text-align: center;
    font-size: 1.2;
    margin: 15px 5px 15px 5px;
`

export const Logo = styled.span`
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    margin: 15px 5px 15px 30px;
    text-decoration: none;
`
export const PageContainer = styled.section`
    /* display: flex;
    justify-content: center; */
    margin-top: 0px;
    height: auto;
    min-height: 90vh;
    background-color: lightblue;
`
export const FooterContainer = styled.footer`
    height: 4vh;
    background-color: lightcoral;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardDeck = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-left: 5vw;
    margin-right: 5vw;
    flex-wrap: wrap;

`

export const CardContainer = styled.div`
    background-color: lightgreen;
    height: 60vh;
    width: 40vh;
    border-radius: 4px;
    margin: 35px;
`

export const ImageContainer = styled.div`
`

export const TextContainer = styled.div`
`

export const CardTitle = styled.h2`
`

export const CardDescription = styled.p`
`

export const CardLink = styled.a`
`