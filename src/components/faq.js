import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card, Container } from 'reactstrap';

const FAQ = () => (

    <Container>
    <h1>Perguntas frequentes:</h1>
    <FaqItem titulo="Como alugar minha propriedade para locações de filmagem?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </FaqItem>
    <FaqItem titulo="Como acompanhar a análise de meu projeto?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </FaqItem>
    <FaqItem titulo="Como enviar um projeto?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </FaqItem>
    </Container>

);

export default FAQ;

const FaqItem = props => {
    let dt = new Date().getTime()
    let uq = "toggler_"+dt.toString()
    return (
    <Container>
        <Button color="primary" id={ uq } style={{ margin: '10px 0px 5px 0px', textAlign: "left"}}>
            { props.titulo }
        </Button>
        <Card>
            <UncontrolledCollapse toggler={uq} >
                <CardBody>
                { props.children }
                </CardBody>
            </UncontrolledCollapse>
        </Card>
    </Container>
)}