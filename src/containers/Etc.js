import React from "react";
import styled from "styled-components";

const Container = styled.div`
  justify-content: center;
  align-content: center;
  text-align: center;

  margin: 25px 0;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  p {
    padding: 5px;
  }
  img {
    max-width: 300px;
  }
  h3 {
    color: #6c6c6c;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
const Etc = () => {
  return (
    <Container>
      <h2>Etc..</h2>
      <Grid>
        <div>
          <h3>Todo!</h3>
          <img src={require("../assets/img/etc02.jpg")} />
          <br />
          <a href="https://kymin-todo.web.app" target="_blank">
            https://kymin-todo.web.app
          </a>
          <p>Fireabase에 데이터를 실시간으로 연동되는 Todo App입니다.</p>
        </div>

        <div>
          <h3>Tab Music</h3>
          <img src={require("../assets/img/etc.jpg")} />
          <br />
          <a href="https://93kymin.github.io/music-tab/" target="_blank">
            https://93kymin.github.io/music-tab/
          </a>
          <p>Javascript로 만들었습니다.</p>
        </div>

        <div>
          <h3>제목</h3>
          <img src={require("../assets/img/etc1.jpg")} />
          <br />
          <a href="#" target="_blank">
            링크
          </a>
        </div>

        <div>
          <h3>제목</h3>
          <img src={require("../assets/img/etc2.jpg")} />
          <br />
          <a href="#" target="_blank">
            링크
          </a>
        </div>
      </Grid>
    </Container>
  );
};

export default Etc;
