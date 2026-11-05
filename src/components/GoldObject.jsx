import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useInView } from "framer-motion";

function Knot() {
    const group = useRef(null);

    useFrame((state) => {
        if (!group.current) return;

        // How far down the page the visitor is: 0 at the top, 1 at the bottom
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;

        const t = state.clock.elapsedTime;
        group.current.rotation.y = t * 0.25 + progress * Math.PI * 4;
        group.current.rotation.x = 0.4 + Math.sin(t * 0.4) * 0.12;
    });

    return (
        <group ref={group} scale={0.85}>
            <mesh>
                <torusKnotGeometry args={[1, 0.32, 220, 32, 2, 3]} />
                <meshStandardMaterial
                    color="#d9b26a"
                    metalness={1}
                    roughness={0.28}
                    envMapIntensity={1.6}
                />
            </mesh>
        </group>
    );
}

export default function GoldObject() {
    const ref = useRef(null);
    const inView = useInView(ref); // pause drawing when off screen

    return (
        <div ref={ref} className="h-full w-full">
            <Canvas
                frameloop={inView ? "always" : "never"}
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 6], fov: 35 }}
                gl={{ antialias: true, alpha: true }}
            >
                {/* Studio lighting built from glowing panels, so metal has something to reflect */}
                <Environment resolution={256}>
                    <Lightformer form="rect" intensity={4} position={[0, 5, -9]} scale={[10, 6, 1]} />
                    <Lightformer form="rect" intensity={2} position={[-5, 1, -1]} rotation={[0, Math.PI / 2, 0]} scale={[8, 3, 1]} />
                    <Lightformer form="rect" intensity={2} position={[5, -1, -1]} rotation={[0, -Math.PI / 2, 0]} scale={[8, 3, 1]} />
                    <Lightformer form="ring" intensity={3} color="#f4efe8" position={[0, 0, 5]} scale={4} />
                </Environment>
                <Knot />
            </Canvas>
        </div>
    );
}