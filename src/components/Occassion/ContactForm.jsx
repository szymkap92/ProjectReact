import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function ContactForm() {
    return (
        <Container className="my-5">
            <h2>Kontakt</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Wpisz email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Wiadomość</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Wpisz wiadomość" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Wyślij
                </Button>
            </Form>
        </Container>
    );
}

export default ContactForm;
