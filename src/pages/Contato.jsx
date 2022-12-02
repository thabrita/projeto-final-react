import { Header } from "../components/Header";
import contactImg from '../assets/contact.svg';
import styles from '../styles/pages/contato.module.css';

export function Contato() {
    return (
        <>
        <Header text="Entre em contato" image={contactImg}/>
        <div>
            <form className={styles.form}>
                <input placeholder="Digite seu nome" className={styles.formInput}/>
                <input placeholder="Digite seu email" className={styles.formInput}/>
                <textarea placeholder="Digite sua mensagem" className={styles.formTextArea}/>
                <button className={styles.formButton}>Enviar mensagem</button>
            </form>
        </div>
        </>
    )
}