/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 MobilePhone.gltf --transform 
Files: MobilePhone.gltf [1.56MB] > MobilePhone-transformed.glb [123.04KB] (92%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/MobilePhone-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={materials.Tablet} />
      <mesh geometry={nodes.Cube001_1.geometry} material={materials.Logo2} />
      <mesh geometry={nodes.Cube001_2.geometry} material={materials.Button} />
      <mesh geometry={nodes.Cube001_3.geometry} material={materials.RedEmission} />
      <mesh geometry={nodes.Cube001_4.geometry} material={materials.Madara} />
    </group>
  )
}

useGLTF.preload('/MobilePhone-transformed.glb')
