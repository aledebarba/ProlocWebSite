import React, { Component } from 'react'
import Form from "react-jsonschema-form"
// form css and form json schemas objects
import './forms.css'
import {schema, uiSchema} from './casesFormSchemas'

export default class CasesForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          caseTitle: '',
          caseDesc: '',
          caseUrl: '',
          caseDate: '',
          caseTags: [''],
          caseImages: [''],
        }
      }

    resetFields = () => {
      console.log ("resetFields")
      this.setState( 
        {
          caseTitle: '',
          caseDesc: '',
          caseUrl: '',
          caseDate: '',
          caseTags: [''],
          caseImages: [''],
      }
      )
    }

    handleSubmit = ({formData}) => {
         let  newState = this.state;
              newState.caseTitle = formData.fcaseTitle
              newState.caseDesc = formData.fcaseDesc
              newState.caseDate = formData.fcaseDate
              newState.caseUrl = formData.fcaseUrl
              newState.caseTags = formData.fcaseTags.split(",").map((str, index) => str.trim(str))
              newState.caseImages = formData.fcaseImages.split(",")
      
        this.props.writeCase(newState)
        
        this.setState = {
          caseTitle: '',
          caseDesc: '',
          caseUrl: '',
          caseDate: '',
          caseTags: [''],
          caseImages: [''],
        }
       }

    
    render() {
      return (
          <React.Fragment>
            <div className="container">
              <div  className="row casesFormHeader">
                <div className="col-12">
                  <h4>Adição de novos Cases</h4>
                </div>
              </div>
              <div className="row casesFormContainer">
              <div className="row">
                <div className="col-6">
                  <Form 
                    schema={schema}
                    uiSchema={uiSchema}
                    className="editCasesForm"
                    onSubmit={this.handleSubmit}>
                    <div className="editButtons">
                      <button type="submit" className="btn btn-primary" style={{marginRight: 15}}>+ Adicionar</button>
                      <button type="button" className="btn btn-danger" onClick={() => this.resetFields()}>x Limpar dados</button>
                    </div>
                  </Form>
                </div>
                <div className="col-4"> 
                <ul>
                  <li>Use esse formulário para incluir as informações necessárias para criar um novo case da Proloc</li>
                  <li>Procure concisão, sem sacrificar o entendimento, nas descrições e títulos.</li>
                  <li>Selecione apenas um breve conjunto de imagens significantes do projeto.</li>
                  <li>Ao final, selecione o botão [ADICIONAR] abaixo. </li>
                  <li>O case é automaticamente postado na página de cases.</li>
                  <li>Todos os campos são obrigatórios, nada pode estar vazio.</li>
                </ul>
                
                </div>
              </div>
            </div>
            </div>
          </React.Fragment>
      )
    }
  }
