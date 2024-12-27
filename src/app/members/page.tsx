import Footer from "@/components/Footer";
import Image from "next/legacy/image";
import MembersGrid from "./membersgrid";
import Eboard from "./eboard";
import Gboard from "./gboard";
import List from "./list";

export default function Members() {
    return (
        <>
            {/* <div className="anchor" id="eboard">
                <h1 className="flex justify-center text-5xl mt-4 font-bold text-center">
                    Executive Board
                </h1>

                <hr className="bg-black-500 h-px my-6" />
                <Eboard />
            </div> */}

            <div className="anchor" id="directors">
                <Gboard />
            </div>

            <div className="anchor" id="actives">
                <MembersGrid />
            </div>

            <div className="anchor" id="list">
                <List />
            </div>
        </>
    );
}
