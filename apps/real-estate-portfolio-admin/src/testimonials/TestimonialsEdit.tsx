import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TestimonialsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ClientName" source="clientName" />
        <TextInput label="TestimonialText" multiline source="testimonialText" />
        <TextInput label="VideoURL" source="videoUrl" />
      </SimpleForm>
    </Edit>
  );
};
