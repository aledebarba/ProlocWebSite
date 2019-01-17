//
// RENDERIZA A PÁGINA CASES => Acessa o firebase e recupera os casos cadastrados lá
//
import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
// Imports dos componentes da Proloc
import Header from '../components/header'
import MovieCase from '../components/moviecase'
// Imports do Firebase
import { configFirebase as DB_CONFIG } from '../config/config-firebase'
import firebase from 'firebase/app'
import 'firebase/database'

export default class Cases extends Component {
  constructor() {
    super()
    // verifica se o banco de dados já foi inicializado antes de tentar inicializar
    this.app = !firebase.apps.length
      ? firebase.initializeApp(DB_CONFIG)
      : firebase.app()
    // declara o estado como vazio
    this.state = {
      moviePosts: [],
    }
  }

  componentDidMount() {
   // Rota de para bd https://prolocdb.firebaseio.com/cases
   var ref = this.app.database().ref('cases')
   let newState = []
     ref.on('value', snapshot => {
       if (snapshot.exists()) { // se existe, cria uma matriz com todos os cases, se não existe, cria uma matriz com um único elemento placeholder
        for (let key in snapshot.val()) {
 
            let newData = snapshot.val()[key]
            let newItem = {
            casekey: key,
            caseTitle: newData.caseTitle,
            caseDesc: newData.caseDesc,
            caseUrl: newData.caseUrl,
            caseDate: newData.caseDate,
            caseTags: newData.caseTags,
            caseImages: newData.caseImages
          } 
          newState.push(newItem)  
        }
       } else {
          newState = [{
          casekey: 'nullkey',
          caseTitle: 'Ainda não há nada no banco de dados',
          caseDesc: 'Ainda não há nada no banco de dados',
          caseUrl: 'https://www.youtube.com/watch?v=-CCVhqps6Ic',
          caseDate: '01/01/2001',
          caseTags: ['nothing','on the','database'],
          caseImages: ['https://via.placeholder.com/150','https://via.placeholder.com/150','https://via.placeholder.com/150']
         }] 
       }
       this.setState ({
         moviePosts: newState
       })
     })
  }

  render() {
    return (
      <Layout>
        <SEO title="Cases" />
        <Header title="Nossos cases">
          <p>
            Uma pequena amostra de nossos trabalhos, os mais recentes ou que
            achamos especialmente desafiadores, para você entender como um
            processo de locação bem organizado pode fazer toda a diferença em
            sua produção.
          </p>
        </Header>
        {this.getMoviePosts()}}
      </Layout>
    )
  }

  getMoviePosts() {
    // mapeia o estado e renderiza os componentes MovieCase
    return this.state.moviePosts.map((project, index) => {
      return (
        <MovieCase
            key={index}
            title={project.caseTitle}
            text={project.caseDesc}
            date={project.caseDate}
            tags={project.caseTags}
            imagesArr={project.caseImages}
            yUrl={project.caseUrl}
            fromDataBase
        />
      )
    })
  }
}
