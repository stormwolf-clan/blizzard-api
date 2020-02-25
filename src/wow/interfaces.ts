/* eslint-disable @typescript-eslint/camelcase, @typescript-eslint/no-empty-interface */

export interface Base {
  /*key: {
    href: string;
  };*/
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ID {
  name: string;
  id: number;
}

export interface Realm extends Base, ID {
  slug: string;
}

export interface Character extends Base, ID {
  realm: Realm;
}

export interface Guild extends Base, ID {
  realm: Realm;
}

export interface Units {
  gold: number;
  silver: number;
  copper: number;
}

export interface Money {
  value: number;
  units: Units;
}

export interface Statistic extends ID {
  money?: Money;
  last_updated_timestamp?: number;
  quantity?: number;
  statistics?: Statistic[];
  sub_categories?: Statistic[];
}

export interface Achievement extends Base, ID {}

export interface Criteria {
  id: number;
  is_completed: boolean;
  amount?: number;
  child_criteria: Criteria[];
}

export interface AchievementSummary {
  id: number;
  achievement: Achievement;
  criteria: Criteria;
  completed_timestamp: number;
}

export interface CharacterAchievementsSummary {
  total_quantity: number;
  total_points: number;
  character: Character;
  achievements: AchievementSummary[];
  // category_progress: any[];
}

export interface CharacterAchievementsStatistics {
  character: Character;
  statistics: Statistic[];
}

export type Race = Base & ID;
export type CharacterClass = Base & ID;
export type PlayableRace = Base & ID;
export type PlayableClass = Base & ID;
export type ActiveSpec = Base & ID;

export interface Gender {
  type: 'FEMALE' | 'MALE';
  name: string;
}

export interface Faction {
  type: 'HORDE' | 'ALLIANCE';
  name: string;
}

export interface GuildCrest {
  emblem: {
    id: 181;
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/guild-crest/emblem/181?namespace=static-8.3.0_32861-eu';
      };
    };
    color: {
      id: 14;
      rgba: {
        r: 177;
        g: 184;
        b: 177;
        a: 1;
      };
    };
  };
  border: {
    id: 1;
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/guild-crest/border/1?namespace=static-8.3.0_32861-eu';
      };
    };
    color: {
      id: 14;
      rgba: {
        r: 255;
        g: 255;
        b: 255;
        a: 1;
      };
    };
  };
  background: {
    color: {
      id: 31;
      rgba: {
        r: 44;
        g: 106;
        b: 174;
        a: 1;
      };
    };
  };
}

export interface Appearance {
  face_variation: 8;
  skin_color: 0;
  hair_variation: 19;
  hair_color: 1;
  feature_variation: 6;
  custom_display_options: [0, 0, 0];
}

export interface ActiveTitle extends Base, ID {
  display_string: string;
}

export interface CharacterAppearanceSummary {
  character: Character;
  playable_race: PlayableRace;
  playable_class: PlayableClass;
  active_spec: ActiveSpec;
  gender: Gender;
  faction: Faction;
  guild_crest: any; //GuildCrest;
  appearance: any; //Appearance;
  items: any[];
}

export interface CharacterProfileSummary extends ID {
  gender: Gender;
  faction: Faction;
  race: Race;
  character_class: CharacterClass;
  active_spec: ActiveSpec;
  realm: Realm;
  guild: Guild;
  level: number;
  experience: number;
  achievement_points: number;
  last_login_timestamp: number;
  average_item_level: number;
  equipped_item_level: number;
  active_title: ActiveTitle;
}

export interface CharacterProfileStatus {
  id: number;
  is_valid: true;
}
