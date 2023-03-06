import { useEffect, useState } from "react"

export const useScrollDirection = () => {
    const [direction, setDirection] = useState<"up" | "down">("down");
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    useEffect(() => {
        if (window) {
            const scrollEvent = () => {
                const dir = lastScrollY > window.scrollY ? "up" : "down";
                if(dir !== direction) setDirection(dir);
                setLastScrollY(window.scrollY);
            }
            window.addEventListener("scroll", scrollEvent);
            return ()=>{
              window.removeEventListener("scroll", scrollEvent);
            }
        }
    }, [lastScrollY]);
    
    return { direction };
}