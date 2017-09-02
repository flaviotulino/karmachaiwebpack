import '@uirouter/angularjs';
export default class PxStateProvider {
    constructor ($stateProvider) {
        'ngInject';
        this.$stateProvider = $stateProvider;
        console.log('im an error')
    }

    state (stateName, _state_) {
        if (_state_.component === undefined) {
            _state_.component = stateName + 'Component';
        }
        this.$stateProvider.state(stateName, _state_);
    }

    $get () {
        return this;
    }

}
PxStateProvider.dependencies = ['ui.router'];
