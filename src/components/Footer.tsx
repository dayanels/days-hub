import styles from "./Footer.module.css";

import logoImg from "../assets/logo.svg";
import copyIcon from "../assets/copyIcon.svg";
import gitIcon from "../assets/githubIcon.svg";
import linkedinIcon from "../assets/linkedinIcon.svg";
import instaIcon from "../assets/instaIcon.svg";
import whatsappIcon from "../assets/whatsappIcon.svg";
import mailIcon from "../assets/mailIcon.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logoImg} alt="" />
      <span>
        <img src={copyIcon} alt="" />
        2023
      </span>
      <div className={styles.socialLink}>
        <a target="_blank" href="https://github.com/dayanels">
          <img src={gitIcon} alt="" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/dayanels/">
          <img src={linkedinIcon} alt="" />
        </a>
        <a
          title="lemos.dayane.d@gmail.com"
          target="_blank"
          href="mailto:lemos.dayane.d@gmail.com">
          <img src={mailIcon} alt="" />
        </a>
        <a target="_blank" href="https://wa.link/vki2zi">
          <img src={whatsappIcon} alt="" />
        </a>
        <a target="_blank" href="https://www.instagram.com/_lemos.silva/">
          <img src={instaIcon} alt="" />
        </a>
      </div>
    </footer>
  );
}
