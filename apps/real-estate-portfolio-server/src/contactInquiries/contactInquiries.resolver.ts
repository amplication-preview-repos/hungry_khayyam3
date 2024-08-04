import * as graphql from "@nestjs/graphql";
import { ContactInquiriesResolverBase } from "./base/contactInquiries.resolver.base";
import { ContactInquiries } from "./base/ContactInquiries";
import { ContactInquiriesService } from "./contactInquiries.service";

@graphql.Resolver(() => ContactInquiries)
export class ContactInquiriesResolver extends ContactInquiriesResolverBase {
  constructor(protected readonly service: ContactInquiriesService) {
    super(service);
  }
}
