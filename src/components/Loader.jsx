import React from 'react';
import styled, {keyframes} from 'styled-components';

const fadeAway = keyframes`
  0% { opacity: 0; }
  39% { opacity: 0; }
  40% { opacity: 1; } 
  100% { opacity: 0; }
`;

const SkFadingCircle = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;

  > div {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    &:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: ${props => props.theme.secondaryColor};
      border-radius: 100%;
    }
  }
`;

const SkCircle1 = styled.div`
  &:before {
    animation: ${fadeAway} 1.2s ease-in-out infinite both;
  }
`;

const SkCircle2 = styled.div`
  transform: rotate(30deg);

  &:before {
    animation: ${fadeAway} 1.2s ease-in-out infinite both;
    animation-delay: -1.1s;
  }
`;

const SkCircle3 = styled.div`
  transform: rotate(60deg);

  &:before {
    animation: ${fadeAway} 1.2s ease-in-out infinite both;
    animation-delay: -1s;
  }
`;

const SkCircle4 = styled.div`
  transform: rotate(90deg);

  &:before {
    animation: ${fadeAway} 1.2s ease-in-out infinite both;
    animation-delay: -0.9s;
  }
`;

const SkCircle5 = styled.div`
  transform: rotate(120deg);

  &:before {
    animation: ${fadeAway} 1.2s ease-in-out infinite both;
    animation-delay: -0.8s;
  }
`;

const SkCircle6 = styled.div`
  transform: rotate(150deg);

  &:before {
    animation: ${fadeAway} 1.2s ease-in-out infinite both;
    animation-delay: -0.7s;
  }
`;

const SkCircle7 = styled.div`
  transform: rotate(180deg);

  &:before {
    animation: ${fadeAway} 1.2s ease-in-out infinite both;
    animation-delay: -0.6s;
  }
`;

const SkCircle8 = styled.div`
  transform: rotate(210deg);

  &:before {
    animation: ${fadeAway} 1.2s ease-in-out infinite both;
    animation-delay: -0.5s;
  }
`;

const SkCircle9 = styled.div`
  transform: rotate(240deg);

  &:before {
    animation: ${fadeAway} 1.2s ease-in-out infinite both;
    animation-delay: -0.4s;
  }
`;

const SkCircle10 = styled.div`
  transform: rotate(270deg);

  &:before {
    animation: ${fadeAway} 1.2s ease-in-out infinite both;
    animation-delay: -0.3s;
  }
`;

const SkCircle11 = styled.div`
  transform: rotate(300deg);

  &:before {
    animation: ${fadeAway} 1.2s ease-in-out infinite both;
    animation-delay: -0.2s;
  }
`;

const SkCircle12 = styled.div`
  transform: rotate(330deg);

  &:before {
    animation: ${fadeAway} 1.2s ease-in-out infinite both;
    animation-delay: -0.1s;
  }
`;

const Loader = () => (
  <SkFadingCircle>
    <SkCircle1 />
    <SkCircle2 />
    <SkCircle3 />
    <SkCircle4 />
    <SkCircle5 />
    <SkCircle6 />
    <SkCircle7 />
    <SkCircle8 />
    <SkCircle9 />
    <SkCircle10 />
    <SkCircle11 />
    <SkCircle12 />
  </SkFadingCircle>
);

export default Loader;
