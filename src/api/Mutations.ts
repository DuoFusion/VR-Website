import { KEYS, URL_KEYS } from "../constants";
import { NewsLetterFormValues } from "../types";
import { useApiPost } from "./hooks";
import Post from "./Post";

const Mutations = {
  // ************ News Letter ***********
  useNewsLetter: () => useApiPost<NewsLetterFormValues, void>([KEYS.NEWS_LETTER.ADD], (input) => Post(URL_KEYS.NEWS_LETTER.ADD, input)),
};

export default Mutations;
