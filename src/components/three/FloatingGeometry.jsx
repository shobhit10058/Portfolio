import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function FloatingIcosahedron() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.1;
    ref.current.position.y = Math.sin(t * 0.4) * 0.5;
  });

  return (
    <mesh ref={ref} position={[-3, 0, -2]}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        wireframe
        color="#8b5cf6"
        emissive="#8b5cf6"
        emissiveIntensity={0.4}
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

function FloatingTorus() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.1;
    ref.current.rotation.z = t * 0.12;
    ref.current.position.y = Math.sin(t * 0.3 + 1) * 0.4;
  });

  return (
    <mesh ref={ref} position={[3, 0.5, -3]}>
      <torusGeometry args={[1, 0.3, 16, 32]} />
      <meshStandardMaterial
        wireframe
        color="#06b6d4"
        emissive="#06b6d4"
        emissiveIntensity={0.4}
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

export default function FloatingGeometry() {
  return (
    <group>
      <FloatingIcosahedron />
      <FloatingTorus />
    </group>
  );
}
