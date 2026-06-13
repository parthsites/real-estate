"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

function Building({
  position,
  height,
  width,
  depth,
  color,
  emissive,
  delay,
}: {
  position: [number, number, number];
  height: number;
  width: number;
  depth: number;
  color: string;
  emissive: string;
  delay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

      useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime * 0.1 + delay;
      const windows = meshRef.current.children;
      windows.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          const mat = child.material as THREE.MeshStandardMaterial;
          const flicker = Math.sin(t * 2 + i * 1.5) > 0.3 ? 1 : 0.3;
          mat.emissiveIntensity = flicker;
        }
      });
    }
  });

  const windowRows = Math.floor(height / 0.8);
  const windowColsW = Math.floor(width / 0.6);
  const windowColsD = Math.floor(depth / 0.6);

  const windows = useMemo(() => {
    const wins: { pos: [number, number, number]; rot: [number, number, number] }[] = [];
    for (let row = 0; row < windowRows; row++) {
      for (let col = 0; col < windowColsW; col++) {
        wins.push({
          pos: [
            -width / 2 + 0.3 + col * 0.6,
            -height / 2 + 0.4 + row * 0.8,
            depth / 2 + 0.01,
          ],
          rot: [0, 0, 0],
        });
        wins.push({
          pos: [
            -width / 2 + 0.3 + col * 0.6,
            -height / 2 + 0.4 + row * 0.8,
            -depth / 2 - 0.01,
          ],
          rot: [0, Math.PI, 0],
        });
      }
      for (let col = 0; col < windowColsD; col++) {
        wins.push({
          pos: [
            width / 2 + 0.01,
            -height / 2 + 0.4 + row * 0.8,
            -depth / 2 + 0.3 + col * 0.6,
          ],
          rot: [0, Math.PI / 2, 0],
        });
        wins.push({
          pos: [
            -width / 2 - 0.01,
            -height / 2 + 0.4 + row * 0.8,
            -depth / 2 + 0.3 + col * 0.6,
          ],
          rot: [0, -Math.PI / 2, 0],
        });
      }
    }
    return wins;
  }, [windowRows, windowColsW, windowColsD, width, height, depth]);

  return (
    <group position={position}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          emissive={emissive}
          emissiveIntensity={0.05}
        />
        {windows.map((w, i) => (
          <mesh key={i} position={w.pos} rotation={w.rot as [number, number, number]}>
            <planeGeometry args={[0.3, 0.4]} />
            <meshStandardMaterial
              color="#c9a84c"
              emissive="#c9a84c"
              emissiveIntensity={0.8 + Math.random() * 0.5}
              transparent
              opacity={0.6 + Math.random() * 0.4}
            />
          </mesh>
        ))}
      </mesh>
    </group>
  );
}

function CitySkyline() {
  const buildings = useMemo(() => {
    const blds: {
      position: [number, number, number];
      height: number;
      width: number;
      depth: number;
      color: string;
      emissive: string;
      delay: number;
    }[] = [];

    const colors = [
      "#1a1a2e",
      "#16213e",
      "#0f3460",
      "#1a1a3e",
      "#202040",
      "#2a2a4a",
      "#151530",
    ];
    const emissiveColors = ["#0a0a2e", "#0a0a3e", "#050520", "#0f0f30", "#1a1a40"];

    for (let i = 0; i < 60; i++) {
      const x = (Math.random() - 0.5) * 50;
      const z = -10 - Math.random() * 40;
      const height = 2 + Math.random() * 8;
      const width = 0.6 + Math.random() * 1.2;
      const depth = 0.6 + Math.random() * 1.2;

      blds.push({
        position: [x, height / 2 - 2, z],
        height,
        width,
        depth,
        color: colors[Math.floor(Math.random() * colors.length)],
        emissive: emissiveColors[Math.floor(Math.random() * emissiveColors.length)],
        delay: Math.random() * 10,
      });
    }

    for (let i = 0; i < 20; i++) {
      const x = (Math.random() - 0.5) * 40;
      const z = 5 + Math.random() * 20;
      const height = 4 + Math.random() * 12;
      const width = 0.8 + Math.random() * 1.5;
      const depth = 0.8 + Math.random() * 1.5;

      blds.push({
        position: [x, height / 2 - 2, z],
        height,
        width,
        depth,
        color: colors[Math.floor(Math.random() * colors.length)],
        emissive: emissiveColors[Math.floor(Math.random() * emissiveColors.length)],
        delay: Math.random() * 10,
      });
    }

    blds.sort((a, b) => a.position[2] - b.position[2]);

    return blds;
  }, []);

  return (
    <group>
      {buildings.map((b, i) => (
        <Building key={i} {...b} />
      ))}
    </group>
  );
}

function HeroBuilding() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.02} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, -1, 0]}>
        <mesh position={[0, 2.5, 0]}>
          <boxGeometry args={[2.5, 5, 2.5]} />
          <meshPhysicalMaterial
            color="#1a1a2e"
            metalness={0.95}
            roughness={0.05}
            emissive="#0a0a2e"
            emissiveIntensity={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        <mesh position={[0, 5.5, 0]}>
          <boxGeometry args={[1.8, 0.5, 1.8]} />
          <meshPhysicalMaterial
            color="#c9a84c"
            metalness={1}
            roughness={0.2}
            emissive="#c9a84c"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0, 6.5, 0]}>
          <coneGeometry args={[1, 1.5, 4]} />
          <meshPhysicalMaterial
            color="#c9a84c"
            metalness={1}
            roughness={0.2}
            emissive="#c9a84c"
            emissiveIntensity={0.2}
          />
        </mesh>

        {Array.from({ length: 8 }).map((_, i) => {
          const row = Math.floor(i / 2);
          const col = i % 2;
          return (
            <mesh
              key={i}
              position={[-0.6 + col * 1.2, 0.5 + row * 1.2, 1.26]}
            >
              <planeGeometry args={[0.4, 0.6]} />
              <meshStandardMaterial
                color="#c9a84c"
                emissive="#c9a84c"
                emissiveIntensity={0.6}
                transparent
                opacity={0.7}
              />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

function Particles() {
  const count = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.01;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.005) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#c9a84c"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[80, 80]} />
      <meshStandardMaterial
        color="#0a0a0a"
        metalness={0.5}
        roughness={0.8}
      />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 4, 12], fov: 50, near: 0.1, far: 100 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.5,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 4, 12]} fov={50}>
        <pointLight position={[0, 10, 5]} intensity={0.5} color="#c9a84c" />
      </PerspectiveCamera>

      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 10, 5]} intensity={0.5} />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} color="#c9a84c" />

      <CitySkyline />
      <HeroBuilding />
      <Particles />
      <Ground />

      <Environment preset="night" />
    </Canvas>
  );
}
