import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TestimonialsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ClientName" source="clientName" />
        <TextInput label="TestimonialText" multiline source="testimonialText" />
        <TextInput label="VideoURL" source="videoUrl" />
      </SimpleForm>
    </Create>
  );
};
