import styles from "./page.module.css";
import CardGrid from "@/components/CardGrid";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo_amarilha.png" alt="Logo" width={"auto"} height={"auto"} />
        </div>
        <div className={styles.status}>
          &gt; Bem vindo, User // System online <span className={styles.blink}></span>
        </div>
      </header>

      <CardGrid />

      <footer className={styles.footer}>
        SYSTEM VERSION 1.0.0 // READY
      </footer>
    </main>
  );
}
