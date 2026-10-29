import type { VenueDetailJson } from "../../interface";

const VENUES_API =
  "https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues";

export default async function getVenue(
  vid: string,
): Promise<VenueDetailJson> {
  const response = await fetch(`${VENUES_API}/${encodeURIComponent(vid)}`);

  if (!response.ok) {
    throw new Error("Failed to fetch venue");
  }

  return response.json() as Promise<VenueDetailJson>;
}
