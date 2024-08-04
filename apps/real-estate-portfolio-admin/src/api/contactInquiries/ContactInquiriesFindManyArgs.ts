import { ContactInquiriesWhereInput } from "./ContactInquiriesWhereInput";
import { ContactInquiriesOrderByInput } from "./ContactInquiriesOrderByInput";

export type ContactInquiriesFindManyArgs = {
  where?: ContactInquiriesWhereInput;
  orderBy?: Array<ContactInquiriesOrderByInput>;
  skip?: number;
  take?: number;
};
