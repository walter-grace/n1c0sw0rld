/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";
import Encryption from "components/Animations/Encryption";
import Mac from "components/Mac/Mac";

// core components

function SectionTypography() {
  return (
    <>
      <Container className="tim-container">
        <Mac />
        <div className="title">
        </div>
        <div id="typography">
        </div>
        <br />
        <div id="images">
          <Container>
            <div className="title">
              <h3>Projects</h3>
            </div>
            <Row>
              <Col md="3" sm="6">
                <h4 className="images-title">Covid-19 Tracker</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/faces/covid.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                    <Button href="https://5e912fdd1694d9542da56b92--covid-19-data-tracker.netlify.app" color="info">Go</Button>                  
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <h4 className="images-title">3D Interactive Art</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/faces/3d.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                    <Button href="https://5ea205397961c5017e141544--vigilant-murdock-f4f29a.netlify.app" color="danger">Go</Button>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <h4 className="images-title">React Charts</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/faces/charts.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                  <Button href="https://5ea2720ac71c3d42d37e3274--quizzical-hugle-12e070.netlify.app" color="primary">Go</Button>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <h4 className="images-title">Book Club Blog</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/faces/book.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                    <Button href="https://barrington-book-club.netlify.app/" color="info">Go</Button>                  
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <h4 className="images-title">Mapbox</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/faces/spiderman.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                    <Button href="https://5ea206d4bd415301de9bfcd8--relaxed-jepsen-36d336.netlify.app" color='info'>Go</Button>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto ml-auto" md="3" sm="6">
                <h4 className="images-title">Google Colab GANs</h4>
                <p className="text-center">generative adversarial networks</p>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/faces/tweets.jpg")}
                />
              <Button href="https://colab.research.google.com/drive/1706ToQrkIZshRSJSHvZ1RuCiM__YX3Bz" color="info">Go</Button>
              </Col>
              <Col className="mr-auto" md="3" sm="6">
                <h4 className="images-title">Crypt0</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/faces/exchange.jpg")}
                />
                <Button href="https://00crypto00.netlify.app/" color="info">Go</Button>
              </Col>
              <Col className="mr-auto" md="3" sm="6">
                <h4 className="images-title">Interactive Books</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/capitalandidea.png")}
                />
                <Button href="https://interact1vebook.netlify.app/" color="info">Go</Button>
              </Col>
              <Col className="mr-auto" md="3" sm="6">
                <h4 className="images-title">Draggable List</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/list.jpg")}
                />
                <Button href="https://nighttab.netlify.app/" color="info">Go</Button>
              </Col>
              <Col className="mr-auto" md="3" sm="6">
                <h4 className="images-title">IP Finder</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/ip.png")}
                />
                <Button href="https://5f5682a372c9456e2df323c6--gracious-archimedes-4f1932.netlify.app" color="info">Go</Button>
              </Col>
            </Row>
            <br/>
          </Container>
        <Encryption />
        </div>
        <br/>
        <hr/>
      </Container>
    </>
  );
}

export default SectionTypography;
