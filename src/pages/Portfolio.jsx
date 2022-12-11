import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import portfolioImg from '../assets/portfolio.svg';
import Axios from 'axios';
import { ArrowURightUp , ArrowSquareOut} from "phosphor-react";
import styles from '../styles/pages/portfolio.module.css';


const projetos = [
    {
        id: 1,
        nome: "Lista de tarefas",
        descricao: "Projeto final do módulo II do Ciclo Formativo Pretalab. Feito usando HTML, CSS e JavaScript.",
        imagem: "https://media.giphy.com/media/7zRkwLJwcdUH9IaOUf/giphy.gif",
        link: "https://to-do-list-thais.netlify.app/"
    },
    {
        id: 2,
        nome: "Portifólio",
        descricao: "Projeto final do módulo I do Ciclo Formativo Pretalab. Feito usando HTML e CSS.",
        imagem: "https://media.giphy.com/media/Ec9BFnMdy08vjjoFza/giphy.gif",
        link: "https://portifolio-thais-brito.netlify.app/"
    },
    {
        id: 3,
        nome: "Calendário da copa",
        descricao: "Projeito feito durante a semana NLW da Rocketseat. Feito usando HTML, CSS e JavaScript.",
        imagem: "https://media.giphy.com/media/FQm7ZP89r9899cTkmq/giphy.gif",
        link: "https://thabrita.github.io/nlw-10-copa/"
    }
]




export function Portfolio() {
    const [repositorios, setRepositorios] = useState([])

    useEffect(() => {
        async function pegaRepositorios() {
            const repos = await Axios.get('https://api.github.com/users/thabrita/repos')
            setRepositorios(repos.data)
        }
        pegaRepositorios();
    })


    return (
        <>
        <Header text="Meu portifólio" image={portfolioImg}/>
        <div className={styles.projetosContainer}>
            <h1 className={styles.projetosTitle}>Projetos</h1>
            <div className={styles.cardContainer}>
                {projetos.map(repo => {
                    return (
                        <div className={styles.card} key={repo.id}>
                            <h2>{repo.nome}</h2>
                            <img className={styles.cardImg} src={repo.imagem}/>
                            <p className={styles.cardTexto}>{repo.descricao}</p>
                            <a className={styles.cardLink} href={repo.link} target='_blank'>Veja aqui <ArrowSquareOut size={16} /></a>
                        </div>
                    )
                })}
            </div>
        </div>

        <div className={styles.projetosContainer}>
            <h2 className={styles.projetosTitle}>Outros projetos</h2>
            <div className={styles.repoContainer}>
                <div className={styles.repoCardContainer}>
                    {repositorios.map(repo =>
                        <div className={styles.cardRepo}>
                            <h3 className={styles.repoTitle} key={repo.id}>{repo.name}</h3>
                            <p className={styles.repoTexto}>{repo.description}</p>
                            <a className={styles.repoLink} href={repo.html_url} target='_blank'><ArrowURightUp size={35} weight='regular' color="#fff"/></a>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}