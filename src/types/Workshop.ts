import { CommonDataType, MessageStatus, PageStatus } from "./Common";
import { LanguagesType } from "./Languages";

export interface WorkshopFormValues {
  title?: string;
  duration?: string;
  instructorImage?: string;
  instructorName?: string;
  workshopImage?: string;
  price?: number;
  priority?: number;
  features?: boolean;
}

export interface WorkshopType extends WorkshopFormValues, CommonDataType {
  _id: string;
  languageId: LanguagesType[];
}

export interface WorkshopDataResponse extends PageStatus {
  workshop_data: WorkshopType[];
}

export interface WorkshopApiResponse extends MessageStatus {
  data: WorkshopDataResponse;
}

export interface WorkshopDetailApiResponse extends MessageStatus {
  data: WorkshopType;
}