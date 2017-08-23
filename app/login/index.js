import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './login.config';

angular.module('app.login', [uiRouter]).config(config);

export default 'app.login'