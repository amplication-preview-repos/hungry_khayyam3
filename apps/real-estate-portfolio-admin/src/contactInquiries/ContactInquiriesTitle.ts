import { ContactInquiries as TContactInquiries } from "../api/contactInquiries/ContactInquiries";

export const CONTACTINQUIRIES_TITLE_FIELD = "name";

export const ContactInquiriesTitle = (record: TContactInquiries): string => {
  return record.name?.toString() || String(record.id);
};
