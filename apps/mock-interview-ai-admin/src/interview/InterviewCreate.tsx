import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const InterviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="duration" source="duration" />
        <DateTimeInput label="scheduledAt" source="scheduledAt" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
