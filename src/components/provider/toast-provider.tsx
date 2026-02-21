'use client'

import { Toaster } from "sonner"


export const ToastProvider = () => {
    return <Toaster position="top-center" duration={3000} richColors />
}