import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/fulanodasilva.png" />
                    <div className={styles.authorInfo}>
                        <strong>Fulano da Silva</strong>
                        <span>Web Developer</span>
                    </div>
                </div> 

                <time title="08 de Março às 22:47" dateTime="2025-03-08 22:47:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"></textarea>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    )
}
