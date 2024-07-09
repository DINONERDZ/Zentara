import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BotTitle } from "../bot/BotTitle";
import { MessageTitle } from "../message/MessageTitle";

export const ConversationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="endedAt" source="endedAt" />
        <DateTimeInput label="startedAt" source="startedAt" />
        <ReferenceInput source="bot.id" reference="Bot" label="Bot">
          <SelectInput optionText={BotTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="messages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
