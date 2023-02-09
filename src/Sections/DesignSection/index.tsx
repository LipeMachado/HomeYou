import {
    DesignContainer,
    DesignImageContainer,
    DesignContentContainer,
    DesignTextContainer,
    DesignLinkContainer
} from './style'

import DesignImage from '../../Assets/Images/DesignImage.png'
import { Link } from 'react-router-dom'

export function DesignSection() {
    return (
        <>
            <DesignContainer>
                <DesignImageContainer>
                    <img src={DesignImage} />
                </DesignImageContainer>
                <DesignContentContainer>
                    <DesignTextContainer>
                        <h2>Design Minimalista</h2>
                        <p>Móveis apenas essenciais e com design moderno, além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.</p>
                    </DesignTextContainer>
                    <DesignLinkContainer>
                        <Link to="/">Quero saber mais sobre os designs</Link>
                    </DesignLinkContainer>
                </DesignContentContainer>
            </DesignContainer>
        </>
    )
}