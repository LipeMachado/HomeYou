import {
    GaleryContainer,
    GaleryContainerTitleParagraph,
    GaleryImagesContainer
} from "./style";

import GaleryImage1 from '../../Assets/Images/GaleryImage1.png'
import GaleryImage2 from '../../Assets/Images/GaleryImage2.png'
import GaleryImage3 from '../../Assets/Images/GaleryImage3.png'

export function GalerySection() {
    return (
        <>
            <GaleryContainer>
                <GaleryContainerTitleParagraph>
                    <h2>Galeria</h2>
                    <p>
                        Se você está entediado com a aparência da decoração de interiores da casa comuns,
                        trabalhamos com designs diferentes e inovadores.
                    </p>
                </GaleryContainerTitleParagraph>
                <GaleryImagesContainer>
                    <img src={GaleryImage1} />
                    <img src={GaleryImage2} />
                    <img src={GaleryImage3} />
                </GaleryImagesContainer>
            </GaleryContainer>
        </>
    )
}