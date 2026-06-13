"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import AnimatedSection from "./AnimatedSection";

function RotatingBuilding() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  const floors = useMemo(() => {
    const f = [];
    for (let i = 0; i < 20; i++) {
      const hue = 0.1 + Math.random() * 0.05;
      f.push({
        y: -4 + i * 0.4,
        width: 1.5 - i * 0.03,
        depth: 1.5 - i * 0.03,
        color: new THREE.Color().setHSL(hue, 0.5, 0.08 + i * 0.01),
        emissive: new THREE.Color().setHSL(0.1, 0.8, 0.1),
      });
    }
    return f;
  }, []);

  return (
    <group ref={meshRef}>
      {floors.map((floor, i) => (
        <mesh key={i} position={[0, floor.y, 0]}>
          <boxGeometry args={[floor.width, 0.3, floor.depth]} />
          <meshPhysicalMaterial
            color={floor.color}
            metalness={0.9}
            roughness={0.1}
            emissive={floor.emissive}
            emissiveIntensity={0.15}
          />
        </mesh>
      ))}
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh
            key={`spire-${i}`}
            position={[
              Math.cos(angle) * 0.8,
              4.5,
              Math.sin(angle) * 0.8,
            ]}
            rotation={[0, 0, 0.3]}
          >
            <coneGeometry args={[0.05, 0.8, 4]} />
            <meshPhysicalMaterial
              color="#c9a84c"
              metalness={1}
              roughness={0.2}
              emissive="#c9a84c"
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
      <mesh position={[0, 4.8, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshPhysicalMaterial
          color="#c9a84c"
          metalness={1}
          roughness={0.1}
          emissive="#c9a84c"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

function FloatingOrbits() {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
      ref.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.15) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      {Array.from({ length: 3 }).map((_, i) => {
        const radius = 2.5 + i * 1.2;
        return (
          <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius - 0.02, radius, 64]} />
            <meshBasicMaterial
              color="#c9a84c"
              transparent
              opacity={0.08 - i * 0.02}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 1, 6]} fov={45} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-3, 3, -3]} intensity={0.5} color="#c9a84c" />

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
        <RotatingBuilding />
      </Float>
      <FloatingOrbits />

      <mesh position={[0, -4.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.8}
          roughness={0.6}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Canvas>
  );
}

export default function PropertyShowcase3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section id="showcase" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-luxury-gold-light text-xs uppercase tracking-[0.35em] font-medium">
              Beyond Imagination
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6 leading-[1.15]">
              Interactive{" "}
              <span className="gold-gradient">3D</span> Property
              Showcase
            </h2>
            <p className="text-luxury-gray text-base lg:text-lg leading-relaxed mb-8">
              Immerse yourself in a revolutionary property viewing experience.
              Explore every detail of our featured estates through stunning
              three-dimensional visualizations.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: "360°", label: "Immersive View" },
                { value: "4K", label: "Ultra HD" },
                { value: "24/7", label: "Virtual Tours" },
              ].map((stat) => (
                <div key={stat.value}>
                  <p className="text-2xl lg:text-3xl font-serif text-luxury-gold-light">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-luxury-gray mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <motion.a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-luxury-gold/40 text-luxury-gold-light text-sm uppercase tracking-[0.2em] font-medium hover:bg-luxury-gold/10 transition-all duration-500 group"
              data-cursor-hover
              whileHover={{ scale: 1.02 }}
            >
              Start Virtual Tour
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div
              ref={ref}
              className="relative aspect-square rounded-2xl overflow-hidden border border-luxury-glass-border"
            >
              {isInView && <Scene3D />}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-luxury-gold/5 to-transparent rounded-2xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
