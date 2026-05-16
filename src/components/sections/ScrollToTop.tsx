import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If user navigates to a section like /#projects
        if (hash) {
            const id = hash.replace("#", "");
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
            return;
        }

        // Default behavior (normal page navigation)
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    }, [pathname, hash]);

    return null;
}