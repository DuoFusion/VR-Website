export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const URL = {
  AUTH: {
    FORGOT_PASSWORD: "/auth/forgot_password",
    VERIFY_OTP: "/auth/verify_otp",
    RESET_PASSWORD: "/auth/reset_password",
    CHANGE_PASSWORD: "/auth/change-password",
  },
  WORKSHOP: {
    ALL: "/workshop",
    ADD: "/workshop/add",
    EDIT: "/workshop/edit",
    DELETE: "/workshop/delete",
  },
  UPLOAD: {
    ADD: "/upload",
    DELETE: "/upload",
  },
  COURSES: {
    ALL: "/courses",
    ADD: "/courses/add",
    EDIT: "/courses/edit",
    DELETE: "/courses/delete",
  },
  BANNER: {
    ALL: "/banner",
    ADD: "/banner/add",
    EDIT: "/banner/edit",
    DELETE: "/banner/delete",
  },
  ACHIEVEMENTS: {
    ALL: "/achievements",
    ADD: "/achievements/add",
    EDIT: "/achievements/edit",
    DELETE: "/achievements/delete",
  },
  TESTOMONIALS: {
    ALL: "/testomonial",
    ADD: "/testomonial/add",
    EDIT: "/testomonial/edit",
    DELETE: "/testomonial/delete",
  },
  FAQ: {
    ALL: "/faq",
    ADD: "/faq/add",
    EDIT: "/faq/edit",
    DELETE: "/faq/delete",
  },
  WEB_SETTING: {
    ALL: "/web-setting",
    ADD_EDIT: "/web-setting/add/edit",
  },
  ADMIN_SETTING: {
    ALL: "/admin-setting",
    ADD_EDIT: "/admin-setting/add/edit",
  },
  COURSES_REGISTER: {
    ALL: "/course-register",
    ADD: "/course-register/add",
    EDIT: "/course-register/edit",
    DELETE: "/course-register/delete",
    VERIFY: "/course-register/verify",
  },
  WORKSHOP_REGISTER: {
    ALL: "/workshop-register",
    ADD: "/workshop-register/add",
    EDIT: "/workshop-register/edit",
    DELETE: "/workshop-register/delete",
    VERIFY: "/workshop-register/verify",
  },
  ABOUT: {
    ALL: "/about",
    ADD_EDIT: "/about/add/edit",
  },
  LANGUAGE: {
    ALL: "/language",
    ADD: "/language/add",
    EDIT: "/language/edit",
    DELETE: "/language/delete",
  },
  USER_REGISTRATION: {
    ALL: "/user-registration",
  },
  NEWS_LETTER: {
    ADD: "/news-letter/add",
  },
  BLOG: {
    ALL: "/blog",
    ADD: "/blog/add",
    EDIT: "/blog/edit",
    DELETE: "/blog/delete",
  },
  CONTACT_US: {
    ALL: "/contact-us",
    ADD: "/contact-us/add",
    EDIT: "/contact-us/edit",
    DELETE: "/contact-us/delete",
  },
} as const;

// Construct the URL object
export const URL_KEYS: { [K in keyof typeof URL]: { [P in keyof (typeof URL)[K]]: string } } = Object.fromEntries(Object.entries(URL).map(([key, subKeys]) => [key, Object.fromEntries(Object.entries(subKeys).map(([subKey, path]) => [subKey, `${BASE_URL}${path}`]))])) as {
  [K in keyof typeof URL]: { [P in keyof (typeof URL)[K]]: string };
};
