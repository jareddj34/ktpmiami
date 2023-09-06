"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div
            className="fixed top-0 inset-x-0 h-fit border-b border-zinc-300 z-[10] py-3 bg-gray-900/5 object-cover shadow-lg"
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
                        onClick={toggleMobileMenu}
                        className="md:hidden text-white text-xl focus:outline-none"
                    >
                        {isMobileMenuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
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
                    <Link href="/" style={{ fontSize: "22px" }}>
                        Home
                    </Link>
                    <Link href="/about" style={{ fontSize: "22px" }}>
                        About Us
                    </Link>
                    <Link href="/members" style={{ fontSize: "22px" }}>
                        Members
                    </Link>
                    <Link href="/rush" style={{ fontSize: "22px" }}>
                        Rush
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

// import Image from "next/image";
// import Link from "next/link";

// const Navbar = async () => {
//     return (
//         <div
//             className="fixed top-0 inset-x-0 h-fit border-b border-zinc-300 z-[10] py-3  bg-gray-900/5 object-cover shadow-lg"
//             style={{ backgroundColor: "#234c8b" }}
//         >
//             <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
//                 {/* logo */}
//                 <Link href="/" className="flex gap-2 items-center">
//                     <h1
//                         className="hidden text-white font-medium md:block"
//                         style={{ fontSize: "25px" }}
//                     >
//                         Kappa Theta Pi
//                     </h1>
//                 </Link>

//                 <div className="flex items-right justify-between gap-8 text-white">
//                     <Link href="/" style={{ fontSize: "22px" }}>
//                         Home
//                     </Link>
//                     <Link href="/about" style={{ fontSize: "22px" }}>
//                         About Us
//                     </Link>
//                     <Link href="/members" style={{ fontSize: "22px" }}>
//                         Members
//                     </Link>
//                     <Link href="/rush" style={{ fontSize: "22px" }}>
//                         Rush
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
