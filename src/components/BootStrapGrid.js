import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import BusinessIcon from "@material-ui/icons/Business";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import Button from '@material-ui/core/Button';
import "./boot.css";

export default function BootStrapGrid() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={9}>
            <Row>
              <Col xs={6}>
                <div className="orienLeft">
                  <HomeWorkIcon
                    style={{ fontSize: "100px", color: "#035efc" }}
                  />
                  <h3>Large Beautiful Office</h3>
                  <p className="parag">
                    Enjoy a comfortable office envoirnment with<br></br> the
                    most modern and stylish furnishing
                  </p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="orienLeft">
                  <BusinessIcon
                    style={{ fontSize: "100px", color: "#035efc" }}
                  />
                  <h3>Large Beautiful Office</h3>
                  <p className="parag">
                    Enjoy a comfortable office envoirnment with<br></br> the
                    most modern and stylish furnishing
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <div className="orienLeft">
                  <LocationOnIcon
                    style={{ fontSize: "100px", color: "#035efc" }}
                  />
                  <h3>Large Beautiful Office</h3>
                  <p className="parag">
                    Enjoy a comfortable office envoirnment with<br></br> the
                    most modern and stylish furnishing
                  </p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="orienLeft">
                  <CastForEducationIcon
                    style={{ fontSize: "100px", color: "#035efc" }}
                  />
                  <h3>Large Beautiful Office</h3>
                  <p className="parag">
                    Enjoy a comfortable office envoirnment with<br></br> the
                    most modern and stylish furnishing
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <div className="orienLeft">
                  <LocalBarIcon
                    style={{ fontSize: "100px", color: "#035efc" }}
                  />
                  <h3>Large Beautiful Office</h3>
                  <p className="parag">
                    Enjoy a comfortable office envoirnment with<br></br> the
                    most modern and stylish furnishing
                  </p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="orienLeft">
                  <OpenInBrowserIcon
                    style={{ fontSize: "100px", color: "#035efc" }}
                  />
                  <h3>Large Beautiful Office</h3>
                  <p className="parag">
                    Enjoy a comfortable office envoirnment with<br></br> the
                    most modern and stylish furnishing
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={3}>
            <div className="orientRight">
              <h3>
                <span style={{ color: "#040d75" }}>Your Life AT</span>{" "}
                <span style={{ color: "#035efc" }}>TechloSET</span>
              </h3>
              <p className="parag">
                At TechloSet we believe in working together and working hard.
              </p>
              <p className="parag">
                With Over 800,00 happy clients, we are looking for dynamic and{" "}
                <br></br> creative individuals who are willing to dedicate
                themselves to <br></br>providing innovative products and
                services of our clients.
              </p>
              <br></br>
              <br></br>
              <p className="parag">
                Besides getting the oppertunity to unlock your true potential,at
                <br></br>TechloSet you can also network with some of the most
                talented<br></br>people in the industry,go on annual picnics
                outside the country<br></br> and enjoy many other benefits by
                working with us
              </p>
              <Button variant="outlined" color="primary" style={{borderRadius:"35px",fontWeight:"bold",fontSize:"20px",color:"white",border:"3px solid white",paddingLeft:"20px",backgroundColor:"blue"}}>
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
