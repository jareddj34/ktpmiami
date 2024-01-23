import Footer from "@/components/Footer";
import Image from "next/image";
import "animate.css";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <>
            <div className="hero-container">
                <Hero />
            </div>
            <Footer />
        </>
    );
}
