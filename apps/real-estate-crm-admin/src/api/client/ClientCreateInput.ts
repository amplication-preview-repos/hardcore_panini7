import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  preferredArea?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
};
