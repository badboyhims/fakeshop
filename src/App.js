// importing librarirs 
import react,{useEffect,useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";




// importing all pages or components 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ProductPage from './pages/ProductPage';

import Home from './pages/Home';


// importing css 
import './styles/global.css';





function App() {
	return (
		<div>
		<BrowserRouter>
			<div>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/product/:id" element={<ProductPage />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
		</div>
	);
}

export default App;
