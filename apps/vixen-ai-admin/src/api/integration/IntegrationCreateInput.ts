import { InputJsonValue } from "../../types";

export type IntegrationCreateInput = {
  configuration?: InputJsonValue;
  connected?: boolean | null;
  name?: string | null;
  typeField?: "Option1" | null;
};
