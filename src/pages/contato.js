import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import ContactForm from '../components/contactForm'
import FAQ from '../components/faq'
import styled from 'styled-components'
import MyMapComponent from '../components/mymapcomponent'
import PlaceMap from '../images/mapplace.svg'

const Address = styled.div`
  margin-left: 10px !important;
  padding: 0px !important;
  & h1 {
    font-size: 18px !important;
    margin: 0px !important;
  }
  & p {
    font-size: 12px !important;
    text-align: left !important;
    padding: 0px !important;
    margin-left: 0px !important;
  }
`

const Section = styled.div`
  margin: 50px auto;
  padding: 10px;
`

export default class Contato extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiResult: '',
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Contato" />
        <Header
          Src="https://www.dropbox.com/s/n1or0q2k38swack/brasil-vista-cidade.jpg?dl=0"
          title="Como nos encontrar"
        >
          <p>
            Nosso atendimento é online, rápido e dedicado. Você também pode
            encontrar um de nossos profissionais numa das locações marcadas no
            mapa abaixo.
          </p>
        </Header>
        <Section className="container">
          <div className="row">
            <ContactForm />
          </div>
        </Section>
        <Section className="container">
          <div className="row justify-content-left">
            <Address className="col-sm-12 col-md-2">
            <img src={PlaceMap} style={{ width: 64, marginBottom: 10}} alt="ilustração com uma seta indicativa e uma parte do símbolo da proloc"/>
            <p>
                Rua Logradouro Silva, 527<br/>
                Santo Amaro da Purificação - BA<br/>
                18969-000<br/>
                Tel: <a href="tel:+55 11 98765-4321">+55 11 98765-4321</a><br/>
              </p>
            </Address>
            <div className="col">
              <MyMapComponent />
            </div>
          </div>
          <Section className="row">
            <FAQ />
          </Section>
        </Section>
      </Layout>
    )
  }
}
