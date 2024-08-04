import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TestimonialsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TestimonialsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ClientName" source="clientName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="TestimonialText" source="testimonialText" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VideoURL" source="videoUrl" />
      </Datagrid>
    </List>
  );
};
