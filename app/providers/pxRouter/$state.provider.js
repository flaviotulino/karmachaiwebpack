import '@uirouter/angularjs';
export default class PxStateProvider {
  constructor ($stateProvider) {
    this.$stateProvider = $stateProvider;
  }

  state(stateName, _state_) {
    if (_state_.component === undefined) {
      _state_.component = stateName + 'Component';
    }
    this.$stateProvider.state(stateName, _state_);
  }

  $get () {
    return this;
  }

}
PxStateProvider.$inject = ['$stateProvider'];
PxStateProvider.dependencies = ['ui.router'];

//export default angular.module('pxRouter',['ui.router']).provider('pxState', PxStateProvider);
