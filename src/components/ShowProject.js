import React from 'react'
import { useParams } from 'react-router'
import { PageContainer } from '../styled-components'
import { projects } from '../store/projectList'

export const ShowProject = (props) => {

    const params = useParams()
    const {title, img, description, link} = projects.find((project) => project.title === params.projectName)
    return (
        <PageContainer>
            <ul>
                <li><p>{title}</p></li>
                <li><p>{img}</p></li>
                <li><p>{description}</p></li>
                <li><p>{link}</p></li>
            </ul>
        </PageContainer>
    )
}
