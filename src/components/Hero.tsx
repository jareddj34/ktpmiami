import Footer from "@/components/Footer";
import Image from "next/image";
import "animate.css";

export default function Hero() {
    return (
        <>
            <div className="flex">
                <div className="mt-40 w-2/3 pr-10">
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
                </div>

                <div className="flex mb-10">
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 max-w-5xl mx-auto">
                        <Image
                            src="/images/VerticalMeetingPic.jpeg"
                            alt=""
                            height={800}
                            width={800}
                            className="w-full rounded-xl shadow-lg transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform"
                        />
                        <Image
                            src="/images/BeachSelfie.JPG"
                            alt=""
                            height={200}
                            width={200}
                            className="w-full rounded-xl object-cover shadow-lg mt-10 transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform"
                        />
                        <Image
                            src="/images/whiteboard.jpg"
                            alt=""
                            height={800}
                            width={800}
                            className="w-full rounded-xl shadow-lg transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform"
                        />
                        <Image
                            src="/images/Dinner.jpg"
                            alt=""
                            height={200}
                            width={200}
                            className="mt-10 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform"
                        />
                        <Image
                            src="/images/bed.jpg"
                            alt=""
                            height={200}
                            width={200}
                            className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform"
                        />
                        <Image
                            src="/images/SoccerGame.JPG"
                            alt=""
                            height={200}
                            width={200}
                            className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:transform"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
