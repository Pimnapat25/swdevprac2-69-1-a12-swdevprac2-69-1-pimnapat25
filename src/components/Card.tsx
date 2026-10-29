"use client";

import { useState } from "react";
import Image from "next/image";
import Rating from "@mui/material/Rating";

type CardProps = {
  venueName: string;
  imgSrc: string;
  onRatingChange?: (venueName: string, rating: number) => void;
};

export default function Card({ venueName, imgSrc, onRatingChange }: CardProps) {
  const [rating, setRating] = useState<number | null>(0);

  return (
    <article className="h-80 w-64 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
      <div className="relative h-52 w-full overflow-hidden">
        <Image src={imgSrc} alt={venueName} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-base font-normal text-gray-900">{venueName}</h3>
        {onRatingChange ? (
          <div
            className="mt-1"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Rating
              id={venueName}
              name={venueName}
              data-testid={`${venueName} Rating`}
              value={rating}
              onChange={(_, newValue) => {
                setRating(newValue);
                onRatingChange(venueName, newValue ?? 0);
              }}
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}
