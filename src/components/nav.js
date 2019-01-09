import React, { Component } from 'react'
import Logo from '../images/Menu Logo.png'
import './nav.css'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg mainMenu fixed-top">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Marca da Proloc"/>
          </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/quemsomos/">
                Quem somos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cases/">
                Cases
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/catalogo/">
                Catalogo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contato/">
                Contato
              </a>
            </li>
            <li className="nav-item asButton">
              <a className="nav-link" href="/login/">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
