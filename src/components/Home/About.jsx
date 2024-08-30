import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineSkype,
  AiOutlineWhatsApp,
  AiFillSlackCircle
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="purple"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                <span className="red">❤ </span>Hello. <span className="yellow"><b>Yaroslav Temchenko</b> </span> I am a professional <span className="green">Game developer</span> and <span className="green">Web designer</span><span className="red"> ❤</span>
                <br />
                <br />
                I will exceed your expectations
                <br />
                <br />
                With 7 years of experience in game design/development for global businesses and simple and smart website design, I can give you the <span className="green">Best Results</span>  you want.
                  <br />
                  <br />
                  You can't create a perfect game, mesmerizing website if you have limited technical skills and I am sure my skills are not.
                  <br />
                  <br />
                  I have expertise in figma design, 3D models, environments, plugins, animations, textures and free assets like sprites, sound effects and music, which can <span className="green">save you a lot of time and money</span> .
                  <br />
                  <br/>
                  <br/>
                  <br/>
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/yara0918"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://join.skype.com/invite/yznxQVdrtkLo"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="telegram"
                    >
                      <AiOutlineSkype />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://wa.me/380997065108"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <AiOutlineWhatsApp />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://join.slack.com/t/newworkspace-wsq4202/shared_invite/zt-2pno4dosw-3_J6p~JWdOkhYjPUezwQww"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillSlackCircle />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About