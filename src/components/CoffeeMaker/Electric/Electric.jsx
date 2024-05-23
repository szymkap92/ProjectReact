// import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ele1 from "../../../assets/Elek1.png";
import ele2 from "../../../assets/Elek2.png";
import ele3 from "../../../assets/Elek3.jpg";

import styles from "./Electric.module.css";

export function Electric() {
	return (
		<Container
			className={styles.cardContainer}
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-around",
			}}
		>
			{[ele1, ele2, ele3].map((src, index) => (
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
								][index]
							}
						</Card.Title>
						<Card.Text style={{ textAlign: "center", color: "blue" }}>
							{["539,00zł", "519,00zł", "300,00zł"][index]}
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
				<h1>Kawiarki elektryczne</h1>
				<p>
					Kawiarki elektryczne to niezwykle wygodne w obsłudze urządzenia do
					parzenia pysznej kawy, przy pomocy metody ciśnieniowej. Kawiarka
					zapewnia wyjątkowy, aromatyczny smak, którego nie sposób uzyskać,
					jedynie zalewając wrzątkiem mieloną lub rozpuszczalną kawę. Największą
					zaletę tego urządzenia jest prostota wykonania, dzięki której ceny
					kawiarek nie są wygórowane. Są łatwe w użyciu, a czyszczenie przebiega
					szybko. Napój z kawiarki pozbawiony jest fusów, a także osadu, który
					może nadać napojowi nieprzyjemnego posmaku.
				</p>
				<p>
					Kawiarki elektryczne posiadają podstawkę elektryczną, pozwalającą na
					regulację czasu parzenia kawy oraz klasyczny dzbanek, odporny na
					działanie wysokiej temperatury – aluminiowy lub stalowy.
				</p>
				<h2>Kawiarka elektryczna – idealny prezent dla kawosza</h2>
				<p>
					Połączenie tradycji z nowoczesnością tworzy niezwykłe urządzenie,
					które nie tylko uprzyjemni Twój dzień, ale również może być idealnym
					prezentem na różne okazje. Przygotowanie napoju w kawiarce
					elektrycznej zajmuje zaledwie kilka minut, a jednocześnie umożliwia
					celebrowanie rytuału przyrządzania kawy.
				</p>
			</div>
		</Container>
	);
}
