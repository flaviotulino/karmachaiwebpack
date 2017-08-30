export default function loginConfig ($stateProvider) {
    $stateProvider.state('login', {
        parent: 'app',
        url: 'login',
        //component: 'loginComponent'
    })
}
loginConfig.$inject = ['$stateProvider'];
