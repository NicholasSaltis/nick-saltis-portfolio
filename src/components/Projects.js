import React from 'react'
import { Card } from './Card'
import { CardDeck, PageContainer } from '../styled-components'
import { projects } from '../store/projectList'

// image file imports:
import gamesMonarchImg from "./../images/GamesMonarchSS.png"
import backyardBasketImg from "./../images/BackyardBasketSS.png"
import bakersBoxImg from "./../images/BakerBoxmainmenu.png"
import tryscorerImg from "./../images/Tryscorer-odds-comparison-tool.png"

export const Projects = (props) => {

    const [tryscorer, gamesMonarch, backyardBasket, bakersBox] = projects

    return (
        <PageContainer>
            <CardDeck>
                
                <Card projectDetails={tryscorer} image={tryscorerImg} />
                <Card projectDetails={gamesMonarch} image={gamesMonarchImg}/>
                <Card projectDetails={backyardBasket} image={backyardBasketImg} />
                <Card projectDetails={bakersBox} image={bakersBoxImg} />

            </CardDeck>
        </PageContainer>
    )
}
