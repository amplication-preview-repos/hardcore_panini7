import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  price?: FloatNullableFilter;
  appointments?: AppointmentListRelationFilter;
  description?: StringNullableFilter;
};
