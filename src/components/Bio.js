import React from "react";
import { ContactList, ContactListItem, HeroContainer, HeroTextContainer, HeroTitle, PageContainer } from "../styled-components";

export const Bio = (props) => {


    return(
        <PageContainer>
            <HeroContainer>
                <HeroTextContainer>
                    <HeroTitle>Contact Me</HeroTitle>
                    <ContactList>
                        <ContactListItem>
                            <a href="https://www.linkedin.com/in/nicholas-saltis/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </ContactListItem>

                        <ContactListItem>
                            <a href="https://github.com/NicholasSaltis" target="_blank" rel="noreferrer">Github</a>
                        </ContactListItem>

                        <ContactListItem>
                            Email: nicholas.saltis10@gmail.com
                        </ContactListItem>
                    </ContactList>
                </HeroTextContainer>
            </HeroContainer>
        </PageContainer>
    )
}