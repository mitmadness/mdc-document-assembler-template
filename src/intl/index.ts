import { SyncLocalesRegistry } from '@mitm/intl';

export const defaultRegistry = await SyncLocalesRegistry.fromLazyModule({
    defaultLocale: 'en-us',
    languageRedirects: { en: 'en-us', fr: 'fr-fr' },
    locales: [
        {
            code: 'en-us',
            nativeName: 'English',
            translations: () => import('./en-us.json', { assert: { type: 'json' } }).then(mod => mod.default),
            dateFnsLocale: () => import('date-fns/locale/en-US/index.js').then(mod => mod.default)
        },
        {
            code: 'fr-fr',
            nativeName: 'Français',
            translations: () => import('./fr-fr.json', { assert: { type: 'json' } }).then(mod => mod.default),
            dateFnsLocale: () => import('date-fns/locale/fr/index.js').then(mod => mod.default)
        }
    ]
});
