import React, { Component } from 'react'

export default class CasesForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
          caseTitle: '',
          caseDesc: '',
          caseUrl: ''
        }
      }
    
      handleInputChange = e => {
        const target = e.target
        const campo = target.name
        const valor = target.value
    
        this.setState({
          [campo]: valor,
        })
      }
    
      handleSubmit = e => {
        // passa os dados para o parent e depois limpa os campos do formulário
        this.props.createNewCase(this.state)
        // após todos os processos, limpa o conteúdo do form e os states
            this.setState(
                {
                    caseTitle: '',
                    caseDesc: '',
                    caseUrl: ''
                }
            )
      }

  render() {
    return (
        <div className="container editCases">
        <div className="row">
          <div className="col-6">
            <h3>Dados do case</h3>
            <input
              name="caseTitle"
              className="editCaseTitle"
              placeholder="Titulo do case"
              value={this.state.caseTitle}
              onChange={this.handleInputChange}
            />
            <input
              name="caseDesc"
              className="editCaseText"
              placeholder="Descrição sucinta do case"
              value={this.state.caseDesc}
              onChange={this.handleInputChange}
            />
            <input
              name="caseUrl"
              className="editCaseURL"
              placeholder="Cole a URL do Youtube aqui"
              value={this.state.caseUrl}
              onChange={this.handleInputChange}
            />
            <button className="addCase" onClick={this.handleSubmit}>
              + Cria case
            </button>
          </div>
        </div>
      </div>
    )
  }
}
