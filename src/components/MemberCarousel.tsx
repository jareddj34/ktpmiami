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
        image: "/images/headshots/alpha/Sebastian.JPG",
        name: "Sebastian Gonzales-Portillo",
        text: "KTP was the doorway to connecting me with so many smart, passionate, and down to Earth people within my field of interest. Having this community as a resource is indispensable.",
        status: "Current Member",
    },
    {
        image: "/images/headshots/alpha/Kaitlyn.JPG",
        name: "Kaitlyn Landrove",
        text: "KTP allows me to make friends and connections within my major, allowing for more opportunities and growth socially, professionally, and technically.",
        status: "Current Member",
    },
    {
        image: "/images/headshots/alpha/Nate.JPG",
        name: "Nate Joseph",
        text: "To me, KTP means that I have a group of friends that share similar professional interests with me that I really enjoy being around. To be a part of such a unique, smart, and fun group of people is what makes KTP, KTP.",
        status: "Current Member",
    },
];

export default function MemberCarousel() {
    return (
        <Carousel className="w-4/5 sm:w-1/2">
            <CarouselContent>
                {members.map((member, index) => (
                    <CarouselItem key={index}>
                        <div className="flex justify-center">
                            <div className="flex flex-col sm:flex-row justify-center w-full sm:w-[600px] space-y-4 sm:space-y-0 sm:space-x-4">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    className="rounded-full object-cover mx-auto" // Add mx-auto class for centering on mobile
                                    height={400}
                                    width={400}
                                />

                                <div>
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
    );
}
