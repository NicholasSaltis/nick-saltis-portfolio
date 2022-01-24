import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 6vh, auto;
    box-shadow: 0 3px 5px lightgrey ;
`

export const StyledLink = styled(Link)`
    text-align: center;
    font-size: 1.2;
    margin: 15px 20px 15px 20px;
    text-decoration: none;
    &:visited {
        text-decoration: none;
        color: black;
    }
`

export const Logo = styled(Link)`
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    margin: 15px 5px 15px 30px;
    text-decoration: none;
    &:visited {
        text-decoration: none;
        color: black;
    }
`
export const PageContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    height: auto;
    min-height: 90vh;
    /* background-color: lightblue; */
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
    width: 90vw;
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
    background-color: lightyellow;
    width: 100%;
    height: 50%;
    margin-bottom: 0px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightgrey;
    width: 100%;
    height: 50%;
    margin-top: 0px;
`

export const CardTitle = styled.h2`
    text-align: center;
`

export const CardDescription = styled.p`
    margin-left: 3%;
    margin-right: 3%;
`

export const CardLink = styled.a`
    text-align: center;
    
`