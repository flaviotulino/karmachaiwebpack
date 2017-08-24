import template from './login.html'

export const LoginComponent = {
    template,
    controller: class LoginController {
        constructor() {
            this.email = "hello@hi.bye";
            this.password = "something";
        }

        doLogin() {
            alert(this.email + " " + this.password);
        }
    }
};