import { DesignSection } from '../../Sections/DesignSection'
import { HeroSection } from '../../Sections/HeroSection'
import { NavBarSection } from '../../Sections/NavBarSection'
import {
    SectionsContainers,
    NavBarSectionContainer,
    HeroSectionContainer,
    DesignSectionContainer
} from './style'

export function HomePage() {
    return (
        <>
            <NavBarSectionContainer>
                <SectionsContainers>
                    <NavBarSection />
                </SectionsContainers>
            </NavBarSectionContainer>
            <HeroSectionContainer>
                <SectionsContainers>
                    <HeroSection />
                </SectionsContainers>
            </HeroSectionContainer>
            <DesignSectionContainer>
                <SectionsContainers>
                    <DesignSection />
                </SectionsContainers>
            </DesignSectionContainer>
        </>
    )
}