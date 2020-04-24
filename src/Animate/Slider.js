import React, { useState } from "react";
import styled from "styled-components";
import SliderImg from "../Animate/SliderImg";
import i1 from "../assets/pics/1.jpg";
import i2 from "../assets/pics/2.jpg";
import i3 from "../assets/pics/3.jpg";
import i4 from "../assets/pics/4.jpg";

const SlideStyled = styled.div`
  .slider {
    position: relative;
    width: 100%;
    max-height: 550px;
    box-sizing: border-box;
    margin: 10px 0;
    padding: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    i {
      color: white;
      font-size: 2vw;
    }
  }
  .slide {
    min-width: 100%;
    transition: 0.5s;
    overflow: hidden;
  }
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50vw;
    background: none;
    border: none;
    outline: none;
    transition: 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }
  #goLeft {
    left: 0;
  }
  #goRight {
    right: 0;
  }
`;

function Slider() {
  let sliderArr = [
    <SliderImg src={i1} />,
    <SliderImg src={i2} />,
    <SliderImg src={i3} />,
    <SliderImg src={i4} />
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <SlideStyled>
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
        <button id="goLeft" onClick={goLeft}>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button id="goRight" onClick={goRight}>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </SlideStyled>
  );
}
export default Slider;
