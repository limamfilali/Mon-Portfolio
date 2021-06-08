import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/MEE.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">À PROPOS DE MOI</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                SALUT! Je suis <strong>&nbsp;EL-FILALI LIMAM</strong>
                <br />Je suis un développeur Web Full Stack avec , PHP ,React.js, Express.js, Node.js et MYSQL...
                <br />
                En 2019, j'ai terminé avec succès mon diplome universitaire de technologie  avec une spécialisation en `` GÉNIE INFORMATIQUE ''.
                <br />
                En 2020, j'ai terminé avec succès mon diplome de LICENCE PROFFESIONNELLE  avec une spécialisation en `` INGÉNIERIE DES SYSTÉMES INFORMTIQUE ET LOGICIEL ''.
                <br />
                J'adore apprendre les nouvelles technologies, quels problèmes résolvent-elles et comment puis-je les utiliser pour créer des produits meilleurs et évolutifs.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://docs.google.com/document/d/1UwTK-kDxqxLY_n60BEKM9sFfkVWsU_-VzGyMwa2_NdM/edit" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        MON CV
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/limamfilali" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/limam-el-filali-1013b819a/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
