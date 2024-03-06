import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="row flex flex-col lg:flex-row mt-10 mb-40">
                <div className="space-y-4 col-lg-7 col-md-6">
                    <h1 className="flex justify-left text-5xl mt-4 font-bold">
                        About Us
                    </h1>
                    <hr className="bg-black-500 h-px my-6" />
                    <p className="text-2xl" style={{ maxWidth: "650px" }}>
                        Kappa Theta Pi stands as the first-ever professional
                        technology fraternity at the University of Miami. Our
                        focus is on cultivating technological expertise and
                        professionalism among our members. Beyond skills, we
                        value the bonds of friendship and trust that form the
                        core of effective networking. Join us as we embark on
                        our recruitment for our first ever class, laying the
                        foundation for a lasting KTP legacy at the University of
                        Miami. Explore our website to learn about our founders,
                        the upcoming recruitment process, and our fraternitys
                        vision.
                    </p>
                </div>
                <div
                    className="lg:ml-auto col-lg-7"
                    style={{ marginTop: "90px" }}
                >
                    <Image
                        src="/images/AlphaBeta.jpeg"
                        alt=""
                        height={550}
                        width={550}
                        className="rounded-xl bg-gray-900/5 object-cover shadow-lg transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform"
                    />
                </div>
            </div>

            <div className="mb-10">
                <h1 className="text-5xl mt-4 mb-8 font-bold flex justify-center">
                    DEI Commitment
                </h1>
                <hr className="bg-black-500 h-px my-6" />
                <p className="flex justify-center text-lg mt-8">
                    The world of technology is unique, diverse, and
                    multi-faceted. We believe that our brothers should be too.
                    In Kappa Theta Pi, we’re passionate about cultivating an
                    inclusive community that promotes and values diversity. Our
                    dedication to diversity, equity, and inclusion is
                    unwavering; these values are central to our mission and to
                    our impact. We know that having heterogeneous perspectives
                    helps generate better ideas to solve the nuanced problems of
                    a changing — and increasingly diverse — world.
                </p>
                <p className="flex justify-center text-lg mt-4">
                    In KTP, we have a responsibility to address structural
                    inequality in our communities as well as the social and
                    cultural dimensions of technology. We are committed to
                    harnessing the best of KTP — our people, platform, and
                    technical innovation — to make lasting change inside and
                    outside of our organization.
                </p>
            </div>

            <div className="relative bg-gray-50 py-8 sm:py-16">
                <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                    <h1 className="text-5xl mt-4 mb-8 font-bold">Pillars</h1>
                    <hr className="bg-black-500 h-px my-6" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="box transition-shadow border transition px-6 pb-8 sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform">
                                    <div className="icon">
                                        <span className="inline-flex items-center justify-center rounded-xl bg-green-700 p-2 shadow-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="orange"
                                                className="w-8 h-8"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <h1 className="mt-8 text-2xl font-bold tracking-tight leading-8 tracking-tight text-gray-900">
                                        Professional Development
                                    </h1>
                                    <p className="mt-5 text-base leading-7 text-gray-600">
                                        Through events like interview training,
                                        resume building, one-on-one mentorship,
                                        private company recruiting, and more,
                                        Kappa Theta Pi Professional Development
                                        aims to prepare members for success in
                                        any technology-related career. We take
                                        pride in developing the tech leaders of
                                        the future.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="box transition-shadow border transition px-6 pb-8 sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform">
                                    <div className="icon">
                                        <span className="inline-flex items-center justify-center rounded-xl bg-green-700 p-2 shadow-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="orange"
                                                className="w-8 h-8"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <h1 className="mt-8 text-2xl font-bold tracking-tight leading-8 tracking-tight text-gray-900">
                                        Alumni Connection
                                    </h1>
                                    <p className="mt-5 text-base leading-7 text-gray-600">
                                        Our alumni are spread out across the
                                        world and many work on cutting-edge
                                        technologies. Most of them work at a
                                        plethora of companies - from tech
                                        companies like Microsoft, Amazon,
                                        Facebook, Apple, and Google, to
                                        startups, consulting firms, financial
                                        technology firms, and more!
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="box transition-shadow border transition px-6 pb-8 sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform">
                                    <div className="icon">
                                        <span className="inline-flex items-center justify-center rounded-xl bg-green-700 p-2 shadow-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="orange"
                                                className="w-8 h-8"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <h1 className="mt-8 text-2xl font-bold tracking-tight leading-8 tracking-tight text-gray-900">
                                        Social Growth
                                    </h1>
                                    <p className="mt-5 text-base leading-7 text-gray-600">
                                        The people you meet in Kappa Theta Pi
                                        will go on to be some of your closest
                                        friends throughout college and beyond.
                                        We host a variety of exclusive social
                                        events throughout the semester through
                                        which our members can bond, some of
                                        which include formal, tailgates,
                                        retreat, and apple picking.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="box transition-shadow border transition px-6 pb-8 sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform">
                                    <div className="icon">
                                        <span className="inline-flex items-center justify-center rounded-xl bg-green-700 p-2 shadow-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="orange"
                                                className="w-8 h-8"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <h1 className="mt-8 text-2xl font-bold tracking-tight leading-8 tracking-tight text-gray-900">
                                        Technical Advancement
                                    </h1>
                                    <p className="mt-5 text-base leading-7 text-gray-600">
                                        Kappa Theta Pi provides members numerous
                                        opportunities to enhance their current
                                        technical skills, as well as learn new
                                        ones. Whether it be participation in one
                                        of our various project teams or
                                        attending a technical workshop, we make
                                        it easy for our members to expand their
                                        expertise.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="box transition-shadow border transition px-6 pb-8 sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform">
                                    <div className="icon">
                                        <span className="inline-flex items-center justify-center rounded-xl bg-green-700 p-2 shadow-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="orange"
                                                className="w-8 h-8"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <h1 className="mt-8 text-2xl font-bold tracking-tight leading-8 tracking-tight text-gray-900">
                                        Academic Support
                                    </h1>
                                    <p className="mt-5 text-base leading-7 text-gray-600">
                                        Kappa Theta Pi brothers strive to foster
                                        academic growth and excellence for each
                                        other. We provide a supportive network
                                        filled with some of the brightest tech
                                        minds at the university that members can
                                        always rely on for help in classes,
                                        projects, and extracurricular
                                        activities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
