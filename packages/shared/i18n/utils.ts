/**
 * i18n Utility Functions
 * Detect language from URL, get translations, build localized URLs
 */

import { ui, defaultLang, type Lang } from './ui';

/** Extract lang from URL path (e.g. /es/meal-prep/ → 'es', /meal-prep/ → 'en') */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

/** Get a translation function for a given language */
export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return (ui[lang] as any)?.[key] || ui[defaultLang][key] || key;
  };
}

/** Build a localized URL path */
export function localizedPath(lang: Lang, path: string): string {
  // Strip leading slash for consistency
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (lang === defaultLang) {
    return cleanPath;
  }

  // For non-default locale, prefix with /es/
  // But avoid double-prefixing
  if (cleanPath.startsWith(`/${lang}/`)) {
    return cleanPath;
  }

  return `/${lang}${cleanPath}`;
}

/** Get the alternate language URL for hreflang tags */
export function getAlternateUrls(currentPath: string, site: string): { lang: Lang; url: string }[] {
  // Strip any existing locale prefix
  let basePath = currentPath;
  for (const lang of Object.keys(ui) as Lang[]) {
    if (lang !== defaultLang && basePath.startsWith(`/${lang}/`)) {
      basePath = basePath.slice(lang.length + 1);
      break;
    }
  }

  return (Object.keys(ui) as Lang[]).map((lang) => ({
    lang,
    url: `${site}${localizedPath(lang, basePath)}`,
  }));
}

/** Get the opposite language for a switcher */
export function getOtherLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

export { type Lang, defaultLang };
