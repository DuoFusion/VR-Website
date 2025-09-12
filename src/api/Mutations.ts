import { KEYS, URL_KEYS } from "../constants";
import { ContactUsFormValues, CoursesRazorpayApiResponse, CoursesRegisterFormValues, NewsLetterFormValues, RegisterVerify, WorkshopRazorpayApiResponse, WorkshopRegisterFormValues } from "../types";
import { useApiPost } from "./hooks";
import Post from "./Post";

const Mutations = {
  // ************ News Letter ***********
  useNewsLetter: () => useApiPost<NewsLetterFormValues, void>([KEYS.NEWS_LETTER.ADD], (input) => Post(URL_KEYS.NEWS_LETTER.ADD, input)),

  // ************ Contact Us ***********
  useContactUs: () => useApiPost<ContactUsFormValues, void>([KEYS.CONTACT_US.ADD], (input) => Post(URL_KEYS.CONTACT_US.ADD, input)),

  // ************ Workshop Register ***********
  useWorkshopRegister: () => useApiPost<WorkshopRegisterFormValues, WorkshopRazorpayApiResponse>([KEYS.WORKSHOP_REGISTER.ADD], (input) => Post(URL_KEYS.WORKSHOP_REGISTER.ADD, input)),
  useWorkshopRegisterVerify: () => useApiPost<RegisterVerify, void>([KEYS.WORKSHOP_REGISTER.VERIFY], (input) => Post(URL_KEYS.WORKSHOP_REGISTER.VERIFY, input)),

  // ************ Courses Register ***********
  useCoursesRegister: () => useApiPost<CoursesRegisterFormValues, CoursesRazorpayApiResponse>([KEYS.COURSES_REGISTER.ADD], (input) => Post(URL_KEYS.COURSES_REGISTER.ADD, input)),
  useCoursesRegisterVerify: () => useApiPost<RegisterVerify, void>([KEYS.COURSES_REGISTER.VERIFY], (input) => Post(URL_KEYS.COURSES_REGISTER.VERIFY, input)),
};

export default Mutations;
