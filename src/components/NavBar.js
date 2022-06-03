import React from "react";

import { Button } from "@chakra-ui/react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../css/NavBar.css";

export const NavBar = () => {
	const navigate = useNavigate();

	return (
		<div>
			<Navbar bg="light" variant="light">
				<Container>
					<Navbar.Brand>
						<Link to="/">F.E.A.S.T</Link>
					</Navbar.Brand>
					<Nav className="nav">
						<NavLink to="/">Им нужна помощь</NavLink>
						<NavLink to="/login">Как помочь</NavLink>
						<NavLink to="/registration">О фонде</NavLink>
					</Nav>
					<div>
						<Button
							colorScheme="teal"
							variant="ghost"
							onClick={() => navigate("/login")}
						>
							Авторизация
						</Button>
						<Button colorScheme="red" className="ms-3">
							Пожертвовать
						</Button>
					</div>
				</Container>
			</Navbar>
		</div>
	);
};
