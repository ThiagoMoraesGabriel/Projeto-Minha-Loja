import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2026 Corinthians Shop - Todos os direitos reservados.</p>

            <div>
                <h1 className={styles.rsociais}>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTiktok} />
                    <FontAwesomeIcon icon={faTwitter} />
                </h1>
            </div>
        </footer>
    );
}
export default Footer;
