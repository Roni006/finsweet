import React from 'react'
import Container from '../Container'
import logo from "../../../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <section>
        <Container>
          <div>
            <div>
              <img src={logo} alt="logo icon" /> 
            </div>
            <div></div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Footer