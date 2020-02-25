import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { BlizzardClientOptions, BlizzardOAuthPayload } from './interfaces';
import { Endpoint, endpoints } from './endpoints';

export class BlizzardClient {
  readonly http: AxiosInstance;
  readonly endpoint: Endpoint;

  constructor(private readonly options: BlizzardClientOptions) {
    this.endpoint = this.getEndpoint(options);

    this.http = axios.create({
      baseURL: this.endpoint.hostname,
      params: {
        locale: this.endpoint.locale,
      },
    });
  }

  static async create(options: BlizzardClientOptions): Promise<BlizzardClient> {
    const client = new BlizzardClient(options);
    await client.authorize();
    return client;
  }

  private getEndpoint(options: BlizzardClientOptions): Endpoint {
    const region = options.region || 'us';
    const { locales, hostname, defaultLocale } = endpoints[region];
    const locale = locales.find(locale => locale === options.locale);

    return {
      locale: locale || defaultLocale,
      hostname,
      region,
    };
  }

  private getOAuthPayload(): Promise<AxiosResponse<BlizzardOAuthPayload>> {
    return axios.get(`https://${this.endpoint.region}.battle.net/oauth/token`, {
      auth: {
        username: this.options.id,
        password: this.options.secret,
      },
      params: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        grant_type: 'client_credentials',
      },
    });
  }

  async authorize(): Promise<void> {
    const {
      data: { access_token: accessToken },
    } = await this.getOAuthPayload();
    this.http.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  clone(options: AxiosRequestConfig = {}): AxiosInstance {
    return axios.create({
      ...this.http.defaults,
      ...options,
    });
  }
}
