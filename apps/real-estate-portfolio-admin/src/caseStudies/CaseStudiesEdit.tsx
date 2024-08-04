import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProjectsTitle } from "../projects/ProjectsTitle";

export const CaseStudiesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
