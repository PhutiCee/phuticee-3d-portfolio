import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100%;
  width: 1200px;
  scroll-snap-align: center;
  display: flex; 
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
        z-index: 1;
    }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
  width: 50px;
  border-radius: 10px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
        padding: 20px;
        text-align: center;
    }
`;

const Button = styled.button`
  background-color: #da4ea2;;
  color: white;
  padding: 10px;
  width: 100px; 
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
        flex: 1;
        width: 100%;
        position: absolute;
        top: 190px;
    }
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 1.5s infinite  ease alternate;

  @media only screen and (max-width: 768px) {
        width: 350px;
        height: 350px;
        opacity: 0.5;
    }

  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }
`;
const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 768px) {
        display: none;
    }
`;

function Hero() {
  return (
    <Section>
      <NavBar />
      <Container>
        <Left>
          <Title>Ask, Believe, Receive</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Desc>We enjoy creating delightful, human centered digital experiences.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <CanvasContainer>
            <Canvas >
              <OrbitControls enableZoom={false} autoRotate />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.6} >
                <MeshDistortMaterial color="#734696" attach="material" distort={0.5} speed={2} />
              </Sphere>

            </Canvas>
          </CanvasContainer>

          <Img src="./img/PhutiCar.png" />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero