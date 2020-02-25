export type Region = 'eu' | 'us' | 'cn' | 'kr' | 'tw';

export type Locale =
  | 'en_US'
  | 'es_MX'
  | 'pt_BR'
  | 'en_GB'
  | 'es_ES'
  | 'fr_FR'
  | 'ru_RU'
  | 'de_DE'
  | 'pt_PT'
  | 'it_IT'
  | 'ko_KR'
  | 'zh_TW'
  | 'zh_CN';

export interface BlizzardClientOptions {
  region?: Region;
  locale?: Locale;
  secret: string;
  id: string;
}

export interface BlizzardOAuthPayload {
  access_token: string;
  token_type: 'bearer';
  expires_in: number;
  scope: string;
}
