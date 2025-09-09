import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface NewsLetterFormValues {
  email?: string;
}

export interface NewsLetterType extends NewsLetterFormValues, CommonDataType {
  _id: string;
}

export interface NewsLetterDataResponse extends PageStatus {
  newsLetter_data: NewsLetterType[];
}

export interface NewsLetterApiResponse extends MessageStatus {
  data: NewsLetterDataResponse;
}
