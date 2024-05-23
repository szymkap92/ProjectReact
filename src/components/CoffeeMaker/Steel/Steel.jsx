import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import steel1 from "../../../assets/stalowy1.png";
import steel2 from "../../../assets/stalowy2.png";
import steel3 from "../../../assets/stalowy3.png";
import steel4 from "../../../assets/stalowy4.png";
import steel5 from "../../../assets/stalowy5.png";
import steel6 from "../../../assets/stalowy6.png";
import steel7 from "../../../assets/stalowy7.jpg";
import steel8 from "../../../assets/stalowy8.jpg";
import styles from "./Steel.module.css";

export function Steel() {
	return (
		<Container
			className={styles.cardContainer}
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-around",
			}}
		>
			{[steel1, steel2, steel3, steel4, steel5, steel6, steel7, steel8].map(
				(src, index) => (
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
										"Bielletti Kitty Nera Induction",
										"Bielletti Kitty Nera Induction 4 filiżanki",
										"Bielletti Kitty Musa",
										"Bielletti Kitty Venus",
										"Giannini Giannina",
										"Pedrini Steel Moka",
										"Bialetti Class",
										"Kaufgut Miss Diamond",
									][index]
								}
							</Card.Title>
							<Card.Text style={{ textAlign: "center", color: "blue" }}>
								{
									[
										"171,50",
										"132,99",
										"190,00zł",
										"175,30",
										"131,90",
										"212,90",
										"313,00zł",
										"160,50",
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
				)
			)}

			<div className={styles.textContainer}>
				<h1>Kawiarka stalowa</h1>
				<p>
					Kawiarka stalowa to eleganckie i trwałe urządzenie, które doskonale
					sprawdza się w codziennym parzeniu kawy. Wykonana z wysokiej jakości
					stali nierdzewnej, zapewnia nie tylko estetyczny wygląd, ale również
					długowieczność i odporność na uszkodzenia. Stal nierdzewna
					charakteryzuje się doskonałym przewodnictwem ciepła, co pozwala na
					uzyskanie idealnej kawy o pełnym smaku i aromacie. Jest to wybór
					idealny dla tych, którzy cenią sobie zarówno funkcjonalność, jak i
					styl w swojej kuchni.
				</p>
				<h2>Zalety kawiarki stalowej</h2>
				<p>
					Kawiarka stalowa oferuje szereg zalet, które czynią ją jednym z
					najbardziej pożądanych narzędzi do parzenia kawy. Jej wyjątkowa
					wytrzymałość i odporność na korozję sprawiają, że jest to inwestycja
					na lata. Stalowy korpus jest łatwy do czyszczenia i utrzymania w
					czystości, co dodatkowo zwiększa komfort użytkowania. Ponadto,
					kawiarki stalowe często posiadają elegancki, nowoczesny design, który
					doskonale komponuje się z różnymi stylami wnętrz.
				</p>
			</div>
		</Container>
	);
}
