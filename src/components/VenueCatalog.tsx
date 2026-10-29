import Link from "next/link";
import type { VenueJson } from "../../interface";
import Card from "./Card";
import styles from "./VenueCatalog.module.css";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson> | VenueJson;
}) {
  const venues = await venuesJson;

  return (
    <main className={styles.catalog}>
      <header className={styles.heading}>
        <h1>Select your venue</h1>
        <p>Explore 3 fabulous venues in our venue catalog</p>
      </header>
      <div className={styles.cards}>
        {venues.data.map((venue) => (
          <Link
            key={venue.id}
            href={`/venue/${venue.id}`}
            className={styles.cardLink}
          >
            <Card venueName={venue.name} imgSrc={venue.picture} />
          </Link>
        ))}
      </div>
    </main>
  );
}
