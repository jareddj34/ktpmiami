import Footer from "@/components/Footer";
import Image from "next/image";

export default function Members() {
    return (
        <>
            <h1 className="flex justify-center text-5xl mt-4 font-bold">
                Executive Board
            </h1>

            <div className="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-10">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
                    <a
                        href="https://www.linkedin.com/in/mia-uy-817a5827a/"
                        className="group relative transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        target="_blank"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1">
                            <Image
                                alt=""
                                src="/images/JaredPic.JPG"
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:overlay-blue"
                            />
                            <div className="overlay flex items-center justify-center absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="75"
                                    height="75"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </div>
                        </div>

                        <h1 className="mt-2 text-lg font-medium text-gray-700">
                            Mia Uy
                        </h1>
                        <p className="mt-1 text-md text-gray-900">
                            Co-President
                        </p>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jared-de-monteiro-60aa7925b/"
                        className="group relative transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        target="_blank"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1">
                            <Image
                                alt=""
                                src="/images/headshots/ZoeyPic.JPG"
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:overlay-blue"
                            />
                            <div className="overlay flex items-center justify-center absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="75"
                                    height="75"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </div>
                        </div>

                        <h1 className="mt-2 text-lg font-medium text-gray-700">
                            Zoey Lee
                        </h1>
                        <p className="mt-1 text-md text-gray-900">
                            Co-President
                        </p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jared-de-monteiro-60aa7925b/"
                        className="group relative transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        target="_blank"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1">
                            <Image
                                alt=""
                                src="/images/headshots/JaredPic.JPG"
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:overlay-blue"
                            />
                            <div className="overlay flex items-center justify-center absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="75"
                                    height="75"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </div>
                        </div>

                        <h1 className="mt-2 text-lg font-medium text-gray-700">
                            Jared de Monteiro
                        </h1>
                        <div className="h-7">
                            <p className="mt-1 text-md text-gray-900 text-center">
                                Co-VP of Technical Development
                            </p>
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chris-eagar/"
                        className="group relative transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        target="_blank"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1">
                            <Image
                                alt=""
                                src="/images/FacePic.png"
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:overlay-blue"
                            />
                            <div className="overlay flex items-center justify-center absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="75"
                                    height="75"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </div>
                        </div>

                        <h1 className="mt-2 text-lg font-medium text-gray-700">
                            Chris Eager
                        </h1>
                        <div className="h-7">
                            <p className="mt-1 text-md text-gray-900 text-center">
                                Co-VP of Technical Development
                            </p>
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jared-de-monteiro-60aa7925b/"
                        className="group relative transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        target="_blank"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1">
                            <Image
                                alt=""
                                src="/images/FacePic.png"
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:overlay-blue"
                            />
                            <div className="overlay flex items-center justify-center absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="75"
                                    height="75"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </div>
                        </div>

                        <h1 className="mt-2 text-lg font-medium text-gray-700">
                            Laura Amore
                        </h1>
                        <p className="mt-1 text-md text-gray-900">
                            VP of Finance
                        </p>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jared-de-monteiro-60aa7925b/"
                        className="group relative transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        target="_blank"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1">
                            <Image
                                alt=""
                                src="/images/FacePic.png"
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:overlay-blue"
                            />
                            <div className="overlay flex items-center justify-center absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="75"
                                    height="75"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </div>
                        </div>

                        <h1 className="mt-2 text-lg font-medium text-gray-700">
                            Yassid Martinez
                        </h1>
                        <div className="h-7">
                            <p className="mt-1 text-md text-gray-900 text-center">
                                VP of Professional Development
                            </p>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jared-de-monteiro-60aa7925b/"
                        className="group relative transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        target="_blank"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1">
                            <Image
                                alt=""
                                src="/images/headshots/SophiePic.JPG"
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:overlay-blue"
                            />
                            <div className="overlay flex items-center justify-center absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="75"
                                    height="75"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </div>
                        </div>

                        <h1 className="mt-2 text-lg font-medium text-gray-700">
                            Sophia Knutson
                        </h1>
                        <p className="mt-1 text-md text-gray-900">
                            VP of Marketing
                        </p>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jared-de-monteiro-60aa7925b/"
                        className="group relative transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        target="_blank"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1">
                            <Image
                                alt=""
                                src="/images/FacePic.png"
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:overlay-blue"
                            />
                            <div className="overlay flex items-center justify-center absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="75"
                                    height="75"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </div>
                        </div>

                        <h1 className="mt-2 text-lg font-medium text-gray-700">
                            Ella Khrapko
                        </h1>
                        <p className="mt-1 text-md text-gray-900">
                            VP of Social Engagement
                        </p>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sofia-papa-16a4bb259/"
                        className="group relative transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        target="_blank"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1">
                            <Image
                                alt=""
                                src="/images/FacePic.png"
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:overlay-blue"
                            />
                            <div className="overlay flex items-center justify-center absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="75"
                                    height="75"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </div>
                        </div>

                        <h1 className="mt-2 text-lg font-medium text-gray-700">
                            Sofia Papa
                        </h1>
                        <div className="h-7">
                            <p className="mt-1 text-md text-gray-900 text-center">
                                VP of Internal/External Affairs
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}
