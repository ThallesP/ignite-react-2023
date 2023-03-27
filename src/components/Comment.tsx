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
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Devon Lane</strong>
                <time
                  title="23-03-2023 01:00:30"
                  dateTime="23-03-2023 01:00:30"
                >
                  Cerca de 2h
                </time>
              </div>

              <button>
                <Trash />
              </button>
            </header>

            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>
        </div>
      </div>

      <footer>
        <ThumbsUp size={20} /> Aplaudir • 03
      </footer>
    </div>
  );
}
