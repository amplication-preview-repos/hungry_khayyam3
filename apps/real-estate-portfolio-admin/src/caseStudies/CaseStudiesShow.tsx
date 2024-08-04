import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PROJECTS_TITLE_FIELD } from "../projects/ProjectsTitle";

export const CaseStudiesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Challenges" source="challenges" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Outcomes" source="outcomes" />
        <ReferenceField
          label="Project"
          source="projects.id"
          reference="Projects"
        >
          <TextField source={PROJECTS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Solutions" source="solutions" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
