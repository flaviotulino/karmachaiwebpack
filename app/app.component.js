export const AppComponent = {
    template: `
        <nav></nav>
        <div ui-view></div>
        <footer>Copyright MyAPP {{$ctrl.year}}</footer>
    `,
    controller: class App {
        static get $inject() {
            return [
                '$state'
            ];
        }

        constructor($state) {
            this._year = new Date().getFullYear();
        }

        get year() {
            return this._year;
        }

    }
};