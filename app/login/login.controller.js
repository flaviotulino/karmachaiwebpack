class LoginController {

    constructor(){
        this._appName = "Never gonna give u 'App'";
    }

    get appName() {
        return this._appName;
    }
}

export default LoginController;