import React from "react";
import "./Footer.css";

// function FootLink() {
//     return <p className="pl-1 cursor-pointer text-left leading-8"></p>;
// }
const FootLink = (prop) => {
    return (
        <p className="pl-1 cursor-pointer text-left mb-3 text-sm">
            {prop.children}
        </p>
    );
};

export default FootLink;
