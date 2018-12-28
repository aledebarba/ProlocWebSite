import React from 'react'
import Layout from '../components/layout'
import PlaceHolder from '../components/placeholder'
import SEO from '../components/seo'
import Jumbotron from '../components/jumbotron';
import HomeCarousel from '../components/homeCarousel';




const IndexPage = () => (
    <Layout>
      <Jumbotron title="Bem vindos." tagline="Somos a PROLOC. Peritos em encontrar locações de filmagem perfeitas para seu projeto. De modo rápido e descomplicado, porque nós sabemos bem o que é uma produção de filme."/>
      <HomeCarousel />
      <PlaceHolder title="last case" />
      <PlaceHolder title="team" />
      <PlaceHolder title="call to action" />
    </Layout>
)

export default IndexPage
