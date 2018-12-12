export interface Exercise {
  id: string;
  name: string;
  distance?: number;
  weight?: number;
  reps?: number;
  sets?: number;
  date?: Date;
  state?: 'completed'| 'cancelled' | null;
  time?: string;
}
