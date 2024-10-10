import {Container,Nav,Row,Col,Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "./assets/img/color-sharp2.png"
import projImg1 from '../components/assets/img/project-img1.png'
import projImg2 from '../components/assets/img/project-img2.png'
import projImg3 from '../components/assets/img/project-img3.png'
import TrackVisibility from "react-on-screen";
import 'animate.css' ;

export const Projects = ()=>{
    const projects = [
       {
        title:"Buisness Startup",
        description:"Design & Developement",
        imgUrl: projImg1,
       },
       {
        title:"Buisness Startup",
        description:"Design & Developement",
        imgUrl: projImg2,
       },
       {
        title:"Buisness Startup",
        description:"Design & Developement",
        imgUrl: projImg3,
       },
       {
        title:"Buisness Startup",
        description:"Design & Developement",
        imgUrl: projImg1,
       },
       {
        title:"Buisness Startup",
        description:"Design & Developement",
        imgUrl: projImg2,
       },
       {
        title:"Buisness Startup",
        description:"Design & Developement",
        imgUrl: projImg3,
       }  
    ];
    return(
    <section className="project" id="projects">
    <Container>
        <Row>
            <Col size={12}>
            <TrackVisibility>
            {({ isVisible })=>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas doloribus explicabo quam, voluptatibus ab delectus harum? Quasi vel aperiam nostrum numquam tenetur ipsam minus placeat nobis quam. Sit, facere.</p>
            
            
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
               <Nav.Item>
                 <Nav.Link eventKey="first">Tab One</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link eventKey="second">Tab Two</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link eventKey="third">Tab Three</Nav.Link>
               </Nav.Item>
            </Nav>
           
            <Tab.Content id='slideInUp' className={isVisible ? "animate__animated animate__slideInUp" : ""}>
            <Tab.Pane eventKey="first">
            <Row>
                {
                    projects.map((project,index)=>{
                        return( 
                            <ProjectCard key={index} {...project}/>
                        )
                    })
                }
            </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="section">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quos incidunt, exercitationem temporibus a cum</p>
            </Tab.Pane>
            <Tab.Pane eventKey='third'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur porro assumenda sed aliquid a voluptas, similique eveniet facilis non.</p>
            </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
            </div>} 
            </TrackVisibility> 
            
            </Col>
        </Row>
    </Container>
    <img className="background-image-right"  src={colorSharp2} alt=""></img>
    </section>);
}