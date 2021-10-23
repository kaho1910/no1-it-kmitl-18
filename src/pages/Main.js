import React from "react";
import DocTitle from "../components/etc/DocTitle";
import Show from "./Show";
import Part2 from "../components/Main/Part2";
import Part3 from "../components/Main/Part3";
import Part6 from "../components/Main/Part6";
import Part7 from "../components/Main/Part7";
import Part9 from "../components/Main/Part9";
import Part12 from "../components/Main/Part12";
import Part14 from "../components/Main/Part14";
import Part18 from "../components/Main/Part18";
import Part19 from "../components/Main/Part19";

function main() {
    DocTitle("PlayStation®5 | Play Has No Limits | PlayStation");
    return (
        <div className="content">
            {/* <Show /> */}

            {/* static 2 */}
            <Part2 />

            {/* static 3 youtube */}
            <Part3 />

            {/* slide 4 controller*/}

            {/* slide 5 dual sense*/}

            {/* static 6 trigger*/}
            <Part6 />

            {/* static 7 communication*/}
            <Part7 />

            {/* slide 8 */}

            {/* static 9 ssd */}
            <Part9 />

            {/* slide 10 ssd showcase */}

            {/* static 11 ray-tracing */}

            {/* static 12 spidy */}
            <Part12 />

            {/* static 13 games */}

            {/* static 14 playstation plus */}
            <Part14 />

            {/* slide 15 pulse-3d */}

            {/* static 16 tv */}

            {/* slide 17 ps5 */}

            {/* static 18 more */}
            <Part18 />

            {/* static 19 footer */}
            <Part19 />
        </div>
    );
}

export default main;
