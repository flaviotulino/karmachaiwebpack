import angular from 'angular';
import uiRouter from 'angular-ui-router';
import route from './login.route'
import {componentName, component} from './login.component';
import {Service as LoginService, ServiceName} from './login.service';

angular.module('app.login', [uiRouter])
.config(route)
.component(componentName, component)
.service(ServiceName, LoginService);

export default 'app.login';