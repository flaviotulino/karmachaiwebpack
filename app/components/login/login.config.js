export default function ($stateProvider) {
    $stateProvider.state('login', {
        parent: 'app',
        url: 'login',
        //component: 'loginComponent'
    })
}
