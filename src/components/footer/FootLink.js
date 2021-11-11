import React from "react";
import "./Footer.css";

const FootLink = (prop) => {
    return (
        <p className="pl-1 cursor-pointer text-left mb-2 text-base">
            {prop.children}
        </p>
    );
};

export default FootLink;
