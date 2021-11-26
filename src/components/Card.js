import React from 'react'
import { CardContainer, ImageContainer, TextContainer, CardTitle, CardDescription, CardLink } from '../styled-components'

export const Card = ({title,img,description,link}) => {
    return (
        <CardContainer>
            <ImageContainer>
                <img url={img} alt="Project screenshot" />
            </ImageContainer>
            <TextContainer>
                <CardTitle></CardTitle>
                <CardDescription></CardDescription>
                <CardLink></CardLink>
            </TextContainer>
        </CardContainer>
    )
}
