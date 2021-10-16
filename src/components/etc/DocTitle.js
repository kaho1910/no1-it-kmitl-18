import { useRef, useEffect } from "react";

function DocTitle(title) {
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
