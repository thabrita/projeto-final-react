import styles from '../styles/components/footer.module.css';

export function Footer() {
    return (
        <>
        <footer className={styles.footerContainer}>
            <p className={styles.footerText}>Feito com ❤ por Thaís Brito, durante o projeto guiado no módulo de ReactJS da PretaLab.</p>
            <div className={styles.containerFooter}>
                <ul className={styles.listaFooter}>
                    <li>
                        <i class="fas fa-envelope-square estilo-icon" id={styles.iconeUm}></i>
                        <a href="mailto:britothais30@gmail.com" target="_blank" className={styles.links}>britothais30@gmail.com</a>
                    </li>
                    <li>
                        <i class="fab fa-linkedin estilo-icon" id={styles.iconeDois}></i>
                        <a href="https://www.linkedin.com/in/tha%C3%ADs-brito-02774111a/" target="_blank"
                        className={styles.links}>/thais-brito</a>
                    </li>
                    <li>
                        <i class="fab fa-github-square estilo-icon" id={styles.iconeTres}></i>
                        <a href="https://github.com/thabrita" target="_blank" className={styles.links}>/thabrita</a>
                    </li>
                </ul>
            </div>
        </footer>
        </>
    )
}