import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CasesForm from '../components/casesform'
import MovieCase from '../components/case'

import { configFirebase as DB_CONFIG } from '../config/config-firebase'
import firebase from 'firebase/app'
import 'firebase/database'

export default class editCases extends Component {
  constructor(props) {
    super(props)

    // verifica se o banco de dados já foi inicializado antes de tentar inicializar
    this.app = !firebase.apps.length
      ? firebase.initializeApp(DB_CONFIG)
      : firebase.app() 

    this.state = {
      casesArr: [],
    }
  }
  
  componentDidMount() {

   // define o objeto ref que referencia o banco de dados numa rota específica 'cases'
    var ref = this.app.database().ref('cases')
  
  // solicita valores ao objeto ref, transmite para a função anonima que recebe o resultado no objeto snapshot
    ref.on('value', snapshot => {
      // atualiza o estado do componente
      this.setState ({
        casesArr: snapshot.val() // val() recupera o valor dos dados em formato javascript, contidos no objeto snapshot, ou seja, todo o conteúdo da rota 'cases' 
      })
    })
    
    console.log(this.state.casesArr)
  }

  createCase = newCase => {
  }

 render(props) {

    return (
      <Layout>
        <SEO title="Editar cases Proloc" />
        <CasesForm />
        <div className="container editCases"> 
          {console.log(this.state.casesArr)}
          {this.state.casesArr.map((renderCase, index) => {
            return (
              <MovieCase
                title={renderCase.caseTitle}
                text={renderCase.caseDesc}
                date={renderCase.caseDate}
                yUrl={renderCase.caseUrl}
                tags={renderCase.caseTags}
                key={index}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}
