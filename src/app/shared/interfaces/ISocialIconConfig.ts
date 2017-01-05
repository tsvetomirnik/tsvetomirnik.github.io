import { SocialIconTypes } from '../enums/SocialIconTypes';

export interface ISocialIconConfig {
  type: SocialIconTypes;
  link?: string;
  text?: string;
}
