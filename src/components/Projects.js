import React from 'react'
import { Card } from './Card'
import { CardDeck, PageContainer } from '../styled-components'
import { projects } from '../store/projectList'
import { Link } from 'react-router-dom'

export const Projects = (props) => {
    return (
        <PageContainer>
            <h1 style={{marginTop: "0px"}}>Projects page</h1>
            <ul>
                {projects.map((project, index) => {
                    return <li key={index}><Link to={project.title}>{project.title}</Link></li>
                })}
            </ul>
            <CardDeck>
                {projects.map((project, index) => {
                    return <Card projectDetails={project} key={index}/>
                })}
            </CardDeck>
        </PageContainer>
    )
}
