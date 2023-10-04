import React, { Suspense } from 'react'
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import Cube from './3d models/Cube';
import { Canvas } from '@react-three/fiber';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 1200px;
  scroll-snap-align: center;
  display: flex; 
  justify-content: space-between;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
        font-size: 60px;
    }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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
`;

const Button = styled.button`
  background-color: #da4ea2;;
  color: white;
  padding: 10px;
  width: 150px; 
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const Left = styled.div`
  flex: 1;
  position: relative;

  @media only screen and (max-width: 768px) {
        display: none;
    }
`;

function About() {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas>
              <OrbitControls enableZoom={false} autoRotate/>
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>The Magic of Thinking Big!</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Who we are</Subtitle>
          </WhatWeDo>
          <Desc>A developer and a designer with passion for art</Desc>
          <Button>See our Services</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default About