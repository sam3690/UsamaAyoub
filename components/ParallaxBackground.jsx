'use client';

import { useEffect, useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

function FloatingGeometry({ position, color, geometry, mouse }) {
  const meshRef = useRef();
  const initialPosition = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;

      const targetX = initialPosition.x + mouse.x * 0.5;
      const targetY = initialPosition.y + mouse.y * 0.3;

      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x, 
        targetX, 
        0.02
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y, 
        targetY + Math.sin(state.clock.elapsedTime) * 0.2, 
        0.02
      );
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'octahedron':
        return <octahedronGeometry args={[0.5, 0]} />;
      case 'torus':
        return <torusGeometry args={[0.4, 0.15, 16, 32]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[0.4, 0]} />;
      default:
        return <sphereGeometry args={[0.4, 32, 32]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {renderGeometry()}
        <MeshDistortMaterial
          color={color}
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function WireframeSphere({ mouse }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.z = mouse.x * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <icosahedronGeometry args={[3, 1]} />
      <MeshWobbleMaterial
        color="#00ff88"
        factor={0.1}
        speed={1}
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

function GlowingRings({ mouse }) {
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 2 + Math.sin(time) * 0.1 + mouse.y * 0.2;
      ring1Ref.current.rotation.y = time * 0.2 + mouse.x * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = Math.PI / 3 + Math.cos(time * 0.8) * 0.1;
      ring2Ref.current.rotation.y = -time * 0.15;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = Math.PI / 4 + Math.sin(time * 0.5) * 0.15;
      ring3Ref.current.rotation.z = time * 0.1;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref} position={[0, 0, -6]}>
        <torusGeometry args={[4, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00ff88" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring2Ref} position={[0, 0, -6]}>
        <torusGeometry args={[4.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00ccff" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring3Ref} position={[0, 0, -6]}>
        <torusGeometry args={[5, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ff00ff" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

function Particles() {
  const count = 300;
  const particlesRef = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00ff88"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function PostProcessing() {
  const offsetRef = useRef(new THREE.Vector2(0.0005, 0.0005));

  return (
    <EffectComposer>
      <Bloom
        intensity={0.8}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={offsetRef.current}
        radialModulation={false}
        modulationOffset={0.5}
      />
      <Vignette
        offset={0.3}
        darkness={0.6}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
}

function Scene({ mouse }) {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.3, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.2, 0.02);
    camera.lookAt(0, 0, -5);
  });

  const geometries = useMemo(() => [
    { position: [-5, 2, -8], color: '#00ff88', geometry: 'sphere' },
    { position: [5, -2, -10], color: '#00ccff', geometry: 'octahedron' },
    { position: [-4, -3, -7], color: '#ff00ff', geometry: 'torus' },
    { position: [4, 3, -9], color: '#ffff00', geometry: 'dodecahedron' },
    { position: [6, 1, -12], color: '#00ff88', geometry: 'sphere' },
    { position: [-6, 0, -11], color: '#ff6600', geometry: 'octahedron' },
  ], []);

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[-10, 10, 10]} intensity={0.5} color="#00ff88" />
      <pointLight position={[10, -10, -10]} intensity={0.3} color="#00ccff" />

      <WireframeSphere mouse={mouse} />
      <GlowingRings mouse={mouse} />
      <Particles />
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

      {geometries.map((geo, i) => (
        <FloatingGeometry key={i} {...geo} mouse={mouse} />
      ))}

      <fog attach="fog" args={['#0a0a0a', 5, 25]} />
      
      <PostProcessing />
    </>
  );
}

export default function ParallaxBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#0a0a0a']} />
        <Suspense fallback={null}>
          <Scene mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
}
