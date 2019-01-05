import React from 'react'
import Layout from '../components/layout'
// import { Link } from 'gatsby'
import SEO from '../components/seo'
import Header from '../components/header';
import MovieCase from '../components/case';


const Cases = () => (

    <Layout>
        <SEO title="Cases" description="Proloc descrição de casos, imagens de locações e produto final realizado" />
        <Header title="Nossos cases">
            <p>Uma pequena amostra de nossos trabalhos, os mais recentes ou que achamos especialmente desafiadores, para você entender como um processo de locação bem organizado pode fazer toda a diferença em sua produção.</p>
        </Header>
        <MovieCase 
            title=""
            text=""
            url=""
            category="videoclip">            
        </MovieCase>
    </Layout>
)

export default Cases
