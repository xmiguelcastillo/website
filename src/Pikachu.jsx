import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pikachu(props) {
  const { nodes, materials } = useGLTF("/Pikachu.glb");
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.pm0025_00_pikachu} />
      <skinnedMesh
        geometry={nodes.PikachuM_1.geometry}
        material={materials.Material__160}
        skeleton={nodes.PikachuM_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.PikachuM_2.geometry}
        material={materials.Material__161}
        skeleton={nodes.PikachuM_2.skeleton}
      />
      <skinnedMesh
        geometry={nodes.PikachuM_3.geometry}
        material={materials.Material__162}
        skeleton={nodes.PikachuM_3.skeleton}
      />
      <skinnedMesh
        geometry={nodes.PikachuM_4.geometry}
        material={materials.Material__163}
        skeleton={nodes.PikachuM_4.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/Pikachu.glb");
