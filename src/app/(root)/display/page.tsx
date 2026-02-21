import TVAnnouncer from "@/components/TVAnnouncer";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Queue"
};

const DisplayPage = () => {

    return (
        <section>
            <TVAnnouncer />
        </section>
    )
}

export default DisplayPage;