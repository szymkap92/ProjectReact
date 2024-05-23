import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ziarnista1 from "../../../assets/Ziarnista1.jpg";
import ziarnista2 from "../../../assets/Ziarnista2.png";
import ziarnista3 from "../../../assets/Ziarnista3.png";
import ziarnista4 from "../../../assets/Ziarnista4.png";
import ziarnista5 from "../../../assets/Ziarnista5.png";
import ziarnista6 from "../../../assets/Ziarnista6.png";
import ziarnista7 from "../../../assets/Ziarnista7.jpg";
import ziarnista8 from "../../../assets/Ziarnista8.png";
import ziarnistak from "../../../assets/ziarnistak.jpg";
import arabica from "../../../assets/arabica.jpeg";
import robusta from "../../../assets/robusta.jpg";
import styles from "./Coffee.module.css";

export function Coffee() {
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
        ziarnista1,
        ziarnista2,
        ziarnista3,
        ziarnista4,
        ziarnista5,
        ziarnista6,
        ziarnista7,
        ziarnista8,
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
        <h1>Kawa ziarnista</h1>
        <p>
          Najlepsza pod każdym względem. Gwarancja głębokiego relaksu i
          wytchnienia przy pełni głębokiego aromatu. Kawa ziarnista to dla
          baristów jedyny akceptowalny wybór w kwestii poprawnego parzenia
          kawowego napoju. Doskonała zarówno do zapewnienia porannego
          pobudzenia, jak i relaksujących chwil przy książce, z rodziną lub
          znajomymi.
        </p>
        <div className={styles.largeImageWrapper}>
          <img
            src={ziarnistak}
            alt=""
            className={styles.largeImage}
          />
        </div>

        <h2>Filiżanka kawy w otoczeniu ziaren</h2>
        <p>
          Kawa ziarnista to przede wszystkim niezrównane walory smakowe i
          aromatyczne, gwarantujące doznania nieporównywalne do żadnego innego
          napoju. Cechy te uzyskiwane są w wyniku starannie prowadzonych upraw i
          procesu prażenia, w którego trakcie pod wpływem wysokiej temperatury
          dochodzi do uwolnienia olejków aromatycznych. To prawdziwa podróż
          przez świat nowych nut smakowych, podczas której odkrywamy swój własny
          ideał. Rytuał parzenia, pozwalający mieć kontrolę nad każdym etapem
          przygotowywania napoju na bazie kawy ziarnistej, jest nie do
          podrobienia. Nawet jeśli zajmuje nam więcej czasu niż przygotowanie
          kawy mielonej.
        </p>

        <h2>Gatunki kawy ziarnistej</h2>
        <h3>Arabica</h3>
        <div className={styles.imageWrapper}>
          <img
            src={arabica}
            alt="arabica"
            className={styles.styledImage}
          />
        </div>
        <p>
          Najpopularniejsza odmiana, stanowiąca aż ok. 80% światowego rynku
          kawy. Gatunek ten zawdzięcza swą nazwę południowej Arabii, będącej
          niegdyś jedynym krajem, słynącym z jej wyrobu. Aktualnie wydobywana
          jest głównie na terenie Azji i Afryki. Ziarna Arabici rosną na
          drzewkach o wysokości do 5 metrów w klimacie tropikalnym, na wysokości
          minimum 900 m n.p.m. Do wyróżniających ją cech należy minimalna
          gorycz, wysoka kwaskowość i niska zawartość kofeiny na poziomie
          0,9-1,4%. Kawa ta bogata jest również w wiele składników odżywczych -
          m.in. tłuszczy (6-9%) i cukrów (15-17%). Stanowi cenny i strategicznie
          ważny surowiec, którego cena wraz z każdym rokiem rośnie. Dużą zaletę
          Arabiki stanowi oryginalny smak, pełen nut korzennych i czekolady,
          który w połączeniu z wyważonymi parametrami czynią z niej po dziś
          dzień najczęstszy wybór, zarówno wśród konsumentów, jak i baristów.
        </p>

        <h3>Robusta</h3>
        <div className={styles.imageWrapper}>
          <img
            src={robusta}
            alt="robusta"
            className={styles.styledImage}
          />
        </div>
        <p>
          Mniej popularna - choć wciąż zagarniająca dużą część rynku - odmiana,
          uprawiana na wysokości 200-900 m n.p.m i w temperaturze do 30 stopni.
          Ten odkryty w XIX wieku gatunek cechuje dominująca gorycz, pozbawiona
          kwaskowości i wyższa zawartość kofeiny, od 1,8 do nawet 4%. Ziarna
          robusty charakteryzuje pionowa bruzda, przecinająca ziarno (w
          przypadku arabici mówimy o kształcie przypominającym literę S) i
          mniejszy rozmiar ziaren niż u głównego konkurenta. Kawa ta gwarantuje
          uzyskanie bardzo gęstej cremy na jej powierzchni i bardziej
          delikatnego smaku, idealnego do przygotowania cappuccino lub latte
          macchiato.
        </p>

        <h3>Liberica</h3>
        <p>
          Pochodząca pierwotnie z Liberii, dziś uprawiana na większą skalę w
          Malezji i innych państwach, charakteryzujących się wilgotnym i gorącym
          klimatem równikowym. Odznacza się dużymi i twardymi nasionami o mało
          intensywnym smaku i aromacie. Stosowana głównie jako dodatek w
          mieszankach kawowych, łagodzący w niewielkim stopniu ostry smak
          robusty.
        </p>

        <h2>Mieszanki kaw ziarnistych</h2>
        <p>
          Dostępne na rynku mieszanki obu tych gatunków stanowią idealnie
          wyważony pod względem smaku, aromatu i zawartości kofeiny kompromis,
          pozwalający obniżyć cenę i oferujący odmienne doznania smakowe.
        </p>
      </div>
    </Container>
  );
}
