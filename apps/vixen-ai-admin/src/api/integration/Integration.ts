import { JsonValue } from "type-fest";

export type Integration = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  configuration: JsonValue;
  connected: boolean | null;
  name: string | null;
  typeField?: "Option1" | null;
};
