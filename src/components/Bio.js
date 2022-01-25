import React from "react";
import { ContactList, ContactListItem, ContactListLink, HeroContainer, HeroText, HeroTextContainer, HeroTitle, PageContainer } from "../styled-components";

export const Bio = (props) => {


    return(
        <PageContainer>
            <HeroContainer>
                <HeroTextContainer>
                    <HeroTitle>Contact Me</HeroTitle>
                    <ContactList>
                        <ContactListItem>
                            <ContactListLink href="https://www.linkedin.com/in/nicholas-saltis/" target="_blank" rel="noreferrer">LinkedIn</ContactListLink>
                        </ContactListItem>

                        <ContactListItem>
                            <ContactListLink href="https://github.com/NicholasSaltis" target="_blank" rel="noreferrer">Github</ContactListLink>
                        </ContactListItem>

                        <ContactListItem>
                            <ContactListLink href="mailto:nicholas.saltis10@gmail.com">Email Me</ContactListLink>
                        </ContactListItem>
                    </ContactList>
                </HeroTextContainer>
            </HeroContainer>

            <HeroContainer>
                <HeroTextContainer>
                    <HeroTitle>About Me</HeroTitle>
                    <HeroText>
                    My Journey into software development began in march of 2021 when I signed up to attend a full stack web development course run by Coder Academy in Sydney. Before this, I was working as an all-rounder in a cafe in Pyrmont after moving from my hometown of Newcastle. I finished high school without a clear direction or passion that I wanted to follow so spent the next few years trying to find my niche including psychology, bakers apprentice and barista. 
Once I began studying software development at Coder Academy however I quickly realised that I had found my niche. The combination of logic and predictable systems with creativity and problem solving engaged me like nothing else I had experienced, and the satisfaction and immediate feedback of debugging my code quickly became my new obsession. 
                    </HeroText>
                </HeroTextContainer>
            </HeroContainer>
        </PageContainer>
    )
}