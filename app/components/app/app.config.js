export default function appConfig ($stateProvider) {
    $stateProvider.state('app', {
        url: '/'
    })
};
appConfig.$inject = ['$stateProvider'];
