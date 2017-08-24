import AppConfig from './app.config';
import AppComponent from './app.component';

export default angular.module('app.module', [])
.config(AppConfig).component('appComponent', AppComponent).name;