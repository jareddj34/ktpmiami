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
        // Gamma
        { name: "Alvin Lam", class: "Gamma" },
        { name: "Benito Sandoval", class: "Gamma" },
        { name: "Cedric Fine", class: "Gamma" },
        { name: "Dhilan Fye", class: "Gamma" },
        { name: "Eden Pearson", class: "Gamma" },
        { name: "Eris Osborne", class: "Gamma" },
        { name: "Gianna Scuteri", class: "Gamma" },
        { name: "Grace Sousa", class: "Gamma" },
        { name: "Jacob Ahrens", class: "Gamma" },
        { name: "Jake Riina", class: "Gamma" },
        { name: "Jason Hugh", class: "Gamma" },
        { name: "Lucas Velasquez", class: "Gamma" },
        { name: "Matisohn Huynh", class: "Gamma" },
        { name: "Meagan Ali", class: "Gamma" },
        { name: "Nailah James", class: "Gamma" },
        { name: "Olivia Haynes", class: "Gamma" },
        { name: "Pramiti Dubey", class: "Gamma" },
        { name: "Rex Fullerton", class: "Gamma" },
        { name: "Zakaria Djahed", class: "Gamma" },
        // Delta
        { name: "Amanda Simensky", class: "Delta" },
        { name: "Andy Dietel", class: "Delta" },
        { name: "Avery Kingsepp", class: "Delta" },
        { name: "Christian Lawrence", class: "Delta" },
        { name: "Georgia Furman", class: "Delta" },
        { name: "Iva Jacoby", class: "Delta" },
        { name: "Keyan Dunmore", class: "Delta" },
        { name: "María José Jimenez", class: "Delta" },
        { name: "Messiah Majid", class: "Delta" },
        { name: "Nasir Grant", class: "Delta" },
        { name: "Norah Csaki", class: "Delta" },
        { name: "Odin Andrews", class: "Delta" },
        { name: "Olaedo Umeh", class: "Delta" },
        { name: "Paige Swarthout", class: "Delta" },
        { name: "Reid Forst", class: "Delta" },
        { name: "Yu Ning Kao", class: "Delta" },
    ].sort((a, b) => {
        const lastNameA = a.name.split(" ").slice(-1)[0];
        const lastNameB = b.name.split(" ").slice(-1)[0];
        return lastNameA.localeCompare(lastNameB);
      });

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
                    {["Founders", "Alpha", "Beta", "Gamma","Delta"].map((memberClass) => (
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
