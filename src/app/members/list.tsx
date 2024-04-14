export default function List() {
    const members = [
        { name: "Mia Uy", class: "Founders" },
        { name: "Zoey Lee", class: "Founders" },
        { name: "Jared de Monteiro", class: "Founders" },
        { name: "Chris Eager", class: "Founders" },
        { name: "Laura Amore", class: "Founders" },
        { name: "Yassid Martinez", class: "Founders" },
        { name: "Sophia Knutson", class: "Founders" },
        { name: "Ella Khrapko", class: "Founders" },
        { name: "Sofia Papa", class: "Founders" },
        { name: "Kavya Jain", class: "Founders" },
        //Alpha
        { name: "Youssof Alwardany", class: "Alpha" },
        { name: "Miranda Bialek", class: "Alpha" },
        { name: "Javier Carrillo", class: "Alpha" },
        { name: "Julian Estrada", class: "Alpha" },
        { name: "Cole Foster", class: "Alpha" },
        { name: "Andaiye Gibson", class: "Alpha" },
        { name: "Sebastian Gonzales-Portillo", class: "Alpha" },
        { name: "Raquel Henao", class: "Alpha" },
        { name: "Rick Howell", class: "Alpha" },
        { name: "Nate Joseph", class: "Alpha" },
        { name: "Roni Kennedy", class: "Alpha" },
        { name: "Zain Khalid", class: "Alpha" },
        { name: "John L'Amoreaux", class: "Alpha" },
        { name: "Kaitlyn Landrove", class: "Alpha" },
        { name: "Devon Mason", class: "Alpha" },
        { name: "Mason Muscarello", class: "Alpha" },
        { name: "Sofia Perez-Baux", class: "Alpha" },
        { name: "Kayleen Ramirez", class: "Alpha" },
        { name: "Carlos Rodriguez", class: "Alpha" },
        { name: "Kali Rhyder", class: "Alpha" },
        { name: "Taylor Shirk", class: "Alpha" },
        { name: "Stone Sparkes", class: "Alpha" },
        { name: "Sean Sweeney", class: "Alpha" },
        //Beta
        { name: "Sean Andrews", class: "Beta" },
        { name: "Hannah Beatty", class: "Beta" },
        { name: "Sidney Cocimano", class: "Beta" },
        { name: "Ivy Enyenihi", class: "Beta" },
        { name: "Rachel Farinas", class: "Beta" },
        { name: "Natalia Guardiola", class: "Beta" },
        { name: "Rand Luthringer", class: "Beta" },
        { name: "Daniel Li", class: "Beta" },
        { name: "Sabrina Perron-Vega", class: "Beta" },
        { name: "Caitlin Raymond", class: "Beta" },
        { name: "Anthony Santoro", class: "Beta" },
        { name: "Emma Soupharath", class: "Beta" },
        { name: "Thomas Sydnor", class: "Beta" },
        { name: "Rachel Tomasetti", class: "Beta" },
    ];

    return (
        <>
            <h1 className="flex justify-center text-5xl mt-10 font-bold">
                All Classes
            </h1>
            <hr className="bg-black-500 h-px my-6" />
            <div
                className="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-10"
                id="list"
            >
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-20 lg:grid-cols-3 ml-10">
                    {["Founders", "Alpha", "Beta"].map((memberClass) => (
                        <div key={memberClass}>
                            <h1 className="text-xl font-bold">{memberClass}</h1>
                            <ul>
                                {members
                                    .filter(
                                        (member) => member.class === memberClass
                                    )
                                    .map((member) => (
                                        <li key={member.name}>{member.name}</li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
