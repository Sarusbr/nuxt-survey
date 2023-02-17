import tr from "./tr"
import en from "./en"
export default {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    vueI18n: {
      fallbackLocale: 'tr',
      messages: {
        tr,
        en
      }
    }
}