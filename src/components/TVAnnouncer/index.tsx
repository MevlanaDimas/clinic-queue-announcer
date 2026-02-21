'use client'

import { pusherClient } from "@/lib/pusher";
import { announceTicket } from "@/lib/speech-utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DeskDisplay from "./DeskDisplay";


interface Desk {
    token: string;
    counter: number;
}

export default function TVAnnouncer() {
    const [desks, setDesks] = useState<{
        desk1: Desk;
        desk2: Desk;
    }>({
        desk1: { token: "--", counter: 1 },
        desk2: { token: "--", counter: 2 }
    });

    useEffect(() => {

        fetch('/api/queue/status')
            .then(res => res.json())
            .then(data => {
                setDesks({
                    desk1: data.desk1 || { token: "--", counter: 1 },
                    desk2: data.desk2 || { token: "--", counter: 2 }
                });
            });

        const channel = pusherClient.subscribe('clinic-queue');

        channel.bind('new-call', (data: { token: string, counter: number }) => {
            setDesks(prev => ({
                ...prev,
                [`desk${data.counter}`]: {
                    token: data.token,
                    counter: data.counter
                }
            }));

            announceTicket(data.token, data.counter);
        });

        return () => pusherClient.unsubscribe('clinic-queue');
    }, []);

    const noiseBg = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity: 0.1,
    };

    return (
        <div className="relative h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white flex flex-col md:flex-row p-10 gap-10">
            <div style={noiseBg} className="absolute inset-0 z-0 pointer-events-none" />
            <motion.div className="relative flex-1 flex h-full z-10" variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] } } }}>
                <DeskDisplay desk={desks.desk1} color="text-sky-400" border="border-sky-500/50" />
            </motion.div>
            <motion.div className="relative flex-1 flex h-full z-10" variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] } } }}>
                <DeskDisplay desk={desks.desk2} color="text-emerald-400" border="border-emerald-500/50" />
            </motion.div>
        </div>
    );
}