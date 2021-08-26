import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lib/translations/en";
import vn from "./lib/translations/vn";

const resources = {
    vn: {translation: vn},
    en: {translation : en},
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'vn',
    keySeparator: '.',
})

export default i18n;