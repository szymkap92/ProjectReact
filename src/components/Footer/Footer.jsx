import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from "./Footer.module.css";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h4>Kontakt</h4>
                    <p>123 Ulica Kawowa, Miasto Kofeiny, CA 12345</p>
                    <p>Email: info@twojafirma.com</p>
                    <p>Telefon: (123) 456-7890</p>
                </div>
                <div className={styles.section}>
                    <h4>Znajdź nas</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092536489597!2d-122.419416!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f2fbd89%3A0x7d0c7e6b48f8a42!2sTwitter%20HQ!5e0!3m2!1spl!2sus!4v1622635978288!5m2!1spl!2sus"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>
                <div className={styles.section}>
                    <h4>Śledź nas</h4>
                    <p>Śledź nas na mediach społecznościowych:</p>
                    <a href="https://www.facebook.com" className={styles.icon}>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://www.twitter.com" className={styles.icon}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com" className={styles.icon}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <div className={styles.section}>
                    <p>© {currentYear} Twoja Firma. Wszelkie prawa zastrzeżone.</p>
                    <p>
                        <a href="/privacy-policy">Polityka Prywatności</a> | 
                        <a href="/terms-of-service">Warunki Korzystania</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
