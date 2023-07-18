import styles from "./Sidebar.module.css";

import reactLogo from "../assets/reactLogo.svg";
import typescriptLogo from "../assets/typescriptLogo.svg";

export function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <header className={styles.sidebarHeader}>
        <img
        className={styles.sidebarHeaderBackground}
          src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1dHVyb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=768&q=60"
          alt=""
        />
        <div className={styles.profileInfo}>
          <img src="https://github.com/dayanels.png" alt="" />
          <strong>Dayane Lemos Silva</strong>
          <span>Desenvolvedora</span>
        </div>
      </header>
      <footer className={styles.sidebarFooter}>
        <div>
          <img src={reactLogo} alt="" />
          <img src={typescriptLogo} alt="" />
        </div>
      </footer>
    </div>
  );
}
