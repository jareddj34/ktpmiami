import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Timeline from "@/components/Timeline";

export default function Rush() {
    return (
        <>
            <h1 className="flex justify-center text-center text-5xl mt-4 font-bold">
                Rush Spring 2026!
            </h1>

            <p className="flex justify-center text-center text-lg mt-8">
                Start your journey of becoming part of a brotherhood with people
                who have a passion for tech.
            </p>
            <p className="text-lg text-center mt-4">
                Make sure to follow us on{" "}
                <a
                    className="text-blue-500"
                    href="https://www.instagram.com/ktp.umiami/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>{" "}
                for updates about next Spring.
            </p>

            <h1 className="flex justify-center text-4xl mt-20 mb-5 font-bold">
                Events
            </h1>
            <p className="flex justify-center text-center mb-10">
                Our rush process will follow these order of events. Dates and
                locations to be determined.
            </p>

            <Timeline />
        </>
    );
}
