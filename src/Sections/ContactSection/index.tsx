import {
    ContactSectionDiv,
    ContactTitleParagraphDiv,
    ContactButtonDiv
} from './style'

export function ContactSection() {
    return (
        <>
            <ContactSectionDiv>
                <ContactTitleParagraphDiv>
                    <h2>Orçamento</h2>
                    <p>Interessado em entrar em contato com um de nossos profissionais?</p>
                </ContactTitleParagraphDiv>
                <ContactButtonDiv>
                    <a>Entre em contato</a>
                </ContactButtonDiv>
            </ContactSectionDiv>
        </>
    )
}