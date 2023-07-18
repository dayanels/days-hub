import { MoonStars, Sun, ToggleLeft, ToggleRight } from "phosphor-react";
import styles from "./Header.module.css";

import appNameImg from "../assets/icon-dev.svg";

interface HeaderProps {
  theme: string;
  handleToggleTheme: () => void;
}
export function Header({ handleToggleTheme, theme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.appName}>
        <img src={appNameImg} alt="" />
        <p>days-hub</p>
      </div>
      <button onClick={handleToggleTheme} className={styles.theme}>
        {theme == "dark" ? (
          <>
            <MoonStars />
            <ToggleLeft />
          </>
        ) : (
          <>
            <Sun />
            <ToggleRight />
          </>
        )}
      </button>
    </header>
  );
}
