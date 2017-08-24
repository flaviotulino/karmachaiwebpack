export default function LoginConfig (pxStateProvider) {
    pxStateProvider.state('login', {
        parent: 'app',
        url: 'login'
    })
};
LoginConfig.$inject = ['pxStateProvider'];
