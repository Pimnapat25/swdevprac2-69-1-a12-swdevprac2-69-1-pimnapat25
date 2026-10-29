"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
import styles from "./banner.module.css";

const covers = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"];

export default function Banner() {
  const [coverIndex, setCoverIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className={styles.banner}>
      <Image
        src={covers[coverIndex]}
        alt="Venue booking banner"
        fill
        priority
        className={styles.image}
        onClick={() => setCoverIndex((prev) => (prev + 1) % covers.length)}
      />
      <div className={styles.overlay}>
        <p className={styles.tagline}>where every event finds its venue</p>
        <p className={styles.subtitle}>
          Connecting you with the perfect venues for every occasion — book
          your ideal event space with ease.
        </p>
      </div>
      {session && (
        <div className="absolute top-4 right-6 z-10 rounded bg-white/80 px-4 py-2 text-lg font-semibold text-gray-900">
          Welcome {session.user?.name}
        </div>
      )}
      <button
        className={styles.selectButton}
        onClick={() => router.push("/venue")}
      >
        Select Venue
      </button>
    </div>
  );
}
