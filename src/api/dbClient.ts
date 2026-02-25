/**
 * api/dbClient.ts
 *
 * Responsibility: ALL communication with the Deutsche Bahn API lives here.
 * Nothing outside this folder should make direct HTTP calls.
 *
 * This keeps API logic in one place — easy to mock in tests,
 * easy to swap if the API changes.
 */

import axios from "axios";
import type { RawDeparture, RawStation } from "../types";

const BASE_URL = "https://v6.db.transport.rest";

const _client = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export async function searchStations(query: string): Promise<RawStation[]> {
  // TODO: implement
  throw new Error("Not implemented");
}

export async function getDepartures(stationId: string): Promise<RawDeparture[]> {
  // TODO: implement
  throw new Error("Not implemented");
}
