import { browser, element, by } from 'protractor';

export class TsquardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ts-root h1')).getText();
  }
}
