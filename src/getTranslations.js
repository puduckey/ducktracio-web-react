import localization_en from "./locales/en";
import localization_es from "./locales/es";

const getTranslations = (language) => {
    if (language === "en") {
        return localization_en;
    } else if (language === "es") {
        return localization_es;
    } else {
        throw new Error(`Unsupported language: ${language}`);
    }
};

export default getTranslations;
