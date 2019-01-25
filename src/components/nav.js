import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import logo from '../images/Menu Logo.png'

const styles = {
  button: {
    border: "1px solid #999999",
    borderRadius: "50px",
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginTop: "5px",
    display: "inline" },

  buttonHover: {
    border: "1px solid #ffffff",
    borderRadius: "50px",
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginTop: "5px",
    color: "black",
    backgroundColor: "white",
    display: "inline"
  } 
};

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loginHover: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar dark fixed="top" expand="md" style={{
          backgroundColor: "rgba(30,30,30,0.85)",
          boxShadow: "0px 5px 10px rgba(0,0,0,0.6)",
          fontSize: "0.8em",
        }}>
          <NavbarBrand href="/"><img src={logo} alt="Logo Proloc"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/quemsomos">Quem somos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cases">Cases</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/catalogo">Catálogo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contato">Contato</NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                    href="login"
                    style={ this.state.buttonHover ? styles.buttonHover : styles.button }
                    onMouseEnter ={ () => this.setState({buttonHover:true})  }
                    onMouseLeave ={ () => this.setState({buttonHover:false}) }
                    >
                    Login
              </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}