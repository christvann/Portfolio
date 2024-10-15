import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Coins = ({ isMobile }) => {
  const coin = useGLTF("/gold_coin/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={0.3} groundColor="black" />
      <ambientLight intensity={0.2} />
      <pointLight intensity={1} position={[0, 5, 5]} />
      <spotLight intensity={5} angle={0.3} penumbra={1} position={[5, 10, 10]} castShadow color="#ffd700" />
      <directionalLight intensity={5} position={[-5, -3, 10]} color="#ffffff" castShadow />
      <primitive object={coin.scene} scale={0.11} position={[0, -1.8, 0]} rotation={[0, Math.PI + 0.9, 0]} />
    </mesh>
  );
};

const CoinsCanvas = () => {
  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 2, 5], fov: 35 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Coins />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CoinsCanvas;
