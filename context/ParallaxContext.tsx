import { createContext } from "react";

interface Props {
    scrollY: number;
}

export const ParallaxContext = createContext<Props>({} as Props)