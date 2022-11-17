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