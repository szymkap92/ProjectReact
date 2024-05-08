import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from "./Footer.module.css";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                
                <div>
                    <p>© {currentYear} Your Company Name. All rights reserved.</p>
                    <p>
                        <a href="/privacy-policy">Privacy Policy</a> | 
                        <a href="/terms-of-service">Terms of Service</a>
                    </p>
                </div>
                <div>
                    <p>Follow us on social media:</p>
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
            </div>
        </footer>
    );
}
