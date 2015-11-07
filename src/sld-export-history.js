import {bomGlobal} from 'platinum/Global';
import {Campaign} from 'platinum/Campaign';
import {Export} from 'platinum/Export';
import {DateFormatValueConverter} from 'date-format';
import moment from 'moment';
import _ from "underscore";

var self;

export class SldExportHistory{
  exportHistoryData=null;
  errorMessage=null;

  constructor(){
    self=this;
  }

  activate(params, routeconfig) {
    self.environment = routeconfig.environment;
  }

  handleError(err){
    self.errorMessage = err;
  }

  fetchExportHistory() {
    return fetchData()
      .then(exportHistorySucceeded)
      .then(exportHistoryReallySucceeded)
      .catch(exportHistoryFailed);

    function fetchData() {
      return new Promise(function (resolve, reject) {
        let xport = new Export();
        xport.list(resolve, reject);
      });
    }

    function exportHistorySucceeded(response) {
      return new Promise(function (resolve, reject) {
        console.log(response);
        bomGlobal.handlePlatinumResponse(response, resolve, reject);
      });
    }

    function exportHistoryReallySucceeded(response) {
      self.exportHistoryData = response.Values;
      let dataToReturn = _.chain(self.exportHistoryData)
        .sortBy(history => history.CreateTime)
        .reverse()
        .value();

      return {
        data: dataToReturn,
        count: dataToReturn.length
      };
    }

    function exportHistoryFailed(err) {
      self.errorLoadingExportData = `Error fetching exportHistory data: ${err}`;
      self.handleError(self.errorLoadingExportData);
    }
  }
}
