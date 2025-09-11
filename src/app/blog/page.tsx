import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/legacy/image";

const posts = [
    {
        title: "KTP Takes over the Hackathon!",
        date: "February 2025",
        description: (<>Several members of KTP took on the Horizon AI Hackathon at the Univesrity of Miami, with
        brothers both organizing and competing! Students were brought together to develop AI solutions for meaningful
        impact. A total of 11 brothers ended up placing in the event!
        
        <ul>
            <li>- Ivy Enyenihi</li>
            <li>- Mohammed Qadi</li>
            <li>- Javier Carrillo, Kayleen Ramirez, Thomas Sydnor</li>
            <li>- Andy Dietel, Nasir Grant, Paige Swarthout</li>
            <li>- Odin Andrews, Cedric Fine, Jared de Monteiro</li>
        </ul>
        </>
        ),
        pic: "/images/AlphaBeta.jpeg",
        alt: "",
    },
    {
        title: "Hackathon Win",
        date: "February 2025",
        description: `I was lucky enough to be a part of a research project at the University of Miami, 
            partnering with Dr. Ubbo Visser. The objective of the project was to create digital tests, 
            to detect whether the user has any signs of minor cognitive impariment or Alzheimer's disease. 
            Variations of these tests have already been worked on, including a real-world test, and a 
            online test that can be taken on the computer. The purpose of this project is to produce 
            another variation of this test, where the users can take it in a VR headset. This will give 
            the exams a more immersive element to it, while also allowing it to be digitalized. It was 
            such a great experience working on this project, allowing me to demonstrate my skills in 
            Unity VR, and collaborate with talented individuals like Dr. Visser and Dr. Lisetti. 
            The documentation for the project can be viewed`,
        pic: "/images/AlphaBeta.jpeg",
        alt: "",
    },
];

export default function Blog() {
    return (
        <>
            <h1 className="flex justify-center text-5xl mt-8 font-bold">
                Blog
            </h1>
            <p className="text-center mt-8 text-lg">
                Check out some of the amazing stuff that our members are up to!
            </p>
            <hr className="bg-black-500 h-px my-6" />
            {/* <Carousel>
                <CarouselContent> */}
                    {posts.map((post, index) => {
                        return (
                            // <CarouselItem key={index}>
                            <>
                                <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 my-10">
                                    <div className="w-full md:w-1/4 flex items-center justify-center relative mt-10">
                                        {post.pic ? (
                                            <Image
                                                src={`${post.pic}`}
                                                alt={post.alt}
                                                width={300}
                                                height={300}
                                                className="w-full h-auto max-w-xs md:max-w-full object-cover rounded-lg"
                                            />
                                        ) : (
                                            <div className="bg-gray-200 w-48 h-48"></div>
                                        )}
                                    </div>
                                    <div className="w-3/4 pt-10">
                                        <h2 className="font-bold text-2xl">
                                            {post.title}
                                        </h2>
                                        <h3 className="text-xl">{post.date}</h3>
                                        <div className="mt-4">
                                            {post.description}
                                        </div>
                                    </div>
                                </div>
                                <hr className="bg-black-500 h-px my-6" />
                                </>
                            // </CarouselItem>
                        );
                    })}
                {/* </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel> */}
        </>
    )
}