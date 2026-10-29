"use client";

import { useReducer } from "react";
import Link from "next/link";
import Card from "./Card";
import styles from "@/app/page.module.css";

const venues = [
  { vid: "001", venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
  { vid: "002", venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg" },
  { vid: "003", venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg" },
];

type RatingAction =
  | { type: "set"; venueName: string; rating: number }
  | { type: "remove"; venueName: string };

function ratingReducer(state: Map<string, number>, action: RatingAction) {
  const next = new Map(state);
  if (action.type === "set") {
    next.set(action.venueName, action.rating);
  } else {
    next.delete(action.venueName);
  }
  return next;
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(
    ratingReducer,
    new Map(venues.map((venue) => [venue.venueName, 0]))
  );

  return (
    <div>
      <div className={styles.cards}>
        {venues.map((venue) => (
          <Link key={venue.vid} href={`/venue/${venue.vid}`} className="block">
            <Card
              venueName={venue.venueName}
              imgSrc={venue.imgSrc}
              onRatingChange={(venueName, rating) =>
                dispatch({ type: "set", venueName, rating })
              }
            />
          </Link>
        ))}
      </div>
      <div className="mt-6 w-full max-w-3xl px-4">
        <h3 className="font-bold">Venue List with Ratings : {ratings.size}</h3>
        {[...ratings.entries()].map(([venueName, rating]) => (
          <div
            key={venueName}
            data-testid={venueName}
            onClick={() => dispatch({ type: "remove", venueName })}
            className="cursor-pointer py-1"
          >
            {venueName} Rating : {rating}
          </div>
        ))}
      </div>
    </div>
  );
}
