import { KEYS, URL_KEYS } from "../constants";
import { ContactUsFormValues, NewsLetterFormValues } from "../types";
import { useApiPost } from "./hooks";
import Post from "./Post";

const Mutations = {
  // ************ News Letter ***********
  useNewsLetter: () => useApiPost<NewsLetterFormValues, void>([KEYS.NEWS_LETTER.ADD], (input) => Post(URL_KEYS.NEWS_LETTER.ADD, input)),

  // ************ Contact Us ***********
  useContactUs: () => useApiPost<ContactUsFormValues, void>([KEYS.CONTACT_US.ADD], (input) => Post(URL_KEYS.CONTACT_US.ADD, input)),
};

export default Mutations;
