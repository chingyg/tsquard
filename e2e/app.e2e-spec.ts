import { TsquardPage } from './app.po';

describe('tsquard App', () => {
  let page: TsquardPage;

  beforeEach(() => {
    page = new TsquardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ts works!');
  });
});
