import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Nav from './nav'
import Footer from './footer'
import styled from 'styled-components'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <GlobalStyles>
          <Nav />
          {children}
          <Footer />
        </GlobalStyles>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const GlobalStyles = styled.div`
  padding: 0px;
  margin: 0px;
`
