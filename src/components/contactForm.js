import React, { Component } from 'react'
import { FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import FadingMessage from '../components/fadingMessage'
import styled from 'styled-components'
import * as emailjs from 'emailjs-com' // http://www.emailjs.com/


const USER_ID = "user_Uq9ngBqkbOJG4TB8uUBJA"
const TEMPLATE_ID = "template_gSnpz0EK"
const SERVICE_ID = "Proloc UXDIR Server"

const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  & input, select, textarea  {
    display: block;
    width: 90%;
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
        from_email: this.formMailFrom.current.value,
        message_html: this.formMessage.current.value,
        from_subject: this.formSubject.current.value
      }


      emailjs.send(SERVICE_ID, TEMPLATE_ID, TEMPLATE_PARAMS, USER_ID)
          .then( (response) => 
          {
            this.setState ({
              formAlert: "Mensagem enviada com sucesso."
            })
          }, (error) =>
          {
          this.setState ({
            formAlert: "Problema na rede. Mensagem não enviada."
          })
        })
    } // end handleSubmit

    
    render() {
      return (
          <React.Fragment>
            <div className="container">
              <div className="row justify-content-center casesFormHeader">
                  <h4>Contato com a Proloc</h4>
              </div>
              <div className="row casesFormContainer">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                <FadingMessage>                   
                  <span>
                      <FaInfoCircle /> { this.state.formAlert }
                  </span>
                </FadingMessage>
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
