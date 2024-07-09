import { SortOrder } from "../../util/SortOrder";

export type IntegrationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  configuration?: SortOrder;
  connected?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
};
