import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { Footer } from "./components/Footer/Footer";
import { Slider } from "./components/Slider/Slider";
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<Slider />
			<Products />
			<Footer />
		</>
	);
}

export default App;
