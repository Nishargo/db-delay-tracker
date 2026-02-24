/**
 * types/index.ts
 *
 * Shared TypeScript interfaces used across all layers.
 * Keeping types here avoids circular imports and makes
 * the data shapes easy to find.
 */

// Raw shape from the DB API — don't use these directly in the UI
export interface RawStation {
  id: string;
  name: string;
}

export interface RawDeparture {
  tripId: string;
  direction: string;
  plannedWhen: string;
  when: string | null;
  delay: number | null; // seconds
  line: {
    name: string;
    product: string;
  };
}

// Clean domain types used in business logic and UI
export interface Station {
  id: string;
  name: string;
}

export interface Departure {
  id: string;
  direction: string;
  line: string;
  plannedTime: Date;
  actualTime: Date | null;
  delayMinutes: number | null;
  cancelled: boolean;
}
