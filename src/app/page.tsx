import Footer from "@/components/Footer";
import Image from "next/legacy/image";
import "animate.css";
import Hero from "@/components/Hero";
import About from "./about/page";
import Eboard from "./members/eboard";
import Members from "./members/page";
import Rush from "./rush/page";
import Blog from "./blog/page";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import "animate.css";
import { InfiniteMovingCardsDemo } from "@/components/TestInfinite";

export default function Home() {
    return (
        <>
            <div className="hero-container" id="hero">
                <Hero />
            </div>
            <div id="about">
                <About />
            </div>
            <div className="mt-10 " id="members">
                <h1 className="text-center text-5xl mt-4 font-bold text-center">
                    Our Executive Board
                </h1>
                <p className="text-center mt-8 text-lg">
                    Our Board is determined to provide the best experience for
                    our fraternity
                </p>
                <hr className="mx-auto bg-black-500 h-px my-6 w-full" />
                <Eboard />

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="1">
                        <AccordionTrigger className="flex justify-center items-center text-2xl">
                            All Members
                        </AccordionTrigger>
                        <AccordionContent>
                            <Members />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* <hr className="mx-auto bg-black-500 h-px my-6 w-full" /> */}
            </div>
            {/* <div id="blog">
                <Blog />
            </div> */}
            <div className="mt-20" id="rush">
                <Rush />
            </div>
            <Footer />
        </>
    );
}
