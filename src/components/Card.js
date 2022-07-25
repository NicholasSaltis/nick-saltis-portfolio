import React from 'react'
import { CardContainer, ImageContainer, TextContainer, CardTitle, CardDescription, CardLinkBox, CardLink } from '../styled-components'

export const Card = ({projectDetails, image}) => {

    const {title,description,link,repo} = projectDetails
    return (
        <CardContainer>
            <ImageContainer>
                <img src={image} alt="Project screenshot" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
            </ImageContainer>
            <TextContainer>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardLinkBox>
                    <CardLink href={link} target="_blank">View project</CardLink>
                    {repo ? <CardLink href={repo} target="_blank">View repo</CardLink> : null}
                </CardLinkBox>
            </TextContainer>
        </CardContainer>
    )
}
