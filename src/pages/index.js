import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/jumbotron';
import HomeCarousel from '../components/homeCarousel';
import HomeMovieSection from '../components/homeMovieSection';
import TeamSection from '../components/teamSection';
import CallToAction from '../components/callToAction';

class IndexPage extends Component {

    render() {
    return (
        <Layout>
            <SEO title="Home" />
            <Jumbotron title="Bem vindos." lead="Somos a PROLOC. Peritos em encontrar locações de filmagem perfeitas para seu projeto. De modo rápido e descomplicado, porque nós sabemos bem o que é uma produção de filme." />
            <HomeCarousel />
            <HomeMovieSection />
            <TeamSection />
            <CallToAction
                title="Solicite avaliação do seu projeto"
                text="Nós recebemos o seu projeto, argumento, roteiro ou decupagem de cena, entendemos, avaliamos e depois submetemos ao nosso banco de dados. A partir daí enviamos uma proposta estruturada, com todas as sugestões de locações de filmagem disponíveis, suas características, fotos e codições, além do valor final orçado, incluido todos os custos com entidades licencisadoras e proprietários."
                button="Cadastre-se grátis"
                url="/login/" />
        </Layout>
    )
    }
}


export default IndexPage