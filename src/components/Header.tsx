import styles from "./Header.module.css";

import igniteLogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <img
        src={igniteLogo}
        alt="Two green squares overlapping each other that represents Ignite's logo"
      />
      <strong>Ignite Call</strong>
    </div>
  );
}
