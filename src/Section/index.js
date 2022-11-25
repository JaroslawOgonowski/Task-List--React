import { SectionContainer, SectionContent, SectionHeader, SectionTitle } from "./styled"

const Section = ({ title, content, extraHeaderContent }) => (
    <SectionContainer>
        <SectionHeader>
            <SectionTitle>{title}</SectionTitle>
            {extraHeaderContent}
        </SectionHeader>
        <SectionContent>
            {content}
        </SectionContent>
    </SectionContainer>
);

export default Section;