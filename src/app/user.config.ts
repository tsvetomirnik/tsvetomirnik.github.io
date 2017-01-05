//import { IUserConfig } from './shared/interfaces/IUserConfig';
import { IUserConfig } from './shared/interfaces';
import { SocialIconTypes } from './shared/enums/SocialIconTypes';

export const userConfig = <IUserConfig>{
  githubUsername: 'github',
  name: null,
  username: true,
  bio: true,
  avatarUrl: null,
  location: true,
  company: true,
  socialIcons: [
    // { type: SocialIconTypes.ANGELLIST, link: '<angellist-url>' },
    // { type: SocialIconTypes.EMAIL, text: '<email>' },
    // { type: SocialIconTypes.BEHANCE, link: '<behance-url>' },
    // { type: SocialIconTypes.CODEPEN, link: '<codepen-url>' },
    // { type: SocialIconTypes.DRIBBBLE, link: '<dribbble-url>' },
    // { type: SocialIconTypes.FACEBOOK, link: '<facebook-url>' },
    { type: SocialIconTypes.GITHUB, link: 'https://github.com/github' },
    // { type: SocialIconTypes.GOOGLE_PLUS, link: '<google-plus-url>' },
    // { type: SocialIconTypes.INSTAGRAM, link: '<instagram-url>' },
    // { type: SocialIconTypes.LINKEDIN, link: '<linkedin-url>' },
    // { type: SocialIconTypes.PINTEREST, link: '<pinterest-url>' },
    // { type: SocialIconTypes.STACK_OVERFLOW, link: '<stack-overflow-url>' },
    // { type: SocialIconTypes.SKYPE, text: '<skype-name>' },
    // { type: SocialIconTypes.TWITTER, link: '<twitter-url>' },
    // { type: SocialIconTypes.YOUTUBE, link: '<youtube-url>' },
    // { type: SocialIconTypes.WEBSITE, link: '<website-url>' }
  ]
};