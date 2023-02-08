import {
    HeroContainer,
    HeroContentContainer,
    HeroButtonsContainer,
    HeroButtonContact,
    HeroButtonAbout,
    HeroImageContainer
} from "./style";

import HeroImage from '../../Assets/Images/HeroImage.png'

export function HeroSection() {
    return (
        <>
            <HeroContainer>
                <HeroContentContainer>
                    <h1>Ajudar você a encontrar o melhor conforto, é nossa prioridade.</h1>
                    <p>Encontre uma variedade de propriedades que combinam com você. Esqueça todas as dificuldades em encontrar uma residência</p>
                    <HeroButtonsContainer>
                        <HeroButtonContact>Entrar em contato</HeroButtonContact>
                        <HeroButtonAbout>Mais sobre nós</HeroButtonAbout>
                    </HeroButtonsContainer>
                </HeroContentContainer>
                <HeroImageContainer>
                    <img src={HeroImage} />
                </HeroImageContainer>
            </HeroContainer>
        </>
    )
}