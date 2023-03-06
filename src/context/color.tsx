import { colors } from "@/styles/colors";
import { createContext } from "react";

const randomColor = () => {
    const randIndex = Math.floor(Math.random() * (colors.length));
    return colors[randIndex];
}
export const ColorContext = createContext<string>(colors[0]);

export const ColorProvider = ({children}: {children: JSX.Element}) => {
    const mainColor = randomColor();
    return(
        <ColorContext.Provider value={mainColor}>
            {children}
        </ColorContext.Provider>
    )
}