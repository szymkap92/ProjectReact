import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./Leasing.module.css";
import leasing1 from "../../assets/Leasing1.jpg";

export function Leasing() {
  return (
    <Container className="mb-4">
      <Row>
        <Col>
          <h1 className={styles.sectionTitle}>Leasing urządzeń w Mojej Firmie</h1>
          <p className={styles.sectionSubtitle}>
            Wymarzony ekspres do kawy w Twojej firmie z leasingiem PKO Leasing lub Leaselink
          </p>
          <img src={leasing1} alt="Zakupy na raty" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className={styles.sectionHeader}>PKO LEASING</h2>
          <p className={styles.sectionContent}>
            Zakupy z PKO Leasing to błyskawiczny proces online. Wniosek leasingowy możesz złożyć w każdej chwili (24/7), a decyzję otrzymasz nawet w ciągu 5 minut.
          </p>
          <ol className={styles.list}>
            <li>Wejdź w kartę wybranego produktu.</li>
            <li>Wybierz opcję "Weź leasing w PKO".</li>
            <li>Dostosuj parametry leasingu według własnych preferencji.</li>
            <li>Uzupełnij wniosek.</li>
            <li>Po podpisaniu umowy wyślemy do Ciebie zamówienie z naszego magazynu.</li>
          </ol>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className={styles.sectionHeader}>LEASING w LEASELINK</h2>
          <p className={styles.sectionContent}>
            Zakupy z Leaselink to doskonała opcja finansowania zamówienia, jeżeli zależy Ci na bezpiecznych i szybkich zakupach.
          </p>
          <ol className={styles.list}>
            <li>Wejdź w kartę wybranego produktu.</li>
            <li>Zaznacz opcję "Weź leasing w Leaselink".</li>
            <li>Dostosuj parametry leasingu według własnych preferencji.</li>
            <li>Uzupełnij wniosek i przelej 1 zł w celu weryfikacji.</li>
            <li>Po akceptacji banku, zamówienie zostanie do Ciebie wysłane z naszego magazynu.</li>
          </ol>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary" className={styles.button}>
            Dowiedz się więcej
          </Button>
        </Col>
      </Row>
     
      <div className={styles.newsletter}>
        <h3>ZAPISZ SIĘ NA NEWSLETTER</h3>
        <form className={styles.newsletterForm}>
          <input type="text" placeholder="Wpisz imię" className={styles.inputField} />
          <input type="email" placeholder="Wpisz adres email" className={styles.inputField} />
          <button type="submit" className={styles.submitButton}>Zapisz się</button>
          <button type="button" className={styles.unsubscribeButton}>Wypisz się</button>
        </form>
        <div className={styles.clause}>
          <input type="checkbox" id="agreement" />
          <label htmlFor="agreement">Wyrażam zgodę na przetwarzanie moich danych osobowych.</label>
        </div>
      </div>
    </Container>
  );
}
