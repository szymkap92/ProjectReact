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
import { Aluminium } from "./components/CoffeeMaker/Aluminium/Aluminium";
import { Steel } from "./components/CoffeeMaker/Steel/Steel";
import { Electric } from "./components/CoffeeMaker/Electric/Electric";
<<<<<<< HEAD
import { CoffeeM } from "./components/Shop/CoffeeM/CoffeeM";
import { Automatic } from "./components/CoffeeMachine/Automatic/Automatic";
import { Capsules } from "./components/CoffeeMachine/Capsules/Capsules";
import { Kolbowe } from "./components/CoffeeMachine/Kolbowe/Kolbowe";
import { Przelewowe } from "./components/CoffeeMachine/Przelewowe/Przelewowe";
=======
>>>>>>> 98a69c8f072c75003617c341a459b79d50f2ea7a



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
						<Route path="/Aluminium" element = {<Aluminium/>}/>
						<Route path="/Steel" element = {<Steel/>}/>
						<Route path="/Electric" element = {<Electric/>}/>
<<<<<<< HEAD
						<Route path="/CoffeeM" element = {<CoffeeM/>}/>
						<Route path="/Automatic" element = {<Automatic/>}/>
						<Route path="/Capsules" element = {<Capsules/>}/>
						<Route path="/Kolbowe" element = {<Kolbowe/>}/>
						<Route path="/Przelewowe" element = {<Przelewowe/>}/>
=======
>>>>>>> 98a69c8f072c75003617c341a459b79d50f2ea7a
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
