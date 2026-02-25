/**
 * api/dbClient.ts
 *
 * Responsibility: ALL communication with the Deutsche Bahn API lives here.
 * Nothing outside this folder should make direct HTTP calls.
 */

import type { RawDeparture, RawStation } from "../types";

const BASE_URL = "https://v6.db.transport.rest";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function searchStations(_query: string): Promise<RawStation[]> {
  throw new Error("Not implemented");
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getDepartures(_stationId: string): Promise<RawDeparture[]> {
  throw new Error("Not implemented");
}