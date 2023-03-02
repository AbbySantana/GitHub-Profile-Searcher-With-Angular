import { PracticaA21Page } from './app.po';

describe('practica-a21 App', function() {
  let page: PracticaA21Page;

  beforeEach(() => {
    page = new PracticaA21Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
