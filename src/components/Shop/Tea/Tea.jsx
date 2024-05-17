import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
        <Container className={styles.cardContainer} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {[herbata1, herbata2, herbata3, herbata4, herbata5, herbata6, herbata7, herbata8,].map((src, index) => (
                <Card key={index} className={styles.card} style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src={src} className={styles.cardImage} style={{ height: '180px', objectFit: 'contain', width: '100%' }} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>{["Samo Zdrowie 1kg", "Happy Kids", "Karnawał w Rio", "Łyk Szczęscia", "Mamma Mia", "Ambrozja - Super Owoc", "Jagodowy Raj", "Love Story"][index]}</Card.Title>
                        <Card.Text style={{ textAlign: 'center', color: 'blue' }}>
                            {["11,50", "12,99", "10,00zł", "15,30", "11,90", "12,90", "13,00zł", "10,50"][index]}
                        </Card.Text>
                        <Button variant="secondary" style={{ display: 'block', margin: 'auto' }}>Kup teraz</Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}
