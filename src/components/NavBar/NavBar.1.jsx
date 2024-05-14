import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import styles from "./NavBar.module.css";
import { NavBar } from '../Herbaty/NavBar';




export function NavBar() {
	return (
		<Navbar expand="lg" className={`bg-body-tertiary ${styles.navbarContainer}`}>
			<Container>
				<Logo />
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className={`me-auto ${styles.mainNav}`}>
						<Nav.Link as={Link} to="/kawiarnia" className={styles.orangeText}>
							Kawiarnia
						</Nav.Link>
						<NavDropdown title="Sklep" id="basic-nav-dropdown">
							<NavDropdown.Item as={Link} to="/kawa-ziarnista">
								Kawa w ziarnach
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/akcesoria-kawowe">
								Akcesoria do kawy
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/herbaty">
								Herbaty
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} to="/okazje">
							Okazje!
						</Nav.Link>
						<Nav.Link as={Link} to="/blog">
							Blog
						</Nav.Link>
					</Nav>
					<Nav className={styles.icons}>
						<Nav.Link>
							<FaSearch className={styles.icon} />
						</Nav.Link>
						<Nav.Link>
							<FaShoppingCart className={styles.icon} />
						</Nav.Link>
						<Nav.Link>
							<FaUser className={styles.icon} />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
