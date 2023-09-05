import { Button } from "@/components/ui/button";

export default function Rush() {
    return (
        <>
            <h1 className="flex justify-center text-5xl mt-4 font-bold">
                Rush Spring 2023!
            </h1>

            <p className="flex justify-center text-lg mt-8">
                Start your journey of becoming part of a brotherhood with like
                minded individuals, with a passion for tech
            </p>
            <p className="flex justify-center text-lg mt-5">
                Click
                <a
                    className="text-blue-500 ml-1 mr-1"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdBkvQV9alZAldJ9_VJdrMwmpF5q3mZjgY92Oohoio62DW30A/viewform"
                    target="_blank"
                >
                    here
                </a>
                to apply for rush this Spring. Make sure to follow us on
                <a
                    className="text-blue-500 ml-1 mr-1"
                    href="https://www.instagram.com/ktp.umiami/"
                    target="_blank"
                >
                    Instagram
                </a>
                for more updates
            </p>
        </>
    );
}
