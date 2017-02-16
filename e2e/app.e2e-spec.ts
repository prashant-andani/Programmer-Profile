import { BrandNewPage } from './app.po';

describe('brand-new App', function() {
  let page: BrandNewPage;

  beforeEach(() => {
    page = new BrandNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
