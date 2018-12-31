import React from 'react'
import Logo from '../images/Logo@2x.png';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './footer.css'

const Footer = () => (
    <React.Fragment>
        <div className="container-fluid footer">
          <div className="row justify-content-center">
                <div className='col col-md-3'>
                    <img src={Logo} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit, at eleifend elit ornare ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit, at eleifend elit ornare ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit, at eleifend elit ornare ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit, at eleifend elit ornare ut.</p>
                </div>
                <div className='col col-md-3'>
                    <h3>Nota Legal</h3>
                    <p>Todo o conteúdo deste site te m direitos reservados, no Brasil, de acordo com a Lei dos Direitos do Autor (LEI Nº 9.610, DE 19 DE FEVEREIRO DE 1998), e internacionalmente pela Convenção de Berna, de 9 de Setembro de 1886, Decreto 75.699/75. Antes de reproduzir qualquer conteúdo do site, entre em contato pelo email contato@proloc.com.br e solicite autorização formal.</p>
                </div>
                <div className='col col-md-2'>
                <h3>Navegação</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/quem-somos/">Quem Somos</a></li>
                    <li><a href="/cases/">Cases</a></li>
                    <li><a href="/catalogo/">Catalogo</a></li>
                    <li><a href="/contato/">Contato</a></li>
                    <li><a href="/login/">Login</a></li>
                </ul>
                </div>          
                <div className='col col-md-2'>
                     <h3>Redes Sociais</h3>
                    <ul>
                        <li><FaFacebook className="footerIcons"/>&nbsp;<a href="/">Facebook</a></li>
                        <li><FaTwitter className="footerIcons"/>&nbsp;<a href="/">Twitter</a></li>
                        <li><FaInstagram className="footerIcons"/>&nbsp;<a href="/">Instagram</a></li>
                        <li><FaYoutube className="footerIcons"/>&nbsp;<a href="/">Youtube</a></li>
                    </ul>
                </div>
          </div>
        </div>
        <div className="container-fluid footer-copyright">
            <h4>Copyright: Todos os direitos reservados para Proloc</h4>
       </div>
    </React.Fragment>
)

 export default Footer
