import Image from "next/image";
import getVenue from "@/libs/getVenue";
import styles from "./venueDetail.module.css";

type VenueDetailPageProps = {
  params: Promise<{ vid: string }>;
};

export default async function VenueDetailPage({ params }: VenueDetailPageProps) {
  const { vid } = await params;
  const venueJson = await getVenue(vid);
  const venue = venueJson.data;

  return (
    <main className={styles.page}>
      <div className={styles.detail}>
        <div className={styles.imageFrame}>
          <Image
            src={venue.picture}
            alt={venue.name}
            fill
            priority
            sizes="(max-width: 700px) 90vw, 340px"
            className={styles.image}
          />
        </div>
        <section className={styles.information}>
          <h1>{venue.name}</h1>
          <dl>
            <div>
              <dt>Name:</dt>
              <dd>{venue.name}</dd>
            </div>
            <div>
              <dt>Address:</dt>
              <dd>{venue.address}</dd>
            </div>
            <div>
              <dt>District:</dt>
              <dd>{venue.district}</dd>
            </div>
            <div>
              <dt>Postal Code:</dt>
              <dd>{venue.postalcode}</dd>
            </div>
            <div>
              <dt>Tel:</dt>
              <dd>{venue.tel}</dd>
            </div>
            <div>
              <dt>Daily Rate:</dt>
              <dd>{venue.dailyrate}</dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  );
}
