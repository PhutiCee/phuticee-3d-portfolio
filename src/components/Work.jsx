import React, { useState } from 'react'
import styled from 'styled-components';
import WebDesign from './WebDesign';
import Animator from './Animator';
import MobileDeveloper from './MobileDeveloper';

const data = [
  "Web Design",
  "Product Design",
  "Mobile Developer",
  "Animator",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
        padding: 20px;
        justify-content: center;
    }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;

  @media only screen and (max-width: 768px) {
        font-size: 27px;
        color: white;
        -webkit-text-stroke: 0px;

        &:hover{
    
            animation: moveText 0.2s linear both;

            @keyframes moveText {
              to{
                color: blueviolet;
              }
            }

        }
    }

  &:hover{
    
      animation: moveText 0.2s linear both;

      @keyframes moveText {
        to{
          color: blueviolet;
        }
      }

  }
`;
const Right = styled.div`
  flex: 1;
`;

function Work() {
const [work, setWork] = useState("Web Design");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} $text={item} onClick={()=>setWork(item)}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (<WebDesign />) : work === "Product Design" ? ("hi") : work === "Mobile Developer" ? (<MobileDeveloper />) : (<Animator />)}
        </Right>
      </Container>
    </Section>
  )
}

export default Work