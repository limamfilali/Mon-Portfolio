import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center"><u>LES STAGES TECHNIQUES</u></Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Durant 3 ans d'étude</strong>
                    <br />
                    <strong><u>Juillet 2018:</u></strong>  1 mois de stage au sein de <strong> OCP Group
LAAYOUNE Service Informatique</strong>
                    <br />
                    <strong><u>Avril-Mai 2019 :</u> </strong> 2 mois de stage à <strong>l’agence urbaine Laayoune
Sakia Hamra Service Informatique</strong> 
                    <br />
                   
                    <strong><u>Avril-Mai 2020:</u></strong>  2 mois de stage à distant au sein de<strong> OCP
Group LAAYOUNE Service Informatique</strong>
<br />
<strong>Technologies:</strong> php,html,css,laravel,javascript,ajax,laravel, and MySQL
                    <br />
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
