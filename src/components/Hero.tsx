"use client";

import Footer from "@/components/Footer";
import Image from "next/legacy/image";
import "animate.css";
import { ParallaxScroll } from "./ui/parallax";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className="flex">
                <div className="mt-40 xl:w-2/3 xl:pr-10 lg:w-2/3 lg:pr-10 md:w-2/3 md:pr-10 text-center sm:text-left">
                    <h1 className="flex justify-left text-6xl mt-4 font-bold">
                        Kappa Theta Pi
                    </h1>
                    <h2 className="flex justify-left text-3xl mt-4 font-bold">
                        Sigma Chapter @ UMiami
                    </h2>
                    <p style={{ maxWidth: "500px" }} className="mt-7 mb-7">
                        A community of like minded individuals with a passion
                        for tech and personal development.
                    </p>
                    <Button style={{ backgroundColor: "#234c8b" }}>
                        <Link
                            href="/rush"
                            className="text-lg"
                            onClick={(e) => {
                                e.preventDefault();
                                const sectionId = "#rush"; // Replace "hero" with the ID of your target section
                                const targetSection =
                                    document.querySelector(sectionId);

                                if (targetSection) {
                                    const offset = 150; // Adjust the offset value
                                    const targetPosition =
                                        targetSection.getBoundingClientRect()
                                            .top +
                                        window.scrollY -
                                        offset;
                                    window.scrollTo({
                                        top: targetPosition,
                                        behavior: "smooth",
                                    });
                                }
                            }}
                        >
                            Rush
                        </Link>
                    </Button>
                </div>

                <div className="hidden sm:block">
                    <div className="flex">
                        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 max-w-5xl mx-auto">
                            <div className="transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform">
                                <Image
                                    src="/images/SophiaFlag.JPG"
                                    alt="Sophia holding the flag"
                                    height={750}
                                    width={500}
                                    className="w-full rounded-xl shadow-lg object-cover"
                                />
                            </div>
                            <div className="transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform mt-12">
                                <Image
                                    src="/images/sidsofandkay.jpeg"
                                    alt="Kayleen Andaiye Sofia and Sid"
                                    height={400}
                                    width={500}
                                    className="w-full rounded-xl object-cover shadow-lg mt-10"
                                />
                            </div>
                            <div className="transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform">
                                <Image
                                    src="/images/ahot.jpeg"
                                    alt="AHOT pic"
                                    height={750}
                                    width={500}
                                    className="w-full rounded-xl shadow-lg object-cover"
                                />
                            </div>
                            <div className="transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform mt-9">
                                <Image
                                    src="/images/katanpic.jpeg"
                                    alt="Katan group"
                                    height={400}
                                    width={500}
                                    className="mt-10 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                />
                            </div>
                            <div className="transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform">
                                <Image
                                    src="/images/eboardpic.jpeg"
                                    alt="Board Bid Day"
                                    height={750}
                                    width={500}
                                    className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                />
                            </div>
                            <div className="transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform mt-9">
                                <Image
                                    src="/images/SoccerGame.JPG"
                                    alt="Soccer Game"
                                    height={400}
                                    width={500}
                                    className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
