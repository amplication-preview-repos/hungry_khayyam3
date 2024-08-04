import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { CaseStudiesTitle } from "../caseStudies/CaseStudiesTitle";

export const ProjectsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="caseStudiesItems"
          reference="CaseStudies"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CaseStudiesTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="clientType"
          label="ClientType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="KeyFeatures" multiline source="keyFeatures" />
        <TextInput label="Results" multiline source="results" />
        <div />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
