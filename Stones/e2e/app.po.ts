import { browser, element, by } from 'protractor';

export class ProductsPage {
  navigateTo() {
    return browser.get('/products');
  }

  getTitleText() {
    return element(by.id('title')).getText();
  }
}
