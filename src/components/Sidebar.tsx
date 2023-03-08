import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
      <div className={styles.profile}>
        <span className={styles.profileName}>Diego Fernandes</span>
        <span className={styles.profileRole}>Web Developer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">Edit your profile</a>
      </footer>
    </aside>
  );
}
