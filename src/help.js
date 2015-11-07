export class Help {
  errorMessage=null;
  heading = 'Help';

  activate(params, routeconfig) {
    this.environment = routeconfig.environment;
  }
}
