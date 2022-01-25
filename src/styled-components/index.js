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
    justify-content: center;
    align-items: center;
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
    height: 50vh;
    width: 40vh;
    border-radius: 4px;
    margin: 35px;
`

export const ImageContainer = styled.div`
    background-color: lightyellow;
    width: 100%;
    height: 60%;
    margin-bottom: 0px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    width: 100%;
    height: auto;
    min-height: 40%;
    margin-top: 0px;
`

export const CardTitle = styled.h2`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0px;
`

export const CardDescription = styled.p`
    margin: auto;
    padding: 10px;
    text-align: center;
`

export const CardLinkBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 5px;
`

export const CardLink = styled.a`
    text-align: center;
    text-decoration: none;
    color: black;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    } 
`

export const CardNavLink = styled(Link)`
    text-align: center;
    text-decoration: none;
    color: black;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`

export const HeroContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: grey;
`

// export const HeroImageContainer = styled.img`
//     min-width: 50%;
//     height: auto;
//     background-color: red;
// `

export const HeroTextContainer = styled.div`
    max-width: 60%;
    height: auto;
    @media (max-width: 600px) {
        max-width: 95%;
    }
`

export const HeroTitle = styled.h1`
    text-align: center;
    font-size: 40px;
    color: black;
`

export const HeroSubtitle = styled.h2`
    text-align: center;
`

export const HeroText = styled.p`
    color: black;
    margin: 5%;
    overflow-wrap: break-word;
`

export const ContactList = styled.ul`
    margin: 5%;
    color: black;
    list-style-type: none;
`

export const ContactListItem = styled.li`
    color: black;
    margin-bottom: 20px;
`