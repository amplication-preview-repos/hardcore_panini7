import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type AgentWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  name?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
};
