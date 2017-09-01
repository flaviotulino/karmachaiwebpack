describe('app component', () => {
    let stateProvider;
    beforeEach(() => {
        angular.mock.module('pxRouter.module');
        angular.mock.module('app.module');
    });

    beforeEach(angular.mock.inject(_$stateProvider_ => {
        stateProvider = _$stateProvider_;
        console.log(stateProvider);
    }));

    describe('navigate to login', () => {
        it('is', () => {
            expect(1).to.equal(1);
        })
    });
});
