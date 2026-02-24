import { describe, it, expect } from "vitest";
import { calculateDelayStats } from "../../src/domain/delayStats";
import type { Departure } from "../../src/types";

const mockDeparture = (delayMinutes: number | null): Departure => ({
  id: "test-id",
  direction: "Hamburg Hbf",
  line: "ICE 123",
  plannedTime: new Date(),
  actualTime: new Date(),
  delayMinutes,
  cancelled: false,
});

describe("calculateDelayStats", () => {
  it("returns zero stats for empty array", () => {
    const result = calculateDelayStats([]);
    expect(result.totalDepartures).toBe(0);
    expect(result.onTimePercentage).toBe(100);
  });

  it("calculates average delay correctly", () => {
    const departures = [
      mockDeparture(10),
      mockDeparture(20),
      mockDeparture(0),
    ];
    const result = calculateDelayStats(departures);
    expect(result.averageDelayMinutes).toBeCloseTo(10);
  });

  it("calculates on-time percentage correctly", () => {
    const departures = [
      mockDeparture(0),
      mockDeparture(0),
      mockDeparture(15),
      mockDeparture(5),
    ];
    const result = calculateDelayStats(departures);
    expect(result.onTimePercentage).toBe(50);
  });
});
