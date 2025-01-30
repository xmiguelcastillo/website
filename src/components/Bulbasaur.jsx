import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bulbasaur(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Bulbasaur.glb`,
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.684}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2001.geometry}
          material={materials["Material__10.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2001_1.geometry}
          material={materials["Material__11.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2001_2.geometry}
          material={materials["Material__12.007"]}
        />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0094_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0096_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0100_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0101_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0104_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0105_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.501}>
        <primitive object={nodes.pm0113_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0115_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0116_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.373}>
        <primitive object={nodes.pm0126_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0127_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0133_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0134_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0135_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0136_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0142_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0143_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0035_00} />
      </group>
      <primitive object={nodes.Waist_9} />
      <primitive object={nodes.pm0150_00} />
      <primitive object={nodes.pm0151_00} />
    </group>
  );
}
useGLTF.preload(`${import.meta.env.BASE_URL}Bulbasaur.glb`); // Adjusted path for preloading
