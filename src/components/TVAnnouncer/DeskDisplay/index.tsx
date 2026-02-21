'use client'

import { AnimatePresence, motion } from "framer-motion";


interface Desk {
    token: string;
    counter: number;
}

interface DeskDisplayProps {
    desk: Desk;
    color: string;
    border: string;
}

export default function DeskDisplay({ desk, color, border }: DeskDisplayProps) {
    const variants = {
        enter: { y: '100%', opacity: 0, scale: 0.5 },
        center: { y: '0%', opacity: 1, scale: 1 },
        exit: { y: '-100%', opacity: 0, scale: 0.5 }
    };

    return (
        <article className={`flex flex-1 flex-col items-center justify-center text-center border-2 ${border} rounded-3xl bg-slate-800/30 p-8 shadow-2xl backdrop-blur-md`}>
            <h3 className="text-5xl uppercase tracking-widest text-white/70 mb-6 font-bold [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Counter {desk.counter}
            </h3>
            <div className="relative h-[16rem] w-full flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={desk.token}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className={`absolute inset-0 flex items-center justify-center text-[12rem] font-black leading-none ${color} [text-shadow:0_8px_20px_rgba(0,0,0,0.6)] z-20`}
                    >
                        {desk.token}
                    </motion.div>
                </AnimatePresence>
                <div className={`text-[12rem] font-black leading-none ${color} [text-shadow:0_8px_20px_rgba(0,0,0,0.6)]`}>
                    {desk.token}
                </div>
            </div>
            <p className="text-3xl mt-6 text-white/50 uppercase tracking-wider [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Now Calling
            </p>
        </article>
    );
}