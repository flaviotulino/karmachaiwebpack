describe('a test', () => {

    beforeEach(function () {
        browser.get('https://angularjs.org/');
    });

    it('should have a title', () => {
        browser.getTitle().then(webpagetitle => {
            expect(webpagetitle).equal('AngularJS — Superheroic JavaScript MVW Framework');
        });
    });

    it('should have a different title', () => {
        browser.getTitle().then(webpagetitle => {
            expect(webpagetitle).not.equal('AngularJS — Superheroic JavaScript MVWs Framework');
        });
    });

});
