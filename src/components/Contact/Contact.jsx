import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <Container className="mb-4">
      <Row>
        <Col>
          <h1 className={styles.sectionTitle}>Kontakt</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8} className="mx-auto">
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName" className={styles.formGroup}>
                  <Form.Label className={styles.formLabel}></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Imię i nazwisko"
                    className={`${styles.formControl} ${styles.inputField}`}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail" className={styles.formGroup}>
                  <Form.Label className={styles.formLabel}></Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Adres e-mail"
                    className={`${styles.formControl} ${styles.inputField}`}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formNummer" className={styles.formGroup}>
                  <Form.Label className={styles.formLabel}></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Telefon kontaktowy"
                    className={`${styles.formControl} ${styles.inputField}`}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formSubject" className={styles.formGroup}>
                  <Form.Label className={styles.formLabel}></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Temat wiadomości"
                    className={`${styles.formControl} ${styles.inputField}`}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formMessage" className={styles.formGroup}>
              <Form.Label className={styles.formLabel}></Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Twoja wiadomość"
                className={`${styles.formControl} ${styles.inputField}`}
              />
            </Form.Group>
            <Button variant="secondary" type="submit" className={styles.button}>
              Wyślij
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
