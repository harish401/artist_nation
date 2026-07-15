'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function StageModel() {
  const groupRef = useRef<THREE.Group>(null);
  const audience = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => {
        const angle = (index / 34) * Math.PI * 2;
        const radius = 2.2 + (index % 4) * 0.18;
        return {
          x: Math.cos(angle) * radius,
          z: Math.sin(angle) * radius * 0.55 + 0.9,
          scale: 0.05 + (index % 3) * 0.012,
        };
      }),
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.32) * 0.13;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.025;
  });

  return (
    <group ref={groupRef} rotation={[0.35, -0.45, 0]} position={[0, -0.28, 0]} scale={1.28}>
      <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.16}>
        <mesh position={[0, -0.04, 0]} receiveShadow>
          <boxGeometry args={[3.7, 0.12, 2.2]} />
          <meshStandardMaterial color="#181818" emissive="#201406" emissiveIntensity={0.28} metalness={0.45} roughness={0.34} />
        </mesh>

        <mesh position={[0, 0.08, -0.38]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.05, 1.25, 64]} />
          <meshStandardMaterial color="#f0d88f" emissive="#8b5f1a" emissiveIntensity={1.1} metalness={0.65} roughness={0.24} />
        </mesh>

        <mesh position={[0, 0.55, -0.95]}>
          <boxGeometry args={[1.55, 0.72, 0.08]} />
          <meshStandardMaterial color="#314a68" emissive="#1d5c88" emissiveIntensity={1.35} metalness={0.2} roughness={0.22} />
        </mesh>

        {[-1.45, 1.45].map((x) => (
          <group key={x} position={[x, 0.72, -0.92]}>
            <mesh>
              <boxGeometry args={[0.07, 1.55, 0.07]} />
              <meshStandardMaterial color="#f7efd0" emissive="#8b7340" emissiveIntensity={0.75} metalness={0.72} roughness={0.22} />
            </mesh>
            <mesh position={[0, 0.84, 0]}>
              <boxGeometry args={[0.3, 0.07, 0.07]} />
              <meshStandardMaterial color="#f0d88f" emissive="#c9a962" emissiveIntensity={0.8} metalness={0.65} roughness={0.18} />
            </mesh>
          </group>
        ))}

        {[-0.86, 0, 0.86].map((x, index) => (
          <mesh key={x} position={[x, 0.7, -0.36]} rotation={[0.62, 0, index === 0 ? 0.28 : index === 2 ? -0.28 : 0]}>
            <coneGeometry args={[0.28, 1.38, 32, 1, true]} />
            <meshBasicMaterial color={index === 1 ? '#f0d88f' : '#8bd8ff'} transparent opacity={0.32} depthWrite={false} />
          </mesh>
        ))}

        {audience.map((dot, index) => (
          <mesh key={index} position={[dot.x, -0.02, dot.z]} scale={dot.scale}>
            <sphereGeometry args={[1, 12, 12]} />
            <meshStandardMaterial color={index % 3 === 0 ? '#e8d5a3' : '#d7e2ea'} emissive={index % 3 === 0 ? '#6c4a18' : '#153247'} emissiveIntensity={0.55} />
          </mesh>
        ))}
      </Float>
    </group>
  );
}

export function EventStageModel() {
  return (
    <div className="event-stage-model" aria-label="Interactive 3D event stage concept">
      <div className="event-stage-model-fallback" aria-hidden="true">
        <span className="event-stage-wire event-stage-wire-floor" />
        <span className="event-stage-wire event-stage-wire-platform" />
        <span className="event-stage-wire event-stage-wire-screen" />
        <span className="event-stage-wire event-stage-wire-truss event-stage-wire-truss-left" />
        <span className="event-stage-wire event-stage-wire-truss event-stage-wire-truss-right" />
        <span className="event-stage-light event-stage-light-a" />
        <span className="event-stage-light event-stage-light-b" />
        <span className="event-stage-light event-stage-light-c" />
        <span className="event-stage-dot event-stage-dot-a" />
        <span className="event-stage-dot event-stage-dot-b" />
        <span className="event-stage-dot event-stage-dot-c" />
        <span className="event-stage-dot event-stage-dot-d" />
      </div>
      <Canvas dpr={[1, 1.5]} shadows gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }} frameloop="always">
        <PerspectiveCamera makeDefault position={[0, 1.9, 4.45]} fov={42} />
        <ambientLight intensity={0.78} />
        <directionalLight position={[2.5, 4, 3]} intensity={1.8} castShadow />
        <pointLight position={[-2, 2.6, 1.5]} intensity={2.2} color="#c9a962" />
        <pointLight position={[2, 1.8, 1.4]} intensity={1.55} color="#8bd8ff" />
        <StageModel />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.35}
          minPolarAngle={Math.PI / 3.6}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
}
