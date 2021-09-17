export interface ISchedule {
  id?: number;
  customer: string;
  pet?: string;
  service: string;
  date: string;
  status: string;
  notes?: string;
  createdAt: Date;
}
