import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header' // Proloc
import HiGallery from '../components/igallery'
import styled from 'styled-components'

const Content = styled.div`
  margin-top: 25px;
`

const Catalogo = () => (
  <Layout>
    <SEO title="Catalogo" />
    <Header
      title="Catálogo impecável"
      Src="https://dl.dropboxusercontent.com/s/2ofd2gn2spdyq7z/brasil-pitimbu-paraiba.jpg?raw=1">
      <p>
        Uma incrível variedade de cenários, espalhados por todo o brasil, para
        as mais diferentes situações. Veja essa pequena amostra de nosso
        catálogo, logo abaixo.
      </p>
    </Header>
    <Content className="container">
      <HiGallery />
    </Content>
  </Layout>
)

export default Catalogo
