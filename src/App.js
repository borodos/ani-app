import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

import "./css/App.css";
import AppRoutes from "./routes/AppRoutes";
import { Footer } from "./components/Footer";
import { Context } from ".";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";
import { getNeededs } from "./http/neededApi";

function App() {
	const { userStore } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		check()
			.then((data) => {
				userStore.setUser(data);
				userStore.setIsAuth(true);
			})
			.finally(() => setLoading(false));
	}, [userStore]);

	useEffect(() => {
		getNeededs().then((data) => {
			console.log(data);
		});
	}, []);

	if (loading) {
		return (
			<Spinner
				animation="border"
				role="status"
				style={{ position: "fixed", top: "50%", left: "50%" }}
			>
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		);
	}

	return (
		<div className="app-wrapper">
			{/* -- Установка стилей Chakra UI */}
			<ChakraProvider>
				<BrowserRouter>
					<NavBar />
					<AppRoutes />
					<Footer />
				</BrowserRouter>
			</ChakraProvider>
		</div>
	);
}

export default App;
