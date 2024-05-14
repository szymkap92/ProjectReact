import { Products } from "./components/Products/Products";
import { Footer } from "./components/Footer/Footer";
import { Slider } from "./components/Slider/Slider";

export function Home() {
    return <>
            <Slider />
            <Products />
        </>
}