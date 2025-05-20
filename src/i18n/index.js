import { createI18n } from "vue-i18n";
import es from "./locales/es.json";
import en from "./locales/en.json";
import eu from "./locales/eu.json"; // Asegúrate de importar el archivo para 'eu'

// Determinar el idioma inicial
function getInitialLocale() {
  // Primero, intentar obtener el idioma guardado en localStorage
  const savedLocale = localStorage.getItem("userLocale");
  if (savedLocale && ["es", "en", "eu"].includes(savedLocale)) {
    return savedLocale;
  }

  // Si no hay idioma guardado, intentar usar el idioma del navegador
  const browserLocale = navigator.language.split("-")[0];
  if (["es", "en", "eu"].includes(browserLocale)) {
    return browserLocale;
  }

  // Por defecto, usar español
  return "es";
}

// Crear instancia de i18n
const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: "es",
  messages: {
    es,
    en,
    eu,
  },
});

export default i18n;
