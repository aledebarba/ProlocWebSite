import React, { Component } from 'react'
import Form from "react-jsonschema-form" // https://github.com/mozilla-services/react-jsonschema-form
import {schema, uiSchema} from './casesFormSchemas' // json with form schemas
import DropboxChooser from 'react-dropbox-chooser'
import { FaCheck, FaImages } from 'react-icons/fa'
import HiGallery from '../components/igallery'
import styled from 'styled-components'
import { animateScroll as scroll } from 'react-scroll';

const APP_KEY = "1xt3fgikkgsgza6"; // APP Key do DropBox

const ImagesGroup = styled.div`
  margin: 25px 0px;
  padding: 10px;
  font-weight: normal;
  background-color: rgba(255,255,255,0.5);
  color: red;
  border-radius: 6px;
`

const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  & button {
    margin-bottom: 10px;
  }
`

const FadeOutMessage = styled.div`
  display: block;
  color: white;
  font-size: 14px;
  text-shadow: 3px 3px 4px black;
  margin-top: 10px;
  opacity: ${ props => props.showit ? 1 : 0 };
  transition: all 1s linear;
  &::before {
    display: inline-block;
    font-size: 12px; font-weight: bold !important;
    text-shadow: none; height: 20px; width: 20px;
    background-color: coral; color: black;
    border-radius: 50px;
    padding-top: 4px; margin-right: 5px;
    content: "i";   
    content: ${props => props.alertIcon};
    };
`
export default class CasesForm extends Component {

    constructor(props) {
        super(props)

        // eslint-disable-next-line 
        var caseFormData = {}

        this.state = {
          alert: 'Preencha os dados abaixo e publique o case.',
          showalert: true,
          caseTitle: '',
          caseDesc: '',
          caseUrl: '',
          caseDate: '',
          caseTags: [''],
          caseImages: [],
          userSelectedImages: false, 
          imagesToShow: [],
        }
      }

    resetFields = () => {

      if ( window.confirm("Você deseja mesmo cancelar essa edição?")) 
          { 
            this.setState( 
              {
                caseTitle: '',
                caseDesc: '',
                caseUrl: '',
                caseDate: '',
                caseTags: [''],
                caseImages: [],
                userSelectedImages: false,
                imagesToShow: [],
                alert: 'O case foi cancelado e seu conteúdo apagado.',
                showalert: true,
            }
            )
            this.caseFormData = {};
            this.timer();
            this.scrollToTop();
          }
      } 
    
    // hanleChange apenas grava cada mudança do formulário em this.caseFormData
    // para prevenir o reset dos dados quando setState é chamado em outros componentes 
    handleChange = ({formData}) => {
      this.caseFormData = formData 
    }

    handleSubmit = ({formData}) => {
        let  newState = this.state;
              newState.caseTitle = formData.fcaseTitle
              newState.caseDesc = formData.fcaseDesc
              newState.caseDate = formData.fcaseDate
              newState.caseUrl = formData.fcaseUrl
              newState.caseTags = formData.fcaseTags.split(",").map((str, index) => str.trim(str))
        
        console.log (this.state)
        if (this.state.caseImages.length < 1) {
           this.setState({
             alert: 'CASES SEM IMAGENS NÃO PODEM SER GRAVADOS!',
             showalert: true
           })
           this.scrollToTop()
           this.timer()
           return
        }
        this.props.writeCase(newState) // a função writecase foi passada na chamada desse componente como uma prop
        this.caseFormData={}
        this.setState ({
          caseTitle: '',
          caseDesc: '',
          caseUrl: '',
          caseDate: '',
          caseTags: [''],
          caseImages: [],
          userSelectedImages: false,
          imagesToShow: [],
          alert: 'Case gravado com sucesso! Crie o próximo =)',
          showalert: true,
        })
        this.scrollToTop();
        this.timer();
       }

       
    dropBoxChoosedFiles = (files) => {
        let filesChoosed = []
        let newImages = [] 
        this.setState ({ userSelectedImages: false })
        files.forEach(drobBoxfile => {
            let link  = drobBoxfile.link.replace('dl=0','raw=1')
            filesChoosed.push({ // esta é a array que monta a galeria
                src: link, 
                width: 3,
                height: 2,
                usertags: "no,tags",
                alt: drobBoxfile.name
            })
            newImages.push(link) // esta é a array que grava o banco de dados
        });
        this.setState ({
            userSelectedImages: true,
            caseImages: newImages,
            imagesToShow: filesChoosed,
        })     
  }

  dropBoxCanceled = () => {
     this.setState ({
        caseImages: [],
        userSelectedImages: false,
        alert: 'Cases sem imagens não podem ser gravados!',
        showalert: true,

      })
      this.scrollToTop();
      this.timerToFader();
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }
   

    
  componentDidMount() {
    this.timer();
  }

  render() {            
      return (
          <React.Fragment>
            <div className="container">
              <div  className="row casesFormHeader">
                <div className="col-12">
                  <h4>Adição de novos <em>Cases</em>
                    { this.state.showalert 
                      ? <FadeOutMessage showit>{ this.state.alert }</FadeOutMessage>
                      : <FadeOutMessage>{ this.state.alert }</FadeOutMessage>
                    } 
                  </h4>
                </div>
              </div>
              <div className="row casesFormContainer">
              <div className="row">
                <div className="col-6">
                  <Form  schema={schema}  uiSchema={uiSchema} formData={this.caseFormData}
                    className="editCasesForm" onChange={this.handleChange}
                    onSubmit={this.handleSubmit}>
                    <ImagesGroup>
                      { this.state.userSelectedImages 
                        ? <HiGallery photoSet={this.state.imagesToShow} notags small case><strong>Imagens selecionadas</strong></HiGallery>
                        : <div>
                            <strong>Nenhuma imagem selecionada ainda *</strong><br/>
                            Você precisa selecionar imagens para gravar esse <em>case</em>.
                          </div>}
                    </ImagesGroup>
                    <ButtonsGroup>
                        <button type="button" className="btn btn-primary">
                            <DropboxChooser appKey={APP_KEY}
                                    success={files => this.dropBoxChoosedFiles (files)}
                                    cancel={() => this.dropBoxCanceled()}
                                    multiselect={true} 
                                    linktype={'preview'}
                                    extensions={["images"]}>
                                    <FaImages /> Selecionar imagens do <em>Case</em>
                                    <div className="dropbox"></div>
                            </DropboxChooser>
                        </button>
                        <button type="submit" className="btn btn-primary"><FaCheck /> Publicar este case</button>
                        <button type="button" className="btn btn-danger" onClick={() => this.resetFields()}>x Cancelar esse Case</button>
                    </ButtonsGroup>
                  </Form>
                </div>
                <div className="col-4"> 
                <ul>
                  <li>Use esse formulário para incluir as informações necessárias para criar um novo case da Proloc</li>
                  <li>Procure concisão, sem sacrificar o entendimento, nas descrições e títulos.</li>
                  <li>Selecione apenas um breve conjunto de imagens significantes do projeto.</li>
                  <li>Ao final, selecione o botão<br/><strong>[ <FaCheck/> Publicar ]</strong> abaixo. </li>
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
