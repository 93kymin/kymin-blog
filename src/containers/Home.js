import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "../Animate/Slider";

const Container = styled.div`
  text-align: center;
  margin: 10px 0;
  padding: 10px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`;
const Card = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 1.4rem;
  background: #b7bddb;
  a {
    color: #fff;
  }
  &:hover {
    background: #8b94b5;
    transition: all 0.35s;
  }
`;
const Home = () => {
  return (
    <Container>
      <h2>Home</h2>
      <p>리액트로 만든 사이트입니다.</p>
      <p>Portfolio에 다양한 포트폴리오 사이트가 있습니다.</p>
      <br />
      <Slider />
      <br />
      <h2>Front-end</h2>
      <br />
      <Grid>
        <Card>
          <Link to="/portfolio/1">
            <h3 className="card-header">REACT</h3>
          </Link>
        </Card>
        <Card>
          <Link to="/portfolio/3">
            <h3 className="card-header">REACT NATIVE</h3>
          </Link>
        </Card>
        <Card>
          <Link to="/">
            <h3 className="card-header">HTML CSS</h3>
          </Link>
        </Card>
        <Card>
          <Link to="/">
            <h3 className="card-header">JAVASCRIPT</h3>
          </Link>
        </Card>
      </Grid>
      <br />
      <br />
    </Container>
  );
};

export default Home;
