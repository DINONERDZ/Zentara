import { InputJsonValue } from "../../types";

export type IntegrationUpdateInput = {
  configuration?: InputJsonValue;
  connected?: boolean | null;
  name?: string | null;
  typeField?: "Option1" | null;
};
