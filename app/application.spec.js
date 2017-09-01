import Application from './application';

describe('application', () => {
  const app = new Application();


  describe('loadProviders', () => {
    it('requires providers from their folder', () => {
        app.loadProviders();
        expect(app.providers[0]).to.include.any.keys('module', 'provider')
    });
  });

  describe('registerComponents', () => {
    it('registers a single component in its module', () => {
      app.loadComponents();
      app.registerComponents();
      expect(Array.from(app.modules)).to.include('app.module');
    })
  });
});
