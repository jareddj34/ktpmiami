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
        { name: "Youssof Alwardany", class: "Alpha" },
        { name: "Laura Amore", class: "Alpha" },
        { name: "Miranda Bialek", class: "Alpha" },
        { name: "Javier Carrillo", class: "Alpha" },
        { name: "Jared de Monteiro", class: "Alpha" },
        { name: "Chris Eagar", class: "Alpha" },
        { name: "Julian Estrada", class: "Alpha" },
        { name: "Cole Foster", class: "Alpha" },
        { name: "Andaiye Gibson", class: "Alpha" },
        { name: "Sebastian Gonzales-Portillo", class: "Alpha" },
        { name: "Raquel Henao", class: "Alpha" },
        { name: "Rick Howell", class: "Alpha" },
        { name: "Nate Joseph", class: "Alpha" },
        { name: "Roni Kennedy", class: "Alpha" },
        { name: "Zain Khalid", class: "Alpha" },
        { name: "Ella Khrapko", class: "Alpha" },
        { name: "Sophia Knutson", class: "Alpha" },
        { name: "John L'Amoreaux", class: "Alpha" },
        { name: "Kaitlyn Landrove", class: "Alpha" },
        { name: "Zoey Lee", class: "Alpha" },
        { name: "Yassid Martinez", class: "Alpha" },
        { name: "Devon Mason", class: "Alpha" },
        { name: "Mason Muscarello", class: "Alpha" },
        { name: "Sofia Papa", class: "Alpha" },
        { name: "Sofia Perez-Baux", class: "Alpha" },
        { name: "Kayleen Ramirez", class: "Alpha" },
        { name: "Carlos Rodriguez", class: "Alpha" },
        { name: "Kali Rhyder", class: "Alpha" },
        { name: "Taylor Shirk", class: "Alpha" },
        { name: "Stone Sparkes", class: "Alpha" },
        { name: "Sean Sweeney", class: "Alpha" },
        { name: "Mia Uy", class: "Alpha" },
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
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-20 lg:grid-cols-3">
                    {["Founders", "Alpha"].map((memberClass) => (
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
