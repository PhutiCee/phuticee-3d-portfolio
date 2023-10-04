import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Car from './3d models/Car'
import MyLoader from './MyLoader'
import styled from 'styled-components'

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
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

function Animator() {
  return (
    <>
    <Canvas>
      <Stage environment={"city"} intensity={0.5}>
        <Suspense fallback={<MyLoader />}>
          <Car />
        </Suspense>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
    <Desc>
      I'm a 3D artist using Blender to create models and animations with the the love of art and creativity
    </Desc>
    </>
  )
}

export default Animator