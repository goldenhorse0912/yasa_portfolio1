import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import V_education from "../assets/projects/education.png";
import N_NCardGame from "../assets/projects/cardGame.png";
import V_BikeGame from "../assets/projects/bikegame.png";
import V_CarGame from "../assets/projects/cargame.png";
import V_Fighting from "../assets/projects/fighting.png";
import JP from "../assets/projects/JP.png";
import restrance_figma from "../assets/projects/restrance_figma.png";
import Simple_LP from "../assets/projects/Simple_LP.png";
import Cloth_LP from "../assets/projects/Cloth_LP.png";
import Trading_LP from "../assets/projects/trading.png";
import Cripto from "../assets/projects/Cripto.png";
import editor_LP from "../assets/projects/editor_LP.jpg";
import mobile_LP from "../assets/projects/mobile_LP.png";
import phone_page from "../assets/projects/phone_page.png"
import Trader from "../assets/projects/Trader.png";
import tradingview_chart from "../assets/projects/tradingview_chart.png";
import trader_quantao from "../assets/projects/trader_quantao.png";
import preben from "../assets/projects/preben.png";
import headline from "../assets/projects/headline.png";
import jobposting from "../assets/projects/jobposting.png";
import CarteTheBlanche from "../assets/projects/CarteTheBlanche.png";
import ionic from "../assets/projects/ionic.png";
import webGL from "../assets/projects/webGL.png";
import V_camping from "../assets/projects/camping.png";
import vivid from "../assets/projects/vivid.png";
import villia from "../assets/projects/villia.png";
import restrance from "../assets/projects/restrance.png";

import { CgWebsite } from "react-icons/cg";
import { FaAlgolia } from "react-icons/fa";
import { AiFillPayCircle } from "react-icons/ai";

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
        <h4 style={{ color: "white" , textAlign:'left' ,marginLeft:"20px"}}>- &nbsp;
        <CgWebsite />  Untiy <strong className="yellow">Works </strong>
        </h4>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={V_camping}
              isBlog={false}
              title="Camping Intro Metaverse with WebGL"
              description="I have created a camping intro site using UNITY3D. 3D characters can visit a fictional campground and chat with each other using Mirror."
              ghLink="https://www.loom.com/share/a0f2ca4184894488a5cd4e0e01de8c31?sid=f2c9a91e-f752-42ff-b6a2-cbc8f04ac8fc"

            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={N_NCardGame}
              isBlog={false}
              title="Multiplayer Cardgame (Android , IOS):"
              description="I designed the cards and UI and used Unity's networking or mirror for multiplayer. Implemented game logic and turn management and tested thoroughly before deployment. "
              ghLink="https://www.loom.com/share/1d4c44c1d5744702bc70dda894d09a8c?sid=fbb02753-9698-43e8-94f3-d3d6fe6d3d1b"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={V_education}
              isBlog={false}
              title="Education Backend / Frontend / mobile / IOS"
              description="Enhance your children's gaming experience with our educational voice pack! Packed with essential phrases, professionally recorded by a female voice artist. Ideal for educational children's games."
              ghLink="https://www.loom.com/share/5cdacc385cc24e158d67d60e01d7ebde?sid=55cd7632-751d-443c-84e2-427fa17a1800"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={V_BikeGame}
              isBlog={false}
              title="Mega Ramp Bike stunt Video"
              ghLink="https://www.loom.com/share/301994ecc2d64846a44da14f0ef935bb?sid=55ad3211-445a-4629-a262-b994f5136585"
              description="This package is designed for developers seeking an engaging and responsive arcade-style bike simulation experience in Unity. It offers extensive customization options, making it suitable for a wide range of racing and simulation games."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={V_CarGame}
              isBlog={false}
              title="Driving Simulator"
              ghLink="https://www.loom.com/share/15c0d62519864f94932e7612a4ba62f6?sid=e230042e-448c-45b3-b4f4-8bf0b7f0dd53"
              description="City Car Driving Simulator is an objective (mission) based driving game. Players are able to take a free ride and complete the various objectives such as races, pursuits, checkpoints, and trailblazers. "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={V_Fighting}
              isBlog={false}
              title="Fighting Game"
              description="Master game audio with our FX library. Get Mortal Kombat-style effects, karate vocals, and royalty-free music loops. Perfect for intense combat scenes and precise sound design. Elevate your projects now!"
            
              ghLink="https://www.loom.com/share/ff399cce07814947a198aaebb5934bf9?sid=10eb7ad1-af6d-48ab-ab27-3ee73b654261"
            />
          </Col>

        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h4 style={{ color: "white" , textAlign:'left' ,marginLeft:"20px"}}>- &nbsp;
        <CgWebsite />  Figma <strong className="yellow">Works </strong>
        </h4>
           
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JP}
              isBlog={false}
              title="Design a seamless WordPress UI/UX"
              description="Design and develop a seamless WordPress UI/UX. Focus on user-friendly navigation, responsive layouts, and aesthetic appeal. Ensure intuitive, engaging, and mobile-optimized experiences for all users."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=174-46871&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down-width&content-scaling=fixed&page-id=174%3A46868&starting-point-node-id=174%3A54271"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restrance_figma}
              isBlog={false}
              title="Restaurant LP Design"
              description="We prioritized clean visuals, intuitive navigation, and mobile responsiveness. We highlighted the menu, reviews, and reservations in an attractive and user-friendly layout."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=174-62969&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down-width&content-scaling=fixed&page-id=174%3A58568"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Simple_LP}
              isBlog={false}
              title="Simple LP Design"
              description="Create simple Figma designs with clean layouts, minimal colors, and easy-to-read fonts. Focus on intuitive navigation and responsive elements to ensure a seamless user experience across all devices."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=174-80621&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down-width&content-scaling=fixed&page-id=174%3A67462"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cloth_LP}
              isBlog={false}
              title="Cloth Shop Design"
              description="Design a clothing store in Pygma with a sleek, minimalist layout. Highlight key products, categories, and promotions. "
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=174-78264&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down-width&content-scaling=fixed&page-id=174%3A78263"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Trading_LP}
              isBlog={false}
              title="Trading platform design "
              description="We created a design for Figma's trading platform with a clear and intuitive interface. We used a clean, organized layout with minimal distractions to improve user focus and decision-making."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=4-139908&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down-width&content-scaling=fixed&page-id=4%3A139906"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cripto}
              isBlog={false}
              title="Designing a cryptocurrency store "
              description="We designed a cryptocurrency store on Figma with a modern and secure interface. We used a clean, intuitive layout and easy navigation to create a seamless shopping experience in the crypto space."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=4-101005&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down-width&content-scaling=fixed&page-id=4%3A39383"

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor_LP}
              isBlog={false}
              title="Designing a seamless editing experience"
              description="Focused on user-friendly text and code editing features, customizable toolbars, and easy navigation. "
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=3-39704&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=min-zoom&content-scaling=fixed&page-id=3%3A28473"

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobile_LP}
              isBlog={false}
              title="Creating mobile designs"
              description="Focused on simplicity, clear typography, and streamlined user flows to enhance the mobile user experience."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=2-31693&node-type=CANVAS&t=iwe2CHRdcSkzZoil-0&scaling=min-zoom&content-scaling=fixed&page-id=2%3A30079"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phone_page}
              isBlog={false}
              title="Designing a clean shopping app for mobile phones"
              description="Featured large images, easy navigation, and simple checkout processes. Prioritized touch-friendly elements and responsive design for a smooth mobile shopping experience."
              ghLink="https://www.figma.com/proto/QF0d9bsjU8W8wkIavb75s6/TOTAL_DESIGN?node-id=90-69298&node-type=FRAME&t=iwe2CHRdcSkzZoil-0&scaling=scale-down&content-scaling=fixed&page-id=89%3A69247&starting-point-node-id=90%3A69298"

            />
          </Col>

        </Row>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h4 style={{ color: "white" , textAlign:'left' ,marginLeft:"20px"}}>- &nbsp;
        <CgWebsite />  Trade <strong className="yellow">Works </strong>
        </h4>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Trader}
              isBlog={false}
               title="Real-time Data streaming for trading, stock, market data"
              description="Integrate lightstreamer for react-time data streaming. Integrate AmChart for analyzing of stock and market data. Integrate OAuth of Azure"
              ghLink="https://www.loom.com/share/074d1c81d80a411aba44b5124dc86a1b?sid=8f44a100-884b-44f0-896e-5d20a9a1a04f"
           
           />
         
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={trader_quantao}
              isBlog={false}
              title="Quantao tranding MUI"
              description="Include features like real-time trading data, secure transaction options, and clear navigation. "
              ghLink="https://sharp-trade.vercel.app/"

            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={tradingview_chart}
              isBlog={false}
              title="Integration of Tradingview chart library"
              description="Implement Ag-Gird for table management, and react-native-statics-server and react-native-webview for the mobile version."
              ghLink=""

            />
          </Col>


          <h4 style={{ color: "white" , textAlign:'left' ,marginLeft:"20px"}}>- &nbsp;
        <FaAlgolia />  AI <strong className="yellow">Works </strong>
        </h4>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={headline}
              isBlog={false}
               title="Headline Generate"
              description="Create compelling and impactful headlines. Our headline generator creates headlines that are eye-catching and convey the essence of your product. "
              ghLink="https://headling-generator.vercel.app/"
           
           />
         
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={preben}
              isBlog={false}
              title="Discover Yourself: The Power of Self-Questioning"
              description="Understanding yourself is the key to personal and professional growth. By asking insightful questions, you can uncover your goals, preferences, and areas for improvement."
              ghLink="https://preben.rollebot.dk/"

            />
          </Col>
          <Col md={4} className="project-card">
         
          </Col>



          <h4 style={{ color: "white" , textAlign:'left' ,marginLeft:"20px"}}>- &nbsp;
        <AiFillPayCircle />  Payment <strong className="yellow">Works </strong>
        </h4>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobposting}
              isBlog={false}
               title="Post & Get a Job site"
              description="Post & Get a Job site having Real-time communication via Pusher.com, Payment Getway"
              ghLink="https://job-posting-theme.vercel.app/ "
           
           />
         
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={CarteTheBlanche}
              isBlog={false}
              title="Take the next step to become financial free"
              description="Whether you're entering new markets or aiming to expand market share, we provide strategies and insights to drive sustainable growth."
              ghLink="https://aslan-react-strip.vercel.app/"

            />
          </Col>
          <Col md={4} className="project-card"></Col>
       
          

        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h4 style={{ color: "white" , textAlign:'left' ,marginLeft:"20px"}}>- &nbsp;
        <CgWebsite />  WebGL <strong className="yellow">Works </strong>
        </h4>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ionic}
              isBlog={false}
               title="Generate aniamtion book"
              description=" Fully responsive Unity WebGL WordPress integration plugin with template fallback implementation."
              ghLink="https://www.udoido.com"
           
           />
         
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={V_camping}
              isBlog={false}
              title="Camping Intro Metaverse with WebGL"
              description="I have created a camping intro site using UNITY3D. 3D characters can visit a fictional campground and chat with each other using Mirror."
              ghLink="https://www.loom.com/share/a0f2ca4184894488a5cd4e0e01de8c31?sid=f2c9a91e-f752-42ff-b6a2-cbc8f04ac8fc"

            />

          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={webGL}
              isBlog={false}
              title="Integration of Tradingview chart library"
              description="Implement Ag-Gird for table management, and react-native-statics-server and react-native-webview for the mobile version."
              ghLink="https://studio.foriero.com/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vivid}
              isBlog={false}
              title="VIVID Tours"
              description="The project showcases the best wine tour operators in Kelowna and the Okanagan Valley, offering tours of British Columbia's most iconic wineries, including
"
              ghLink="https://vivid.tours/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={villia}
              isBlog={false}
              title="La Compagnie des Aventuriers"
              description="Introducing a project where you can learn proper behavior, know-how, and interpersonal skills in the great outdoors."
              ghLink="https://compagnie-aventuriers.fr/"

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restrance}
              isBlog={false}
              title="Rotisserie Chicken Guarantee"
              description="This project showcases Boston Market's passion for serving the most delicious and mouthwatering chicken dishes. "
              ghLink="https://www.bostonmarket.com/"

            />
          </Col>

        </Row>


      </Container>
    </Container>
  )
}

export default Projects