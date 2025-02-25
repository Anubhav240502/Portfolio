import { Col, Container ,Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../components/assets/img/header-img.svg'
import { useEffect, useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import isVisible from '@testing-library/user-event/dist/utils';


export const Banner = ()=>{
    const toRotate = ["Web Developer" , "Web Designer" , "UI/UX Designer"];
    const[loopNum , setLoopNum] = useState(0);
    const[isDeleting , setIsDeleting] = useState(false);
    const[text , setText] = useState('');
    const[delta , setDelta] = useState(300 - Math.random()*100)
    const period = 2000;

    useEffect(()=>{
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () =>{ clearInterval(ticker)};
    },[text]);

    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1 ): fullText.substring(0,text.length + 1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta =>prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({isVisible})=>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi I'm Anubhav Sonkar `}<span className="wrap">{text}</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam doloremque in recusandae, ea cum inventore iure, tempore maxime sed reiciendis distinctio repudiandae quia culpa modi nobis velit amet nostrum voluptate soluta consequuntur vero.</p>
                <button onClick={()=> console.log('connect')}> Let's Connect <ArrowRightCircle size={25}/></button>
                </div>}
                </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
        </section>
    );
}