import styles from "./Logo.module.css";
import logoImage from "../../assets/logo-wb.png";
export function Logo() {
	return <img className={styles.logo} src={logoImage} alt="Logo Coffee" />;
}
