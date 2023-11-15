import i18n from 'i18next'
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next'

const LOCAL_PATH = `http://${
  import.meta.env.VITE_HOST_PATH
}:3000/langs/{{lng}}/{{ns}}.json`
const DIST_PATH = `dist/langs/{{lng}}/{{ns}}.json?v=${
    import.meta.env.VITE_LANGUAGES_VERSION
  }`

const fallbackLng = [document.documentElement.lang, 'pt']
const languages = ['pt','en']

const options = {
    order: ['navigator', 'htmlTag', 'path', 'subdomain'],
    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,
  
    // cache user language on
    caches: ['localStorage', 'cookie'],
  
    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement,
  }

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng,
        returnNull: false,
        supportedLngs: languages,
        detection: options,
        backend: {
            backends: [Backend],
            backendOptions: [
                {
                    expirationTime: 7 * 24 * 60 * 60 * 1000
                },
                {
                    loadPath:
                        import.meta.env.MODE === 'development' ? LOCAL_PATH : DIST_PATH,
                }
            ]
        },
        interpolation: {
            escapeValue: false,
        },
})

export default i18n