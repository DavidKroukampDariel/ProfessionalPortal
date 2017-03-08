import { ProfessionalPortalPage } from './app.po';

describe('professional-portal App', () => {
  let page: ProfessionalPortalPage;

  beforeEach(() => {
    page = new ProfessionalPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
