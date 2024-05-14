import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from 'react-router-bootstrap';
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
                        <LinkContainer to="/kawiarnia">
                            <Nav.Link className={styles.orangeText}>Kawiarnia</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Sklep" id="basic-nav-dropdown">
                            <LinkContainer to="/kawa-ziarnista">
                                <NavDropdown.Item>Kawa w ziarnach</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/akcesoria-kawowe">
                                <NavDropdown.Item>Akcesoria do kawy</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/herbaty">
                                <NavDropdown.Item>Herbaty</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to="/okazje">
                            <Nav.Link>Okazje!</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/blog">
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className={styles.icons}>
                        <Nav.Link><FaSearch className={styles.icon} /></Nav.Link>
                        <Nav.Link><FaShoppingCart className={styles.icon} /></Nav.Link>
                        <Nav.Link><FaUser className={styles.icon} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
