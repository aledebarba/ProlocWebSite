import React, { Component } from 'react'
import Logo from '../images/Menu Logo.png'
import { FaUserCircle } from 'react-icons/fa'
import './nav.css'

const Nav = () => (
        <nav className="navbar navbar-expand-lg mainMenu fixed-top">
            <a className="navbar-brand" href="#"><img src={Logo}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Quem somos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Cases</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Catalogo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contato</a>
                    </li>
                    <li className="nav-item asButton">
                        <a className="nav-link" href="/">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
)
export default Nav