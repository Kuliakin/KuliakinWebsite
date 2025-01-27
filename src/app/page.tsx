import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Deploy test</h1>
      <Image
        className="content"
        src="/chill.jpg"
        alt="image unvailable"
        width={500}
        height={600}
      />
      <span>by Kuliakin Vladislav</span>
    </main>
  );
}
