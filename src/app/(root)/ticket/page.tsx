import { Metadata } from "next";
import { ToastProvider } from "@/components/provider/toast-provider";
import TicketPrinter from "@/components/TicketPrinter";


export const metadata: Metadata = {
    title: "Print Ticket",
};

const TicketPrinterPage = () => {
    return (
        <section>
            <ToastProvider />
            <TicketPrinter />
        </section>
    )
}

export default TicketPrinterPage;