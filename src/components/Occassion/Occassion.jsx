import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import coffee1 from "../../assets/slaider1.jpg";
import coffee2 from "../../assets/slaider2.jpg";
import coffee3 from "../../assets/slaider3.jpg";

export function Occasion() {
    return (
		<Container className="mb-4">
			<Carousel>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src={coffee1}
						style={{ maxHeight: "500px" }}
					/>
					<Carousel.Caption className="black-text"></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img
						className="d-block w-100"
						src={coffee2}
						style={{ maxHeight: "500px" }}
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src={coffee3}
						style={{ maxHeight: "500px" }}
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
}
