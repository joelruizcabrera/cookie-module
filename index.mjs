export class Cookie {
    constructor(cookieName) {
        this.cookieName = cookieName
    }

    set(value, time) {
        let t = new Date();
        if (time === undefined) {
            time = 1
        }
        t.setTime(t.getTime() + (time * 24 * 60 * 60 * 1000))
        t = t.toUTCString()

        let cookieStatement = this.cookieName + "=" + value
        document.cookie = cookieStatement + ";expires=" + t + ";path=/"
    }

}