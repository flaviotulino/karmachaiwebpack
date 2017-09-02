/* eslint-disable no-console */
export default class Logger {
    static log(message, always = false) {
        (isDev || always) && console.log(message);
    }

    static error(message, always = false) {
        (isDev || always) && console.error(message);
    }
}