import $ from 'jquery';
import {cookie} from 'carhartl/jquery-cookie';
import {JsonServiceClient} from 'platinum/JsonServiceClient';
import {SampleAppData} from 'sample-app-data';

export var bomGlobal = {
  baseUrl: location.protocol + "//" + location.host,
  username: null,
  application: null,
  viewport: null,
  mainPanel: null,
  isDemoMode: true,

  handlePlatinumResponse: function (response, onSuccess, onError) {
    var errorMessage = null;

    if (response && response.HasErrorOccurred) {
        errorMessage = `
${response.Error.Message}
SessionId: ${response.SessionIde}
TransactionId: ${response.TransactionId}`;
    }

    if (errorMessage) {
      onError(errorMessage);
    }
    else{
      onSuccess(response);
    }
  },

  getSessionKey: function () {
    var result = $.cookie('sessionKey');
    return result;
  },

  setSessionKey: function (sessionKey) {
    $.cookie('sessionKey', sessionKey, {path: '/'});
  },

  removeSessionKey: function () {
    $.removeCookie('sessionKey', {path: '/'});
  },

  isLoggedIn: function () {
    var sessionKey = bomGlobal.getSessionKey();

    if (sessionKey == 'null') {
      alert(sessionKey);
    }
    console.log(sessionKey);

    if (sessionKey) {
      console.log('user is logged in');
      return true;
    }
    console.log('sessionKey is null');
    return false;
  },

  logout: function () {
    console.log('logging out');
    bomGlobal.removeSessionKey();
  },

  login: function (username, password, onSuccess, onError, ajaxOptions) {
    if (bomGlobal.isDemoMode) {
      onAuthenticationSuccess(SampleAppData.getSuccessfulLoginResponse());
      return;
    }

    var request = {
      Username: username,
      Password: password,
      SessionKey: bomGlobal.getSessionKey()
    }

    var client = new JsonServiceClient(bomGlobal.baseUrl);

    client.postToService("AuthenticationRequest", request, onAuthenticationSuccess, onError, ajaxOptions);

    function onAuthenticationSuccess(response) {
      bomGlobal.sessionKey = response.SessionId;
      bomGlobal.username = username;
      bomGlobal.setSessionKey(response.SessionId);
      if (onSuccess) {
        onSuccess(response);
      }
    }
  },

  getCookie: function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  },

  setCookie: function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }
};
