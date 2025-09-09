import { CommonDataType, MessageStatus } from "./Common";

interface socialMedia {
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  youtube?: string;
  twitter?: string;
}

export interface WebSettingType extends CommonDataType {
  name?: string;
  email?: string;
  phoneNumber?: number | null;
  socialMedia?: socialMedia;
  razorpayKeyId?: string;
  razorpayKeySecret?: string;
  ourStudent?: string;
  rating?: string;
  address?: string;
  _id?: string;
}

export interface WebSettingApiResponse extends MessageStatus {
  data: WebSettingType;
}
