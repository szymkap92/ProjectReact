
import { productsList } from "../../assets/productsdata";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Products() {
    return (
        <Container>
            <Row id="product-list">
                {productsList.map((product, index) => {
                    return (
                        <Col xs={12} sm={6} xxl={3} className="mb-4" key={index}>
                            <Card className="my-cards" style={{ minHeight: "450px" }}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer className="align-items-center">
                                    <Button variant="secondary">Czytaj więcej</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
