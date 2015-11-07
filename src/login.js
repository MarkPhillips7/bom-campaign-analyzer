import {inject} from 'aurelia-framework';
import {bomGlobal} from 'platinum/Global';
import {Router} from 'aurelia-router';
import {AuthenticationService} from 'authentication-service'

var self;

@inject(Router, AuthenticationService)
export class Login {
  auth = null;
  errorMessage = null;
  isValid = false;
  password = null;
  passwordValidationClass = '';
  router=null;
  showValidationErrors = false;
  username = null;
  usernameValidationClass = '';

  constructor(router, auth) {
    this.router=router;
    this.auth=auth;
    self = this;
    self.resetSelections();
  }

  resetSelections() {
    self.password = null;
    self.username = null;
  }

  activate(params, routeconfig) {
    self.environment=routeconfig.environment;
    self.validate(false);
  }

  validateUsername() {
    let isValid = !!self.username;
    self.usernameValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
    return isValid;
  }

  validatePassword() {
    let isValid = !!self.password;
    self.passwordValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
    return isValid;
  }

  validate(showValidationErrors) {
    self.showValidationErrors |= showValidationErrors;

    //Need to call each validate method even if 1st fails, so cannot do 'self.validateA() && self.validateB() ...'
    let isValid = self.validateUsername();
    isValid = self.validatePassword() && isValid;

    self.isValid = isValid;

    return isValid;
  }

  handleError(err){
    self.errorMessage = err;
  }

  login() {
    if(!self.validate(true)){
      return;
    }

    this.auth.login(self.username, self.password, loginSucceeded, loginFailed);

    function loginSucceeded(response) {
      console.log(response);
      bomGlobal.handlePlatinumResponse(response, loginReallySucceeded, loginFailed);
    }

    function loginReallySucceeded(response) {
      self.resetSelections();
      self.router.navigateToRoute('sld-upload');
    }

    function loginFailed(err) {
      self.handleError(`Error logging in: ${err}`);
    }
  }

}
