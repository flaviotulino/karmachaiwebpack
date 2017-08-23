import template from './login.html';
import { ServiceName as LoginService } from './login.service';

class LoginController {
    static get $inject() {
        return [
            '$http',
            LoginService
        ];
    }

    constructor($http, $loginService) {
        this._$http = $http;
        this._app = "Mammeta";
        this._$loginService = $loginService;
    }

    get app() {
        return this._app;
    }

    async doLogin() {
        console.log('#1');
        let result = null;
        try {
            result = await this._$loginService.login();
        } catch (e) {
            console.error(e.status);
        }
        console.log('#2', result);
    }
}

export const componentName = 'login';

export const component = {
    template,
    controller: LoginController
}