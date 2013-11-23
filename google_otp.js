var notp = Npm.require('notp');

GoogleOTPAPI = function() {
    this.api = notp.totp;
}

GoogleOTPAPI.prototype.verify = function(token, key) {

    var res = this.api.verify(token, key);
    return res;
}
