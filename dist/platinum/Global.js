System.register(['jquery', 'carhartl/jquery-cookie', 'platinum/JsonServiceClient', 'sample-app-data'], function (_export) {
  'use strict';

  var $, cookie, JsonServiceClient, SampleAppData, bomGlobal;
  return {
    setters: [function (_jquery) {
      $ = _jquery['default'];
    }, function (_carhartlJqueryCookie) {
      cookie = _carhartlJqueryCookie.cookie;
    }, function (_platinumJsonServiceClient) {
      JsonServiceClient = _platinumJsonServiceClient.JsonServiceClient;
    }, function (_sampleAppData) {
      SampleAppData = _sampleAppData.SampleAppData;
    }],
    execute: function () {
      bomGlobal = {
        baseUrl: location.protocol + "//" + location.host,
        username: null,
        application: null,
        viewport: null,
        mainPanel: null,
        isDemoMode: true,

        handlePlatinumResponse: function handlePlatinumResponse(response, onSuccess, onError) {
          var errorMessage = null;

          if (response && response.HasErrorOccurred) {
            errorMessage = '\n' + response.Error.Message + '\nSessionId: ' + response.SessionIde + '\nTransactionId: ' + response.TransactionId;
          }

          if (errorMessage) {
            onError(errorMessage);
          } else {
            onSuccess(response);
          }
        },

        getSessionKey: function getSessionKey() {
          var result = $.cookie('sessionKey');
          return result;
        },

        setSessionKey: function setSessionKey(sessionKey) {
          $.cookie('sessionKey', sessionKey, { path: '/' });
        },

        removeSessionKey: function removeSessionKey() {
          $.removeCookie('sessionKey', { path: '/' });
        },

        isLoggedIn: function isLoggedIn() {
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

        logout: function logout() {
          console.log('logging out');
          bomGlobal.removeSessionKey();
        },

        login: function login(username, password, onSuccess, onError, ajaxOptions) {
          if (bomGlobal.isDemoMode) {
            onAuthenticationSuccess(SampleAppData.getSuccessfulLoginResponse());
            return;
          }

          var request = {
            Username: username,
            Password: password,
            SessionKey: bomGlobal.getSessionKey()
          };

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
          d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
          var expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=" + cvalue + "; " + expires;
        }
      };

      _export('bomGlobal', bomGlobal);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ25CLFdBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFJLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLEFBQUMsQ0FBQyxDQUFDO0FBQ3hELGNBQUksT0FBTyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDM0Msa0JBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUN6RDtPQUNGIiwiZmlsZSI6InBsYXRpbnVtL0dsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge2Nvb2tpZX0gZnJvbSAnY2FyaGFydGwvanF1ZXJ5LWNvb2tpZSc7XG5pbXBvcnQge0pzb25TZXJ2aWNlQ2xpZW50fSBmcm9tICdwbGF0aW51bS9Kc29uU2VydmljZUNsaWVudCc7XG5pbXBvcnQge1NhbXBsZUFwcERhdGF9IGZyb20gJ3NhbXBsZS1hcHAtZGF0YSc7XG5cbmV4cG9ydCB2YXIgYm9tR2xvYmFsID0ge1xuICBiYXNlVXJsOiBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3QsXG4gIHVzZXJuYW1lOiBudWxsLFxuICBhcHBsaWNhdGlvbjogbnVsbCxcbiAgdmlld3BvcnQ6IG51bGwsXG4gIG1haW5QYW5lbDogbnVsbCxcbiAgaXNEZW1vTW9kZTogdHJ1ZSxcblxuICBoYW5kbGVQbGF0aW51bVJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UsIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBudWxsO1xuXG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLkhhc0Vycm9yT2NjdXJyZWQpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gYFxuJHtyZXNwb25zZS5FcnJvci5NZXNzYWdlfVxuU2Vzc2lvbklkOiAke3Jlc3BvbnNlLlNlc3Npb25JZGV9XG5UcmFuc2FjdGlvbklkOiAke3Jlc3BvbnNlLlRyYW5zYWN0aW9uSWR9YDtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICBvbkVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBvblN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgIH1cbiAgfSxcblxuICBnZXRTZXNzaW9uS2V5OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9ICQuY29va2llKCdzZXNzaW9uS2V5Jyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICBzZXRTZXNzaW9uS2V5OiBmdW5jdGlvbiAoc2Vzc2lvbktleSkge1xuICAgICQuY29va2llKCdzZXNzaW9uS2V5Jywgc2Vzc2lvbktleSwge3BhdGg6ICcvJ30pO1xuICB9LFxuXG4gIHJlbW92ZVNlc3Npb25LZXk6IGZ1bmN0aW9uICgpIHtcbiAgICAkLnJlbW92ZUNvb2tpZSgnc2Vzc2lvbktleScsIHtwYXRoOiAnLyd9KTtcbiAgfSxcblxuICBpc0xvZ2dlZEluOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlc3Npb25LZXkgPSBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpO1xuXG4gICAgaWYgKHNlc3Npb25LZXkgPT0gJ251bGwnKSB7XG4gICAgICBhbGVydChzZXNzaW9uS2V5KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc2Vzc2lvbktleSk7XG5cbiAgICBpZiAoc2Vzc2lvbktleSkge1xuICAgICAgY29uc29sZS5sb2coJ3VzZXIgaXMgbG9nZ2VkIGluJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3Nlc3Npb25LZXkgaXMgbnVsbCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICBsb2dvdXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnbG9nZ2luZyBvdXQnKTtcbiAgICBib21HbG9iYWwucmVtb3ZlU2Vzc2lvbktleSgpO1xuICB9LFxuXG4gIGxvZ2luOiBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gICAgaWYgKGJvbUdsb2JhbC5pc0RlbW9Nb2RlKSB7XG4gICAgICBvbkF1dGhlbnRpY2F0aW9uU3VjY2VzcyhTYW1wbGVBcHBEYXRhLmdldFN1Y2Nlc3NmdWxMb2dpblJlc3BvbnNlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgVXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgUGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgU2Vzc2lvbktleTogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgIH1cblxuICAgIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJBdXRoZW50aWNhdGlvblJlcXVlc3RcIiwgcmVxdWVzdCwgb25BdXRoZW50aWNhdGlvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcblxuICAgIGZ1bmN0aW9uIG9uQXV0aGVudGljYXRpb25TdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICBib21HbG9iYWwuc2Vzc2lvbktleSA9IHJlc3BvbnNlLlNlc3Npb25JZDtcbiAgICAgIGJvbUdsb2JhbC51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgYm9tR2xvYmFsLnNldFNlc3Npb25LZXkocmVzcG9uc2UuU2Vzc2lvbklkKTtcbiAgICAgIGlmIChvblN1Y2Nlc3MpIHtcbiAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZ2V0Q29va2llOiBmdW5jdGlvbiBnZXRDb29raWUoY25hbWUpIHtcbiAgICB2YXIgbmFtZSA9IGNuYW1lICsgXCI9XCI7XG4gICAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGMgPSBjYVtpXTtcbiAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9LFxuXG4gIHNldENvb2tpZTogZnVuY3Rpb24gc2V0Q29va2llKGNuYW1lLCBjdmFsdWUsIGV4ZGF5cykge1xuICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZXhkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuICAgIHZhciBleHBpcmVzID0gXCJleHBpcmVzPVwiICsgZC50b1VUQ1N0cmluZygpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGNuYW1lICsgXCI9XCIgKyBjdmFsdWUgKyBcIjsgXCIgKyBleHBpcmVzO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
