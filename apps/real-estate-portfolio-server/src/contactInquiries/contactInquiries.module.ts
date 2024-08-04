import { Module } from "@nestjs/common";
import { ContactInquiriesModuleBase } from "./base/contactInquiries.module.base";
import { ContactInquiriesService } from "./contactInquiries.service";
import { ContactInquiriesController } from "./contactInquiries.controller";
import { ContactInquiriesResolver } from "./contactInquiries.resolver";

@Module({
  imports: [ContactInquiriesModuleBase],
  controllers: [ContactInquiriesController],
  providers: [ContactInquiriesService, ContactInquiriesResolver],
  exports: [ContactInquiriesService],
})
export class ContactInquiriesModule {}
