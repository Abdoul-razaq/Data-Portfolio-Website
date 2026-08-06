import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If user navigates to a section like /#projects
        if (hash) {
            const id = hash.replace("#", "");
            const scrollToElement = () => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            };

            scrollToElement();
            const t1 = setTimeout(scrollToElement, 100);
            const t2 = setTimeout(scrollToElement, 400);
            const t3 = setTimeout(scrollToElement, 800);

            return () => {
                clearTimeout(t1);
                clearTimeout(t2);
                clearTimeout(t3);
            };
        }

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    }, [pathname, hash]);

    return null;
}