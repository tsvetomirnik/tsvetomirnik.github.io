import { GhAboutmePage } from './app.po';

describe('gh-aboutme App', function() {
  let page: GhAboutmePage;

  beforeEach(() => {
    page = new GhAboutmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
