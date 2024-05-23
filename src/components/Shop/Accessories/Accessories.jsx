import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import akcesoria1 from "../../../assets/Akseroria1.png";
import akcesoria2 from "../../../assets/Akcesoria2.png";
import akcesoria3 from "../../../assets/Akcesoria3.png";
import akcesoria4 from "../../../assets/Akcesoria4.png";
import akcesoria5 from "../../../assets/Akcesoria5.png";
import styles from "./Accessories.module.css";

export function Accessories() {
    return (
        <Container className={styles.cardContainer} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {[akcesoria1, akcesoria2, akcesoria3, akcesoria4, akcesoria5, ].map((src, index) => (
                <Card key={index} className={styles.card} style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src={src} className={styles.cardImage} style={{ height: '180px', objectFit: 'contain', width: '100%' }} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>{["Filtr Do Ekspresu Saeco", "Puly Milk - Płyn Do Czyszczenia Ekspresów", "Jura - Tabletki Odkamieniające", "Kubek termiczny Contigo West", "Jura Spieniacz do Mleka Hot & Cold"][index]}</Card.Title>
                        <Card.Text style={{ textAlign: 'center', color: 'blue' }}>
                            {["44,00zł", "59,00zł", "56,90", "149,99", "399,00zł"][index]}
                        </Card.Text>
                        <Button variant="secondary" style={{ display: 'block', margin: 'auto' }}>Kup teraz</Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}
