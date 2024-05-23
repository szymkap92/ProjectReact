//import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mielona1 from "../../../assets/Mielona1.png";
import mielona2 from "../../../assets/Mielona2.png";
import mielona3 from "../../../assets/Mielona3.png";
import mielona4 from "../../../assets/Mielona4.png";
import mielona5 from "../../../assets/Mielona5.png";
import mielona6 from "../../../assets/Mielona6.jpg";
import mielona7 from "../../../assets/Mielona7.jpg";
import mielona8 from "../../../assets/Mielona8.jpg";
import styles from "./CoffeeM.module.css";

export function CoffeeM() {
	return (
		<Container
			className={styles.cardContainer}
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-around",
			}}
		>
			{[
				mielona1,
				mielona2,
				mielona3,
				mielona4,
				mielona5,
				mielona6,
				mielona7,
				mielona8,
			].map((src, index) => (
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
									"Kimbo Extra Cream 1kg",
									"Pellini Top 100% Arabica",
									"Lavazza Qualita Rossa",
									"Segafredo Intermezzo",
									"Illy Espresso",
									"Starbucks Blonde Roast",
									"Tchibo Exclusive",
									"Costa Coffee Medium Roast",
								][index]
							}
						</Card.Title>
						<Card.Text style={{ textAlign: "center", color: "blue" }}>
							{
								[
									"69,00zł",
									"79,00zł",
									"45,00zł",
									"50,00zł",
									"85,00zł",
									"75,00zł",
									"60,00zł",
									"80,00zł",
								][index]
							}
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
				<h1>Kawa mielona</h1>
				<p>
					Kawa mielona to wygodny i szybki sposób na przygotowanie pysznej kawy.
					Jest idealnym wyborem dla tych, którzy cenią sobie wygodę i czas, a
					jednocześnie nie chcą rezygnować z doskonałego smaku i aromatu. Proces
					mielenia pozwala na uwolnienie pełni smaku kawowych ziaren, co
					sprawia, że każda filiżanka kawy mielonej jest prawdziwą ucztą dla
					zmysłów.
				</p>

				<h2>Przewaga kawy mielonej</h2>
				<p>
					Kawa mielona charakteryzuje się wyjątkową łatwością przygotowania.
					Wystarczy zalać ją wrzątkiem lub zaparzyć w ekspresie, aby cieszyć się
					pełnią smaku i aromatu. Dzięki różnorodności dostępnych na rynku
					mielonych kaw, każdy miłośnik tego napoju znajdzie coś dla siebie – od
					delikatnych, łagodnych smaków, po intensywne, głębokie aromaty. Kawa
					mielona to także doskonały wybór dla osób, które dopiero zaczynają
					swoją przygodę z kawą, gdyż nie wymaga specjalistycznego sprzętu ani
					umiejętności.
				</p>

				<h2>Gatunki kawy mielonej</h2>
				<h3>Arabica</h3>
				<p>
					Kawa mielona z ziaren Arabica to klasyka gatunku. Charakteryzuje się
					delikatnym smakiem z nutami owocowymi i kwiatowymi, oraz niską
					zawartością kofeiny. Jest to wybór idealny dla osób ceniących subtelne
					doznania smakowe. Arabica jest najbardziej popularnym gatunkiem kawy
					na świecie, co świadczy o jej niezrównanej jakości i niepowtarzalnym
					smaku.
				</p>

				<h3>Robusta</h3>
				<p>
					Kawa mielona z ziaren Robusta to wybór dla tych, którzy lubią
					intensywny smak i mocne, wyraziste doznania. Charakteryzuje się wyższą
					zawartością kofeiny niż Arabica, co czyni ją idealną do porannego
					pobudzenia. Robusta ma pełniejszy smak z nutami orzechów i czekolady,
					co sprawia, że jest doskonała do przygotowania espresso.
				</p>

				<h3>Mieszanki</h3>
				<p>
					Mieszanki kawy mielonej łączą w sobie zalety obu gatunków – Arabica i
					Robusta. Takie połączenie zapewnia zrównoważony smak i aromat, który
					zadowoli nawet najbardziej wymagających kawoszy. Mieszanki są idealne
					do przygotowania różnorodnych napojów kawowych, od delikatnych
					cappuccino po mocne espresso.
				</p>
			</div>
		</Container>
	);
}
