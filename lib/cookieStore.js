import Tea from './tea'

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + Tea.encrypt(cvalue, '');
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return Tea.decrypt(c.substring(name.length, c.length), '');
        }
    }
    return "";
}

export { setCookie, getCookie }
