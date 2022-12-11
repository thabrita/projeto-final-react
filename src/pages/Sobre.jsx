import { Header } from "../components/Header";
import styles from '../styles/pages/sobre.module.css';
import aboutImg from '../assets/about.svg';
import sobreMim from '../assets/curiosidades.jpg';


export function Sobre() {
    return (
        <>
            <Header text="Sobre mim" image={aboutImg} />
            <div className={styles.principalContainer}>
                <img className={styles.perfilImg} src={sobreMim} />
                <div className={styles.aboutContainer}>
                    <h2 className={styles.titleContainer}>Quem sou eu?</h2>
                    <p className={styles.pContainer}>Uma paraibana de nascença, carioca de criação e coração e vivendo atualmente em Bertioga/SP. Tenho 27 anos e atualmente estou estudando para me tornar uma desenvolvedora Front-End. A tecnologia me despertou desde cedo, mas os caminhos da vida me levaram a outro lugar. Hoje, estou focada em colocar em prática todo aprendizado que já adquiri no Ciclo Formativo Pretalab, mas principalmente continuar estudando e adquirindo conhecimento. </p>
                </div>
            </div>
        </>
    )
}