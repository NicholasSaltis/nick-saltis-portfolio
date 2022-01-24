import React from 'react'
import { Card } from './Card'
import { CardDeck, PageContainer } from '../styled-components'
import { projects } from '../store/projectList'

export const Projects = (props) => {
    return (
        <PageContainer>
            <h1 style={{marginTop: "0px", width: "100vw", textAlign: "center  "}}>Projects page</h1>
            <CardDeck>
                {projects.map((project, index) => {
                    return <Card projectDetails={project} key={index}/>
                })}
            </CardDeck>
        </PageContainer>
    )
}
