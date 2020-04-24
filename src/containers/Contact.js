import React from "react";
import styled from "styled-components";
import Test from "../components/Test";

const Container = styled.div`
  text-align: center;
  margin: 25px 0;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  img {
    max-height: 300px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <h2>Contact</h2>
      <img src={require("../assets/img/contact.jpg")} />
      <br />
      <h3>E-mail : 93kymins@gmail.com</h3>
      <br />
      <br />
      <br />
      <Test />
    </Container>
  );
};

export default Contact;
