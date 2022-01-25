import React from 'react'
import { CardLink, CardLinkBox, CardNavLink, HeroContainer, HeroSubtitle, HeroText, HeroTextContainer, HeroTitle, PageContainer } from '../styled-components'

export const Home = () => {
    return (
        <PageContainer>
            <HeroContainer>
                <HeroTextContainer>
                    <HeroTitle>Nick Saltis</HeroTitle>
                    <HeroSubtitle>Full Stack Web Developer</HeroSubtitle>
                    <HeroText>I am a full stack developer with a preference and love for building out performant and scalable back end systems. I enjoy developing creative solutions to real-world problems that I encounter personally or that I see affecting my clients or community. 
                    Javascript is my language of choice with the MERN stack as my current focus. I also use Ruby on Rails for rapidly achieving MVP.
                    </HeroText>
                    <CardLinkBox>
                        <CardNavLink to="/bio">Contact Me</CardNavLink>
                        <CardLink>Download Resume</CardLink>
                    </CardLinkBox>
                </HeroTextContainer>
            </HeroContainer>
        </PageContainer>
    )
}
