import { StyledSection, Content, Header, Title } from "./styled"

const Section = ({ title, content, extraHeaderContent }) => (
    <StyledSection>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <Content>
            {content}
        </Content>
    </StyledSection>
);

export default Section;