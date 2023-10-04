import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

function Cube() {
    const textRef = useRef()
    const { viewport } = useThree();
    useFrame(state=>(textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))

    const aspect = viewport.width / viewport.height;

    const cubeSize = 2 * aspect;
    
    return (
        <mesh>
            <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 2]} />
                    <color attach="background" args={["pink"]} />
                    <Text ref={textRef} fontSize={0.5} color={"#555"}>
                       CodeTechX
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube