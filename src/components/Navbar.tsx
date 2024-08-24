"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const toggleButtonRef = useRef(null);
    

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (
                toggleButtonRef.current &&
                (toggleButtonRef.current as HTMLElement).contains(event.target)
            ) {
                // Ignore clicks on the toggle button
                return;
            }
            if (
                mobileMenuRef.current &&
                !(mobileMenuRef.current as HTMLElement)?.contains(event.target)
            ) {
                setIsMobileMenuOpen(false); // Close the mobile menu
            }
        }

        // Attach the listeners on component mount.
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Detach the listeners on component unmount.
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className="fixed top-0 inset-x-0 h-15 z-[10] py-2 object-cover shadow-2xl"
            style={{ backgroundColor: "#234c8b" }}
        >
            <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
                {/* Logo (Kappa Theta Pi) */}
                <div className="flex items-center">
                    <Link href="/">
                        <h1
                            className="text-white font-medium"
                            style={{ fontSize: "30px" }}
                        >
                            ΚΘΠ
                        </h1>
                    </Link>
                </div>

                {/* Mobile Menu Button (Hamburger or X) */}
                <div className="flex items-center">
                    <button
                        ref={toggleButtonRef}
                        onClick={toggleMobileMenu}
                        className="md:hidden text-white text-xl focus:outline-none"
                    >
                        {isMobileMenuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        ref={mobileMenuRef}
                        className="md:hidden absolute top-14 inset-x-0"
                        style={{ backgroundColor: "#234c8b" }}
                    >
                        <div className="container mx-auto py-4">
                            <Link
                                href="/"
                                className="block text-white py-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const sectionId = "#hero"; // Replace "hero" with the ID of your target section
                                    const targetSection =
                                        document.querySelector(sectionId);

                                    if (targetSection) {
                                        const offset = 100; // Adjust the offset value
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
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="block text-white py-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const sectionId = "#about"; // Replace "hero" with the ID of your target section
                                    const targetSection =
                                        document.querySelector(sectionId);

                                    if (targetSection) {
                                        const offset = 100; // Adjust the offset value
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
                                About Us
                            </Link>

                            <Link
                                href="/members"
                                className="block text-white py-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const sectionId = "#members"; // Replace "hero" with the ID of your target section
                                    const targetSection =
                                        document.querySelector(sectionId);

                                    if (targetSection) {
                                        const offset = 100; // Adjust the offset value
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
                                Members
                            </Link>

                            <Link
                                href="/rush"
                                className="block text-white py-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const sectionId = "#rush"; // Replace "hero" with the ID of your target section
                                    const targetSection =
                                        document.querySelector(sectionId);

                                    if (targetSection) {
                                        const offset = 100; // Adjust the offset value
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
                        </div>
                    </div>
                )}

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-between gap-8 text-white">
                    <Link
                        href="/"
                        style={{ fontSize: "22px" }}
                        className="hover:text-gray-300"

                        // Had to comment the smooth scroll because it was not working when adding other pages to the site
                        // Im sure there is a way so that it scrolls when on the mian page and redirects when in the uhack page
                        // Too lazy to figure that out now... -Javi

                        // Jared why :(


                        // onClick={(e) => {
                        //     e.preventDefault();
                        //     const sectionId = "#hero"; // Replace "hero" with the ID of your target section
                        //     const targetSection =
                        //         document.querySelector(sectionId);

                        //     if (targetSection) {
                        //         const offset = 150; // Adjust the offset value
                        //         const targetPosition =
                        //             targetSection.getBoundingClientRect().top +
                        //             window.scrollY -
                        //             offset;
                        //         window.scrollTo({
                        //             top: targetPosition,
                        //             behavior: "smooth",
                        //         });
                        //     }
                        // }}
                    >
                        Home
                    </Link>
                    <Link
                        href="/#about"
                        style={{ fontSize: "22px" }}
                        className="hover:text-gray-300"
                        // onClick={(e) => {
                        //     e.preventDefault();
                        //     const sectionId = "#about"; // Replace "hero" with the ID of your target section
                        //     const targetSection =
                        //         document.querySelector(sectionId);

                        //     if (targetSection) {
                        //         const offset = 125; // Adjust the offset value
                        //         const targetPosition =
                        //             targetSection.getBoundingClientRect().top +
                        //             window.scrollY -
                        //             offset;
                        //         window.scrollTo({
                        //             top: targetPosition,
                        //             behavior: "smooth",
                        //         });
                        //     }
                        // }}
                    >
                        About Us
                    </Link>

                    <Link
                        href="/#members"
                        style={{ fontSize: "22px" }}
                        className="hover:text-gray-300"
                        // onClick={(e) => {
                        //     e.preventDefault();
                        //     const sectionId = "#members"; // Replace "hero" with the ID of your target section
                        //     const targetSection =
                        //         document.querySelector(sectionId);

                        //     if (targetSection) {
                        //         const offset = 100; // Adjust the offset value
                        //         const targetPosition =
                        //             targetSection.getBoundingClientRect().top +
                        //             window.scrollY -
                        //             offset;
                        //         window.scrollTo({
                        //             top: targetPosition,
                        //             behavior: "smooth",
                        //         });
                        //     }
                        // }}
                    >
                        Members{" "}
                    </Link>

                    <Link
                        href="/#rush"
                        style={{ fontSize: "22px" }}
                        className="hover:text-gray-300"
                        // onClick={(e) => {
                        //     e.preventDefault();
                        //     const sectionId = "#rush"; // Replace "hero" with the ID of your target section
                        //     const targetSection =
                        //         document.querySelector(sectionId);

                        //     if (targetSection) {
                        //         const offset = 150; // Adjust the offset value
                        //         const targetPosition =
                        //             targetSection.getBoundingClientRect().top +
                        //             window.scrollY -
                        //             offset;
                        //         window.scrollTo({
                        //             top: targetPosition,
                        //             behavior: "smooth",
                        //         });
                        //     }
                        // }}
                    >
                        Rush
                    </Link>
                    
                    {/* Uncoment when ready */}
                    <Link
                        href="/uhack"
                        style={{ fontSize: "22px" }}
                        className="hover:text-gray-300"
                    >
                        UHack
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
