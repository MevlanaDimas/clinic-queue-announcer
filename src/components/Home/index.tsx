'use client'

import Link from "next/link";
import { Ticket, Tv } from "lucide-react";
import { motion, Variants } from "framer-motion";


const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 bg-slate-50 dark:bg-slate-900 p-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Link
                    href="/display"
                    className="group w-64 h-64 flex flex-col items-center justify-center gap-5 rounded-3xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 cursor-pointer"
                >
                    <div
                        className="flex items-center justify-center border-2 p-6 border-dashed border-slate-300 dark:border-slate-600 rounded-full text-slate-400 dark:text-slate-500 transition-colors duration-300 group-hover:border-emerald-500 group-hover:text-emerald-500 dark:group-hover:border-emerald-400 dark:group-hover:text-emerald-400"
                    >
                        <Tv className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 text-2xl font-semibold">Display</span>
                </Link>
            </motion.div>

            <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Link
                    href="/ticket"
                    className="group w-64 h-64 flex flex-col items-center justify-center gap-5 rounded-3xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 cursor-pointer"
                >
                    <div
                        className="flex items-center justify-center border-2 p-6 border-dashed border-slate-300 dark:border-slate-600 rounded-full text-slate-400 dark:text-slate-500 transition-colors duration-300 group-hover:border-sky-500 group-hover:text-sky-500 dark:group-hover:border-sky-400 dark:group-hover:text-sky-400"
                    >
                        <Ticket className="h-12 w-12 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 text-2xl font-semibold">Ticket</span>
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default Home;