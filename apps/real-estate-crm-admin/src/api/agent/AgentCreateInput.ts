import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  email?: string | null;
  phoneNumber?: string | null;
  name?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
};
