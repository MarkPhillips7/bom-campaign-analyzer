import {inject} from 'aurelia-framework';
import {bomGlobal} from 'platinum/Global';
import {bindable} from 'aurelia-framework';
import {Redirect} from 'aurelia-router';
import {AuthenticationService} from 'authentication-service';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

@inject(AuthenticationService)
export class App {
  @bindable auth;
  @bindable environment;

  constructor(auth) {
    this.auth = auth;
    this.environment = this.getEnvironmentText();
  }

  getEnvironmentText(){
    return bomGlobal.isDemoMode ? "Demo"
      : location.port == 3800 ? location.hostname.toLowerCase() == "localhost" ? "Local" : "DV01"
      : location.port == 3801 ? "DV02"
      : location.port == 3802 ? "TS01 (UAT)"
      : location.port == 3803 ? "TS02 (UAT)"
      : location.port == 3804 ? "TS03 (QA)"
      : location.port == 3805 ? "TS04 (QA)"
      : location.port == 3806 ? "TRAINING"
      : location.port == 454 ? "PRODUCTION"
      : "unknown";
  }

  configureRouter(config, router){
    config.title = 'BOM Campaign Analyzer';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: ['','sld-upload'],  name: 'sld-upload',      moduleId: 'sld-upload',      nav: true, title:'Analyze Campaign Results', auth:true, environment: this.environment },
      { route: 'opm-variances',         name: 'opm-variances',        moduleId: 'opm-variances',        nav: true, title:'Analyze OPM Variances', auth:true, environment: this.environment },
      { route: 'imsi-analysis-history',  name: 'imsi-analysis-history', moduleId: 'imsi-analysis-history', nav: true, title:'IMSI Analysis History', auth:true, environment: this.environment },
      { route: 'export-imsis',  name: 'export-imsis', moduleId: 'export-imsis', nav: true, title:'Export IMSIs for Reprocessing', auth:true, environment: this.environment },
      { route: 'sld-export-history',  name: 'sld-export-history', moduleId: 'sld-export-history', nav: true, title:'SLD Export History', auth:true, environment: this.environment },
      { route: 'imsi-lookup',  name: 'imsi-lookup', moduleId: 'imsi-lookup', nav: true, title:'IMSI Lookup', auth:true, environment: this.environment },
      { route: 'help',  name: 'help', moduleId: 'help', nav: true, title:'Help', environment: this.environment },
      { route: 'login',  name: 'login', moduleId: 'login', nav: false, title:'Login', environment: this.environment },
      { route: 'logout',  name: 'logout', moduleId: 'logout', nav: false, title:'Logout', environment: this.environment }
    ]);

    this.router = router;
  }
}

@inject(AuthenticationService)
class AuthorizeStep {

  constructor(auth){
    this.auth = auth;
  }

  run(routingContext, next) {
    // Check if the route has an "auth" key
    // The reason for using `nextInstructions` is because
    // this includes child routes.
    if (routingContext.nextInstructions.some(i => i.config.auth)) {
      var isLoggedIn = this.auth.isLoggedIn();

      if (!isLoggedIn) {
        return next.cancel(new Redirect('login'));
      }
    }

    return next();
  }
}
