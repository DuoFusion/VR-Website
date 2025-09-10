import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface BlogFormValues {
  priority?: number;
  thumbnailImage?: string;
  blogImage?: string;
  title?: string;
  subtitle?: string;
  tag?: string;
  description?: string;
}

export interface BlogType extends BlogFormValues, CommonDataType {
  _id: string;
}

export interface BlogDataResponse extends PageStatus {
  blog_data: BlogType[];
}

export interface BlogApiResponse extends MessageStatus {
  data: BlogDataResponse;
}

export interface BlogDetailsApiResponse extends MessageStatus {
  data: BlogType;
}