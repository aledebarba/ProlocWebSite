import React from 'react'
import Logo from '../images/Logo@2x.png';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './footer.css'
import CustomButton from './customButton';
import ScrollableAnchor from 'react-scrollable-anchor'

const Footer = () => (
    <React.Fragment>
        <div className="container-fluid footer">
          <div className="row justify-content-center">
                <div className='col-md-4 footerCol'>
                    <h3><img src={Logo} /></h3>
                    <p>Somos especializados em locações. Trabalhamos com mais de 10.000 locais por todo o Brasil. Acompanhamos constantemente sua produção, para que todas as necessidades do trabalho sejam cumpridas, e após a realização, fazemos a entrega de contratos e recibos de pagamento, para que não haja nenhum problema jurídico, inclusive junto aos órgãos competentes, como departamentos de trânsito e prefeituras.​</p>
                </div>
                <div className='col-md-4 footerCol'>
                    <h3>Nota Legal</h3>
                    <p>Todo o conteúdo deste site te m direitos reservados, no Brasil, de acordo com a Lei dos Direitos do Autor (LEI Nº 9.610, DE 19 DE FEVEREIRO DE 1998), e internacionalmente pela Convenção de Berna, de 9 de Setembro de 1886, Decreto 75.699/75. Antes de reproduzir qualquer conteúdo do site, entre em contato pelo email contato@proloc.com.br e solicite autorização formal.</p>
                </div>
                <div className='col-md-2 footerCol'>
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
                <div className='col-md-2 footerCol'>
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
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <h4>Copyright: Todos os direitos reservados para Proloc</h4>
                </div>
                <div class="col-md-4">
                    <CustomButton label="Voltar ao topo" url="#topnavbar" />
                </div>
            </div>
            
       </div>
    </React.Fragment>
)

 export default Footer
