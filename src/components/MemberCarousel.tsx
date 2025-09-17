import Image from "next/legacy/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const members = [

    {
        image: "/images/headshots/beta/Hannah_B.jpeg",
        name: "Hannah Beatty",
        text: "KTP connected me to many smart, driven, and unique people at the university. I deeply appreciate KTP’s commitment to fostering community and providing opportunities.",
        status: "Current Member",
    },
    {
        image: "/images/headshots/delta/Andy.jpeg",
        name: "Andy Dietel",
        text: "KTP introduced me to such a supportive community of passionate, tech-driven people. Since joining, I've grown so much as a student and a profressional, and I've made some great friends along the way.",
        status: "Current Member",
    },
    {
        image: "/images/headshots/founding/Jared.jpeg",
        name: "Jared de Monteiro",
        text: "KTP has really helped me within my college experience. I have met so many great friends and learned so much that I will take with me for the rest of my life.",
        status: "Current Member",
    },
    {
        image: "/images/headshots/alpha/Sebastian.jpeg",
        name: "Sebastian Gonzales-Portillo",
        text: "KTP was the doorway to connecting me with so many smart, passionate, and down to Earth people within my field of interest. Having this community as a resource is indispensable.",
        status: "Former Member",
    },
    {
        image: "/images/headshots/alpha/Kaitlyn.jpeg",
        name: "Kaitlyn Landrove",
        text: "KTP allows me to make friends and connections within my major, allowing for more opportunities and growth socially, professionally, and technically.",
        status: "Former Member",
    },
    
    
];

export default function MemberCarousel() {
    return (
        <>
            <Carousel className="w-4/5 sm:w-1/2">
                <CarouselContent>
                    {members.map((member, index) => (
                        <CarouselItem key={index}>
                            <div className="flex justify-center items-center" key={index}>
                                <div className="flex flex-col sm:flex-row items-center w-full sm:w-[600px] space-y-4 sm:space-y-0 sm:space-x-4">
                                    {/* Image container with fixed size and aspect ratio */}
                                    <div className="relative w-[150px] h-[150px] mx-auto rounded-full overflow-hidden shrink-0">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            layout="fill"
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Div for text content, now aligning items to the start on larger screens */}
                                    <div className="flex flex-col">
                                        <h1 className="text-center sm:text-left text-lg font-bold">
                                            {member.name}
                                        </h1>
                                        <p className="text-center sm:text-left text-gray-600">
                                            {member.status}
                                        </p>
                                        <p className="text-center sm:text-left">
                                            {member.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            
        </>
    );
}
