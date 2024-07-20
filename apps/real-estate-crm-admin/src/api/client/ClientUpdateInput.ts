import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  preferredArea?: string | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
};
