import Image from "next/image";

const members = [
    {
        name: "Mia Uy",
        image: "/images/headshots/Mia.JPG",
        linkedin: "https://www.linkedin.com/in/mia-uy-817a5827a/",
        title: "Co-President",
    },
    {
        name: "Zoey Lee",
        image: "/images/headshots/Zoey.jpg",
        linkedin: "https://www.linkedin.com/in/zoey-lee-876827279/",
        title: "Co-President",
    },
    {
        name: "Jared de Monteiro",
        image: "/images/headshots/Jared.JPG",
        linkedin: "https://www.linkedin.com/in/jared-de-monteiro-60aa7925b/",
        title: "Co-VP of Technical Development",
        web: "https://www.jareddemonteiro.me/",
    },
    {
        name: "Nate Joseph",
        image: "/images/headshots/Nate.JPG",
        linkedin: "https://www.linkedin.com/in/nathanieljoseph/",
        title: "Co-VP of Technical Development",
        web: "https://natejoseph.me/",
    },
    {
        name: "Laura Amore",
        image: "/images/headshots/Laura.png",
        linkedin: "https://www.linkedin.com/in/laura-amore-a937bb1bb/",
        title: "VP of Finance",
    },
    {
        name: "Yassid Martinez",
        image: "/images/headshots/Sid.JPG",
        linkedin: "https://www.linkedin.com/in/yassid/",
        title: "VP of Professional Development",
    },
    {
        name: "Sophia Knutson",
        image: "/images/headshots/Sophia.JPG",
        linkedin: "https://www.linkedin.com/in/sophia-knutson/",
        title: "VP of Marketing",
    },
    {
        name: "Ella Khrapko",
        image: "/images/headshots/Ella.JPG",
        linkedin: "https://www.linkedin.com/in/ellakhrapko/",
        title: "VP of Social Engagement",
    },
    {
        name: "Sofia Papa",
        image: "/images/headshots/Papa.JPG",
        linkedin: "https://www.linkedin.com/in/sofia-papa-16a4bb259/",
        title: "VP of Internal Affairs",
    },
    {
        name: "Devon Mason",
        image: "/images/headshots/Devon.JPG",
        linkedin: "https://www.linkedin.com/in/devonjmason/",
        title: "VP of External Affairs",
    },
];

export default function Eboard() {
    return (
        <>
            <div
                className="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-10"
                id="e-board"
            >
                <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-8">
                    {members.map((member) => (
                        <div
                            key={member.name}
                            className="group relative transition sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:transform"
                        >
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1">
                                <Image
                                    alt={member.name}
                                    src={member.image}
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:overlay-blue"
                                    priority={true}
                                />
                                <div className="overlay flex items-center justify-center absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity">
                                    <a
                                        href={member.linkedin}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="60"
                                            height="60"
                                            viewBox="0 0 50 50"
                                        >
                                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                        </svg>
                                    </a>
                                    {member.web && (
                                        <a
                                            href={member.web}
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                            target="_blank"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="60"
                                                height="60"
                                                viewBox="0 0 24 24"
                                                className="hover-float"
                                            >
                                                <path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"></path>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "normal",
                                    textAlign: "center",
                                    height: "6rem",
                                }}
                            >
                                <h1 className="mt-2 text-md font-medium text-gray-700">
                                    {member.name}
                                </h1>
                                <p className="mt-1 text-md text-gray-900">
                                    {member.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
