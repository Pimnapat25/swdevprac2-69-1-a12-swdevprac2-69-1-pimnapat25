import Banner from "@/components/Banner";
import PromoteCard from "@/components/PromoteCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner />
      <PromoteCard />
    </div>
  );
}
