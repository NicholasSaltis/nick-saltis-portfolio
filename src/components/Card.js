import React from 'react'
import { CardContainer, ImageContainer, TextContainer, CardTitle, CardDescription, CardLink } from '../styled-components'

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
                <CardLink href={link}>View project</CardLink>
            </TextContainer>
        </CardContainer>
    )
}
