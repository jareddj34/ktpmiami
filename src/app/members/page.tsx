import Footer from "@/components/Footer";
import Image from "next/image";
import MembersGrid from "./membersgrid";
import Eboard from "./eboard";
import Gboard from "./gboard";

export default function Members() {
    return (
        <>
            <div className="anchor" id="eboard">
                <Eboard />
            </div>

            <div className="anchor" id="directors">
                <Gboard />
            </div>

            <div className="anchor" id="actives">
                <MembersGrid />
            </div>

            <Footer />
        </>
    );
}
