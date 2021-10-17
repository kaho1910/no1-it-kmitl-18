import { useRef, useEffect } from "react";
import ToTop from "./ToTop";

function DocTitle(title) {
    ToTop();
    const defaultTitle = useRef(document.title);

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(
        () => () => {
            let prevailOnUnmount = true;
            if (!prevailOnUnmount) {
                document.title = defaultTitle.current;
            }
        },
        []
    );
}

export default DocTitle;
