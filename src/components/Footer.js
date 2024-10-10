import { Container,Row,Col} from "react-bootstrap"
import {MailchimpForm} from './MailChimpForm'
import logo from './assets/img/logo.svg'
import navIcon1 from './assets/img/nav-icon1.svg'
import navIcon2 from './assets/img/nav-icon2.svg'
import navIcon3 from './assets/img/nav-icon3.svg'

export const Footer = ()=>{
  return(
    <footer className="footer" >
      <Container>
        <Row className='align-item-center'>
          <MailchimpForm/>
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/anubhav-sonkar-93762122b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon1} /></a>
            <a href="https://www.facebook.com/profile.php?id=100079561038653"><img src={navIcon2} /></a>
            <a href="https://www.instagram.com/_anubhav__24?igsh=MWh0eWJmMWdkNW1xYg=="><img src={navIcon3} /></a>
          </div>
          <p>CopyRight 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}