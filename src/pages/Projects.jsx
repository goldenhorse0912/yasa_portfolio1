import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import cardgame from "../assets/projects/cardgame.webp";
import cargame from "../assets/projects/cargame.webp";
import camping from "../assets/projects/camping.JPG";
import figma  from "../assets/projects/figma.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={camping}
              isBlog={false}
              title="Camping Intro Metaverse with WebGL"
              description="I have created a camping intro site using UNITY3D. 3D characters can visit a fictional campground and chat with each other using Mirror."
              ghLink="https://www.loom.com/share/4c4b0c60102e4bee99d2f4911322abe1?sid=57c7ffd1-1dba-485b-b655-3bfa724f5b11"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cardgame}
              isBlog={false}
              title="Games for mobile and Android (Android , IOS):"
              description="The Built-in Render Pipeline is Unity’s default render pipeline. It is a general-purpose render pipeline that has limited options for customization. "
              ghLink="https://www.loom.com/share/1431ccbc778f40c29f175e894b4a5249?sid=36c26611-978e-41ec-b5f7-808c77d51413"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cargame}
              isBlog={false}
              title="Education Backend / Frontend / mobile / IOS"
              description="Enhance your children's gaming experience with our educational voice pack! Packed with essential phrases, professionally recorded by a female voice artist. Ideal for educational children's games."
              ghLink="https://www.loom.com/share/73ee625b1b534ee3b8f6b011411e0686?sid=de076c87-9c63-4a4f-bea1-d1d48daafe4c"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={figma}
              isBlog={false}
              title="Wordpress UI UX Design & Development"
              description="hese samples represent just a fraction of my work. I'm passionate about creating designs that leave a lasting impression and drive results."
              ghLink="https://www.figma.com/design/ibKsiDH7A9a0rzTn3fSmuO/jewelry_GH?node-id=0-1&t=kLDM6COsnNrEaVpI-0"
              demoLink="https://www.figma.com/design/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=66-80438&t=s9KlUS0yJ7NTkUKw-0"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Post & Get a Job site"
              description="This site having Real-time communication via Pusher.com, Payment Getway Live Site (React.js - Next.js - Nest.js)"
              ghLink="https://github.com/yara0918/job-posting-theme.git"
              demoLink="https://job-posting-theme.vercel.app/ "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Marketing headline generator"
              description="Nero Boss was sent by Mysirous to Mongometic to Ben-Edom and to Ephesus to Bessie Ennis."
              ghLink="https://headling-generator.vercel.app/"
              demoLink="https://preben.rollebot.dk/"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects