import { Locale, Region } from './interfaces';

export interface StaticEndpoint {
  hostname: string;
  defaultLocale: Locale;
  locales: Locale[];
}

export interface Endpoint {
  hostname: string;
  region: Region;
  locale: Locale;
}

export type StaticEndpoints = {
  [region in Region]: StaticEndpoint;
};

export const endpoints: StaticEndpoints = {
  us: {
    hostname: 'https://us.api.blizzard.com',
    defaultLocale: 'en_US',
    locales: ['en_US', 'es_MX', 'pt_BR'],
  },
  eu: {
    hostname: 'https://eu.api.blizzard.com',
    defaultLocale: 'en_GB',
    locales: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT'],
  },
  kr: {
    hostname: 'https://kr.api.blizzard.com',
    defaultLocale: 'ko_KR',
    locales: ['ko_KR'],
  },
  tw: {
    hostname: 'https://tw.api.blizzard.com',
    defaultLocale: 'zh_TW',
    locales: ['zh_TW'],
  },
  cn: {
    hostname: 'https://gateway.battlenet.com.cn',
    defaultLocale: 'zh_CN',
    locales: ['zh_CN'],
  },
};
