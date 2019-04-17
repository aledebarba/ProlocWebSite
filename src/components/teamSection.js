import React from 'react'
import TeamCard from './teamCard';
import styled from 'styled-components'
import CustomButton from './customButton'

const Team = styled.div`
    margin: 30px 0px;
    background: #242A36;
    box-shadow: 0px -30px 40px rgba(0, 0, 0, 0.5);
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 50px 0px 50px 0px;
    & h1 {
        text-align: center;
    }
    `
const TeamCards = styled.div `
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    padding: 0px 20px;
    justify-content: center;
`

const TeamSection = () => (
        <React.Fragment>
            <Team className="container-fluid">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-md-10">
                        <h1>Nosso time</h1>
                        <p>Apaixonados por audio visual, especializados em produção, focados em locação. Nosso time sabe o que significa o processo de produção e como integrar-se organicamente em seu projeto, tornando as locações ágeis e transparentes.</p>
                    </div>
                </div>
                <TeamCards>
                    <TeamCard Img="http://i.pravatar.cc/300?img=58" 
                                Name="Jeff Flecker"
                                Job="Produtor"
                                Lead="Há mais de 20 anos atuando no mercado de produções audio visual, cofundador e CEO da Proloc. "
                                Linkedin="aledebarba"
                                Facebook="aledebarba"
                                />
                    <TeamCard Img="http://i.pravatar.cc/300?img=47" 
                                Name=" Joana D'arc"
                                Job="Religiosa e General"
                                Lead="Camponesa, modesta e analfabeta, foi uma mártir francesa e também heroína de seu povo. Se dizia enviada por Deus para libertar o trono da França da dominação inlgesa."
                                Linkedin="aledebarba"
                                Facebook="aledebarba"
                                />
                    <TeamCard Img="http://i.pravatar.cc/300?img=48" 
                                Name="Ada Lovelace"
                                Job="Financeiro"
                                Lead="Matemática, escritora e oficialmente a primeira programadora da humanidade."
                                Linkedin="aledebarba"
                                Facebook="aledebarba"
                                />
                </TeamCards>
                <div className="justify-content-center">
                    <CustomButton url="/quemsomos">Saiba mais</CustomButton>
                </div>
            </div>
            </Team>
            </React.Fragment>
    )

export default TeamSection