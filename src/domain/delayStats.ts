/**
 * domain/delayStats.ts
 *
 * Responsibility: Pure business logic. No API calls, no UI, no side effects.
 * Takes raw data in, returns calculated results out.
 *
 * This is the easiest layer to unit test — no mocking needed.
 */

import type { Departure } from "../types";

export interface DelayStats {
  averageDelayMinutes: number;
  onTimePercentage: number;
  totalDepartures: number;
}

export function calculateDelayStats(departures: Departure[]): DelayStats {
  if (departures.length === 0) {
    return { averageDelayMinutes: 0, onTimePercentage: 100, totalDepartures: 0 };
  }

  const delays = departures.map((d) => d.delayMinutes ?? 0);
  const onTime = delays.filter((d) => d <= 0).length;

  return {
    averageDelayMinutes: delays.reduce((a, b) => a + b, 0) / delays.length,
    onTimePercentage: Math.round((onTime / departures.length) * 100),
    totalDepartures: departures.length,
  };
}
