import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/thallesp.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Thalles Passos</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="23-03-2023 01:00:30" dateTime="23-03-2023 01:00:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Escreva um comentário..." />

        <div className={styles.buttonWrapper}>
          <button type="submit">Publicar</button>
        </div>
      </form>
    </article>
  );
}
