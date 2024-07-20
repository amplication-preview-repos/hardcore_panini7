import { Appointment } from "../appointment/Appointment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  price: number | null;
  appointments?: Array<Appointment>;
  description: string | null;
};
