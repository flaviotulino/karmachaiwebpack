// describe('Test Component', () => {
//     let $componentController;
//     let $rootScope;
//
//     beforeEach(angular.mock.module('testModule'));
//     beforeEach(inject(($injector, _$componentController_) => {
//         $componentController = _$componentController_;
//         $rootScope = $injector.get('$rootScope');
//     }));
//
//
//     describe('instance', () => {
//         it('creates an instance', () => {
//             const ctrl = $componentController('testComponent', null, {});
//             return expect(ctrl).to.be.not.undefined;
//         })
//     });
//
//     describe('getSomething', () => {
//         it('returns a value from the server', () => {
//             const ctrl = $componentController('testComponent');
//
//             ctrl.getSomething = () => {
//                 return Promise.resolve({data: {user: 'hello'}});
//             };
//
//             return expect(ctrl.getSomething()).to.eventually.have.property('data').that.has.property('user').that.is.equal('hello');
//         })
//     })
// });
//
