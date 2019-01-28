import React from 'react'
import Logo from '../images/Logo@2x.png';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components'
import CustomButton from './customButton';

const FooterSection = styled.div`
    background-color:  #242A36;
    padding: 40px;`

const FooterCol = styled.div`
    padding: 10px;
    margin-top: 25px;
`

const Text = styled.p`
    font-size: 14px !important;
    text-align: left;
    padding: 0;
    margin:0;
`

const CopyrightSection = styled.div`
    background: #693121;
    box-shadow: 0px -15px 40px rgba(0, 0, 0, 0.55);
    color: white;
    padding: 30px;
    text-align: center;`

const FooterNav = styled.ul`
    padding: 0px;
    margin: 0px;
    font-size: 14px;
`
    
const Footer = () => (
    <React.Fragment>
        <FooterSection className="container-fluid">
          <div className="row justify-content-center">
                <FooterCol className='col-md-4 col-sm-6'>
                    <h3>
                        <img src={Logo} alt="Logo da Proloc"/>
                    </h3>
                    <Text>
                        Somos especializados em locações. Trabalhamos com mais de 10.000 locais por todo o Brasil. Acompanhamos constantemente sua produção, para que todas as necessidades do trabalho sejam cumpridas, e após a realização, fazemos a entrega de contratos e recibos de pagamento, para que não haja nenhum problema jurídico, inclusive junto aos órgãos competentes, como departamentos de trânsito e prefeituras.​
                    </Text>
                </FooterCol>
                <FooterCol className='col-md-4 col-sm-6'>
                    <h3>Nota Legal</h3>
                        <Text>
                            Todo o conteúdo deste site te m direitos reservados, no Brasil, de acordo com a Lei dos Direitos do Autor (LEI Nº 9.610, DE 19 DE FEVEREIRO DE 1998), e internacionalmente pela Convenção de Berna, de 9 de Setembro de 1886, Decreto 75.699/75. Antes de reproduzir qualquer conteúdo do site, entre em contato pelo email contato@proloc.com.br e solicite autorização formal.
                        </Text>
                </FooterCol>
                <FooterCol className='col-md-2 col-sm-6'>
                <h3>Navegação</h3>
                    <FooterNav>
                        <li><a href="/index/">Home</a></li>
                        <li><a href="/quem-somos/">Quem Somos</a></li>
                        <li><a href="/cases/">Cases</a></li>
                        <li><a href="/catalogo/">Catalogo</a></li>
                        <li><a href="/contato/">Contato</a></li>
                        <li><a href="/login/">Login</a></li>
                    </FooterNav>
                </FooterCol>          
                <FooterCol className='col-md-2 col-sm-6'>
                     <h3>Redes Sociais</h3>
                    <FooterNav>
                        <li><FaFacebook className="footerIcons"/>&nbsp;<a href="/">Facebook</a></li>
                        <li><FaTwitter className="footerIcons"/>&nbsp;<a href="/">Twitter</a></li>
                        <li><FaInstagram className="footerIcons"/>&nbsp;<a href="/">Instagram</a></li>
                        <li><FaYoutube className="footerIcons"/>&nbsp;<a href="/">Youtube</a></li>
                    </FooterNav>
                </FooterCol>
          </div>
        </FooterSection>
        <CopyrightSection className="container-fluid">
            <div className="row justify-content-center">
                <h4>Copyright: Todos os direitos reservados para Proloc</h4>
            </div>
            <div className="row justify-content-center">
                <CustomButton label="Voltar ao topo" url="/#topnavbar"/>
            </div>
       </CopyrightSection>
    </React.Fragment>
)

 export default Footer
