import template from './login.html';
import controller from './login.controller';

class LoginConfig {

    constructor($stateProvider){
        $stateProvider.state('login', {
            url: '/login',
            controller,
            controllerAs: '$ctrl',
            template
        }) ;
    }
}

export default LoginConfig;