import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  name?: string | null;
  address?: string | null;
  price?: number | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  description?: string | null;
};
