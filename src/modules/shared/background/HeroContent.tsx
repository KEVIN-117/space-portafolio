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
                className="md:container mx-auto grid md:grid-cols-2 grid-cols-1 items-center md:py-0 py-10 justify-between md:px-20 md:mt-[15rem] z-[20] backdrop-blur-lg bg-stone-950/40 rounded-xl"
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
                            Desarrollador Fullstack y Especialista en Seguridad Informática
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
                        Ponte en contacto
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
        </>
    );
};

export default HeroContent;