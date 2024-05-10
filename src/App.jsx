import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { Footer } from "./components/Footer/Footer";
import { Slider } from "./components/Slider/Slider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { Test } from "./Test";
import { Home } from "./Home";
import {Coffee} from "./components/Shop/Coffee/Coffee";
import { Accessories } from "./components/Shop/Accessories/Accessories";
import { Tea } from "./components/Shop/Tea/Tea";
import {Occasion} from "./components/Occassion/Occassion";
import "./App.css";



function App() {
	return (
		<Router>
			<>
				<Header />
				<div className="content">
					<Routes>
						<Route path="/" element = {<Home />} />
						{/* <Route path="/test" element = {<Test />} /> */}
						<Route path="/Coffee" element = {<Coffee/>}/>
						<Route path="/Accessories" element = {<Accessories/>}/>
						<Route path="/Tea" element = {<Tea/>}/>
						<Route path="/Occasion" element = {<Occasion/>}/>
					</Routes>
				</div>
				<Footer />
			</>
		</Router>
	);
	//Do przywrócenia
	// return (
	// 	<>
	// 		<Header />
	// 		<Slider />
	// 		<Products />
	// 		<Footer />
	// 	</>
	// );
}

export default App;
