import React from 'react';
import Layout from '../components/layout';
import PlaceHolder from '../components/placeholder';
import '../components/teamSection.css'
import TeamCard from '../components/teamCard'
import CallToAction from '../components/callToAction'
import Header from '../components/header'

const illustration = [
    'https://dl.dropboxusercontent.com/s/ymml18v7nc0iflv/Asset%203.png?raw=1',
    'https://dl.dropboxusercontent.com/s/3uff5hpah0rgp5j/Asset%204.png?raw=1',
    'https://dl.dropboxusercontent.com/s/t2wihak264h0j3s/Asset%205.png?raw=1',
    'https://dl.dropboxusercontent.com/s/xnqarrjllvkqpst/Asset%207.png?raw=1',
    'https://dl.dropboxusercontent.com/s/fnd8wemtfr8v168/Asset%206.png?raw=1'
]

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
                <div className="col-xs-12 col-sm-6 imgalign">
                    <img src={illustration[0]}></img>
                </div>
            </div>
            <div className="row justify-content-center">
                
                <div className="col-xs-12 col-sm-6">
                    <h2>Analisamos e encontramos</h2>
                    <p>Verificamos o seu pedido e começamos um processo de análise que identifica as locações mais recomendadas para a execução de seu projeto. Nesse momento nós levamos em conta desde orçamentos de produção até as condições meteorológicas do dia da filmagem, passando por questões de direito autoral e a possibilidade de adaptação de espaços alternativos para o que você precisa filmar.</p>
                    <div className="col-xs-12 col-sm-6 imgalign">
                    <img src={illustration[1]} />
                </div>
                </div>
            </div>
            
            <div className="row justify-content-center">
                
                <div className="col-xs-12 col-sm-6">
                <h2>Apresentamos as Locações</h2>
                <p>Você recebe um material completo com as opções de locações, com descrições, fotos e outros detalhes importantes, tudo organizado para você discutir e aprovar.</p>
                </div>
                <div className="col-xs-12 col-sm-6 imgalign">
                     <img src={illustration[2]}></img>
                </div>
            </div>
            <div className="row justify-content-center">
               
                <div className="col-xs-12 col-sm-6">
                    <h2>Acompanhamos a filmagem</h2>
                    <p>No dia da ação, acompanhamos a equipe para dar suporte em quaisquer detalhes referentes a locação, como características próprias do lugar, melhores condições de execução do projeto ou intermediamos situações entre o proprietário e a equipe de produção.</p>
                </div>
                <div className="col-xs-12 col-sm-6 imgalign">
                    <img src={illustration[3]} />
                </div>
            </div>
            <div className="row justify-content-center">
               
                <div className="col-xs-12 col-sm-6">
                    <h2>Cuidamos da Papelada</h2>
                    <p>Tomamos conta de todo o aparato contratual, autorizações de uso, licensas junto a prefeituras, órgãos de trânsito, entidades responsáveis, proprietários e resolvemos a parte burocrática para sua produção focar apenas em produzir imagens perfeitas.</p>
                </div>
                <div className="col-xs-12 col-sm-6 imgalign">
                    <img src={illustration[4]} />
                </div>
            </div>
        </div>
        <section className="container-fluid team-section quemsomos">
            <div className="row justify-content-center">
                <div className="col col-md-10">
                    <h1>Nosso time</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis harum repellendus quos placeat, perferendis saepe quo animi minus aliquid autem numquam ut dicta rem expedita pariatur voluptate laborum consectetur cumque!</p>
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
            title="Entenda nosso trabalho"
            text="Nós recebemos o seu projeto, argumento, roteiro ou decupagem de cena, entendemos, avaliamos e depois submetemos ao nosso banco de dados. A partir daí enviamos uma proposta estruturada, com todas as sugestões de locações de filmagem disponíveis, suas características, fotos e codições, além do valor final orçado, incluido todos os custos com entidades licencisadoras e proprietários."
            button="Mais cases"
            url="/cases/" />
    </Layout>
)

export default QuemSomos
