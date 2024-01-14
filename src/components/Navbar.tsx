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
                toggleButtonRef.current.contains(event.target)
            ) {
                // Ignore clicks on the toggle button
                return;
            }
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target)
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
            className="fixed top-0 inset-x-0 h-15 border-b border-zinc-300 z-[10] py-3 bg-gray-900/5 object-cover shadow-lg"
            style={{ backgroundColor: "#234c8b" }}
        >
            <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
                {/* Logo (Kappa Theta Pi) */}
                <div className="flex items-center">
                    <Link href="/">
                        <h1
                            className="text-white font-medium md:block"
                            style={{ fontSize: "25px" }}
                        >
                            Kappa Theta Pi
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
                            <Link href="/" className="block text-white py-2">
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="block text-white py-2"
                            >
                                About Us
                            </Link>

                            <Link
                                href="/members"
                                className="block text-white py-2"
                            >
                                Members
                            </Link>

                            <Link
                                href="/rush"
                                className="block text-white py-2"
                            >
                                Rush
                            </Link>
                        </div>
                    </div>
                )}

                {/* Desktop Menu */}
                <div className="hidden md:flex items-right justify-between gap-8 text-white">
                    <Link
                        href="/"
                        style={{ fontSize: "22px" }}
                        className="hover:text-gray-300"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        style={{ fontSize: "22px" }}
                        className="hover:text-gray-300"
                    >
                        About Us
                    </Link>
                    <div className="dropdown">
                        <Link
                            href="/members"
                            style={{ fontSize: "22px" }}
                            className="hover:text-gray-300"
                        >
                            <div className="flex">
                                Members{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30px"
                                    height="30px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="fill-current mt-1 "
                                >
                                    <path d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" />
                                </svg>
                            </div>
                        </Link>
                        <div className="dropdown-content">
                            <Link href="/members">E-Board</Link>
                            <Link href="/members#directors">Directors</Link>
                            <Link href="/members#actives">Actives</Link>
                        </div>
                    </div>

                    <Link
                        href="/rush"
                        style={{ fontSize: "22px" }}
                        className="hover:text-gray-300"
                    >
                        Rush
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
