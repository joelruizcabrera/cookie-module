export class Cookie {
    /**
     * Declare the name for the cookie
     * @param cookieName The name of the cookie object
     */
    constructor(cookieName) {
        this.cookieName = cookieName
    }

    /**
     * Setting the cookie
     * @param value Set's the value for the cookie
     * @param time The expiration time: 1 = 1 Day, .5 = 1/2 Day
     */
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

    /**
     * Get's the cookie value
     * @returns {string} The value of the cookie
     */
    get() {
        let name = this.cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
    }

}