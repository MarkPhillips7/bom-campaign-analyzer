import {bomGlobal} from 'platinum/Global';

export class AuthenticationService {
  loggedIn = false;

  isLoggedIn = () => {
    this.loggedIn = bomGlobal.isLoggedIn();

    return this.loggedIn;
  }

  login = (username, password, onSuccess, onFailure) => {
    var self=this;
    return bomGlobal.login(username, password, onMySuccess, onFailure);

    function onMySuccess(response) {
      self.loggedIn=true;
      onSuccess(response);
    }
  }

  logout = () => {
    this.loggedIn=false;
    return bomGlobal.logout();
  }
}
