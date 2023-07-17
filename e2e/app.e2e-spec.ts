import { AngularAnulasPage } from './app.po';

describe('angular-anulas App', function() {
  let page: AngularAnulasPage;

  beforeEach(() => {
    page = new AngularAnulasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
