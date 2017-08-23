class LoginService {
    static get $inject () {
        return [
            '$http'
        ];
    }

    constructor($http){
        this._$http = $http;
    }

    async login(){
        console.log('#3');                 
        let response = await this._$http.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('#4');                
        return response;
    }

}

export const ServiceName = 'LoginService';
export let Service = LoginService;