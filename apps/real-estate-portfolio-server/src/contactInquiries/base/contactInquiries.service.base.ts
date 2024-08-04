/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ContactInquiries as PrismaContactInquiries,
} from "@prisma/client";

export class ContactInquiriesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContactInquiriesCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contactInquiries.count(args);
  }

  async contactInquiriesItems(
    args: Prisma.ContactInquiriesFindManyArgs
  ): Promise<PrismaContactInquiries[]> {
    return this.prisma.contactInquiries.findMany(args);
  }
  async contactInquiries(
    args: Prisma.ContactInquiriesFindUniqueArgs
  ): Promise<PrismaContactInquiries | null> {
    return this.prisma.contactInquiries.findUnique(args);
  }
  async createContactInquiries(
    args: Prisma.ContactInquiriesCreateArgs
  ): Promise<PrismaContactInquiries> {
    return this.prisma.contactInquiries.create(args);
  }
  async updateContactInquiries(
    args: Prisma.ContactInquiriesUpdateArgs
  ): Promise<PrismaContactInquiries> {
    return this.prisma.contactInquiries.update(args);
  }
  async deleteContactInquiries(
    args: Prisma.ContactInquiriesDeleteArgs
  ): Promise<PrismaContactInquiries> {
    return this.prisma.contactInquiries.delete(args);
  }
}