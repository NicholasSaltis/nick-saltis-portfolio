import React from 'react'
import { CardContainer, ImageContainer, TextContainer, CardTitle, CardDescription, CardLinkBox, CardLink } from '../styled-components'

export const Card = ({projectDetails}) => {

    const {title,img,description,link} = projectDetails
    return (
        <CardContainer>
            <ImageContainer>
                <img url={img} alt="Project screenshot" style={{objectFit: "cover"}}/>
            </ImageContainer>
            <TextContainer>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardLinkBox>
                    <CardLink href={link} target="_blank">View project</CardLink>
                    <CardLink href={link} target="_blank">View Repo</CardLink>
                </CardLinkBox>
            </TextContainer>
        </CardContainer>
    )
}
