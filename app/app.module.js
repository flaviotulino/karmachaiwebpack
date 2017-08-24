import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { LoginModule } from './components/login/login.module';
import './app.scss';

export const AppModule = angular.module('app', [uiRouter, CommonModule, LoginModule])
    .component('app', AppComponent)
    .name;