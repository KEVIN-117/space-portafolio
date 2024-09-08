"use client";
import { Idx } from "@/global/svg/Idx";
import { Highlight, HeroHighlight } from "@/modules/shared/hero";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { HeartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export function Info() {
    function useHighlight(text: string) {
        return (
            <Highlight className="text-black dark:text-white">{text}</Highlight>
        )
    }
    return (
        <motion.div
                initial="hidden"
                animate="visible"
                className=" container mx-auto grid md:grid-cols-2 grid-cols-1 items-center md:py-0 justify-between md:mt-[1rem] bg-stone-950/20 backdrop-blur-sm rounded-xl overflow-hidden"
            >
            <motion.div
                variants={slideInFromRight(0.8)}
                className="flex-1 text-justify py-4 h-full flex flex-col gap-2 items-center justify-center"
            >
                <motion.h2
                    className="mt-4 text-justify w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:text-lg text-base font-medium px-4 py-2"
                >
                    Soy un desarrollador Full Stack con un enfoque versátil en la creación de soluciones tanto para el frontend como para el backend. Manejo una variedad de lenguajes de programación, incluyendo {useHighlight("Java, Python, Go, JavaScript, TypeScript y C++")}, lo que me permite abordar proyectos desde diferentes perspectivas como el frontend utilizando las diferentes tecnologias de desarrollo web {useHighlight("react con next js, angular js, vue js, astro js")} las cuales me permiten la creacion de paginas web dinamicas y staticas . Además, cuento con conocimientos básicos en {useHighlight("DevOps")} en la implementacion de {useHighlight("pipelines")} para el {useHighlight("depliegue, entrega e implementacion continua del software")} y una sólida base en {useHighlight("programación funcional")} con java.
                </motion.h2>

                <motion.h2 className="mt-4 text-justify w-full text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 md:text-lg text-base font-medium px-4 py-2">
                    En este portafolio, encontrarás ejemplos de mi trabajo que demuestran mi capacidad para construir aplicaciones robustas y eficientes. Si estás interesado en colaborar en un proyecto, discutir ideas o explorar cómo podemos trabajar juntos, ¡no dudes en contactarme!
                </motion.h2>

                <motion.div
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <HeartIcon className="text-[#b49bff] mr-[10px] h-6 w-6" />
                    <h1 className="Welcome-text text-base">
                        ¡Explora, disfruta y siéntete libre de conectar!
                    </h1>
                </motion.div>

            </motion.div>
            <motion.div
                variants={slideInFromLeft(0.8)} className="relative w-full h-full">
                <Idx />
            </motion.div>
        </motion.div>
    )
}