import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactInquiriesService } from "./contactInquiries.service";
import { ContactInquiriesControllerBase } from "./base/contactInquiries.controller.base";

@swagger.ApiTags("contactInquiries")
@common.Controller("contactInquiries")
export class ContactInquiriesController extends ContactInquiriesControllerBase {
  constructor(protected readonly service: ContactInquiriesService) {
    super(service);
  }
}
