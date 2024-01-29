import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Testbar from "@/components/Testbar";

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
            <Head>
                <title>KTP Miami</title>
                <meta name="description" content="KTP website for UMiami" />
                <meta
                    name="keywords"
                    content="KTP, UMiami, Miami, Kappa Theta Pi, Technology, Fraternity"
                />
            </Head>
            <body className="min-h-screen pt-12 bg-slate-50 antialiased">
                <Navbar />
                <div className="container max-w-7xl mx-auto h-full pt-10 pb-4">
                    {children}
                </div>
            </body>
        </html>
    );
}
