import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import coffee1 from '../../assets/Okazje.jpg';
import coffee2 from '../../assets/Okazje2.jpg';
import coffee3 from '../../assets/Okazje3.jpg';
import Okazje1 from '../../assets/Okazjee1.jpg';
import Okazje2 from '../../assets/Okazjee2.jpg';
import Okazje3 from '../../assets/Okazjee3.jpg';
import styles from './Occasion.module.css';

export function Occasion() {
    return (
        <Container className="mb-4">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={coffee1}
                        alt="First slide"
                        style={{ maxHeight: '500px' }}
                    />
                    <Carousel.Caption className={styles.captionStyle}>
                        <h3>First Slide Label</h3>
                        <p>Description for the first slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={coffee2}
                        alt="Second slide"
                        style={{ maxHeight: '500px' }}
                    />
                    <Carousel.Caption className={styles.captionStyle}>
                        <h3>Second Slide Label</h3>
                        <p>Description for the second slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={coffee3}
                        alt="Third slide"
                        style={{ maxHeight: '500px' }}
                    />
                    <Carousel.Caption className={styles.captionStyle}>
                        <h3>Third Slide Label</h3>
                        <p>Description for the third slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section className={styles.offersSection}>
                <h2 className={styles.sectionTitle}>Specialne Oferty!</h2>
                <Row>
                    <Col md={4}>
                        <div className={styles.cardContainer}>
                            <Card className={styles.card}>
                                <Card.Img variant="top" src={Okazje1} className={styles.cardImage} />
                                <Card.Body className={styles.textContainer}>
                                    <Card.Title>Oferta Dnia!</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                    <Button variant="secondary">Przejdź do okazji!</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.cardContainer}>
                            <Card className={styles.card}>
                                <Card.Img variant="top" src={Okazje2} className={styles.cardImage} />
                                <Card.Body className={styles.textContainer}>
                                    <Card.Title>Oferta Tygodnia!</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                    <Button variant="secondary">Przejdź do okazji!</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.cardContainer}>
                            <Card className={styles.card}>
                                <Card.Img variant="top" src={Okazje3} className={styles.cardImage} />
                                <Card.Body className={styles.textContainer}>
                                    <Card.Title>Oferta Miesiąca!</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                    <Button variant="secondary">Przejdź do okazji!</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}
