import React, { forwardRef } from "react";
import ImageArray from "./ImageArray";

const Sequence = forwardRef(({ progress }, ref) => {
    const newImages = ImageArray();

    let index = Math.round(progress * (newImages.length - 1));

    return newImages.map((item, i) => (
        <span
            ref={ref}
            key={i}
            style={{
                display: i !== index ? "none" : "block",
                height: "100%",
                width: "100%",
                backgroundImage: `url('${item[0] ? item[0].src : null}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}></span>
    ));
});

export default Sequence;
