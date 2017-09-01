export default function ($stateProvider) {
    'ngInject';
    $stateProvider.state('login', {
        parent: 'app',
        url: 'login'
    })
}
