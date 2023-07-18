import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";

import "./global.css";

function App() {
  const [appTheme, setAppTheme] = useState("dark");

  function handleToggleTheme() {
    if (appTheme == "light") {
      setAppTheme("dark");
    } else {
      setAppTheme("light");
    }
  }

  useEffect(() => {
    if (appTheme == "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [appTheme]);

  console.log(appTheme);
  return (
    <>
      <Header theme={appTheme} handleToggleTheme={handleToggleTheme} />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Card />
          <Card />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
