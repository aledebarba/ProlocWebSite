import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header';
import PlaceHolder from '../components/placeholder';
import ContactForm from '../components/contactForm'
import FAQ from '../components/faq'
import styled from 'styled-components'
//

const Address = styled.div`
  padding: 10px 0px 10px 0px !important;
  margin: 20px 0px 10px 0px !important;
  
  & h1 {
    font-size:18px !important;
    padding: 0px !important;
    margin: 0px !important;
  };
  
  & p {
    font-size: 12px !important;
    text-align: left !important;
    padding: 0px !important;
    margin: 0px !important;
  };
`

export default class Contato extends Component {
  constructor (props) {
    super (props)
    this.state = {
      apiResult: ''
    }

  }

  render() {
    return (
    <Layout>
    <SEO title="Contato" />
    <Header 
      Src="https://www.dropbox.com/s/n1or0q2k38swack/brasil-vista-cidade.jpg?dl=0"
      title="Como nos encontrar">
      <p>Nosso atendimento é online, rápido e dedicado. Você também pode encontrar um de nossos profissionais numa das locações marcadas no mapa abaixo.</p>
    </Header>
    <div className="container">
     
      <div className="row">
      <p>{ this.state.apiResult }</p>
        <ContactForm sendEmail = { this.callSendMailPHPApi } />
      </div>
      <div className="row justify-content-left">
        <Address className="col-2">
          <h1>Endereço:</h1>
          <p>Rua Logradouro Silva, 527</p>
          <p>Santo Amaro da Purificação - BA</p>
          <p>18969-000</p>
          <p>Tel: +55 11 98765-4321</p>
        </Address>
        <div className="col">
            <PlaceHolder title="google maps" />
        </div>
      </div>
      <div className="row">
        <FAQ />
      </div>  
       
    </div>
  </Layout>
    )
  }
}
