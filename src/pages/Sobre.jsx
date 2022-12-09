import { Header } from "../components/Header";
import styles from '../styles/pages/sobre.module.css';
import aboutImg from '../assets/about.svg';
import meuAvatar from '../assets/me.jpeg';


export function Sobre() {
    return (
        <>
            <Header text="Sobre mim" image={aboutImg} />
            <div className={styles.principalContainer}>
                <img className={styles.perfilImg} src={meuAvatar} />
                <div className={styles.aboutContainer}>
                    <h2 className={styles.titleContainer}>Um pouco sobre mim:</h2>
                    <p className={styles.pContainer}>"Olá, me chamo Thaís Brito, tenho 27 anos, nasci na cidade de Campina Grande/PB, 
                    mas me mudei ainda criança e atualmente moro em Bertioga/SP. Sempre tive facilidade e interesse em tecnologia, mas achava um objetivo distante. 
                    Através de pessoas próximas, descobri que é possível e atualmente estou estudando para ser Desenvolvedora Front-End. 
                    Estudar tecnologia é desafiador e isso me motiva todos os dias."</p>
                </div>
            </div>
        </>
    )
}