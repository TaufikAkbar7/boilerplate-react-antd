import { APP_LANGUAGE } from "~/features/app/constants/app-constants";

const language = {
  [APP_LANGUAGE.EN]: {
    translation: {
      app: {
        welcome: "welcome"
      }
    }
  },
  [APP_LANGUAGE.ID]: {
    translation: {
      app: {
        welcome: "selamat datang"
      }
    }
  }
};

export default language;
