import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "KTPMiami",
    description: "KTP website for UMiami",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen pt-12 bg-slate-50 antialiased">
                <Navbar />
                <div className="container max-w-7xl mx-auto h-full pt-10 pb-4">
                    {children}
                </div>
            </body>
        </html>
    );
}
