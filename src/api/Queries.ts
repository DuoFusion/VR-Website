import { KEYS, URL_KEYS } from "../constants";
import { AchievementsApiResponse, BlogApiResponse, BlogDetailsApiResponse, FaqApiResponse, Params, TestomonialsApiResponse, WebSettingApiResponse, WorkshopApiResponse, WorkshopDetailApiResponse } from "../types";
import { CoursesApiResponse, CoursesDetailApiResponse } from "../types/Courses";
import Get from "./Get";
import { useApiGet } from "./hooks";

const Queries = {
  // ************ Workshop ***********
  useGetWorkshop: (params: Params) => useApiGet<WorkshopApiResponse>([KEYS.WORKSHOP.ALL, params], () => Get(URL_KEYS.WORKSHOP.ALL, params)),
  useGetWorkshopDetail: (id: string) => useApiGet<WorkshopDetailApiResponse>([KEYS.WORKSHOP.DETAILS, id], () => Get(`${URL_KEYS.WORKSHOP.ALL}/${id}`)),

  // // ************ Workshop Register ***********
  // useGetWorkshopRegister: (params: Params) => useApiGet<WorkshopRegisterApiResponse>([KEYS.WORKSHOP_REGISTER.ALL, params], () => Get(URL_KEYS.WORKSHOP_REGISTER.ALL, params)),

  // ************ Courses ***********
  useGetCourses: (params: Params) => useApiGet<CoursesApiResponse>([KEYS.COURSES.ALL, params], () => Get(URL_KEYS.COURSES.ALL, params)),
  useGetCoursesDetail: (id: string) => useApiGet<CoursesDetailApiResponse>([KEYS.COURSES.DETAILS, id], () => Get(`${URL_KEYS.COURSES.ALL}/${id}`)),

  // // ************ Courses Register ***********
  // useGetCoursesRegister: (params: Params) => useApiGet<CoursesRegisterApiResponse>([KEYS.COURSES_REGISTER.ALL, params], () => Get(URL_KEYS.COURSES_REGISTER.ALL, params)),

  // // ************ Banner ***********
  // useGetBanner: (params: Params) => useApiGet<BannerApiResponse>([KEYS.BANNER.ALL, params], () => Get(URL_KEYS.BANNER.ALL, params)),

  // ************ Achievements ***********
  useGetAchievements: (params: Params) => useApiGet<AchievementsApiResponse>([KEYS.ACHIEVEMENTS.ALL, params], () => Get(URL_KEYS.ACHIEVEMENTS.ALL, params)),

  // ************ Testomonials ***********
  useGetTestomonials: () => useApiGet<TestomonialsApiResponse>([KEYS.TESTOMONIALS.ALL], () => Get(URL_KEYS.TESTOMONIALS.ALL)),

  // ************ Faq ***********
  useGetFaq: () => useApiGet<FaqApiResponse>([KEYS.FAQ.ALL], () => Get(URL_KEYS.FAQ.ALL)),

  // ************ Web Setting ***********
  useGetWebSetting: () => useApiGet<WebSettingApiResponse>([KEYS.WEB_SETTING.ALL], () => Get(URL_KEYS.WEB_SETTING.ALL)),

  // // ************ Admin Setting ***********
  // useGetAdminSetting: () => useApiGet<AdminSettingApiResponse>([KEYS.ADMIN_SETTING.ALL], () => Get(URL_KEYS.ADMIN_SETTING.ALL)),

  // // ************ About ***********
  // useGetAbout: () => useApiGet<AboutApiResponse>([KEYS.ABOUT.ALL], () => Get(URL_KEYS.ABOUT.ALL)),

  // // ************ Languages ***********
  // useGetLanguages: (params: Params) => useApiGet<LanguagesApiResponse>([KEYS.LANGUAGE.ALL, params], () => Get(URL_KEYS.LANGUAGE.ALL, params)),

  // ************ Blog ***********
  useGetBlog: (params: Params) => useApiGet<BlogApiResponse>([KEYS.BLOG.ALL, params], () => Get(URL_KEYS.BLOG.ALL, params)),
  useGetBlogDetail: (id: string) => useApiGet<BlogDetailsApiResponse>([KEYS.BLOG.DETAILS, id], () => Get(`${URL_KEYS.BLOG.ALL}/${id}`)),
};

export default Queries;
