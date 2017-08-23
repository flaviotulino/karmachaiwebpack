import template from './login.html';
import {componentName as component} from './login.component';

class Route {
    static get $inject() {
        return [
            '$stateProvider'
        ];
    }

    constructor($stateProvider){
        $stateProvider.state('login', {
            url: '/login',
            component           
        });
    }
}

export default Route;