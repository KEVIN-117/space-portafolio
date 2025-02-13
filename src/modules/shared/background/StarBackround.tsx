"use client";
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
    const ref: any = useRef(null);
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 })
    );

    useFrame((state: any, delta: any) => {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 15;
    })


    return (
        <>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="$fff"
                    size={0.002}
                    sizeAttenuation={true}
                    dethWrite={false}
                />
            </Points>
        </>
    )
};

const StarsCanvas = () => (
    <section className="w-full h-auto fixed inset-0 z-[10]">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </section>
)

export default StarsCanvas;