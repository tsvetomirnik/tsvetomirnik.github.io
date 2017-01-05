//import { IUserConfig } from './shared/interfaces/IUserConfig';
import { IUserConfig } from './shared/interfaces';
import { SocialIconTypes } from './shared/enums/SocialIconTypes';

export const userConfig = <IUserConfig>{
  /**
   * GitHub username
   * It's used as default data source.
   */
  githubUsername: 'github',

  /**
   * Full name
   * NULL to use the GitHub value | STRING to set another value
   */
  name: null,
  
  /**
   * Username
   * TRUE to use the GitHub value | FALSE to hide the field | STRING to set another value
   */
  username: true,

  /**
   * Short description
   * TRUE to use the GitHub value | FALSE to hide the field | STRING to set another value
   */
  bio: true,

  /**
   * Profile image
   * NULL to use the GitHub value | STRING to set another value
   */
  avatarUrl: null,

  /**
   * Current address
   * TRUE to use the GitHub value | FALSE to hide the field | STRING to set another value
   */
  location: true,

  /**
   * Work
   * TRUE to use the GitHub value | FALSE to hide the field | STRING to set another value
   */
  company: true, // true: 

  /**
   * Set of social profiles icons
   * Order can be changed; Can have the same type of icon more than once;
   */
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
    { type: SocialIconTypes.TWITTER, link: 'https://twitter.com/github' },
    // { type: SocialIconTypes.YOUTUBE, link: '<youtube-url>' },
    // { type: SocialIconTypes.WEBSITE, link: '<website-url>' }
  ]
};