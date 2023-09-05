import Link from "next/link";

const Navbar = async () => {
    return (
        <div
            className="fixed top-0 inset-x-0 h-fit border-b border-zinc-300 z-[10] py-3  bg-gray-900/5 object-cover shadow-lg"
            style={{ backgroundColor: "#234c8b" }}
        >
            <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
                {/* logo */}
                <Link href="/" className="flex gap-2 items-center">
                    <h1
                        className="hidden text-white font-medium md:block"
                        style={{ fontSize: "25px" }}
                    >
                        Kappa Theta Pi
                    </h1>
                </Link>

                <div className="flex items-right justify-between gap-8 text-white">
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
