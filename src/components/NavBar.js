import React, { useContext, useState } from "react";

import { Button, useDisclosure } from "@chakra-ui/react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/NavBar.css";
import * as Scroll from "react-scroll";
import { Context } from "..";
import { CreateModal } from "./CreateModal";

export const NavBar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { userStore } = useContext(Context);
	const [visible, setVisible] = useState(false);

	console.log(location);

	return (
		<div>
			<Navbar bg="light" variant="light">
				<Container>
					<Navbar.Brand>
						<Link to="/">F.E.A.S.T</Link>
					</Navbar.Brand>
					<Nav className="nav">
						<Scroll.Link className="link" to="wrapper-need-help">
							Им нужна помощь
						</Scroll.Link>
						<Scroll.Link className="link" to="wrapper-how-to-help">
							Как помочь
						</Scroll.Link>
						<Scroll.Link className="link" to="wrapper-about">
							О фонде
						</Scroll.Link>
					</Nav>
					<div>
						{userStore._isAuth ? (
							userStore.user.email
						) : (
							<Button
								colorScheme="teal"
								variant="ghost"
								onClick={() => navigate("/login")}
							>
								Авторизация
							</Button>
						)}
						<Button
							colorScheme="red"
							className="ms-3"
							onClick={() => navigate("/payment")}
						>
							Пожертвовать
						</Button>
						{userStore.user.role === "ADMIN" ? (
							<Button
								colorScheme="green"
								className="ms-3"
								variant="outline"
								onClick={() => setVisible((prev) => !prev)}
							>
								Добавить
							</Button>
						) : null}
					</div>
					<CreateModal isOpen={visible} onClose={() => setVisible()} />
				</Container>
			</Navbar>
		</div>
	);
};
