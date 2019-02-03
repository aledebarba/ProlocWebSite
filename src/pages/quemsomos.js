import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header'
import TeamCard from '../components/teamCard'
import CallToAction from '../components/callToAction'
import DropBoxImage from '../components/dropBoxImage';
import { FaCheckCircle, FaFlagCheckered, FaAngleDown } from 'react-icons/fa';
import styled from "styled-components";
import Palette from '../styles/palette'
import CustomButton from '../components/customButton';
import { Link, Element } from 'react-scroll';

const Title = styled.h1`
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;

    @media (max-width: 640px) {
        margin-bottom: 50px;
        margin-top: 50px;
        font-size: 32px!important;
  }`

const SubTitle = styled.h1`
   text-align: center !important;
`

const Image = styled.img`
    width: 50% !important;
`
const ImageCol = styled.div `
    text-align: center; 
`

const TeamSection = styled.div `
    padding: 50px 20px;
`

const SectionHR = styled.hr`
    width: 75%;
    border-top: solid 2px ${Palette.darkgreen};
    box-shadow: 0px 5px 5px rgba(0,0,0,1);
`

const QuemSomos = () => (

    <Layout>
        <Header title="Locações profissionais" scr="https://dl.dropboxusercontent.com/s/gw03g7svz7acmne/brasil-sao-paulo-centro-velho.jpg?raw=1">
            <p>Nossa equipe é dedicada a encontrar locações, organizar o processo contratual e acompanhar a produção nas etapas que envolvem os locais de filmagem. Antes, durante e depois.</p>
            <CustomButton Zero><Link to="fluxo-1" smooth offset={-100}>Nosso trabalho<FaAngleDown/></Link></CustomButton>
        </Header>

        <div className="container quemsomos">
        <Element name="fluxo-1" />
        <Title>Nosso fluxo de trabalho</Title>
            <div className="row justify-content-center">
                <div className="col-sm-6 col-xs-12 order-md-2">
                    <h2><FaCheckCircle/> 1. Recebemos o seu material</h2>
                    <p>Você nos envia seu roteiro, argumento, projeto, decupagem de cena ou a descrição das locações que vai precisar. Aliás, é só se cadastrar e enviar aqui pelo site mesmo.<Link to="fluxo-2" smooth offset={-100}>&nbsp;<FaAngleDown/></Link></p>
                </div>
                <ImageCol className="col-sm-6 col-xs-12 order-md-1">
                    <Image  src="https://dl.dropboxusercontent.com/s/j9fqpfsoxbpi23t/Asset%2011.png?raw=1" alt="" />
                </ImageCol>
            </div>

            <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-6">
                    <Element name="fluxo-2" />
                    <h2><FaCheckCircle/> 2. Analisamos e encontramos</h2>
                    <p>Verificamos o seu pedido e começamos um processo de análise que identifica as locações mais recomendadas para a execução de seu projeto. Nesse momento nós levamos em conta desde orçamentos de produção até as condições meteorológicas do dia da filmagem, passando por questões de direito autoral e a possibilidade de adaptação de espaços alternativos para o que você precisa filmar.<Link to="fluxo-3" smooth offset={-100}>&nbsp;<FaAngleDown/></Link></p>
                </div>
                <div className="col-xs-12 col-sm-6 imgAlign">
                    <DropBoxImage src="https://www.dropbox.com/s/vimlau4wybp29uz/Asset%2012.png?dl=0" />
                </div>
            </div>

            <div className="row justify-content-center">

            <div className="col-sm-6 col-xs-12 order-md-2">
                    <Element name="fluxo-3" />
                    <h2><FaCheckCircle/> 3. Apresentamos as Locações</h2>
                    <p>Você recebe um material completo com as opções de locações, com descrições, fotos e outros detalhes importantes, tudo organizado para você discutir e aprovar.<Link to="fluxo-4" smooth offset={-100}>&nbsp;<FaAngleDown/></Link></p>
                </div>
                <ImageCol className="col-sm-6 col-xs-12 order-md-1">
                    <DropBoxImage src="https://www.dropbox.com/s/k60lx4m5vuv16nc/Asset%2013.png?dl=0" />
                </ImageCol>
            </div>
            <div className="row justify-content-center">

                <div className="col-xs-12 col-sm-6">
                    <Element name="fluxo-4" />
                    <h2><FaCheckCircle/> 4. Acompanhamos a filmagem</h2>
                    <p>No dia da ação, acompanhamos a equipe para dar suporte em quaisquer detalhes referentes a locação, como características próprias do lugar, melhores condições de execução do projeto ou intermediamos situações entre o proprietário e a equipe de produção.<Link to="fluxo-5" smooth offset={-100}>&nbsp;<FaAngleDown/></Link></p>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <DropBoxImage src="https://www.dropbox.com/s/gcw4sop2xuwwg0f/Asset%2014.png?dl=0" />
                </div>
            </div>
            <div className="row justify-content-center">

                <div className="col-sm-6 col-xs-12 order-md-2">
                    <Element name="fluxo-5" />
                    <h2>< FaFlagCheckered /> Cuidamos da Papelada</h2>
                    <p>Tomamos conta de todo o aparato contratual, autorizações de uso, licensas junto a prefeituras, órgãos de trânsito, entidades responsáveis, proprietários e resolvemos a parte burocrática para sua produção focar apenas em produzir imagens perfeitas.</p>
                    <CustomButton Zero>
                        <Link to="time" smooth offset={-100}>
                            Conheça nosso time <FaAngleDown/>
                        </Link>
                    </CustomButton>
                </div>
                <ImageCol className="col-sm-6 col-xs-12 order-md-1">
                    <DropBoxImage src="https://www.dropbox.com/s/fnd8wemtfr8v168/Asset%206.png?dl=0" />
                </ImageCol>
            </div>
        </div>

        <SectionHR />

        <TeamSection className="container-fluid">
            <Element name="time" />
            <SubTitle>Nosso time</SubTitle>
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10 col-sm-12">
                    <p>Apaixonados por produção, especializados em locações. Somos profissionais do audio visual. Entendemos o que é uma produção de filmagem. Sabemos dos prazos, dos pepinos e abacaxis no meio do caminho. Se precisar saber mais da empresa, conheça nosso pessoal. Estamos aqui para facilitar sua vida.</p>
                </div>
            </div>

            <div className="row justify-content-center">
                <TeamCard 
                    Img="http://i.pravatar.cc/300?img=58"
                    Job="Produtor"
                    Name="Jeff Flecker"
                    Lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                    Linkedin="aledebarba"
                    Facebook="aledebarba"
                />
                <TeamCard 
                    Img="http://i.pravatar.cc/300?img=59"
                    Job="Religiosa e Militar"
                    Name="Joana Dark"
                    Lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                    Linkedin="aledebarba"
                    Facebook="aledebarba"
                />
                <TeamCard 
                    Img="http://i.pravatar.cc/300?img=60"
                    Job="Programadora"
                    Name="Ada Lovelace"
                    Lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                    Linkedin="aledebarba"
                    Facebook="aledebarba"
                />
                <TeamCard 
                    Img="http://i.pravatar.cc/300?img=61"
                    Job="Religioso e Parapsicólogo"
                    Name="Padre Quevedo"
                    Lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                    Linkedin="aledebarba"
                    Facebook="aledebarba"
                />
                <TeamCard 
                    Img="http://i.pravatar.cc/300?img=62"
                    Job="Filósofo"
                    Name="Platão"
                    Lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                    Linkedin="aledebarba"
                    Facebook="aledebarba"
                />
                <TeamCard 
                    Img="http://i.pravatar.cc/300?img=63"
                    Job="Investigadora"
                    Name="Jeniffer Hart"
                    Lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                    Linkedin="aledebarba"
                    Facebook="aledebarba"
                />
            </div>
        </TeamSection>
        <CallToAction
            title="Conheça alguns cases"
            text="Através do trabalho minucioso da Proloc, nos últimos 20 anos, inúmeros filmes foram produzidos com sucesso. Selecionamos alguns para apresentar e mostrar como nosso banco de locações colabora no processo de produção. Vá em frente, conheça nossos cases."
            button="Mais cases"
            url="/cases/" />
    </Layout>
)

export default QuemSomos
