import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProjectsTitle } from "../projects/ProjectsTitle";

export const CaseStudiesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Challenges" multiline source="challenges" />
        <TextInput label="Outcomes" multiline source="outcomes" />
        <ReferenceInput
          source="project.id"
          reference="Projects"
          label="Project"
        >
          <SelectInput optionText={ProjectsTitle} />
        </ReferenceInput>
        <TextInput label="Solutions" multiline source="solutions" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
