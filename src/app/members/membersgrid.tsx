import Image from "next/image";

const members = [
    {
        name: "Youssof Alwardany",
        image: "/images/headshots/Youssof.JPG",
        linkedin: "https://www.linkedin.com/in/youssof-alwardany-b23161244/",
    },
    {
        name: "Laura Amore",
        image: "/images/headshots/Laura.JPG",
        linkedin: "https://www.linkedin.com/in/laura-amore/",
    },
    {
        name: "Miranda Bialek",
        image: "/images/headshots/Miranda.JPG",
        linkedin: "https://www.linkedin.com/in/miranda-bialek-5a1a2025b/",
    },
    {
        name: "Javier Carrillo",
        image: "/images/headshots/Javier.JPG",
        linkedin: "https://www.linkedin.com/in/jcarrilloz/",
    },
    {
        name: "Jared de Monteiro",
        image: "/images/headshots/Jared.JPG",
        linkedin: "https://www.linkedin.com/in/jareddemonteiro/",
        web: "https://jareddemonteiro.vercel.app/",
    },
    {
        name: "Chris Eagar",
        image: "/images/headshots/Chris.JPG",
        linkedin: "https://www.linkedin.com/in/chris-eagar/",
    },
    {
        name: "Julian Estrada",
        image: "/images/headshots/Julian.JPG",
        linkedin: "https://www.linkedin.com/in//",
    },
    {
        name: "Cole Foster",
        image: "/images/headshots/Cole.JPG",
        linkedin: "https://www.linkedin.com/in/cole-michael-foster/",
    },
    {
        name: "Andaiye Gibson",
        image: "/images/headshots/Andaiye.JPG",
        linkedin:
            "https://www.linkedin.com/company/kappa-theta-pi-sigma-chapter/",
    },
    {
        name: "Sebastian Gonzales-Portillo",
        image: "/images/headshots/Sebastian.JPG",
        linkedin: "https://www.linkedin.com/in/sebastiangonzalesportillo/",
    },
    {
        name: "Raquel Henao",
        image: "/images/headshots/Raquel.JPG",
        linkedin: "https://www.linkedin.com/in/raquel-henao-1a268129a/",
    },
    {
        name: "Rick Howell",
        image: "/images/headshots/Rick.JPG",
        linkedin: "https://www.linkedin.com/in/kappa-theta-pi-sigma-chapter/",
    },
    {
        name: "Nate Joseph",
        image: "/images/headshots/Nate.JPG",
        linkedin: "https://www.linkedin.com/in/nathanieljoseph/",
    },
    {
        name: "Roni Kennedy",
        image: "/images/headshots/Roni.JPG",
        linkedin: "https://www.linkedin.com/in/ronikennedy/",
    },
    {
        name: "Zain Khalid",
        image: "/images/headshots/Zain.JPG",
        linkedin: "https://www.linkedin.com/in/zain-khalid99/",
    },
    {
        name: "Ella Khrapko",
        image: "/images/headshots/Ella.JPG",
        linkedin: "https://www.linkedin.com/in/ellakhrapko/",
    },
    {
        name: "Sophia Knutson",
        image: "/images/headshots/Sophia.JPG",
        linkedin: "https://www.linkedin.com/in/sophia-knutson/",
    },
    {
        name: "John L'Amoreaux",
        image: "/images/headshots/John.JPG",
        linkedin: "https://www.linkedin.com/in/johnlam12/",
    },
    {
        name: "Kaitlyn Landrove",
        image: "/images/headshots/Kaitlyn.JPG",
        linkedin: "https://www.linkedin.com/in/kaitlyn-landrove/",
    },
    {
        name: "Zoey Lee",
        image: "/images/headshots/Zoey.jpg",
        linkedin: "https://www.linkedin.com/in/zoeylee123/",
    },
    {
        name: "Yassid Martinez",
        image: "/images/headshots/Sid.JPG",
        linkedin: "https://www.linkedin.com/in/yassid/",
    },
    {
        name: "Devon Mason",
        image: "/images/headshots/Devon.JPG",
        linkedin: "https://www.linkedin.com/in/devonjmason/",
    },
    {
        name: "Mason Muscarello",
        image: "/images/headshots/Mason.JPG",
        linkedin: "https://www.linkedin.com/in/mason-muscarello/",
    },
    {
        name: "Sofia Papa",
        image: "/images/headshots/Papa.JPG",
        linkedin: "https://www.linkedin.com/in/sofia-papa-16a4bb259/",
    },
    {
        name: "Sofia Perez-Baux",
        image: "/images/headshots/SofiaB.JPG",
        linkedin: "https://www.linkedin.com/in/sofiaperezbaux/",
    },
    {
        name: "Kayleen Ramirez",
        image: "/images/headshots/Kayleen.JPG",
        linkedin: "https://www.linkedin.com/in/pkramirez/",
    },
    {
        name: "Carlos Rodriguez",
        image: "/images/headshots/Carlos.JPG",
        linkedin: "https://www.linkedin.com/in/carlos-rodriguez-b23b58299/",
    },
    {
        name: "Kali Rhyder",
        image: "/images/headshots/Kali.JPG",
        linkedin: "https://www.linkedin.com/in/kaliryder/",
    },
    {
        name: "Taylor Shirk",
        image: "/images/headshots/Taylor.JPG",
        linkedin: "https://www.linkedin.com/in/taylor-shirk-81b248277/",
    },
    {
        name: "Stone Sparkes",
        image: "/images/headshots/Stone.JPG",
        linkedin: "https://www.linkedin.com/in/stone-sparkes-205596247/",
    },
    {
        name: "Sean Sweeney",
        image: "/images/headshots/Sean.JPG",
        linkedin: "https://www.linkedin.com/in/sean-sweeney-/",
    },
    {
        name: "Mia Uy",
        image: "/images/headshots/Mia.JPG",
        linkedin: "https://www.linkedin.com/in/mia-uy-817a5827a/",
    },
];

export default function MembersGrid() {
    return (
        <>
            <h1 className="flex justify-center text-5xl mt-4 font-bold">
                Active Members
            </h1>
            <hr className="bg-black-500 h-px my-6" />

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-7">
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
                                whiteSpace: "nowrap",
                                textAlign: "center",
                            }}
                        >
                            <h1 className="mt-2 text-md font-medium text-gray-700">
                                {member.name}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
