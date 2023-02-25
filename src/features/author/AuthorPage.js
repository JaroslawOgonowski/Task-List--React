import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Jarosław Ogonowski"
            content={
            <>
            Na codzień jestem szefem kuchni węgierskiej restauracji w samym centrum Warszawy i śmiało można powiedzieć, 
            że już od czasów szkolnych robię to co kocham- 
            kuchnia bowiem towarzyszy mi już od skończenia szkoły podstawowej i zawsze wiedziałem, że to mnie kręci.
            
            Mam sporo bardzo specyficznych zainteresowań dlatego jeśli chcesz dowiedzieć się o mnie trochę więcej zapraszam
            Cię na moją stronę:
            <p/>
            <a href="https://jaroslawogonowski.github.io/FirstPage/">Jarosław Ogonowski</a>
            </>
        }
        />
    </Container>
);