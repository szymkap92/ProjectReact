import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import automatic1 from "../../../assets/auto1.png";
import automatic2 from "../../../assets/auto2.png";
import automatic3 from "../../../assets/auto3.png";
import automatic4 from "../../../assets/auto4.png";
import automatic5 from "../../../assets/auto5.png";
import automatic6 from "../../../assets/auto6.png";
import automatic7 from "../../../assets/auto7.png";
import automatic8 from "../../../assets/auto8.png";
import automatic9 from "../../../assets/auto9.png";
import automatic10 from "../../../assets/auto10.png";
import automatic11 from "../../../assets/auto11.png";
import automatic12 from "../../../assets/auto12.png";
import styles from "./Automatic.module.css";

export function Automatic() {
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
        
        automatic10,
        automatic11,
        automatic12,
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
                  "Saeco Lirika Plus",
                  "Saeco Lirika",
                  "Saeco Lirika One Touch Cappuccino",
                  "Saeco Aulika",
                  "Saeco Aulika Top",
                  "DeLonghi Autentica",
                  "DeLonghi Autentica Cappuccino",
                  "Jura E8",
                  "Jura Z10",
                  "Jura WE8",
                  "Jura X10",
                  "Saeco PicoBaristo",
                ][index]
              }
            </Card.Title>
            <Card.Text style={{ textAlign: "center", color: "blue" }}>
              {
                [
                  "1271,50",
                  "1832,99",
                  "1490,00zł",
                  "2175,30",
                  "3131,90",
                  "2212,90",
                  "3113,00zł",
                  "3160,50",
                  "1160,50",
                  "4160,50",
                  "2160,50",
                  "1360,50",
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
        <h1>Ekspresy automatyczne</h1>
        <p>
          Automatyczne ekspresy do kawy to z pewnością idealny wybór dla osób,
          które chcą cieszyć się napojem o doskonałym aromacie, przygotowanym w
          kilka chwil. Urządzenia tego typu umożliwiają zaparzenie niemal
          dowolnego rodzaju kawy np. cappuccino, latte, espresso, czy latte
          macchiato za pomocą jednego dotknięcia. Ze względu na swoją
          funkcjonalność są częstym wyposażeniem biur i innych miejsc aktywności
          zawodowej, w których liczy się szybkość i ogólnodostępność.
          Automatyczne ekspresy do kawy sprawdzą się także w domach i
          mieszkaniach, w których przybywa sporo kawowych smakoszy. Bardzo
          szeroki wachlarz cenowy sprawia, że każdy może dobrać ekspres
          odpowiedni do swoich możliwości finansowych, potrzeb i oczekiwań.
        </p>
        <h2>Aromatyczna kawa za jednym dotknięciem</h2>
        <p>
          Marzysz o perfekcyjnie zaparzonej kawie, która pobudzi twoje zmysły i
          doda potrzebnej energii na resztę dnia? A jednocześnie nie chcesz
          tracić mnóstwa czasu na jej przygotowywanie i cenisz funkcjonalność
          domowych urządzeń? Wybierz automatyczny ekspres do kawy! Dzięki niemu
          przygotujesz swój ulubiony napój szybko i komfortowo. Wystarczy wybrać
          odpowiednią ikonkę lub przycisk na panelu sterowania, by po kilkunastu
          sekundach cieszyć się prawdziwym smakiem i zniewalającym aromatem
          niczym z najlepszej włoskiej kawiarni. Jedną z największych zalet
          automatycznych ekspresów do kawy jest szybkość przygotowania wysokiej
          klasy napojów. Wyposażone w nowoczesne systemy sprzęty umożliwiają
          łatwą i wygodną obsługę. Nie musisz martwić się o parametry kawy -
          ekspres sam dobierze odpowiednią ilość kawy lub mleka do konkretnego
          napoju. W wielu ekspresach kawowe przepisy można jednak modyfikować
          lub tworzyć od podstaw. Dzięki temu za każdym razem uzyskasz dokładnie
          taki sam napój, o konkretnych walorach smakowych.
        </p>
        <h2></h2>
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
