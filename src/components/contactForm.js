import React, { Component } from 'react'
import { FaEnvelope } from 'react-icons/fa';
import FadingMessage from '../components/fadingMessage'
import styled from 'styled-components'
import * as emailjs from 'emailjs-com'


const USER_ID = "user_Uq9ngBqkbOJG4TB8uUBJA"
const TEMPLATE_ID = "template_gSnpz0EK"
const SERVICE_ID = "Proloc UXDIR Server"
const EMAIL_TO = "develop@proloc.uxdir.com"

const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  & input, select, textarea  {
    display: block;
    width: 100%;
  }
  & label {
    color: white;
    font-weight: lighter;
  }
`

const SpanControl = styled.div`
  visibility: hidden;
  height: 0px;
`

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

        this.state = { formAlert: 'Digite sua mensagem e clique em enviar'}
        this.formSubject = React.createRef(); 
        this.formName = React.createRef();
        this.formMailFrom = React.createRef();
        this.formMessage = React.createRef();
  }

    resetFields = () => {

      this.formName.current.value=""
      this.formSubject.current.value=""
      this.formMailFrom.current.value=""
      this.formMessage.current.value=""

      this.setState({ formAlert: 'Conteúdo apagado.'})
    }

    handleSubmit = () => {
     
      let TEMPLATE_PARAMS = {
        to_name: 'Administrador Proloc',
        from_name: this.formName.current.value,
        message_html: this.formMessage.current.value,
        from_subject: this.formSubject.current.value
      }


      emailjs.send(SERVICE_ID, TEMPLATE_ID, TEMPLATE_PARAMS,USER_ID)
      .then( (response) => {console.log("sucesso",response.status, response.text)}, (erro) =>{console.log("erro:",erro)})


    }

    
    render() {
      return (
          <React.Fragment>
            <div className="container">
              <div  className="row casesFormHeader">
                <div className="col-12">
                  <h4>Contato com a Proloc</h4>
                  <FadingMessage>{ this.state.formAlert }</FadingMessage>
                </div>
              </div>
              <div className="row casesFormContainer">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <MessageForm className="editCasesForm" id="messageform">
                        <SpanControl>
                          <label>
                              Name:
                              <input type="text" placeholder="John Doe" />
                          </label>
                        </SpanControl>
                      <label>Nome:
                        <input type="text" ref={this.formName} required placeholder="ex. João Silva" name="sender"/>
                      </label>
                      <label>eMail:
                        <input type="email" ref={this.formMailFrom} required placeholder="ex joaosilva@email.com" name="senderemail"/>
                      </label>
                      <label>Assunto:
                          <select ref={this.formSubject} name="sendersubject" defaultValue="maisinfo">
                                <option value="outro">Outro assunto</option>
                                <option value="alugar">Quero alugar minha locação</option>
                                <option value="financeiro">Depto financeiro</option>
                                <option value="maisinfo">Mais informações</option>
                          </select>
                      </label>
                      <label>Mensagem:
                        <textarea rows="10" ref={this.formMessage} required placeholder="Digite aqui sua mensagem." name="sendermessage"/>
                      </label>
                      <div className="editButtons">
                        <button type="button" className="btn btn-primary"  onClick={() => this.handleSubmit()} style={{marginRight: 15}}><FaEnvelope/>&nbsp;Enviar</button>
                        <button type="button" className="btn btn-danger" onClick={() => this.resetFields()}>x Limpar dados</button>
                      </div>
                  </MessageForm>
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
