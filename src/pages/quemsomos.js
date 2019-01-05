import React from 'react';
import Layout from '../components/layout';
import '../components/teamSection.css'
import TeamCard from '../components/teamCard'
import CallToAction from '../components/callToAction'
import Header from '../components/header'
import DropBoxImage from '../components/dropBoxImage';

const QuemSomos = () => (

    <Layout>
        <Header title="Locações profissionais" scr="https://dl.dropboxusercontent.com/s/gw03g7svz7acmne/brasil-sao-paulo-centro-velho.jpg?raw=1">
            <p>Nossa equipe é dedicada a encontrar locações, organizar o processo contratual e acompanhar a produção nas etapas que envolvem os locais de filmagem. Antes, durante e depois.</p>
        </Header>

        <div className="container quemsomos">
            <div className="row justify-content-center">
                <div className="col-xm-12 col-sm-6">
                    <h2>Recebemos o seu material</h2>
                    <p>Você nos envia seu roteiro, argumento, projeto, decupagem de cena ou a descrição das locações que vai precisar. Aliás, é só se cadastrar e enviar aqui pelo site mesmo.</p>
                </div>
                <div className="col-xs-12 col-sm-6 imgAlign">
                    <DropBoxImage src="https://www.dropbox.com/s/j9fqpfsoxbpi23t/Asset%2011.png?dl=0" />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-6">
                    <h2>Analisamos e encontramos</h2>
                    <p>Verificamos o seu pedido e começamos um processo de análise que identifica as locações mais recomendadas para a execução de seu projeto. Nesse momento nós levamos em conta desde orçamentos de produção até as condições meteorológicas do dia da filmagem, passando por questões de direito autoral e a possibilidade de adaptação de espaços alternativos para o que você precisa filmar.</p>
                </div>
                <div className="col-xs-12 col-sm-6 imgAlign">
                    <DropBoxImage src="https://www.dropbox.com/s/vimlau4wybp29uz/Asset%2012.png?dl=0" />
                </div>
            </div>

            <div className="row justify-content-center">

                <div className="col-xs-12 col-sm-6">
                    <h2>Apresentamos as Locações</h2>
                    <p>Você recebe um material completo com as opções de locações, com descrições, fotos e outros detalhes importantes, tudo organizado para você discutir e aprovar.</p>
                </div>
                <div className="col-xs-12 col-sm-6  imgAlign">
                    <DropBoxImage src="https://www.dropbox.com/s/k60lx4m5vuv16nc/Asset%2013.png?dl=0" />
                </div>
            </div>
            <div className="row justify-content-center">

                <div className="col-xs-12 col-sm-6">
                    <h2>Acompanhamos a filmagem</h2>
                    <p>No dia da ação, acompanhamos a equipe para dar suporte em quaisquer detalhes referentes a locação, como características próprias do lugar, melhores condições de execução do projeto ou intermediamos situações entre o proprietário e a equipe de produção.</p>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <DropBoxImage src="https://www.dropbox.com/s/gcw4sop2xuwwg0f/Asset%2014.png?dl=0" />
                </div>
            </div>
            <div className="row justify-content-center">

                <div className="col-xs-12 col-sm-6">
                    <h2>Cuidamos da Papelada</h2>
                    <p>Tomamos conta de todo o aparato contratual, autorizações de uso, licensas junto a prefeituras, órgãos de trânsito, entidades responsáveis, proprietários e resolvemos a parte burocrática para sua produção focar apenas em produzir imagens perfeitas.</p>
                </div>
                <div className="col-xs-12 col-sm-6 imgAlign">
                    <DropBoxImage src="https://www.dropbox.com/s/fnd8wemtfr8v168/Asset%206.png?dl=0" />
                </div>
            </div>
        </div>


        <section className="container-fluid team-section quemsomos">
            <div className="row justify-content-center">
                <div className="col col-md-10">
                    <h1>Nosso time</h1>
                    <p>Apaixonados por produção, especializados em locações. Somos profissionais do audio visual. Entendemos o que é uma produção de filmagem. Sabemos dos prazos, dos pepinos e abacaxis no meio do caminho. Se precisar saber mais da empresa, conheça nosso pessoal. Estamos aqui para facilitar sua vida.</p>
                </div>
            </div>

            <div className="row justify-content-center card-container">
                <TeamCard imgURL="http://i.pravatar.cc/300?img=58"
                    job="Produtor"
                    name="Jeff Flecker"
                    lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                    linkedin="aledebarba"
                    facebook="aledebarba"
                />
                <TeamCard imgURL="http://i.pravatar.cc/300?img=58"
                    job="Produtor"
                    name="Jeff Flecker"
                    lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                    linkedin="aledebarba"
                    facebook="aledebarba"
                />
                <TeamCard imgURL="http://i.pravatar.cc/300?img=58"
                    job="Produtor"
                    name="Jeff Flecker"
                    lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                    linkedin="aledebarba"
                    facebook="aledebarba"
                />
                <TeamCard imgURL="http://i.pravatar.cc/300?img=58"
                    job="Produtor"
                    name="Jeff Flecker"
                    lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                    linkedin="aledebarba"
                    facebook="aledebarba"
                />
                <TeamCard imgURL="http://i.pravatar.cc/300?img=58"
                    job="Produtor"
                    name="Jeff Flecker"
                    lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                    linkedin="aledebarba"
                    facebook="aledebarba"
                />
                <TeamCard imgURL="http://i.pravatar.cc/300?img=58"
                    job="Produtor"
                    name="Jeff Flecker"
                    lead="Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam."
                    linkedin="aledebarba"
                    facebook="aledebarba"
                />
            </div>

        </section>
        <CallToAction
            title="Conheça alguns cases"
            text="Através do trabalho minucioso da Proloc, nos últimos 20 anos, inúmeros filmes foram produzidos com sucesso. Selecionamos alguns para apresentar e mostrar como nosso banco de locações colabora no processo de produção. Vá em frente, conheça nossos cases."
            button="Mais cases"
            url="/cases/" />
    </Layout>
)

export default QuemSomos
