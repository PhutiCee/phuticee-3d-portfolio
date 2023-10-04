import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Tablet from './3d models/Tablet'
import MyLoader from './MyLoader'
import styled from 'styled-components'

const Desc = styled.div`
  width: 200px;
  height: 85px;
  padding: 10px;
  background-color: white;
  position: absolute;
  top: 100px;
  right: 100px;
  color: #302c2c;
  border-radius: 5px;

  @media only screen and (max-width: 768px) {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
`;

function WebDesign() {
  return (
    <>
    <Canvas>
      <Stage environment={"city"} intensity={0.5}>
        <Suspense fallback={<MyLoader />}>
          <Tablet />
        </Suspense>
      </Stage>
      <OrbitControls enableZoom={true} autoRotate/>
    </Canvas>
    <Desc>
      I'm a Fullstack Web Developer using ReactJS and NextJS. I also used PHP. I have experince in UI/UX
    </Desc>
    </>
  )
}

export default WebDesign