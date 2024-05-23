import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Capsule1 from "../../../assets/Cap1.jpg";
import Capsule2 from "../../../assets/Cap2.jpg";
import Capsule3 from "../../../assets/Cap3.jpg";
import styles from "./Capsules.module.css";

export function Capsules() {
  return (
    <Container
      className={styles.cardContainer}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {[Capsule1, Capsule2, Capsule3].map((src, index) => (
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
                ["Bialetti CF40", "Bialetti Smart CF65", "Bialetti CF44 Mokissima"][
                  index
                ]
              }
            </Card.Title>
            <Card.Text style={{ textAlign: "center", color: "blue" }}>
              {["920,50", "859,99", "889,00zł"][index]}
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
        <h1>Ekspresy kapsułkowe</h1>
        <p>
          Kapsułkowe ekspresy do kawy to najlepsze rozwiązanie dla osób żyjących
          w pośpiechu i ceniących wygodę. Sprzęty tego rodzaju są niezwykle
          łatwe w obsłudze. Idealnie sprawdzą się na początku przygody z domowym
          przygotowaniem kawy, gdyż nie wymagają wysokich umiejętności parzenia
          "małej czarnej". Ich obsługa ogranicza się głównie do wyboru kapsułki
          i naciśnięcia odpowiedniego przycisku. Dzięki ekspresom kapsułkowym
          można cieszyć się smakiem i aromatem ulubionego napoju w kilka chwil,
          bez zbędnego wysiłku, nawet w największym porannym pośpiechu.
        </p>
        <h2>Zalety ekspresów do kawy w kapsułkach</h2>
        <p>
          Przygotowanie kawy z ekspresem automatycznym jest nie tylko dziecinnie
          proste, ale także szybkie. Wystarczy wybrać odpowiednią kapsułkę z
          ulubionym rodzajem kawy, włożyć ją do ekspresu, nacisnąć odpowiedni
          przycisk, by po paru chwilach zachwycać się pysznym napojem. Taka
          forma przygotowania kawy przypadnie z pewnością do gustu tym, którzy
          żyją w ciągłym zabieganiu. Bardzo łatwy w czyszczeniu i utrzymaniu
          sprzęt, zapewnia odpowiednią higienę parzenia kawy.
        </p>
        <h2>Ekspresy kapsułkowe – postaw na komfort i atrakcyjną cenę!</h2>
        <p>
          Ekspres do kawy na kapsułki nie jest dużym wyzwaniem pod względem
          finansowym. W porównaniu do ekspresów ciśnieniowych cena kapsułkowego
          jest znacznie niższa. Wziąć pod uwagę należy jednak koszty utrzymania
          i zakupu kapsułek, które są stosunkowo wysokie. Na etapie wybierania
          sprzętu, warto pamiętać także o tym, że do konkretnego modelu
          ekspresu, dedykowane są określone rodzaje kapsułek.
        </p>
      </div>
    </Container>
  );
}
