//import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import herbata1 from "../../../assets/Herbata1.jpg";
import herbata2 from "../../../assets/Herbata2.jpg";
import herbata3 from "../../../assets/Herbata3.jpg";
import herbata4 from "../../../assets/Herbata4.jpg";
import herbata5 from "../../../assets/Herbata5.jpg";
import herbata6 from "../../../assets/Herbata6.jpg";
import herbata7 from "../../../assets/Herbata7.jpg";
import herbata8 from "../../../assets/Herbata8.jpg";
import styles from "./Tea.module.css";

export function Tea() {
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
				herbata1,
				herbata2,
				herbata3,
				herbata4,
				herbata5,
				herbata6,
				herbata7,
				herbata8,
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
									"Samo Zdrowie 1kg",
									"Happy Kids",
									"Karnawał w Rio",
									"Łyk Szczęscia",
									"Mamma Mia",
									"Ambrozja - Super Owoc",
									"Jagodowy Raj",
									"Love Story",
								][index]
							}
						</Card.Title>
						<Card.Text style={{ textAlign: "center", color: "blue" }}>
							{
								[
									"11,50",
									"12,99",
									"10,00zł",
									"15,30",
									"11,90",
									"12,90",
									"13,00zł",
									"10,50",
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
				<h1>Herbata</h1>
				<p>
					Herbata to jeden z najstarszych i najbardziej cenionych napojów na
					świecie. Znana ze swoich zdrowotnych właściwości, różnorodnych smaków
					i aromatów, jest napojem, który doskonale sprawdza się o każdej porze
					dnia. Od delikatnych białych herbat, przez klasyczne czarne, aż po
					zdrowe zielone i egzotyczne oolongi – herbata ma coś do zaoferowania
					każdemu miłośnikowi napojów.
				</p>

				<h2>Rodzaje herbat</h2>
				<h3>Herbata czarna</h3>
				<p>
					Herbata czarna to najpopularniejszy rodzaj herbaty, który
					charakteryzuje się mocnym smakiem i głębokim aromatem. Jest w pełni
					fermentowana, co nadaje jej charakterystyczny ciemny kolor i
					intensywny smak. Herbata czarna jest doskonałym wyborem na poranek,
					gdyż zawiera więcej kofeiny niż inne rodzaje herbat.
				</p>

				<h3>Herbata zielona</h3>
				<p>
					Herbata zielona to napój, który zdobył ogromną popularność dzięki
					swoim zdrowotnym właściwościom. Jest minimalnie przetworzona, co
					pozwala zachować większość jej naturalnych składników. Herbata zielona
					jest bogata w przeciwutleniacze, które pomagają w walce z wolnymi
					rodnikami, oraz ma delikatny, świeży smak.
				</p>

				<h3>Herbata biała</h3>
				<p>
					Herbata biała to najdelikatniejszy rodzaj herbaty, który powstaje z
					młodych liści i pączków krzewu herbacianego. Jest najmniej
					przetworzona, co pozwala zachować jej naturalny, subtelny smak i
					aromat. Herbata biała jest również bogata w przeciwutleniacze i ma
					właściwości relaksujące.
				</p>

				<h3>Herbata oolong</h3>
				<p>
					Herbata oolong to wyjątkowy rodzaj herbaty, który łączy cechy herbaty
					zielonej i czarnej. Jest częściowo fermentowana, co nadaje jej
					unikalny smak i aromat. Oolong jest często określana jako herbata
					turkusowa i jest ceniona za swoje właściwości odchudzające i
					wspomagające trawienie.
				</p>

				<h2>Mieszanki herbat</h2>
				<p>
					Mieszanki herbat to kompozycje różnych rodzajów herbat i dodatków,
					które tworzą unikalne smaki i aromaty. Mogą zawierać suszone owoce,
					kwiaty, przyprawy i inne składniki, które wzbogacają smak herbaty i
					oferują wyjątkowe doznania smakowe. Mieszanki herbat są idealne dla
					tych, którzy lubią eksperymentować i odkrywać nowe smaki.
				</p>
			</div>
		</Container>
	);
}
