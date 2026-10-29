import type { VenueJson } from "../../interface";

const VENUES_API =
  "https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues";

export default async function getVenues(): Promise<VenueJson> {
  const response = await fetch(VENUES_API);

  if (!response.ok) {
    throw new Error("Failed to fetch venues");
  }

  return response.json() as Promise<VenueJson>;
}
