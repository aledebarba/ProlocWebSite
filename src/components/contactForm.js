import React, { Component } from 'react'
import Form from "react-jsonschema-form"
// form css and form json schemas objects
import {schema, uiSchema} from './contacFormSchemas'
import { FaEnvelope } from 'react-icons/fa';

/* 
Syntax
<CasesForm sendEmail = { fnSendEmail }/>
fnSendEmail = nome da função que trata e envia o email.
fnSendEmail recebe implicitamente o conteúdo de formData

component docs:
https://github.com/mozilla-services/react-jsonschema-form
*/

export default class ContactForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }

      }

    resetFields = () => {
      this.setState ( {
          name: '',
          email: '',
          subject: '',
          message: ''
      })
    }

    handleSubmit = ({formData}) => {
        this.props.sendEmail(formData)
        this.setState ({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
       }

    
    render() {
      return (
          <React.Fragment>
            <div className="container">
              <div  className="row casesFormHeader">
                <div className="col-12">
                  <h4>Digite sua mensagem e clique em enviar.</h4>
                </div>
              </div>
              <div className="row casesFormContainer">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <Form className="editCasesForm" schema={schema} uiSchema={uiSchema} onSubmit={this.handleSubmit}>
                  <div className="editButtons">
                    <button type="submit" className="btn btn-primary" style={{marginRight: 15}}><FaEnvelope/>&nbsp;Enviar</button>
                    <button type="button" className="btn btn-danger" onClick={() => this.resetFields()}>x Limpar dados</button>
                  </div>
                  </Form>
                </div>
                <div className="col-sm-12 col-md-4"> 
                <ul>
                  <li>Use essa área para entrar em contato com a Proloc.</li>
                  <li>Se quiser uma resposta mais rápida, pode ser que encontre uma na seção de dúvidas abaixo.</li>
                  <li>Você também pode entrar em contato por nossas redes sociais.</li>
                </ul>
                
                </div>
              </div>
            </div>
            </div>
          </React.Fragment>
      )
    }
  }
