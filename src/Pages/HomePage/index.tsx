import { HeroSection } from '../../Sections/HeroSection'
import { NavBarSection } from '../../Sections/NavBarSection'
import {
    SectionsContainers,
    NavBarSectioContainer,
    HeroSectionContainer
} from './style'

export function HomePage() {
    return (
        <>
            <NavBarSectioContainer>
                <SectionsContainers>
                    <NavBarSection />
                </SectionsContainers>
            </NavBarSectioContainer>
            <HeroSectionContainer>
                <SectionsContainers>
                    <HeroSection />
                </SectionsContainers>
            </HeroSectionContainer>
        </>
    )
}