export default function Activities () {
    return (
        <div>
            <h3 className="text-3xl font-bold">Activities</h3>

            <div className="pl-4">
                <div className="mt-2">
                    <h4 className="text-xl font-bold">Workshops</h4>
                    <p>Throughout the hackathon, participants can attend workshops to develop their projects:</p>
                    <div className="my-2 p-5 bg-gradient-to-l from-blue-100 to-blue-300 rounded">
                        <h5 className="font-bold">Game Dev Workshops:</h5>
                        <ol className="list-disc px-4">
                            <li>Unity (Led by KTP advisor and CIM Professor Lorena Lopez)</li>
                            <li>PyGame (Simple Python-based game engine)</li>
                            <li>Scratch (Beginner-friendly, visual game engine)</li>
                            <li>LibGDX (Simple Java-based game engine)</li>
                        </ol>
                    </div>
                    <div className="my-2 p-5 bg-gradient-to-l from-blue-100 to-blue-300 rounded">
                        <h5 className="font-bold">App Design Workshops:</h5>
                        <ol className="list-disc px-4">
                            <li>Figma workshop/introduction (UI/UX) led by KTP and UM alumni Sofia Perez-Baux</li>
                            <li>Adobe (UI/UX)</li>
                            <li>Sketch (UI/UX)</li>
                            <li>HTML/CSS/Javascript</li>
                            <li>React</li>
                            <li>API Integration</li>
                        </ol>
                    </div>
                </div>
                
                <div className="mt-8">
                    <h4 className="text-xl font-bold">Panels & Competitions</h4>
                    <ol className="list-disc px-4">
                        <li><span className="font-bold">Sponsor Panels:</span> Learn about industry insights and get career advice.</li>
                        <li><span className="font-bold">Competitions:</span> Participate in challenges based on the sustainability theme, with special prizes from sponsors.</li>
                        <li><span className="font-bold">Judging:</span> A panel of UM professors and tech professionals will evaluate the projects.</li>
                    </ol>
                </div>

                <div className="mt-8">
                    <h4 className="text-xl font-bold">Break Activities</h4>
                    <ol className="list-disc px-4">
                        <li>Mario Kart & Super Smash Bros tournaments</li>
                        <li>Yoga/Meditation sessions</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}