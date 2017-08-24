class PxStateProvider {
    constructor ($stateProvider) {
        this.$stateProvider = $stateProvider;
    }

    state(stateName, _state_) {
        _state_.component = stateName + 'Component';
        this.$stateProvider.state(stateName, _state_);
    }

    $get () {
        return this;
    }

}
export default angular.module('pxRouter',['ui.router']).provider('pxState', PxStateProvider);