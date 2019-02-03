import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PlaceHolder from '../components/placeholder'
import Header from '../components/header'

export default class dropbox extends Component {
  render() {
    return (
        <>
        <Layout>
            <SEO title="Login" />
            <Header Src="https://www.dropbox.com/s/n1or0q2k38swack/brasil-vista-cidade.jpg?dl=0" />
            <PlaceHolder />
        </Layout>
        </>
    )
  }
}
