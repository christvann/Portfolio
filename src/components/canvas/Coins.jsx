import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Coins = () => {
  const coin = useGLTF("/gold_coin/scene.gltf");
  const coinRef = useRef();

  useFrame(() => {
    if (coinRef.current) {
      coinRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={coinRef} scale={0.016}>
      <ambientLight intensity={0.3} groundColor="black" />
      <ambientLight intensity={0.2} />
      <pointLight intensity={1} position={[0, 5, 5]} />
      <spotLight intensity={5} angle={0.3} penumbra={1} position={[5, 10, 10]} castShadow color="#ffd700" />
      <directionalLight intensity={5} position={[-5, -3, 10]} color="#ffffff" castShadow />
      <primitive object={coin.scene} position={[1, -18, 0]} />
    </mesh>
  );
};

const CoinsCanvas = () => {
  return (
    <Canvas frameloop="always" shadows camera={{ position: [0, 0, 3], fov: 35 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <Coins />
        <OrbitControls enableZoom={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CoinsCanvas;
