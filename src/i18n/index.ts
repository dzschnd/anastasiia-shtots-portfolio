export const LOCALES = ["ru", "en"] as const;

export type Locale = (typeof LOCALES)[number];

type Messages = Record<string, string>;

const STORAGE_KEY = "portfolio-locale";

export const getLocaleFromUrl = (url: URL): Locale => {
  if (url.pathname === "/en" || url.pathname.startsWith("/en/")) return "en";
  return "ru";
};

export const getMessage = (
  locale: Locale,
  messages: Record<Locale, Messages>,
  key: string,
): string => {
  return messages[locale][key] ?? messages.ru[key] ?? key;
};

export const withLocale = (href: string, locale: Locale): string => {
  const url = new URL(href, "https://anastasiiashtots.com");
  const cleanPath = url.pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  const localizedPath = locale === "en" ? `/en${cleanPath}`.replace(/\/+$/, "") || "/en" : cleanPath;
  return `${localizedPath}${url.hash}`;
};
