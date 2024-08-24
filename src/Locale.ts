import localeEn from 'air-datepicker/locale/en';
import localeAr from 'air-datepicker/locale/cs';
import localeBg from 'air-datepicker/locale/cs';
import localeCa from 'air-datepicker/locale/cs';
import localeCs from 'air-datepicker/locale/cs';
import localeDa from 'air-datepicker/locale/cs';
import localeDe from 'air-datepicker/locale/cs';
import localeEl from 'air-datepicker/locale/cs';
import localeEs from 'air-datepicker/locale/cs';
import localeEu from 'air-datepicker/locale/cs';
import localeFi from 'air-datepicker/locale/cs';
import localeFr from 'air-datepicker/locale/cs';
import localeHr from 'air-datepicker/locale/cs';
import localeHu from 'air-datepicker/locale/cs';
import localeId from 'air-datepicker/locale/cs';
import localeIt from 'air-datepicker/locale/cs';
import localeJa from 'air-datepicker/locale/cs';
import localeKo from 'air-datepicker/locale/cs';
import localeNb from 'air-datepicker/locale/cs';
import localeNl from 'air-datepicker/locale/cs';
import localePl from 'air-datepicker/locale/cs';
import localePtBR from 'air-datepicker/locale/cs';
import localePt from 'air-datepicker/locale/cs';
import localeRo from 'air-datepicker/locale/cs';
import localeRu from 'air-datepicker/locale/cs';
import localeSi from 'air-datepicker/locale/cs';
import localeSk from 'air-datepicker/locale/cs';
import localeSl from 'air-datepicker/locale/cs';
import localeSv from 'air-datepicker/locale/cs';
import localeTh from 'air-datepicker/locale/cs';
import localeTr from 'air-datepicker/locale/cs';
import localeUk from 'air-datepicker/locale/cs';
import localeZh from 'air-datepicker/locale/cs';

export default class Locale {

    static locales = {
        ar: localeAr,
        bg: localeBg,
        ca: localeCa,
        cs: localeCs,
        da: localeDa,
        de: localeDe,
        el: localeEl,
        en: localeEn,
        es: localeEs,
        eu: localeEu,
        fi: localeFi,
        fr: localeFr,
        hr: localeHr,
        hu: localeHu,
        id: localeId,
        it: localeIt,
        ja: localeJa,
        ko: localeKo,
        nb: localeNb,
        nl: localeNl,
        pl: localePl,
        pt_BR: localePtBR,
        pt: localePt,
        ro: localeRo,
        ru: localeRu,
        si: localeSi,
        sk: localeSk,
        sl: localeSl,
        sv: localeSv,
        th: localeTh,
        tr: localeTr,
        uk: localeUk,
        zh: localeZh
    }

    static getLocale(locale) {
        return this.locales[locale];
    }
}
