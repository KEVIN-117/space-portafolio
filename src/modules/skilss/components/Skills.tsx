import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion"
import { motion } from "framer-motion"

export function Skills() {
    return (
        <div className="relative container flex flex-col h-full w-full" id="about-me">
            <video
                autoPlay
                muted
                loop
                className="absolute md:top-0 md:h-full md:w-full w-screen left-0 z-[1] object-cover"
            >
                <source src="/cards-video.webm" type="video/webm" />
            </video >
            <motion.div
                initial="hidden"
                animate="visible"
                className="md:container mx-auto grid grid-cols-1 items-center md:py-0 py-10 justify-between md:px-20 px-2 z-[20] bg-stone-950/40 rounded-xl"
            >
                <motion.div
                    className="flex flex-col md:w-full w-[95%] mt-0 md:mt-10"
                >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideInFromLeft(0.8)}
                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                    >
                        <h1 className="Welcome-text text-base">
                            Mis habilidades
                        </h1>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideInFromTop(0.8)}
                        className="flex flex-col gap-6 mt-6 md:text-6xl text-4xl font-bold w-full text-white h-auto"
                    >
                        <span>
                            <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                Habilidades en desarrollo
                            </span>
                        </span>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={slideInFromTop(0.8)}
                    className="w-full h-full flex flex-col items-center justify-center"
                >
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                        <motion.div
                            variants={slideInFromLeft(0.8)}
                            className="bg-stone-950/40 rounded-xl p-4">
                            <h1 className="relative text-white flex gap-4 text-2xl font-bold">
                                Frontend
                                <img src="/mui.png" alt="frontend" className="absolute right-0 w-16 h-16 inline-block" />
                            </h1>
                            <ul className="[&_li]:ml-4 [&_li]:first-letter:font-extrabold [&_li]:first-letter:mx-1 text-white">
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Angular</li>
                                <li>Vue.js</li>
                                <li>Astro</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            variants={slideInFromTop(0.8)}
                            className="bg-stone-950/40 rounded-xl p-4">
                            <h1 className="relative text-white flex gap-4 text-2xl font-bold">
                                Backend
                                <img src="/prisma.webp" alt="backend" className="absolute right-0 w-16 h-16 inline-block" />
                            </h1>
                            <ul className="[&_li]:ml-4 [&_li]:first-letter:font-extrabold [&_li]:first-letter:mx-1 text-white">
                                <li>Java</li>
                                <li>Python</li>
                                <li>Go</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>C++</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            variants={slideInFromRight(0.8)}
                            className="bg-stone-950/40 rounded-xl p-4">
                            <h1 className="relative text-white flex gap-4 text-2xl font-bold">
                                DevOps
                                <img src="/docker.webp" alt="devops" className="absolute right-0 w-16 h-16 inline-block" />
                            </h1>
                            <ul className="[&_li]:ml-4 [&_li]:first-letter:font-extrabold [&_li]:first-letter:mx-1 text-white">
                                <li>Pipelines</li>
                                <li>Despliegue</li>
                                <li>Entrega</li>
                                <li>Implementación continua</li>
                                <li>Programación funcional</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </motion.div>
        </div >
    )
}