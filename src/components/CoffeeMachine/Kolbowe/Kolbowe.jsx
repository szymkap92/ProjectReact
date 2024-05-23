import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Kolbowe1 from "../../../assets/kol1.png";
import Kolbowe2 from "../../../assets/kol2.png";
import Kolbowe3 from "../../../assets/kol3.png";
import Kolbowe4 from "../../../assets/kol4.png";
import Kolbowe5 from "../../../assets/kol5.png";
import Kolbowe6 from "../../../assets/kol6.png";
import Kolbowe7 from "../../../assets/kol7.png";
import Kolbowe8 from "../../../assets/kol8.png";
import styles from "./Kolbowe.module.css";

export function Kolbowe() {
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
        Kolbowe1,
        Kolbowe2,
        Kolbowe3,
        Kolbowe4,
        Kolbowe5,
        Kolbowe6,
        Kolbowe7,
        Kolbowe8,
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
                  "Ascaso Steel Duo",
                  "Lelit Elizabeth PL92T",
                  "Lelit Glenda",
                  "Saeco Aulika",
                  "Nuova Simonelli",
                  "Nuova Simonelli Appia",
                  "Victoria Arduino",
                  "Lelit Bianca",
                  "Victoria Arduino",
                  "Nuova Simonelli Oscar I",
                  "Nuova Simonelli Oscar II",
                  "Lelit Anita ",
                ][index]
              }
            </Card.Title>
            <Card.Text style={{ textAlign: "center", color: "blue" }}>
              {
                [
                  "4271,50",
                  "5832,99",
                  "3490,00zł",
                  "3175,30",
                  "3131,90",
                  "5212,90",
                  "2113,00zł",
                  "3160,50",
                  "4160,50",
                  "3160,50",
                  "2160,50",
                  "4360,50",
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
        <h1>Ekspresy kolbowe</h1>
        <p>
          Magia kawowego rytuału. Możliwość poczucia się jak prawdziwy barista.
          Dla osób pragnących zachować wpływ nad każdym etapem parzenia kawy
          wprost trudno o lepszy wybór niż ekspres kolbowy. Doskonałe, pełne
          mocy i stawiające na nogi espresso, przygotowywane za jego pomocą, to
          już nieśmiertelny klask, od dekad cieszący najlepszym aromatem i
          smakiem. W połączeniu z dobrej jakości młynkiem otrzymujemy możliwość
          precyzyjnego ustawienia każdego aspektu napoju - od wielkości i
          temperatury zaczynając, aż po stopień spienienia mleka. Bogate
          doświadczenie i skrupulatne testy sprawiły, że w LoveCoffee z miejsca
          odrzucamy tanie półśrodki wątpliwej jakości. Ekspresy kolbowe
          znajdujące się w naszej ofercie, cechuje najlepsza jakość wykonania i
          renoma wieloletniego doświadczenia producentów. Niezależnie od twojego
          budżetu i potrzeb. Z nami espresso i cappuccino najwyższej próby
          przygotowane w ekspresie kolbowym, stoi na wyciągnięcie ręki.
        </p>
        <h2>Zalety ekspresów kolbowych</h2>
        <p>
          Zaczniemy od najważniejszego, czyli dobrodziejstw, które przełożyły
          się na tak dużą popularność ekspresów kolbowych. Pierwszą z nich
          będzie zdecydowanie klimat - magia doglądania kawy na każdym etapie
          jej przygotowywania niczym w najlepszych światowych kawiarniach. To
          właśnie z ekspresów kolbowych korzystają specjaliści w tej dziedzinie,
          serwując swym klientom napoje o doskonałych walorach smakowych i
          pobudzających. Wraz z każdą przygotowaną filiżanką będziesz nabierał
          wprawy i precyzji, która sprawi, że żaden przepis nie będzie miał
          przed tobą tajemnic.
        </p>
        <h2></h2>
        <p>
          Kawiarka stalowa oferuje szereg zalet, które czynią ją jednym z
          najbardziej pożądanych narzędzi do parzenia kawy. Jej wyjątkowa
          wytrzymałość i odporność na korozję sprawiają, że jest to inwestycja
          na lata. Stalowy korpus jest łatwy do czyszczenia i utrzymania w
          czystości, co dodatkowo zwiększa komfort użytkowania. Ponadto,
          kawiarki stalowe często posiadają elegancki, nowoczesny design, który
          doskonale komponuje się z różnymi stylami wnętrz. Kolejną rzecz, na
          którą zwracają uwagę posiadacze ekspresów kolbowych, jest ich design.
          Przywodzący z miejsca romantyczne skojarzenia z czarno-białych filmów
          i czasów, w których nawet najbardziej zabiegani byli w stanie znaleźć
          chwilę, by spędzić chwilę przy gazecie lub rozmowie z filiżanką "małej
          czarnej" w dłoni. Wygląd w stylu retro idealnie wpasowuje się w
          wystrój każdej kuchni - obojętnie, czy myślimy o czymś w bardziej
          klasycznym klimacie, czy nowoczesnych, minimalistycznych i oszczędnych
          przestrzeniach.
        </p>
      </div>
    </Container>
  );
}
