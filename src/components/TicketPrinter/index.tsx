'use client'

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "../ui/button";


const TicketPrinter = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onAddQueue = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/queue', { method: 'POST' });
            if (!res.ok) {
                throw new Error('Failed to add queue');
            }
            toast.success('Queue added successfully');
            router.refresh();
        } catch {
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            className="h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Button
                    onClick={() => onAddQueue()}
                    disabled={loading}
                    className="
                        group
                        w-64 h-64 flex flex-col items-center justify-center gap-5
                        rounded-3xl
                        bg-white dark:bg-slate-800
                        shadow-lg hover:shadow-xl
                        border border-slate-200 dark:border-slate-700
                        transition-shadow duration-300 cursor-pointer
                    "
                >
                    <div className="
                        flex items-center justify-center
                        border-2 p-6 border-dashed border-slate-300 dark:border-slate-600 rounded-full
                        text-slate-400 dark:text-slate-500
                        transition-colors duration-300
                        group-hover:border-indigo-500 group-hover:text-indigo-500
                        dark:group-hover:border-indigo-400 dark:group-hover:text-indigo-400
                    ">
                        <Plus className="h-12 w-12 transition-transform duration-300 group-hover:rotate-90" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 text-2xl font-semibold">
                        Print Ticket
                    </span>
                </Button>
            </motion.div>
        </motion.div>
    );
}

export default TicketPrinter;