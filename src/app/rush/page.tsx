import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Timeline from "@/components/Timeline";

export default function Rush() {
    return (
        <>
            <h1 className="flex justify-center text-5xl mt-4 font-bold">
                Rush Spring 2024!
            </h1>

            <p className="flex justify-center text-lg mt-8">
                Start your journey of becoming part of a brotherhood with people
                who have a passion for tech.
            </p>
            <p className="text-lg text-center mt-4">
                Click{" "}
                <a
                    className="text-blue-500"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdjFiEFYKaeUYHp3izFcsBbtgdBAMJxqIdcH-M5ZQzYbTv5eg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </a>{" "}
                to apply for rush this Spring. Make sure to follow us on{" "}
                <a
                    className="text-blue-500"
                    href="https://www.instagram.com/ktp.umiami/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>{" "}
                for updates.
            </p>

            <h1 className="flex justify-center text-4xl mt-20 mb-10 font-bold">
                Events
            </h1>

            <Timeline />

            <div style={{ marginTop: "500px" }}>
                <Footer />
            </div>
        </>
    );
}
