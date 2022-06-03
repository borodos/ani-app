import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

import "./css/App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
	return (
		<div className="app-wrapper">
			{/* -- Установка стилей Chakra UI */}
			<ChakraProvider>
				<BrowserRouter>
					<NavBar />
					<AppRoutes />
				</BrowserRouter>
			</ChakraProvider>
		</div>
	);
}

export default App;
