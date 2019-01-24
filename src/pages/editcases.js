import React, { Component } from 'react'
import Layout from '../components/layout' // Gatsby
import SEO from '../components/seo'
import CasesForm from '../components/forms/casesform' // Proloc
import MovieCase from '../components/moviecase' 
import { configFirebase as DB_CONFIG } from '../config/config-firebase' // Firebase
import firebase from 'firebase/app'
import 'firebase/database'
import { FaEdit } from 'react-icons/fa';

export default class editCases extends Component {
  constructor(props) {
    super(props)

    // verifica se o banco de dados já foi inicializado antes de tentar inicializar
    this.app = !firebase.apps.length
      ? firebase.initializeApp(DB_CONFIG)
      : firebase.app() 

    this.state = { 
          casesArr: defaultEmptyState
    }
  }

  // CRUD --------------------------------------------------------------------
  writeCase = ( formCase ) => {
    var ref = this.app.database().ref('cases') // roteia o bd
    ref.push().set(formCase)
  }

  deleteCase = (caseId, caseTitle) => {
    let msg = "Tem certeza que deseja apagar\n"+caseTitle
    if ( window.confirm(msg)  ) {
      this.app.database().ref('cases').child(caseId).remove();
    }
  }

  editCase = (caseId) => {
    alert("not implemented yet")
  }

  readDataAndCreateNewState = () => {
    let ref = this.app.database().ref('cases')
    ref.on('value', snapshot => { 
    if (snapshot.exists()) {    
      let newState = []
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
        newState.reverse()
        this.setState({casesArr: newState})
      } else {
        this.setState({casesArr: defaultEmptyState})
      }
  })
  }
  
  // -----------------------------------------------------------------------
  componentDidMount() {
    this.readDataAndCreateNewState();
  }

 render(props) {

    return (
      <Layout>
        <SEO title="Cases Proloc CRUD" />
        <CasesForm writeCase = {this.writeCase}/>
        <div className="container editCases"> 
          {this.state.casesArr.map((renderCase) => {
            let containerKey = "container"+renderCase.casekey
            let movieKey = "movie"+renderCase.casekey
            return (
                  <div className="container" key={containerKey}>
                    <MovieCase 
                        key={movieKey}
                        title={renderCase.caseTitle}
                        text={renderCase.caseDesc}
                        date={renderCase.caseDate}
                        yUrl={renderCase.caseUrl}
                        tags={renderCase.caseTags}
                        imagesArr={renderCase.caseImages}
                    />
                    <div className = "row editCasesButtons justify-content-center" >
                      <button
                        type = "button"
                        className = "btn btn-primary"
                        onClick = { () => this.editCase(renderCase.casekey)}> 
                        <FaEdit /> Editar 
                      </button> 
                      <button 
                        type = "button"
                        className = "btn btn-danger"
                        onClick = { () => this.deleteCase(renderCase.casekey, renderCase.caseTitle)}>
                        x Apagar 
                      </button>
                    </div>
                  </div>
            )
          })}
        </div>
            </Layout>
    )
  }
}

const defaultEmptyState = [
  {
  casekey: 'nullkey',
  caseTitle: 'Ainda não há nada no banco de dados',
  caseDesc: 'Ainda não há nada no banco de dados',
  caseUrl: 'https://www.youtube.com/watch?v=-CCVhqps6Ic',
  caseDate: '01/01/2001',
  caseTags: ['nothing', 'on the', 'database'],
  caseImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']
}
];
