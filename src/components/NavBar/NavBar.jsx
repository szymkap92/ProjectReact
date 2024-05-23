import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Logo } from "../Logo/Logo";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaQuestionCircle,
} from "react-icons/fa";
import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary ${styles.navbarContainer}`}
    >
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${styles.mainNav}`}>
            <Nav.Link href="/" className={styles.orangeText}>
              Kawiarnia
            </Nav.Link>
            <NavDropdown title="Sklep" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Coffee">Kawa ziarnista</NavDropdown.Item>
              <NavDropdown.Item href="/CoffeeM">Kawa mielona</NavDropdown.Item>
              <NavDropdown.Item href="/Accessories">
                Akcesoria do kawy
              </NavDropdown.Item>
              <NavDropdown.Item href="/Tea">Herbaty</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Kawiarki" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Steel">Stalowe</NavDropdown.Item>
              <NavDropdown.Item href="/Aluminium">Aluminiowe</NavDropdown.Item>
              <NavDropdown.Item href="/Electric">Elektryczne</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ekspresy do kawy" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Automatic">
                Ekspresy automatyczne
              </NavDropdown.Item>
              <NavDropdown.Item href="/Kolbowe">
                Ekspresy kolbowe
              </NavDropdown.Item>
              <NavDropdown.Item href="/Capsules">
                Ekspresy kapsułkowe
              </NavDropdown.Item>
              <NavDropdown.Item href="/Przelewowe">
                Ekspresy przelewowe
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Occasion">Okazje!</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="/Contact">Kontakt</Nav.Link>
          </Nav>
          <Nav className={styles.icons}>
            <Nav.Link title="Szukaj">
              <FaSearch className={styles.icon} />
            </Nav.Link>
            <Nav.Link title="Koszyk">
              <FaShoppingCart className={styles.icon} />
            </Nav.Link>
            <Nav.Link title="Twój login">
              <FaUser className={styles.icon} />
            </Nav.Link>
            <NavDropdown
              title={<FaQuestionCircle className={styles.icon} />}
              id="help-nav-dropdown"
              alignright="true"
            >
              <NavDropdown.Item href="/faq">Status zamówienia</NavDropdown.Item>
              <NavDropdown.Item href="/dicountCodes">
                Kody rabatowe
              </NavDropdown.Item>
              <NavDropdown.Item href="/Raty">Raty</NavDropdown.Item>
              <NavDropdown.Item href="/returns">Leasing</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
