import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components'

const Texto = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;
    color: darkgray;
    line-height: 1.2rem;
    font-size: 0.8em;
    text-align: justify;
    & br {
        margin-bottom: 5px;
    };
    & h4 {
        margin-top: 20px;
    };
    & b {
        color: white;
    };
`

export default class Termos extends Component {
    constructor (props) {
      super (props)
      this.state = {
        apiResult: ''
      }
    }
  
    render() {
      return (
        <Layout>
            <SEO title="Termos de uso" />
            <Header 
                Src="https://www.dropbox.com/s/n1or0q2k38swack/brasil-vista-cidade.jpg?dl=0"
                title="Termos e condições de uso da plataforma" />  
                <Container>
                 <Row>
                    <Col>
                        <Texto>
                            <h4>Termos e condições de uso do site</h4>
                        <b>Proloc.com</b> é um serviço interativo oferecido por meio de página eletrônica na internet que oferece informações sobre locações profissionais de imagem. 
O visitante poderá usar esta plataforma apenas para finalidades lícitas. Este espaço não poderá ser utilizado para publicar, enviar, distribuir ou divulgar conteúdos ou informação de caráter difamatório, obsceno ou ilícito, inclusive informações de propriedade exclusiva pertencentes a outras pessoas ou empresas, bem como marcas registradas ou informações protegidas por direitos autorais, sem a expressa autorização do detentor desses direitos. Ainda, o visitante não poderá usar a plataforma <b>Proloc.com</b> para obter ou divulgar informações pessoais, inclusive endereços na Internet, sobre os usuários do site.
<br/>
A  <b>Proloc.com</b> empenha-se em manter a qualidade, atualidade e autenticidade das informações do site, mas seus criadores e colaboradores não se responsabilizam por eventuais falhas nos serviços ou inexatidão das informações oferecidas. O usuário não deve ter como pressuposto que tais serviços e informações são isentos de erros ou serão adequados aos seus objetivos particulares. Os criadores e colaboradores tampouco assumem o compromisso de atualizar as informações, e reservam-se o direito de alterar as condições de uso ou preços dos serviços e produtos oferecidos no site a qualquer momento.
<br/>
O acesso à plataforma é gratuito. A <b>Proloc.com</b> poderá criar áreas de acesso exclusivo aos seus clientes ou para terceiros especialmente autorizados.
Os criadores e colaboradores da plataforma poderão a seu exclusivo critério e em qualquer tempo, modificar ou desativar o site, bem como limitar, cancelar ou suspender seu uso ou o acesso. Também estes Termos de Uso poderão ser alterados a qualquer tempo. Visite regularmente esta página e consulte  os Termos então vigentes. Algumas disposições destes Termos podem ser substituídas por termos ou avisos legais expressos localizados em determinadas páginas deste site.
<br/>
<h4>Erros e falhas</h4>
Os documentos, informações, imagens e gráficos publicados nesta plataforma podem conter imprecisões técnicas ou erros tipográficos. Em nenhuma hipótese a <b>Proloc.com</b> e/ou seus respectivos fornecedores serão responsáveis por qualquer dano direto ou indireto decorrente da impossibilidade de uso, perda de dados ou lucros, resultante do acesso e desempenho do site, dos serviços oferecidos ou de informações disponíveis neste site. O acesso aos serviços, materiais, informações e facilidades contidas neste website não garante a sua qualidade.
<br/>
<h4>Limitação da responsabilidade</h4>
Os materiais são fornecidos neste website sem nenhuma garantia explícita ou implícita de comercialização ou adequação a qualquer objetivo específico. Em nenhum caso a <b>Proloc.com</b> ou os seus colaboradores serão responsabilizados por quaisquer danos, incluindo lucros cessantes, interrupção de negócio, ou perda de informação que resultem do uso ou da incapacidade de usar os materiais. A <b>Proloc.com</b> não garante a precisão ou integridade das informações, textos, gráficos, links e outros itens dos materiais.
A <b>Proloc.com</b> não se responsabiliza pelo conteúdo dos artigos e informações aqui publicadas, uma vez que os textos podem ser de fontes indiretas, estando sujeitas a erros.
A <b>Proloc.com</b> tampouco é responsável pela violação de direitos autorais decorrente de informações, documentos e materiais publicados nesta plataforma, comprometendo-se a retirá-los do ar assim que notificado da infração.
<br/>
<h4>Informações enviadas pelos usuários e colaboradores</h4>
Qualquer material, informação, artigos ou outras comunicações que forem transmitidas, enviadas  ou publicadas neste site serão considerados informação não confidencial, e qualquer violação aos direitos dos seus criadores não será de responsabilidade da <b>Proloc.com</b>.
É terminantemente proibido transmitir, trocar ou publicar, através deste website, qualquer material de cunho obsceno, difamatório ou ilegal, bem como textos ou criações de terceiros sem a autorização do autor.
A <b>Proloc.com</b> reserva-se o direito de restringir o acesso às informações enviadas por terceiros aos seus usuários.
A <b>Proloc.com</b> poderá, mas não é obrigado, a monitorar, revistar e restringir o acesso a qualquer área no site onde usuários transmitem e trocam informações entre si, incluindo, mas não limitado a, salas de chat, centro de mensagens ou outros fóruns de debates, podendo retirar do ar ou retirar o acesso a qualquer destas informações ou comunicações. 
Porém, a <b>Proloc.com</b> não é responsável pelo conteúdo de qualquer uma das informações trocadas entre os usuários, sejam elas lícitas ou ilícitas.
<br/>
<h4>Links para sites de terceiros</h4>
Os sites apontados não estão sob o controle da <b>Proloc.com</b> que não é responsável pelo conteúdo de qualquer outro website indicado ou acessado por meio da <b>Proloc.com</b> reserva-se o direito de eliminar qualquer link ou direcionamento a outros sites ou serviços a qualquer momento. A <b>Proloc.com</b> não endossa firmas ou produtos indicados, acessados ou divulgados através deste website, tampouco pelos anúncios aqui publicados, reservando-se o direito de publicar este alerta em suas páginas eletrônicas sempre que considerar necessário.
<br/>
<h4>Direitos autorais e propriedade intelectual</h4>
Os documentos, conteúdos e criações contidos nesta plataforma pertencem aos seus criadores e colaboradores. A autoria dos conteúdos, material e imagens exibidos na plataforma é protegida por leis nacionais e internacionais. Não podem ser copiados, reproduzidos, modificados, publicados, atualizados, postados, transmitidos ou distribuídos de qualquer maneira sem autorização prévia e por escrito dos administradores do portal.
<br/>
As imagens contidas nesta plataforma são aqui incorporadas apenas para fins de visualização, e, salvo autorização expressa por escrito, não podem ser gravadas ou baixadas via download. A reprodução ou armazenamento de materiais recuperados a partir deste serviço sujeitará os infratores às penas da lei.
<br/>
O nome da plataforma, <b>Proloc.com</b>, seu logotipo, o nome de domínio para acesso na Internet, bem como todos os elementos característicos da tecnologia desenvolvida e aqui apresentada, sob a forma da articulação de bases de dados, constituem marcas registradas e propriedades intelectuais privadas e todos os direitos decorrentes de seu registro são assegurados por lei. Alguns direitos de uso podem ser cedidos de maneira formal, escrita, exclusivamente pelo administrador, em contrato ou licença especial, que pode ser cancelada a qualquer momento se não cumpridos os seus termos. 
<br/>
As marcas registradas da plataforma só podem ser usadas publicamente com autorização expressa. O uso destas marcas registradas em publicidade e promoção de produtos deve ser adequadamente informado.
<br/>
<h4>Reclamações sobre violação de direitos autorais</h4>
A <b>Proloc.com</b> respeita a propriedade intelectual de outras pessoas ou empresas e solicitamos aos nossos membros que façam o mesmo. Toda e qualquer violação de direitos autorais deverá ser notificada ao administrador da plataforma e acompanhada dos documentos e informações que confirmam a autoria.
<br/>
A notificação poderá ser enviada pelos e-mails constantes da plataforma para o seguinte endereço <a href="mailto:develop@proloc.uxdir.com"><b>develop@proloc.uxdir.com</b></a>
                        </Texto>
                    </Col>
                </Row>
            </Container>
        </Layout>
        )}
    }