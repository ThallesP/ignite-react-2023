import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.comment}>
        <img
          className={styles.avatar}
          src="https://github.com/thallesp.png"
          alt=""
        />

        <div className={styles.commentBox}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane</strong>
              <time title="23-03-2023 01:00:30" dateTime="23-03-2023 01:00:30">
                Cerca de 2h
              </time>
            </div>

            <button className={styles.trashButton}>
              <Trash size={24} color="#8D8D99" />
            </button>
          </header>

          <p className={styles.commentText}>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
      </div>

      <footer>
        <button
          style={{
            background: "transparent",
            border: 0,
            color: "#8D8D99",
            display: "flex",
            gap: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          <ThumbsUp size={20} weight="bold" /> Aplaudir • 03
        </button>
      </footer>
    </div>
  );
}
