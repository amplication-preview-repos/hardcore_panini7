import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  name?: string | null;
  address?: string | null;
  price?: number | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  description?: string | null;
};
