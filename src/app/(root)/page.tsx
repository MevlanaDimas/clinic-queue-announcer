import Home from "@/components/Home";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Home",
};

const HomePage = () => {
    return (
        <section>
            <Home />
        </section>
    )
};

export default HomePage;