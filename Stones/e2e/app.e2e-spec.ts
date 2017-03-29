import { ProductsPage } from './app.po';
import { browser } from "protractor/built";

describe('stones App', () => {
  let page: ProductsPage;

  beforeEach(() => {
    page = new ProductsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('app works!?');
  });
});
