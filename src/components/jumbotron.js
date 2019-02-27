import React from 'react'
import Background from "../images/heroimage.jpg"
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-scroll'
import CustomButtom from '../components/customButton'
import { Container, Row, Col, Jumbotron as Jmbtrn } from 'reactstrap';
import styled from "styled-components";

const Jumbo = styled(Jmbtrn)`
    background-color: black;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const Jumbotron = props => (
    <Jumbo>
        <Container>
            <Row className="justify-content-center">
                <Col xs="12" sm="8" md="6">
                    <h1>{props.title}</h1>
                    <p className="lead">{props.lead}</p>
                    <hr className="my-4" />
                    <Link activeClass="active" to="Carousel" smooth duration={1000} offset={-100} delay={300}>
                        <CustomButtom Zero>Saiba Mais&nbsp;<FaAngleDown /></CustomButtom>
                    </Link>
                </Col>
            </Row>
        </Container>
    </Jumbo>
)

export default Jumbotron