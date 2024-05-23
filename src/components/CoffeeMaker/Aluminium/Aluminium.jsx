//import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import alu1 from "../../../assets/aluminiowe1.png";
import alu2 from "../../../assets/aluminiowe2.jpg";
import alu3 from "../../../assets/aluminiowe3.jpg";
import alu4 from "../../../assets/aluminiowe4.jpg";

import styles from "./Aluminium.module.css";

export function Aluminium() {
	return (
		<Container
			className={styles.cardContainer}
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-around",
			}}
		>
			{[alu1, alu2, alu3, alu4].map((src, index) => (
				<Card
					key={index}
					className={styles.card}
					style={{ width: "18rem", margin: "10px" }}
				>
					<Card.Img
						variant="top"
						src={src}
						className={styles.cardImage}
						style={{ height: "180px", objectFit: "contain", width: "100%" }}
					/>
					<Card.Body>
						<Card.Title style={{ textAlign: "center" }}>
							{
								[
									"Bialletti Moka Express",
									"Bialletti Orzo",
									"Bialletti Dama Glamour",
									"Bialletti Kremina",
								][index]
							}
						</Card.Title>
						<Card.Text style={{ textAlign: "center", color: "blue" }}>
							{["119,00zł", "179,00zł", "245,00zł", "150,00zł"][index]}
						</Card.Text>
						<Button
							variant="secondary"
							style={{ display: "block", margin: "auto" }}
						>
							Kup teraz
						</Button>
					</Card.Body>
				</Card>
			))}
			<div className={styles.textContainer}>
				<h1>Kawiarka aluminiowa</h1>
				<p>
					Kawiarka aluminiowa to klasyczne urządzenie, które od lat cieszy się
					niesłabnącą popularnością wśród miłośników kawy. Wykonana z wysokiej
					jakości aluminium, zapewnia równomierne rozprowadzenie ciepła, co
					pozwala na wydobycie pełni smaku i aromatu z kawy. Aluminiowa
					konstrukcja sprawia, że kawiarka jest lekka, a jednocześnie trwała.
					Dzięki prostemu designowi i niezawodnemu działaniu, jest idealnym
					wyborem zarówno dla początkujących, jak i zaawansowanych kawoszy.
				</p>
				<h2>Zalety kawiarki aluminiowej</h2>
				<p>
					Kawiarka aluminiowa oferuje wiele zalet, które sprawiają, że jest
					jednym z najbardziej cenionych narzędzi do parzenia kawy. Jej lekkość
					i poręczność ułatwiają codzienne użytkowanie, a także przechowywanie.
					Aluminiowy materiał nie tylko przyspiesza proces parzenia, ale również
					jest odporny na korozję i łatwy do czyszczenia. Dzięki klasycznemu
					wyglądowi, kawiarka aluminiowa pasuje do każdej kuchni, dodając jej
					elegancji i stylu.
				</p>
			</div>
		</Container>
	);
}
