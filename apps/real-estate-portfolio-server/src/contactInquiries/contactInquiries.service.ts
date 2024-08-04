import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactInquiriesServiceBase } from "./base/contactInquiries.service.base";

@Injectable()
export class ContactInquiriesService extends ContactInquiriesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
