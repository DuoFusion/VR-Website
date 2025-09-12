import { CommonDataType, MessageStatus, PageStatus } from "./Common";
import { RazorpayOrderType } from "./Razorpay";
import { WorkshopType } from "./Workshop";

export interface WorkshopRegisterFormValues {
  workshopId?: string;
  name?: string;
  gender?: string;
  standard?: string;
  schoolName?: string;
  city?: string;
  whatsAppNumber?: string;
  email?: string;
  previousPercentage?: number | undefined;
  targetPercentage?: number | undefined;
  goal?: string;
  fees?: number;
}

export interface WorkshopRegisterType extends Omit<Required<WorkshopRegisterFormValues>, "workshopId">, CommonDataType {
  _id: string;
  workshopId: WorkshopType;
}

export interface WorkshopRegisterDataResponse extends PageStatus {
  workshopRegister_data: WorkshopRegisterType[];
}

export interface WorkshopRegisterApiResponse extends MessageStatus {
  data: WorkshopRegisterDataResponse;
}

export interface WorkshopRazorpayApiResponse extends MessageStatus {
  data: {
    purchase: WorkshopRegisterType;
    razorpayOrder: RazorpayOrderType;
  };
}
