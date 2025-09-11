import { CommonDataType, MessageStatus, PageStatus } from "./Common";
import { LanguagesType } from "./Languages";

export interface CoursesFormValues {
  title?: string;
  subtitle?: string;
  duration?: string;
  price?: number;
  mrp?: number;
  totalLectures?: number;
  totalHours?: string;
  priority?: number;
  description?: string;
  review?: number;
  level?: string;
  courseImage?: string;
  thumbnailImage?: string;
  features?: boolean;
}

export interface CoursesType extends CoursesFormValues, CommonDataType {
  _id: string;
  languageId: LanguagesType[];
}

export interface CoursesDataResponse extends PageStatus {
  course_data: CoursesType[];
}

export interface CoursesApiResponse extends MessageStatus {
  data: CoursesDataResponse;
}

export interface CoursesDetailApiResponse extends MessageStatus {
  data: CoursesType;
}
