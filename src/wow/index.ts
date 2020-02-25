import { AxiosInstance, AxiosResponse } from 'axios';

import { BlizzardClient } from '../client';

import {
  CharacterAchievementsStatistics,
  CharacterAchievementsSummary,
  CharacterAppearanceSummary,
  CharacterProfileStatus,
  CharacterProfileSummary,
} from './interfaces';

export * from './interfaces';

export class WorldOfWarcraftClient {
  private readonly http: AxiosInstance;

  get namespace(): string {
    return `profile-${this.client.endpoint.region}`;
  }

  constructor(private readonly client: BlizzardClient) {
    this.http = client.clone({
      params: {
        namespace: this.namespace,
      },
    });
  }

  /**
   * Returns a summary of the achievements a character has completed
   *
   * @param realmSlug
   * @param characterName
   */
  characterAchievementsSummary(
    realmSlug: string,
    characterName: string,
  ): Promise<AxiosResponse<CharacterAchievementsSummary>> {
    return this.http.get(
      `/profile/wow/character/${realmSlug}/${characterName}/achievements`,
    );
  }

  /**
   * Returns a character's statistics as they pertain to achievements
   *
   * @param realmSlug
   * @param characterName
   */
  characterAchievementsStatistics(
    realmSlug: string,
    characterName: string,
  ): Promise<AxiosResponse<CharacterAchievementsStatistics>> {
    return this.http.get(
      `/profile/wow/character/${realmSlug}/${characterName}/achievements/statistics`,
    );
  }

  /**
   * Returns a summary of a character's appearance settings
   *
   * @param realmSlug
   * @param characterName
   */
  characterAppearanceSummary(
    realmSlug: string,
    characterName: string,
  ): Promise<AxiosResponse<CharacterAppearanceSummary>> {
    return this.http.get(
      `/profile/wow/character/${realmSlug}/${characterName}/appearance`,
    );
  }

  /**
   * Returns a profile summary for a character.
   *
   * @param realmSlug
   * @param characterName
   */
  characterProfileSummary(
    realmSlug: string,
    characterName: string,
  ): Promise<AxiosResponse<CharacterProfileSummary>> {
    return this.http.get(
      `/profile/wow/character/${realmSlug}/${characterName}`,
    );
  }

  /**
   * Returns the status and a unique ID for a character. A client should delete information about a character from their application if any of the following conditions occur:
   * - an HTTP 404 Not Found error is returned
   * - the is_valid value is false
   * - the returned character ID doesn't match the previously recorded value for the character
   *
   * The following example illustrates how to use this endpoint:
   * 1. A client requests and stores information about a character, including its unique character ID and the timestamp of the request.
   * 2. After 30 days, the client makes a request to the status endpoint to verify if the character information is still valid.
   * 3. If character cannot be found, is not valid, or the characters IDs do not match, the client removes the information from their application.
   * 4. If the character is valid and the character IDs match, the client retains the data for another 30 days.
   *
   * @param realmSlug
   * @param characterName
   */
  characterProfileStatus(
    realmSlug: string,
    characterName: string,
  ): Promise<AxiosResponse<CharacterProfileStatus>> {
    return this.http.get(
      `/profile/wow/character/${realmSlug}/${characterName}/status`,
    );
  }
}
