"use client";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const events = [
    {
        imageSrc: "/images/house.png",
        size: 50,
        title: "Open House",
        description:
            "Join us for one of our Open Houses! First, we'll give a presentation about what it means to be a brother in KTP. Then, we'll break out into open discussion and you'll have a chance to ask our brothers any questions related to rush, Kappa Theta Pi, or anything else you may be wondering!",
        date: "January 31, 8:00-9:00pm",
        location: "Whitten LC 170",
    },
    {
        imageSrc: "/images/cocktail.png",
        size: 40,
        title: "Mixer",
        description:
            "Come out to our mixer to get to know our brothers better! You'll get to know more about our rush process, and ask any questions you may have about the fraternity.",
        date: "February 1, 8:00-10:00pm",
        location: "Tables Outside Business School",
    },
    {
        imageSrc: "/images/paper.png",
        size: 40,
        title: "Applications Due",
        description:
            "Make sure you get your applications submitted! No late applications will be accepted.",
        date: "January 31 - February 5, 11:59pm",
        location: (
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdjFiEFYKaeUYHp3izFcsBbtgdBAMJxqIdcH-M5ZQzYbTv5eg/viewform"
                target="_blank"
                className="text-blue-500"
            >
                Click here for the application!
            </a>
        ),
    },
    {
        imageSrc: "/images/lock.png",
        size: 45,
        title: "Closed Rush",
        description:
            "Closed rush will consist of a few events for us to know you better, and an interview. We will be in contact with you to schedule these events.",
        date: "February 7-10",
        location: "",
    },
];

export default function Timeline() {
    return (
        <>
            <VerticalTimeline lineColor="#234c8b">
                {events.map((event, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        iconStyle={{
                            background: "#c3d2fa",
                            color: "black",

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        icon={
                            <Image
                                src={event.imageSrc}
                                width={event.size}
                                height={event.size}
                            />
                        }
                    >
                        <h1 className="text-2xl font-bold">{event.title}</h1>
                        <h1 className="mt-2">{event.description}</h1>
                        <h1 className="mt-2">
                            <em>{event.date}</em>
                        </h1>
                        <h1 className="">{event.location}</h1>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </>
    );
}
