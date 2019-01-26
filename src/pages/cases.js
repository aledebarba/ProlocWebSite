
import React, { Component } from 'react' 
import Layout from '../components/layout' // Gatsby
import SEO from '../components/seo'
import Header from '../components/header' // Proloc 
import MovieCase from '../components/moviecase'
import { configFirebase as DB_CONFIG } from '../config/config-firebase' //Firebase
import firebase from 'firebase/app'
import 'firebase/database'

//
// RENDERIZA A PÁGINA CASES => Acessa o firebase e recupera os casos cadastrados lá.
//

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
   let ref = this.app.database().ref('cases')
   ref.on('value', snapshot => {
      let newState=[]
      if (snapshot.exists()) {
        for (let key in snapshot.val()) 
        {
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
          newState.push(newItem);
          } //endfor
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
        } // endif
      this.setState ({ moviePosts: newState.reverse() }) 
    }) // end ref.on('value')
  } // end comonentDidMount

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
        <div className="casesContainer" >
           {this.getMoviePosts()}}
        </div>
      </Layout>
    )
  }

  getMoviePosts() {
    // mapeia o estado e renderiza os componentes MovieCase
    return this.state.moviePosts.map((project, index) => {
      let uniquekey = "cases-" + (new Date().getTime()).toString() + index.toString()
      return (
        <MovieCase
            key={uniquekey}
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
