import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { MyPage, AuthorText } from "./styled";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Jarosław Ogonowski"
            content={
            <>
            <AuthorText>Na codzień jestem szefem kuchni węgierskiej restauracji w samym centrum Warszawy i śmiało można powiedzieć, 
            że już od czasów szkolnych robię to co kocham- 
            kuchnia bowiem towarzyszy mi już od skończenia szkoły podstawowej i zawsze wiedziałem, że to mnie kręci.
            
            Mam sporo bardzo specyficznych zainteresowań dlatego jeśli chcesz dowiedzieć się o mnie trochę więcej zapraszam
            Cię na moją stronę:
            <p/>
            <MyPage href="https://jaroslawogonowski.github.io/FirstPage/">Jarosław Ogonowski</MyPage></AuthorText>
            </>
        }
        />
    </Container>
);