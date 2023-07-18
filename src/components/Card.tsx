import styles from "./Card.module.css";

import cardImg from "../assets/card-img.png";
import gitIcon from "../assets/githubIcon.svg";
import figmaIcon from "../assets/figmaIcon.svg";
import worldIcon from "../assets/worldIcon.svg";
import { ThumbsUp } from "phosphor-react";

export function Card() {
  return (
    <div className={styles.card}>
      <header className={styles.cardHeader}>
        <div>
          <img src={cardImg} alt="" />
          <div>
            <strong>Lorem ipsum do</strong>
            <span>esciunt re</span>
          </div>
        </div>
        <time>18/07/2023</time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime
          voluptatibus soluta necessitatibus, sit obcaecati, optio natus
          suscipit nesciunt repellendus, dignissimos ipsa laboriosam
          saepefigmaIcon exercitationem molestiae cupiditate repellat dicta
          numquam?
        </p>
        <div className={styles.links}>
          <a href="#">
            <img src={gitIcon} alt="" />
          </a>
          <a href="#">
            <img src={figmaIcon} alt="" />
          </a>
          <a href="#">
            <img src={worldIcon} alt="" />
          </a>
        </div>
      </div>
      <footer className={styles.cardFooter}>
        <button>
          <ThumbsUp size={24} />
        </button>
      </footer>
    </div>
  );
}
