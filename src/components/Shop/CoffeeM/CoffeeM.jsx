import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mielona1 from "../../../assets/Mielona1.png";
import mielona2 from "../../../assets/Mielona2.png";
import mielona3 from "../../../assets/Mielona3.png";
import mielona4 from "../../../assets/Mielona4.png";
import mielona5 from "../../../assets/Mielona5.png";
import mielona6 from "../../../assets/Mielona6.jpg";
import mielona7 from "../../../assets/Mielona7.jpg";
import mielona8 from "../../../assets/Mielona8.jpg";
import styles from "./CoffeeM.module.css";

export function CoffeeM() {
    return (
        <Container className={styles.cardContainer} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {[mielona1, mielona2, mielona3, mielona4, mielona5, mielona6, mielona7, mielona8,].map((src, index) => (
                <Card key={index} className={styles.card} style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src={src} className={styles.cardImage} style={{ height: '180px', objectFit: 'contain', width: '100%' }} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>{["Kimbo Extra Cream 1kg", "Pellini Top 100% Arabica", "Lavazza Qualita Rossa", "Segafredo Intermezzo", "Illy Espresso", "Starbucks Blonde Roast", "Tchibo Exclusive", "Costa Coffee Medium Roast"][index]}</Card.Title>
                        <Card.Text style={{ textAlign: 'center', color: 'blue' }}>
                            {["69,00zł", "79,00zł", "45,00zł", "50,00zł", "85,00zł", "75,00zł", "60,00zł", "80,00zł"][index]}
                        </Card.Text>
                        <Button variant="secondary" style={{ display: 'block', margin: 'auto' }}>Kup teraz</Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}
