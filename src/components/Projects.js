import React from 'react'
import { Card } from './Card'
import { CardDeck, PageContainer } from '../styled-components'
import { projects } from '../store/projectList'

export const Projects = (props) => {
    return (
        <PageContainer>
            <CardDeck>
                {projects.map((project, index) => {
                    return <Card projectDetails={project} key={index}/>
                })}
            </CardDeck>
        </PageContainer>
    )
}
