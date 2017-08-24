import template from './footer.html';

export const FooterComponent = {
    template,
    controller: class FooterController {

        constructor() {
            this._year = new Date().getFullYear();
        }

        get year() {
            return this._year;
        }
    }
}