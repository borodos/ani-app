import { Heading } from "@chakra-ui/react";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../css/Footer.css";
import * as Scroll from "react-scroll";

export const Footer = () => {
	return (
		<section className="bg-dark" style={{ color: "white" }}>
			<Container className="footer mt-4 mb-5">
				<div className="footer-info">
					<Heading as="h5" size="sm" className="mb-4">
						Информация
					</Heading>
					<Nav className="footer-nav">
						<Scroll.Link to="wrapper-need-help">Им нужна помощь</Scroll.Link>
						<Scroll.Link to="wrapper-how-to-help">Как помочь</Scroll.Link>
						<Scroll.Link to="wrapper-about">О фонде</Scroll.Link>
					</Nav>
				</div>
				<div className="footer-contacts">
					<Heading as="h5" size="sm" className="mb-4">
						Контакты
					</Heading>
					<Heading as="h6" size="xs">
						Горячая линия
					</Heading>
					<Heading as="h4" size="md" className="mb-4 mt-4">
						8-800-222-76-10
					</Heading>
					<div>
						<p>Если нужна помощь:</p>
						<p>help@peoplefound.ru</p>
					</div>
				</div>
				<div className="footer-requisites">
					<Heading as="h5" size="sm" className="mb-4">
						Реквизиты
					</Heading>
					<div className="mb-4 mt-4">
						<p>Благотворительный фонд</p>
						<p>F.E.A.S.T</p>
					</div>
					<div>
						<p>
							<strong>ИНН: &nbsp;</strong>
							<span>7704469916</span>
						</p>
						<p>
							<strong>КПП: &nbsp;</strong>
							<span>770401001</span>
						</p>
						<p>
							<strong>ОГРН/ОГРНИП: &nbsp;</strong>
							<span>1187700022388</span>
						</p>
						<p>
							<strong>БАНК: &nbsp;</strong>
							<span>ПАО СБЕРБАНК</span>
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};
