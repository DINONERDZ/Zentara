import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const IntegrationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="configuration" source="configuration" />
        <BooleanField label="connected" source="connected" />
        <TextField label="name" source="name" />
        <TextField label="type" source="typeField" />
      </SimpleShowLayout>
    </Show>
  );
};