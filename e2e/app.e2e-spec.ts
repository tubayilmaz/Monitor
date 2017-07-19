import { MonitorPage } from './app.po';

describe('monitor App', () => {
  let page: MonitorPage;

  beforeEach(() => {
    page = new MonitorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
