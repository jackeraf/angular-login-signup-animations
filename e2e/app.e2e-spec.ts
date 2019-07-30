import { AngularLoginAnimationPage } from './app.po';

describe('angular-login-animation App', () => {
  let page: AngularLoginAnimationPage;

  beforeEach(() => {
    page = new AngularLoginAnimationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
