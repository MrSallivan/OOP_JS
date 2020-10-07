/**
 *  description
 */

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    validatePassword() {
        // > 6
        console.log('work parent pass');
        if (this.password.length > 6) {
            return true;
        }
        return false;
    }
}