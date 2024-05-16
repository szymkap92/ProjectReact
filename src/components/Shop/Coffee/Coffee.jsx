import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ziarnista1 from "../../../assets/Ziarnista1.jpg";
import ziarnista2 from "../../../assets/Ziarnista2.png";
import ziarnista3 from "../../../assets/Ziarnista3.png";
import ziarnista4 from "../../../assets/Ziarnista4.png";
import ziarnista5 from "../../../assets/Ziarnista5.png";
import ziarnista6 from "../../../assets/Ziarnista6.png";
import ziarnista7 from "../../../assets/Ziarnista7.jpg";
import ziarnista8 from "../../../assets/Ziarnista8.png";
import styles from "./Coffee.module.css";

export function Coffee() {
    return (
        <Container className={styles.cardContainer} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {[ziarnista1, ziarnista2, ziarnista3, ziarnista4, ziarnista5, ziarnista6, ziarnista7, ziarnista8,].map((src, index) => (
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
