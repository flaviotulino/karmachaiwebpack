export default function LoginConfig ($stateProvider) {
    $stateProvider.state('login', {
        parent: 'app',
        url: 'login',
        component: 'loginComponent'
    })
};
