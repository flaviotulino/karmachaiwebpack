import LoginConfig from './login.config';
import LoginComponent from './login.component';

export default angular.module('login.module', [])
.config(LoginConfig).component('loginComponent', LoginComponent).name;