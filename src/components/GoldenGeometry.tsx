"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function MindblowingGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;

    if (groupRef.current) {
      // Pendulum: left-right-left-right arc
      const sweep = Math.sin(time.current * 0.35) * 2.2;
      groupRef.current.position.x = sweep;
      groupRef.current.position.y = Math.sin(time.current * 0.2) * 0.3;
      groupRef.current.rotation.z += delta * 0.03;
    }

    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.1;
      outerRef.current.rotation.y += delta * 0.3;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.08;
      wireframeRef.current.rotation.y += delta * 0.2;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x += delta * 0.25;
      innerRef.current.rotation.y += delta * 0.5;
      innerRef.current.position.y = Math.sin(time.current * 1.5) * 0.5;
    }

    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.4;
      coreRef.current.rotation.y += delta * 0.6;
      const pulse = 0.8 + Math.sin(time.current * 2) * 0.2;
      coreRef.current.scale.setScalar(pulse);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
      ringRef.current.rotation.x += delta * 0.05;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.15;
      ring2Ref.current.rotation.y += delta * 0.3;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.y += delta * 0.25;
      ring3Ref.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer wireframe dodecahedron shell */}
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.6}>
        <mesh ref={outerRef}>
          <dodecahedronGeometry args={[2, 0]} />
          <meshPhysicalMaterial
            color="#e8c65a"
            metalness={0.9}
            roughness={0.15}
            emissive="#c9a84c"
            emissiveIntensity={0.5}
            transparent
            opacity={0.35}
            wireframe={false}
            envMapIntensity={3}
          />
        </mesh>
      </Float>

      {/* Wireframe shell */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[2.3, 0]} />
        <meshBasicMaterial
          color="#dfc06a"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Inner octahedron */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#f5d88a"
          metalness={1}
          roughness={0.05}
          emissive="#dfc06a"
          emissiveIntensity={0.8}
          envMapIntensity={4}
        />
      </mesh>

      {/* Pulsing core gem */}
      <mesh ref={coreRef}>
        <tetrahedronGeometry args={[0.4, 0]} />
        <meshPhysicalMaterial
          color="#fff5d0"
          metalness={1}
          roughness={0}
          emissive="#ffd700"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Orbiting rings at different angles */}
      <mesh ref={ringRef} position={[0, 0, -3]}>
        <ringGeometry args={[2.8, 3.3, 96]} />
        <meshBasicMaterial color="#f5d88a" transparent opacity={0.18} side={THREE.DoubleSide} />
      </mesh>

      <mesh ref={ring2Ref} position={[0, 0, -2.2]}>
        <ringGeometry args={[1.5, 1.6, 64]} />
        <meshBasicMaterial color="#c9a84c" transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>

      <mesh ref={ring3Ref} position={[0, 0, -1.5]}>
        <ringGeometry args={[0.8, 0.85, 48]} />
        <meshBasicMaterial color="#ffd700" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function GoldenGeometry({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 30 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.15} />
        <pointLight position={[10, 10, 10]} intensity={4} color="#ffd700" />
        <pointLight position={[-8, -6, 8]} intensity={3} color="#c9a84c" />
        <pointLight position={[0, 12, -5]} intensity={2.5} color="#fff5d0" />
        <Environment preset="night" />
        <Sparkles count={120} size={3.5} speed={0.3} color="#dfc06a" opacity={0.5} />
        <MindblowingGroup />
      </Canvas>
    </div>
  );
}
