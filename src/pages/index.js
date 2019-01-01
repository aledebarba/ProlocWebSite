import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/jumbotron';
import HomeCarousel from '../components/homeCarousel';
import HomeMovieSection from '../components/homeMovieSection';
import TeamSection from '../components/teamSection';
import CallToAction from '../components/callToAction';


const IndexPage = () => (
    <Layout>
        <Jumbotron title="Bem vindos." lead="Somos a PROLOC. Peritos em encontrar locações de filmagem perfeitas para seu projeto. De modo rápido e descomplicado, porque nós sabemos bem o que é uma produção de filme."/>
        <HomeCarousel />
        <HomeMovieSection />       
        <TeamSection />
        <CallToAction />
    </Layout>
)

export default IndexPage
