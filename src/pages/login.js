
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PlaceHolder from '../components/placeholder'
import Header from '../components/header'


const Login = () => (
  <Layout>
    <SEO title="Login" />
    <Header Src="https://www.dropbox.com/s/n1or0q2k38swack/brasil-vista-cidade.jpg?dl=0" />
    <div className="container">
      <div className="row">
        <div className="col">
          <PlaceHolder title="Login">Quero me cadastrar</PlaceHolder>
        </div>
        <div className="col">
          <PlaceHolder title="Login">Já tenho cadastro</PlaceHolder>
        </div>
      </div>
    </div>
    
  </Layout>
)

export default Login
