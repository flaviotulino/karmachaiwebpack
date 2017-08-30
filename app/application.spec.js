import Application from './application';

describe('application', () => {
  const app = new Application();

  describe('loadProviders', () => {
    it('requires providers from their folder', () => {
        app.loadProviders();
        console.log(app.providers);
        expect(app.providers).to.have.deep.property('module');
    });
  });

  //
  // describe('loadComponents', () => {
  //   it('requires components from their folder', () => {
  //       app.loadComponents();
  //       expect(app.components).to.have.deep.property('module');
  //   });
  // });

  describe('registerComponents', () => {
    it('registers a single component in its module', () => {
      app.loadComponents();
      app.registerComponents();
      expect(app.modules).to.include('app');
    })
  })

  describe('registerProviders', () => {
    it('registers a single provider in its module', () => {
      app.loadProviders();
      app.registerProviders();
      expect(app.modules).to.include('app');
    })
  })

});
