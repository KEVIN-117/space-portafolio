"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                className="md:container mx-auto grid md:grid-cols-2 grid-cols-1 items-center md:py-0 py-10 justify-between md:px-20 md:mt-[18rem] z-[20] backdrop-blur-lg bg-stone-950/40 rounded-xl"
            >
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col md:w-full w-[95%] md:mt-0 md:mt-10"
                >
                    <motion.div
                        variants={slideInFromTop()}
                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                    >
                        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                        <h1 className="Welcome-text">
                            Desarrollador Fullstack y Especilista en Seguridad Informática
                        </h1>
                    </motion.div>

                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className="flex flex-col gap-6 mt-6 text-6xl font-bold w-full text-white h-auto"
                    >
                        <span>
                            Hola 👋 bienvenido a mi portafolio, soy{" "}
                            <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                Kevin Rodriguez
                            </span>

                        </span>
                    </motion.div>
                    <button className="w-fit mx-auto mt-8 bg-blue-500 text-white px-4 py-2 rounded-md">
                        Get in touch
                    </button>
                </motion.div>
                <motion.div
                    variants={slideInFromRight(0.8)}
                    className="w-full h-full flex flex-col items-center justify-center"
                >
                    <Image
                        src="/mainIconsdark.svg"
                        className="object-contain"
                        alt="work icons"
                        height={650}
                        width={650}
                    />
                </motion.div>
            </motion.div>
            <div className="md:container mx-auto grid md:grid-cols-2 grid-cols-1 items-center md:py-0 py-10 justify-between md:px-20 mt-8 backdrop-blur-lg bg-stone-950/40 rounded-xl">

                <motion.div
                    variants={slideInFromRight(0.8)}
                    className="w-full text-justify py-4 col-span-2 h-full flex flex-col gap-2 items-center justify-center"
                >
                    <motion.h2
                        variants={slideInFromTop(0.9)}
                        className="mt-4 text-justify w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-lg font-semibold px-4 py-2"
                    >
                        Soy un desarrollador Full Stack con un enfoque versátil en la creación de soluciones tanto para el frontend como para el backend. Manejo una variedad de lenguajes de programación, incluyendo Java, Python, Go, JavaScript, TypeScript y C++, lo que me permite abordar proyectos desde diferentes perspectivas. Además, cuento con conocimientos básicos en DevOps y una sólida base en programación funcional.
                    </motion.h2>

                    <motion.h2 variants={slideInFromTop(0.9)} className="mt-4 text-justify w-full text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 text-lg font-semibold px-4 py-2">
                        En este portafolio, encontrarás ejemplos de mi trabajo que demuestran mi capacidad para construir aplicaciones robustas y eficientes. Si estás interesado en colaborar en un proyecto, discutir ideas o explorar cómo podemos trabajar juntos, ¡no dudes en contactarme!
                    </motion.h2>

                    <motion.p
                        variants={slideInFromTop(0.9)}
                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                    >
                        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                        <h1 className="Welcome-text text-[13px]">
                            ¡Explora, disfruta y siéntete libre de conectar!
                        </h1>
                    </motion.p>

                </motion.div>
            </div>
        </>
    );
};

export default HeroContent;