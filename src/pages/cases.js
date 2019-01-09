import React, { Component } from 'react'
import Layout from '../components/layout'
// import { Link } from 'gatsby'
import SEO from '../components/seo'
import Header from '../components/header';
import MovieCase from '../components/case';

export default class Cases extends Component {
    constructor() {
        super()
        this.state = {
            moviePosts: []
        }
    }

    componentDidMount() {
        let dbUrl = "http://proloc.uxdir.com/db/wp-json/wp/v2/posts/"
        fetch(dbUrl)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    moviePosts: response
                })
            })
    }

    render() {
        return (
            
            <Layout>
                <SEO title="Cases" />
                <Header title="Nossos cases">
                    <p>Uma pequena amostra de nossos trabalhos, os mais recentes ou que achamos especialmente desafiadores, para você entender como um processo de locação bem organizado pode fazer toda a diferença em sua produção.</p>
                </Header>
                {this.getMoviePosts()}
                }
        </Layout>
        )
    }

    getMoviePosts() {
        return this.state.moviePosts.map((project, index) => {
            return (<MovieCase key={index} title={project.title.rendered} text={project.content.rendered} fromDataBase>
            </MovieCase>);
        });
    }
}



