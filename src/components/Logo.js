import React from "react";
import styled from "styled-components";

const LogoStyled = styled.div`
  img {
    min-width: 100%;
    max-height: 400px;
  }
`;

const Logo = () => {
  return (
    <LogoStyled>
      <img src={require("../assets/img/Logo.png")} />
    </LogoStyled>
  );
};

export default Logo;
