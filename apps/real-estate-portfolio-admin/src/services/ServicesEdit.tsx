import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ServicesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="ServiceName" source="serviceName" />
      </SimpleForm>
    </Edit>
  );
};
