import { useEffect , useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../components/assets/img/logo.svg'
import navIcon1 from '../components/assets/img/nav-icon1.svg'
import navIcon2 from '../components/assets/img/nav-icon2.svg'
import navIcon3 from '../components/assets/img/nav-icon3.svg'
import {HashLink} from 'react-router-hash-link';
import {
    BrowserRouter as Router } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
export const NavBar = ()=>{
    const[activeLink , setActiveLink] = useState('home');
    const[scrolled , SetScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY > 50){
                SetScrolled(true);
            }
            else{
                SetScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);
        return () => window.addEventListener('scroll',onScroll);
    },[]);
    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }
     return(
        <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" :""}>
        <Container>
          <Navbar.Brand href="/"> <img src={Logo} alt="LOGO" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"   ><span className='navbar-toggler-icon'></span></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ?"active navbar-link":"navbar-link"} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ?"active navbar-link":"navbar-link"} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ?"active navbar-link":"navbar-link"} onClick={()=>(onUpdateActiveLink('projects'))}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/anubhav-sonkar-93762122b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon1} alt="" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100079561038653"><img src={navIcon2} alt="" /></a>
                    <a href="https://www.instagram.com/_anubhav__24?igsh=MWh0eWJmMWdkNW1xYg=="><img src={navIcon3} alt="" /></a>
                </div>
                <HashLink to="#connect">
                <button className='vvd'> <span>Let's connect</span> </button>
                 </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Router>
    
     );
}