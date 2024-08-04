import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PROJECTS_TITLE_FIELD } from "./ProjectsTitle";

export const ProjectsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ClientType" source="clientType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="KeyFeatures" source="keyFeatures" />
        <TextField label="Results" source="results" />
        <TextField label="Screenshots" source="screenshots" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CaseStudies"
          target="projectId"
          label="CaseStudiesItems"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
