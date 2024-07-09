import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type IntegrationWhereInput = {
  id?: StringFilter;
  configuration?: JsonFilter;
  connected?: BooleanNullableFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
};
