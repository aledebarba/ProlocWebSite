
import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header';
import PlaceHolder from '../components/placeholder';
import ContactForm from '../components/forms/contactForm'
import axios from 'axios'

const API_PATH = 'http://proloc.uxdir.com/emailapi/index.php';

export default class Contato extends Component {
  constructor (props) {
    super (props)
    this.state = {
      apiResult: ''
    }

  }

  callSendMailPHPApi = ( formData ) => {
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: formData
    })
      .then(result => {
        this.setState({
          apiResult: result.data.sent
        })
      })
      .catch(error => this.setState({ apiResult: error.message }));
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
 
        <PlaceHolder title="google maps" />
      </div>
      <div className="row">
      <p>{ this.state.apiResult }</p>
        <ContactForm sendEmail = { this.callSendMailPHPApi } />
      </div>
      <div className="row">
        <PlaceHolder title="Faq" />
      </div>
    </div>
  </Layout>
    )
  }
}
