import {inject} from 'aurelia-framework';
import {bomGlobal} from 'platinum/Global';
import {Router} from 'aurelia-router';
import {AuthenticationService} from 'authentication-service'

@inject(Router, AuthenticationService)
export class Logout {
  router=null;

  constructor(router,auth) {
    this.router=router;
    this.auth=auth;
  }

  activate() {
    this.auth.logout();
    this.router.navigateToRoute('login');
  }
}
