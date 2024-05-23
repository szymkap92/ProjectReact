import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Przelew1 from "../../../assets/Przel1.jpg";
import Przelew2 from "../../../assets/Przel2.jpg";
import styles from "./Przelewowe.module.css";

export function Przelewowe() {
  return (
    <Container
      className={styles.cardContainer}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {[Przelew1, Przelew2].map((src, index) => (
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
              {["Melitta Aroma Elegance", "Moccamaster KGB"][index]}
            </Card.Title>
            <Card.Text style={{ textAlign: "center", color: "blue" }}>
              {["499,50", "1099,99"][index]}
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
        <h1>Ekspresy do kawy przelewowe</h1>
        <p>
          Ekspresy do kawy przelewowe to urządzenia, które łączą w sobie
          sentyment do tradycyjnego parzenia kawy i nowoczesne systemy grzewcze
          o dużej mocy, pozwalające na zrobienie aromatycznej kawy w kilka
          minut. Dzięki materiałom najwyższej jakości ekspresy do kawy
          przelewowe są trwałe przez wiele lat, o czym świadczy chociażby długa
          gwarancja, nawet 5-letnia, jaką oferują producenci tych urządzeń. Mamy
          tu tradycyjny dzbanek wykonany ze stali nierdzewnej oraz pojemnik na
          wodę, a także dołączony górny filtr, do którego wsypuje się zmielony
          ulubiony gatunek kawy. Wszystkie części ekspresów do kawy przelewowych
          bardzo łatwo się demontuje. Modele wykonane ze stali nierdzewnej można
          myć w zmywarce, bez szkody dla ich trwałości.
        </p>
        <h2>Ekspresy przelewowe – aromat z każdej kropli</h2>
        <p>
          Ekspres przelewowy to doskonały wybór dla osób, które preferują kawę
          długo parzoną. Dzięki temu mogą poczuć intensywny aromat w każdym
          łyku. Kontrola poziomu kamienia i funkcja jego usuwania pozwala
          cieszyć się zawsze tak samo intensywnym aromatem bez przykrego,
          metalicznego posmaku.
        </p>
      </div>
    </Container>
  );
}
