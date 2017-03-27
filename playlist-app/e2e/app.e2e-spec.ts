import { PlaylistAppPage } from './app.po';

describe('playlist-app App', () => {
  let page: PlaylistAppPage;

  beforeEach(() => {
    page = new PlaylistAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
