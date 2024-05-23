import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import herbata1 from "../../assets/coffee1.jpg";
import herbata2 from "../../assets/coffee7.jpeg";
import herbata3 from "../../assets/coffee8.jpg";
import herbata4 from "../../assets/coffee2.jpg";
import herbata5 from "../../assets/coffee3.jpg";
import herbata6 from "../../assets/coffee4.jpg";
import herbata7 from "../../assets/coffee5.png";
import herbata8 from "../../assets/coffee6.jpg";
import carousel1 from "../../assets/new1.jpg";
import carousel2 from "../../assets/new2.jpg";
import carousel3 from "../../assets/new3.jpg";
import carousel4 from "../../assets/new4.jpg";
import carousel5 from "../../assets/new5.jpg";
import carousel6 from "../../assets/new6.jpg";
import carousel7 from "../../assets/new7.jpg";
import blazzara from "../../assets/Blazzara.png";
import glowna from "../../assets/glowna.jpg";
import Przelew1 from "../../assets/Blazi1.jpg";
import Przelew2 from "../../assets/Blazi2.jpg";
import Przelew3 from "../../assets/Blazi3.jpg";
import Przelew4 from "../../assets/Blazi4.jpg";
import styles from "./Products.module.css";

export function Products() {
  const coffeeImages = [
    herbata1,
    herbata2,
    herbata3,
    herbata4,
    herbata5,
    herbata6,
    herbata7,
    herbata8,
  ];

  const carouselImages = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
  ];

  const przelewImages = [Przelew1, Przelew2, Przelew3, Przelew4];

  const przelewTitles = [
    "KAWA ZIARNISTA BLAZZARA LUXURY BLEND 1KG PANASIATICA",
    "KAWA ZIARNISTA BLAZZARA LUXURY BLEND 1KG PANAFRICANA",
    "KAWA ZIARNISTA BLAZZARA LUXURY BLEND 1KG PANAMERICANA",
    "KAWA ZIARNISTA BLAZZARA LUXURY BLEND 1KG DODICIGRANCRU",
  ];
  const przelewPrices = ["159,99 zł", "135,99 zł", "159,00 zł", "164,99 zł"];

  return (
    <>
      <Container className={styles.cardContainer}>
        <div className={styles.productCards}>
          {coffeeImages.map((src, index) => (
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
                      "Coffee Italiano",
                      "Morning Bliss",
                      "Midnight Mocha",
                      "Sunshine Latte",
                      "Velvet Espresso",
                      "Citrus Zest Coffee",
                      "Caramel Dream",
                      "Vanilla Frost",
                    ][index]
                  }
                </Card.Title>
                <Card.Text style={{ textAlign: "center", color: "blue" }}>
                  {}
                </Card.Text>
                <Button
                  variant="secondary"
                  style={{ display: "block", margin: "auto" }}
                >
                  Czytaj Więcej
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className={styles.textContainer} style={{ width: "100%" }}>
          <h1 className={styles.promotionHeader}>STREFA PROMOCJI</h1>
          <div className={styles.carouselWrapper}>
            <Carousel className={styles.carousel}>
              {carouselImages.map((src, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={src}
                    alt={`Slide ${index + 1}`}
                    style={{ height: "500px", objectFit: "cover" }}
                  />
                  <Carousel.Caption>
                    <h3>{}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <h1 className={styles.bazzaraHeader}>WŁOSKIE KAWY BAZZARA</h1>
          <div className={styles.imageContainer}>
            <img
              src={blazzara}
              alt="Włoskie kawy Bazzara"
              className={styles.bazzaraImage}
            />
          </div>
        </div>

        <div className={styles.productCards}>
          {przelewImages.map((src, index) => (
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
                  {przelewTitles[index]}
                </Card.Title>
                <Card.Text style={{ textAlign: "center", color: "blue" }}>
                  {przelewPrices[index]}
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
        </div>
      </Container>
      <div className={styles.parallax}>
        <div className={styles.parallaxText}>
          <h2>
            KONESSO.PL - TWÓJ WYMARZONY SKLEP INTERNETOWY Z KAWĄ, HERBATĄ I
            EKSPRESAMI DO KAWY
          </h2>
          <p>
            Mamy ogromną przyjemność powitać Cię w sklepie Konesso.pl. Aktualnie
            znajdujesz się w renomowanym i docenianym przez Klientów sklepie z
            kawą, herbatą i ekspresami do kawy, a to znaczy, że zależy Ci na
            wysokiej jakości nabywanych towarów. Wszystkie produkty, które
            znajdziesz w naszej ofercie m.in. kawy ziarniste i mielone,
            wyśmienite herbaty, akcesoria i ekspresy do kawy są starannie
            selekcjonowane i wybierane tak, aby sprostać wymaganiom największych
            wielbicieli dobrego smaku. Naszym priorytetem jest oferowanie
            Klientom najlepszej kawy ziarnistej, która idealnie sprawdzi się
            jako kawa do ekspresu, ale również do kawiarki i alternatywnych
            metod parzenia kawy.
          </p>
          <h3>ZNAJDŹ WYMARZONY EKSPRES DO KAWY</h3>
          <p>
            W szerokiej ofercie Konesso.pl każdy znajdzie odpowiednią dla siebie
            kawę, ale również idealny ekspres do kawy. Wszystkie oferowane
            urządzenia pochodzą od najlepszych producentów cenionych na całym
            świecie. W naszym sklepie znajdziesz ekspresy automatyczne oraz
            kolbowe do domu i do biura, które spełnią wszystkie Twoje
            oczekiwania. Naszym celem jest stały rozwój i oferowanie produktów
            wyłącznie najwyższej jakości tak, aby nasz sklep z kawą był sklepem
            zarówno dla profesjonalnych kawiarni, herbaciarni i restauracji, a
            także home baristów, którzy docenią pełnię smaku dobrej kawy.
          </p>
          <h3>PORADY DOTYCZĄCE KAWY</h3>
          <p>
            Jednak Konesso.pl to coś więcej niż sklep z kawą, to również ogromna
            baza wiedzy, dzięki której lepiej poznasz świat kawy, a dodatkowo
            nasi specjaliści odpowiedzą na wszystkie Twoje pytania oraz doradzą
            przy wyborze odpowiedniego towaru. Systematycznie informujemy Cię o
            nowinkach dotyczących kawy oraz przedstawiamy ciekawe przepisy na
            kawę, którą możesz przygotować w domu. Pragniemy zarażać Klientów
            naszą pasją i miłością do kawy tak, aby mogli stać się świadomymi
            konsumentami tego niezwykłego towaru.
          </p>
          <h3>NAJLEPSZA WŁOSKA KAWA</h3>
          <p>
            Mówiąc o dobrej kawie, na myśl przychodzą nam słoneczne Włochy,
            które dla wielu są synonimem najlepszej kawy. To właśnie Włosi słyną
            z bezgranicznej miłości do kawy i najlepszych palarni kawy na
            świecie. Włoska kawa to jedna z głównych kategorii w naszym sklepie,
            a do zaoferowania mamy wyśmienite włoskie kawy ziarniste oraz
            włoskie kawy mielone. Miłośnicy tradycyjnych włoskich napojów mogą
            nabyć m.in. kawy Lavazza, Bazzara, Cafe del Faro czy Pellini, które
            umożliwią przygotowanie prawdziwego włoskiego espresso lub
            aksamitnego cappuccino. Jesteśmy pewni, że nasz sklep z kawą spełni
            Twoje oczekiwania co do jakości oferowanych produktów (włoska kawa
            do ekspresu, ekspresy do kawy oraz herbaty), funkcjonalności
            prezentowanego sprzętu i akcesoriów oraz bezsprzecznej urodzie
            proponowanej porcelany i szkła, które podkreślą magiczne chwile przy
            kawie.
          </p>
        </div>
      </div>
    </>
  );
}
