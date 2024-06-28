import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const InterviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="duration" source="duration" />
        <DateTimeInput label="scheduledAt" source="scheduledAt" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
