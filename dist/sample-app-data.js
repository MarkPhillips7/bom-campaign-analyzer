System.register(["underscore"], function (_export) {
    "use strict";

    var _, SampleAppData;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_underscore) {
            _ = _underscore["default"];
        }],
        execute: function () {
            SampleAppData = (function () {
                function SampleAppData() {
                    _classCallCheck(this, SampleAppData);
                }

                _createClass(SampleAppData, null, [{
                    key: "getGenerateExportResponse",
                    value: function value(exportFormat) {
                        return {
                            "DownloadUrl": exportFormat == "Excel" ? "/sample-data/imsi-export-3d84bffd-e6a5-4ac4-8a49-7f70e503ccca.xlsx" : "/sample-data/imsi-export-5166e2a1-aaad-47fc-8e5f-af07b2af406e.sld",
                            "TransactionId": "3823395350f44ead8fe463f86a69ad31",
                            "SessionId": "00000000000000000000000000000000",
                            "HasErrorOccurred": false
                        };
                    },
                    enumerable: true
                }, {
                    key: "getImsiAnalysisSummaryResponse",
                    value: function value() {
                        return {
                            "ImsiHistoryRecords": [{
                                "Action": "Import (Expired)",
                                "CreateTime": "2015-10-30T13:00:05.1963343",
                                "ImsiStatus": "Initial Import",
                                "IsInHlrAll": "IN HLRALL",
                                "Workflow": "SIM Card Provisioning",
                                "TrackingStatus": "Finalize LTE POP Provisioning",
                                "ProvisionedMdn": "7034498745",
                                "PendingMdn": "",
                                "IsProvisioningOnHold": "NO",
                                "TargetSpec": "TAR-1     ",
                                "Username": "Jones, Illinois"
                            }, {
                                "Action": "Status Changed",
                                "CreateTime": "2015-10-30T13:00:06.4714618",
                                "ImsiStatus": "Reprocess",
                                "IsInHlrAll": "IN HLRALL",
                                "Workflow": "SIM Card Provisioning",
                                "TrackingStatus": "Finalize LTE POP Provisioning",
                                "ProvisionedMdn": "7034498745",
                                "PendingMdn": "",
                                "IsProvisioningOnHold": "NO",
                                "TargetSpec": "TAR-1     ",
                                "Username": "Jones, Illinois"
                            }, {
                                "Action": "Exported",
                                "CreateTime": "2015-10-30T13:13:37.9466012",
                                "ImsiStatus": "Reprocess",
                                "IsInHlrAll": "N/A",
                                "Workflow": "SIM Card Provisioning",
                                "TrackingStatus": "Finalize LTE POP Provisioning",
                                "ProvisionedMdn": "N/A",
                                "PendingMdn": "N/A",
                                "IsProvisioningOnHold": "N/A",
                                "TargetSpec": "TAR-1     ",
                                "Username": "Jones, Illinois"
                            }, {
                                "Action": "Exported",
                                "CreateTime": "2015-10-30T13:17:13.1371181",
                                "ImsiStatus": "Reprocess",
                                "IsInHlrAll": "N/A",
                                "Workflow": "SIM Card Provisioning",
                                "TrackingStatus": "Finalize LTE POP Provisioning",
                                "ProvisionedMdn": "N/A",
                                "PendingMdn": "N/A",
                                "IsProvisioningOnHold": "N/A",
                                "TargetSpec": "TAR-1     ",
                                "Username": "Jones, Illinois"
                            }, {
                                "Action": "Exported",
                                "CreateTime": "2015-10-30T13:24:44.8532852",
                                "ImsiStatus": "Reprocess",
                                "IsInHlrAll": "N/A",
                                "Workflow": "SIM Card Provisioning",
                                "TrackingStatus": "Finalize LTE POP Provisioning",
                                "ProvisionedMdn": "N/A",
                                "PendingMdn": "N/A",
                                "IsProvisioningOnHold": "N/A",
                                "TargetSpec": "TAR-1     ",
                                "Username": "Smith, Angela"
                            }, {
                                "Action": "Exported",
                                "CreateTime": "2015-11-03T14:26:13.0981075",
                                "ImsiStatus": "Reprocess",
                                "IsInHlrAll": "N/A",
                                "Workflow": "SIM Card Provisioning",
                                "TrackingStatus": "Finalize LTE POP Provisioning",
                                "ProvisionedMdn": "N/A",
                                "PendingMdn": "N/A",
                                "IsProvisioningOnHold": "N/A",
                                "TargetSpec": "TAR-1     "
                            }, {
                                "Action": "Exported",
                                "CreateTime": "2015-11-03T14:30:24.2122164",
                                "ImsiStatus": "Reprocess",
                                "IsInHlrAll": "N/A",
                                "Workflow": "SIM Card Provisioning",
                                "TrackingStatus": "Finalize LTE POP Provisioning",
                                "ProvisionedMdn": "N/A",
                                "PendingMdn": "N/A",
                                "IsProvisioningOnHold": "N/A",
                                "TargetSpec": "TAR-1     "
                            }],
                            "SerialNumberHistoryRecords": [{
                                "Username": "JONATHAN SCHWARTZ",
                                "ModifyTime": "2013-08-13T10:59:49.7270000",
                                "Workflow": "Process SIM Card Request",
                                "TrackingStatus": "Send Request to Vendor",
                                "ProvisionedMdn": "",
                                "PendingMdn": "",
                                "IsProvisioningOnHold": false,
                                "MostRecentDeviceDiscoveryProductDescription": "",
                                "MostRecentDeviceDiscoveryHexSerialNumber": "",
                                "MostRecentDeviceDiscoveryDecSerialNumber": "",
                                "Usage": "IMSI for Production"
                            }, {
                                "Username": "JOHNNY THURSDAY",
                                "ModifyTime": "2013-09-07T14:36:53.1600000",
                                "Workflow": "Process SIM Card Request",
                                "TrackingStatus": "Received Ship Notification from Vendor",
                                "ProvisionedMdn": "",
                                "PendingMdn": "",
                                "IsProvisioningOnHold": false,
                                "MostRecentDeviceDiscoveryProductDescription": "",
                                "MostRecentDeviceDiscoveryHexSerialNumber": "",
                                "MostRecentDeviceDiscoveryDecSerialNumber": "",
                                "Usage": "IMSI for Production"
                            }, {
                                "Username": "BARTHOLOMEW STILLER",
                                "ModifyTime": "2013-09-12T11:44:09.7100000",
                                "Workflow": "Process SIM Card Shipment",
                                "TrackingStatus": "Received From G&D",
                                "ProvisionedMdn": "",
                                "PendingMdn": "",
                                "IsProvisioningOnHold": false,
                                "MostRecentDeviceDiscoveryProductDescription": "",
                                "MostRecentDeviceDiscoveryHexSerialNumber": "",
                                "MostRecentDeviceDiscoveryDecSerialNumber": "",
                                "Usage": "IMSI for Production"
                            }, {
                                "Username": "BARTHOLOMEW STILLER",
                                "ModifyTime": "2014-01-13T11:18:23.9670000",
                                "Workflow": "Process SIM Card Shipment",
                                "TrackingStatus": "Ship Out to Retail Location",
                                "ProvisionedMdn": "",
                                "PendingMdn": "",
                                "IsProvisioningOnHold": false,
                                "MostRecentDeviceDiscoveryProductDescription": "",
                                "MostRecentDeviceDiscoveryHexSerialNumber": "",
                                "MostRecentDeviceDiscoveryDecSerialNumber": "",
                                "Usage": "IMSI for Production"
                            }, {
                                "Username": "TC Mediation",
                                "ModifyTime": "2014-01-16T19:49:54.3530000",
                                "Workflow": "SIM Card Device Change",
                                "TrackingStatus": "Device Discovery Logging",
                                "ProvisionedMdn": "",
                                "PendingMdn": "",
                                "IsProvisioningOnHold": false,
                                "MostRecentDeviceDiscoveryProductDescription": "Motorola MOTO X White",
                                "MostRecentDeviceDiscoveryDate": "2014-01-16T19:49:43.0000000",
                                "MostRecentDeviceDiscoveryHexSerialNumber": "43764293312682",
                                "MostRecentDeviceDiscoveryDecSerialNumber": "373341470703221122",
                                "MostRecentDeviceDiscoveryWarehouseSku": 226029,
                                "Usage": "IMSI for Production"
                            }, {
                                "Username": "TC Mediation",
                                "ModifyTime": "2014-01-16T19:50:25.3070000",
                                "Workflow": "SIM Card Provisioning",
                                "TrackingStatus": "Finalize LTE POP Provisioning",
                                "ProvisionedMdn": "7034498745",
                                "PendingMdn": "",
                                "IsProvisioningOnHold": false,
                                "MostRecentDeviceDiscoveryProductDescription": "Motorola MOTO X White",
                                "MostRecentDeviceDiscoveryDate": "2014-01-16T19:49:43.0000000",
                                "MostRecentDeviceDiscoveryHexSerialNumber": "43764293312682",
                                "MostRecentDeviceDiscoveryDecSerialNumber": "373341470703221122",
                                "MostRecentDeviceDiscoveryWarehouseSku": 226029,
                                "Usage": "IMSI for Production"
                            }],
                            "TransactionId": "9ccfc21d6acd47518c928c6f94e149b7",
                            "SessionId": "00000000000000000000000000000000",
                            "HasErrorOccurred": false
                        };
                    },
                    enumerable: true
                }, {
                    key: "getFetchHlrallStatusResponse",
                    value: function value() {
                        return {
                            IsInHrlAll: true,
                            TransactionId: "1ff7073af9fb4d948cf6baf1de433db1",
                            SessionId: "00000000000000000000000000000000",
                            HasErrorOccurred: false
                        };
                    },
                    enumerable: true
                }, {
                    key: "getExportListResponse",
                    value: function value() {
                        return {
                            "Values": [{
                                "Description": "Arlington Reprocess #7",
                                "FormatVersion": "1.3",
                                "WtsFormatVersion": "1.3",
                                "FileIdentifier": "File-7    ",
                                "Author": "Author #7",
                                "Checker": "Checker #7",
                                "Authoriser": "Authorizer #7",
                                "TargetSpec": "TAR-7     ",
                                "FileDate": "10/72015",
                                "ImsiCount": 50000,
                                "CreateUserFullName": "Johnny Thursday",
                                "CreateTime": "2015-10-30T13:10:31.8899974",
                                "CreateUserId": 102,
                                "Id": "417",
                                "ModifyTime": "2015-10-30T13:10:31.8899974",
                                "ModifyUserId": 102
                            }, {
                                "Description": "Fairfax Reprocess #2",
                                "FormatVersion": "1.3",
                                "WtsFormatVersion": "1.3",
                                "FileIdentifier": "File-2    ",
                                "Author": "Author #2",
                                "Checker": "Checker #2",
                                "Authoriser": "Authorizer #2",
                                "TargetSpec": "TAR-2     ",
                                "FileDate": "10/22015",
                                "ImsiCount": 50000,
                                "CreateUserFullName": "Angela Smith",
                                "CreateTime": "2015-10-30T13:12:21.0519125",
                                "CreateUserId": 101,
                                "Id": "418",
                                "ModifyTime": "2015-10-30T13:12:21.0519125",
                                "ModifyUserId": 101
                            }, {
                                "FormatVersion": "01.03",
                                "WtsFormatVersion": "01.03",
                                "ImsiCount": 112317,
                                "CreateUserFullName": "Illinois Jones",
                                "CreateTime": "2015-10-30T13:13:26.5234590",
                                "CreateUserId": 100,
                                "Id": "419",
                                "ModifyTime": "2015-10-30T13:13:26.5234590",
                                "ModifyUserId": 100
                            }, {
                                "FormatVersion": "01.03",
                                "WtsFormatVersion": "01.03",
                                "ImsiCount": 22457,
                                "CreateUserFullName": "Illinois Jones",
                                "CreateTime": "2015-10-30T13:14:04.3902453",
                                "CreateUserId": 100,
                                "Id": "420",
                                "ModifyTime": "2015-10-30T13:14:04.3902453",
                                "ModifyUserId": 100
                            }, {
                                "Description": "Fargo Reprocess #8",
                                "FormatVersion": "1.3",
                                "WtsFormatVersion": "1.3",
                                "FileIdentifier": "File-8    ",
                                "Author": "Author #8",
                                "Checker": "Checker #8",
                                "Authoriser": "Authorizer #8",
                                "TargetSpec": "TAR-8     ",
                                "FileDate": "10/82015",
                                "ImsiCount": 50000,
                                "CreateUserFullName": "Johnny Thursday",
                                "CreateTime": "2015-10-30T13:15:27.7725827",
                                "CreateUserId": 102,
                                "Id": "421",
                                "ModifyTime": "2015-10-30T13:15:27.7725827",
                                "ModifyUserId": 102
                            }, {
                                "FormatVersion": "01.03",
                                "WtsFormatVersion": "01.03",
                                "ImsiCount": 22905,
                                "CreateUserFullName": "Illinois Jones",
                                "CreateTime": "2015-10-30T13:17:10.3648409",
                                "CreateUserId": 100,
                                "Id": "422",
                                "ModifyTime": "2015-10-30T13:17:10.3648409",
                                "ModifyUserId": 100
                            }, {
                                "Description": "Fargo Reprocess #3",
                                "FormatVersion": "1.3",
                                "WtsFormatVersion": "1.3",
                                "FileIdentifier": "File-8    ",
                                "Author": "Author #8",
                                "Checker": "Checker #8",
                                "Authoriser": "Authorizer #8",
                                "TargetSpec": "TAR-8     ",
                                "FileDate": "10/82015",
                                "ImsiCount": 50000,
                                "CreateUserFullName": "Illinois Jones",
                                "CreateTime": "2015-10-30T13:18:01.0359075",
                                "CreateUserId": 100,
                                "Id": "423",
                                "ModifyTime": "2015-10-30T13:18:01.0359075",
                                "ModifyUserId": 100
                            }, {
                                "Description": "Batch #6",
                                "FormatVersion": "1.3",
                                "WtsFormatVersion": "1.3",
                                "FileIdentifier": "File-6    ",
                                "Author": "Author #6",
                                "Checker": "Checker #6",
                                "Authoriser": "Authorizer #6",
                                "TargetSpec": "TAR-6     ",
                                "FileDate": "10/62015",
                                "ImsiCount": 50000,
                                "CreateUserFullName": "Illinois Jones",
                                "CreateTime": "2015-10-30T13:23:02.1380147",
                                "CreateUserId": 100,
                                "Id": "424",
                                "ModifyTime": "2015-10-30T13:23:02.1380147",
                                "ModifyUserId": 100
                            }, {
                                "FormatVersion": "01.03",
                                "WtsFormatVersion": "01.03",
                                "ImsiCount": 89860,
                                "CreateUserFullName": "Angela Smith",
                                "CreateTime": "2015-10-30T13:24:37.9435943",
                                "CreateUserId": 101,
                                "Id": "425",
                                "ModifyTime": "2015-10-30T13:24:37.9435943",
                                "ModifyUserId": 101
                            }, {
                                "ImsiCount": 50000,
                                "CreateUserFullName": "Angela Smith",
                                "CreateTime": "2015-10-30T13:26:23.2521241",
                                "CreateUserId": 101,
                                "Id": "426",
                                "ModifyTime": "2015-10-30T13:26:23.2521241",
                                "ModifyUserId": 101
                            }, {
                                "Description": "export description",
                                "FormatVersion": "01.03",
                                "WtsFormatVersion": "01.03",
                                "FileIdentifier": "export fil",
                                "Author": "export author",
                                "Checker": "export checker",
                                "Authoriser": "export authorizer",
                                "TargetSpec": "export tar",
                                "FileDate": "export date",
                                "ImsiCount": 66955,
                                "CreateUserFullName": "Angela Smith",
                                "CreateTime": "2015-10-30T13:28:46.4514426",
                                "CreateUserId": 101,
                                "Id": "427",
                                "ModifyTime": "2015-10-30T13:28:46.4514426",
                                "ModifyUserId": 101
                            }],
                            "TransactionId": "16f0a4416ef84505bed3127e42427868",
                            "SessionId": "00000000000000000000000000000000",
                            "HasErrorOccurred": false
                        };
                    },
                    enumerable: true
                }, {
                    key: "getFetchCurrentStatusForAllImsisResponse",
                    value: function value() {
                        return {
                            "Values": [{
                                "Name": "Do Not Reprocess",
                                "Count": 222877
                            }, {
                                "Name": "Reprocess",
                                "Count": 112347
                            }, {
                                "Name": "Successful",
                                "Count": 100000
                            }, {
                                "Name": "Total IMSIs in BCA Database",
                                "Count": 435224
                            }],
                            "TransactionId": "821ebe73a3444aed90c34f76c2f7a79a",
                            "SessionId": "00000000000000000000000000000000",
                            "HasErrorOccurred": false
                        };
                    },
                    enumerable: true
                }, {
                    key: "getCampaignAnalysisSummaryResponse",
                    value: function value() {
                        return {
                            "Values": [{
                                "ImportId": 185,
                                "DateImported": "2015-10-30T12:59:49.3237472",
                                "Campaign": "Fairfax",
                                "ImportTypeId": 2,
                                "ImportType": "Expired IMSIs",
                                "ImsiCount": 50000,
                                "SuccessfulCount": 0,
                                "ReprocessCount": 16228,
                                "DoNotReprocessCount": 33772,
                                "CreateUser": "Jones, Illinois",
                                "TargetSpec": "TAR-1     ",
                                "Description": "Batch #1",
                                "Notes": "load-1.sld"
                            }, {
                                "ImportId": 186,
                                "DateImported": "2015-10-30T13:01:42.3310468",
                                "Campaign": "Fairfax",
                                "ImportTypeId": 1,
                                "ImportType": "Failed IMSIs",
                                "ImsiCount": 50000,
                                "SuccessfulCount": 0,
                                "ReprocessCount": 6677,
                                "DoNotReprocessCount": 43323,
                                "CreateUser": "Jones, Illinois",
                                "TargetSpec": "TAR-2     ",
                                "Description": "Batch #2",
                                "Notes": " load-2.sld"
                            }, {
                                "ImportId": 187,
                                "DateImported": "2015-10-30T13:02:07.4945629",
                                "Campaign": "Fairfax",
                                "ImportTypeId": 3,
                                "ImportType": "Successful IMSIs",
                                "ImsiCount": 50000,
                                "SuccessfulCount": 50000,
                                "ReprocessCount": 0,
                                "DoNotReprocessCount": 0,
                                "CreateUser": "Jones, Illinois",
                                "TargetSpec": "TAR-3     ",
                                "Description": "Batch #3",
                                "Notes": "load-3.sld"
                            }, {
                                "ImportId": 188,
                                "DateImported": "2015-10-30T13:03:29.8317958",
                                "Campaign": "",
                                "ImportTypeId": 5,
                                "ImportType": "In HSS not OPM",
                                "ImsiCount": 50000,
                                "SuccessfulCount": 0,
                                "ReprocessCount": 22075,
                                "DoNotReprocessCount": 27925,
                                "CreateUser": "Jones, Illinois",
                                "TargetSpec": "",
                                "Description": "",
                                "Notes": "load-4.xlsx"
                            }, {
                                "ImportId": 189,
                                "DateImported": "2015-10-30T13:05:34.4602574",
                                "Campaign": "Fargo",
                                "ImportTypeId": 2,
                                "ImportType": "Expired IMSIs",
                                "ImsiCount": 50000,
                                "SuccessfulCount": 0,
                                "ReprocessCount": 31828,
                                "DoNotReprocessCount": 18172,
                                "CreateUser": "Smith, Angela",
                                "TargetSpec": "TAR-5     ",
                                "Description": "Batch #5",
                                "Notes": "load-5"
                            }, {
                                "ImportId": 190,
                                "DateImported": "2015-10-30T13:06:10.9439054",
                                "Campaign": "Fargo",
                                "ImportTypeId": 1,
                                "ImportType": "Failed IMSIs",
                                "ImsiCount": 50000,
                                "SuccessfulCount": 0,
                                "ReprocessCount": 35127,
                                "DoNotReprocessCount": 14873,
                                "CreateUser": "Smith, Angela",
                                "TargetSpec": "TAR-6     ",
                                "Description": "Batch #6",
                                "Notes": "failed load-6"
                            }, {
                                "ImportId": 191,
                                "DateImported": "2015-10-30T13:06:44.5492656",
                                "Campaign": "Fargo",
                                "ImportTypeId": 3,
                                "ImportType": "Successful IMSIs",
                                "ImsiCount": 50000,
                                "SuccessfulCount": 50000,
                                "ReprocessCount": 0,
                                "DoNotReprocessCount": 0,
                                "CreateUser": "Smith, Angela",
                                "TargetSpec": "TAR-7     ",
                                "Description": "Batch #7",
                                "Notes": "successful load-7"
                            }, {
                                "ImportId": 192,
                                "DateImported": "2015-10-30T13:08:22.7270824",
                                "Campaign": "",
                                "ImportTypeId": 5,
                                "ImportType": "In HSS not OPM",
                                "ImsiCount": 50000,
                                "SuccessfulCount": 0,
                                "ReprocessCount": 382,
                                "DoNotReprocessCount": 49618,
                                "CreateUser": "Smith, Angela",
                                "TargetSpec": "",
                                "Description": "",
                                "Notes": "not opm load-8"
                            }, {
                                "ImportId": 193,
                                "DateImported": "2015-10-30T13:09:04.0682161",
                                "Campaign": "",
                                "ImportTypeId": 4,
                                "ImportType": "In OPM not HSS",
                                "ImsiCount": 35224,
                                "SuccessfulCount": 0,
                                "ReprocessCount": 0,
                                "DoNotReprocessCount": 35224,
                                "CreateUser": "Smith, Angela",
                                "TargetSpec": "",
                                "Description": "",
                                "Notes": "in opm load-9"
                            }, {
                                "ImportId": 194,
                                "DateImported": "2015-10-30T13:13:53.8151879",
                                "Campaign": "Arlington",
                                "ImportTypeId": 1,
                                "ImportType": "Failed IMSIs",
                                "ImsiCount": 50000,
                                "SuccessfulCount": 0,
                                "ReprocessCount": 30,
                                "DoNotReprocessCount": 0,
                                "CreateUser": "Thursday, Johnny",
                                "TargetSpec": "TAR-8     ",
                                "Description": "Batch #8",
                                "Notes": "Johnny importing load-8.sld on Arlington"
                            }],
                            "TransactionId": "f09e04c6aabe47c8bb40892d90f92a88",
                            "SessionId": "00000000000000000000000000000000",
                            "HasErrorOccurred": false
                        };
                    },
                    enumerable: true
                }, {
                    key: "getSuccessfulLoginResponse",
                    value: function value() {
                        return {
                            "TransactionId": "5fb01f0955c64a7aa53e09d3116805f8",
                            "SessionId": "156a1eaa2bd444908d084911ce5af984",
                            "HasErrorOccurred": false
                        };
                    },
                    enumerable: true
                }, {
                    key: "getImportTypeListResponse",
                    value: function value() {
                        return {
                            "Values": [{
                                "Description": "",
                                "CreateTime": "2015-10-06T11:36:36.0270000",
                                "CreateUserId": 100,
                                "Id": "2",
                                "ModifyUserId": 0,
                                "Name": "Expired IMSIs"
                            }, {
                                "Description": "",
                                "CreateTime": "2015-10-06T11:36:36.0270000",
                                "CreateUserId": 100,
                                "Id": "1",
                                "ModifyUserId": 0,
                                "Name": "Failed IMSIs"
                            }, {
                                "Description": "",
                                "CreateTime": "2015-10-06T11:36:36.0300000",
                                "CreateUserId": 100,
                                "Id": "5",
                                "ModifyUserId": 0,
                                "Name": "In HSS not OPM"
                            }, {
                                "Description": "",
                                "CreateTime": "2015-10-06T11:36:36.0300000",
                                "CreateUserId": 100,
                                "Id": "4",
                                "ModifyUserId": 0,
                                "Name": "In OPM not HSS"
                            }, {
                                "Description": "",
                                "CreateTime": "2015-10-06T11:36:36.0300000",
                                "CreateUserId": 100,
                                "Id": "3",
                                "ModifyUserId": 0,
                                "Name": "Successful IMSIs"
                            }],
                            "TransactionId": "4370b8f2184f4cf28ff6fd3db823ae86",
                            "SessionId": "00000000000000000000000000000000",
                            "HasErrorOccurred": false
                        };
                    },
                    enumerable: true
                }, {
                    key: "campaigns",
                    value: {
                        "Values": [{
                            "Description": "Fairfax",
                            "CreateTime": "2015-10-30T12:59:37.6085758",
                            "CreateUserId": 100,
                            "Id": "50",
                            "ModifyTime": "2015-10-30T12:59:37.6085758",
                            "ModifyUserId": 100,
                            "Name": "Fairfax"
                        }, {
                            "Description": "Arlington",
                            "CreateTime": "2015-10-30T13:04:55.5093627",
                            "CreateUserId": 101,
                            "Id": "51",
                            "ModifyTime": "2015-10-30T13:04:55.5093627",
                            "ModifyUserId": 101,
                            "Name": "Arlington"
                        }, {
                            "Description": "Fargo",
                            "CreateTime": "2015-10-31T13:12:46.5984669",
                            "CreateUserId": 102,
                            "Id": "53",
                            "ModifyTime": "2015-10-31T13:12:46.5984669",
                            "ModifyUserId": 102,
                            "Name": "Fargo"
                        }],
                        "TransactionId": "ac16738fea204c2e820eea4f5c6df603",
                        "SessionId": "00000000000000000000000000000000",
                        "HasErrorOccurred": false
                    },
                    enumerable: true
                }, {
                    key: "getCampaignListResponse",
                    value: function value() {
                        return SampleAppData.campaigns;
                    },
                    enumerable: true
                }, {
                    key: "getCreateCampaignResponse",
                    value: function value(campaign) {
                        campaign.Id = SampleAppData.nextId(SampleAppData.campaigns.Values);
                        SampleAppData.campaigns.Values.push(campaign);
                        return SampleAppData.campaigns;
                    },
                    enumerable: true
                }, {
                    key: "nextId",
                    value: function value(listWithIds) {
                        var itemWithMaxId = _.max(listWithIds, function (item) {
                            return parseInt(item.Id);
                        });
                        return itemWithMaxId ? (parseInt(itemWithMaxId.Id) + 1).toString() : "1";
                    },
                    enumerable: true
                }]);

                return SampleAppData;
            })();

            _export("SampleAppData", SampleAppData);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZS1hcHAtZGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7V0FFYSxhQUFhOzs7Ozs7Ozs7OztBQUFiLHlCQUFhO3lCQUFiLGFBQWE7MENBQWIsYUFBYTs7OzZCQUFiLGFBQWE7OzJCQUNXLGVBQUMsWUFBWSxFQUFLO0FBQ25ELCtCQUFPO0FBQ0YseUNBQWEsRUFBRSxZQUFZLElBQUksT0FBTyxHQUFHLG9FQUFvRSxHQUFHLG1FQUFtRTtBQUNuTCwyQ0FBZSxFQUFFLGtDQUFrQztBQUNuRCx1Q0FBVyxFQUFFLGtDQUFrQztBQUMvQyw4Q0FBa0IsRUFBRSxLQUFLO3lCQUM3QixDQUFBO3FCQUNGOzs7OzJCQUV1QyxpQkFBTTtBQUM1QywrQkFBTztBQUNKLGdEQUFvQixFQUFFLENBQ2xCO0FBQ0ksd0NBQVEsRUFBRSxrQkFBa0I7QUFDNUIsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsNENBQVksRUFBRSxnQkFBZ0I7QUFDOUIsNENBQVksRUFBRSxXQUFXO0FBQ3pCLDBDQUFVLEVBQUUsdUJBQXVCO0FBQ25DLGdEQUFnQixFQUFFLCtCQUErQjtBQUNqRCxnREFBZ0IsRUFBRSxZQUFZO0FBQzlCLDRDQUFZLEVBQUUsRUFBRTtBQUNoQixzREFBc0IsRUFBRSxJQUFJO0FBQzVCLDRDQUFZLEVBQUUsWUFBWTtBQUMxQiwwQ0FBVSxFQUFFLGlCQUFpQjs2QkFDaEMsRUFDRDtBQUNJLHdDQUFRLEVBQUUsZ0JBQWdCO0FBQzFCLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDRDQUFZLEVBQUUsV0FBVztBQUN6Qiw0Q0FBWSxFQUFFLFdBQVc7QUFDekIsMENBQVUsRUFBRSx1QkFBdUI7QUFDbkMsZ0RBQWdCLEVBQUUsK0JBQStCO0FBQ2pELGdEQUFnQixFQUFFLFlBQVk7QUFDOUIsNENBQVksRUFBRSxFQUFFO0FBQ2hCLHNEQUFzQixFQUFFLElBQUk7QUFDNUIsNENBQVksRUFBRSxZQUFZO0FBQzFCLDBDQUFVLEVBQUUsaUJBQWlCOzZCQUNoQyxFQUNEO0FBQ0ksd0NBQVEsRUFBRSxVQUFVO0FBQ3BCLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDRDQUFZLEVBQUUsV0FBVztBQUN6Qiw0Q0FBWSxFQUFFLEtBQUs7QUFDbkIsMENBQVUsRUFBRSx1QkFBdUI7QUFDbkMsZ0RBQWdCLEVBQUUsK0JBQStCO0FBQ2pELGdEQUFnQixFQUFFLEtBQUs7QUFDdkIsNENBQVksRUFBRSxLQUFLO0FBQ25CLHNEQUFzQixFQUFFLEtBQUs7QUFDN0IsNENBQVksRUFBRSxZQUFZO0FBQzFCLDBDQUFVLEVBQUUsaUJBQWlCOzZCQUNoQyxFQUNEO0FBQ0ksd0NBQVEsRUFBRSxVQUFVO0FBQ3BCLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDRDQUFZLEVBQUUsV0FBVztBQUN6Qiw0Q0FBWSxFQUFFLEtBQUs7QUFDbkIsMENBQVUsRUFBRSx1QkFBdUI7QUFDbkMsZ0RBQWdCLEVBQUUsK0JBQStCO0FBQ2pELGdEQUFnQixFQUFFLEtBQUs7QUFDdkIsNENBQVksRUFBRSxLQUFLO0FBQ25CLHNEQUFzQixFQUFFLEtBQUs7QUFDN0IsNENBQVksRUFBRSxZQUFZO0FBQzFCLDBDQUFVLEVBQUUsaUJBQWlCOzZCQUNoQyxFQUNEO0FBQ0ksd0NBQVEsRUFBRSxVQUFVO0FBQ3BCLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDRDQUFZLEVBQUUsV0FBVztBQUN6Qiw0Q0FBWSxFQUFFLEtBQUs7QUFDbkIsMENBQVUsRUFBRSx1QkFBdUI7QUFDbkMsZ0RBQWdCLEVBQUUsK0JBQStCO0FBQ2pELGdEQUFnQixFQUFFLEtBQUs7QUFDdkIsNENBQVksRUFBRSxLQUFLO0FBQ25CLHNEQUFzQixFQUFFLEtBQUs7QUFDN0IsNENBQVksRUFBRSxZQUFZO0FBQzFCLDBDQUFVLEVBQUUsZUFBZTs2QkFDOUIsRUFDRDtBQUNJLHdDQUFRLEVBQUUsVUFBVTtBQUNwQiw0Q0FBWSxFQUFFLDZCQUE2QjtBQUMzQyw0Q0FBWSxFQUFFLFdBQVc7QUFDekIsNENBQVksRUFBRSxLQUFLO0FBQ25CLDBDQUFVLEVBQUUsdUJBQXVCO0FBQ25DLGdEQUFnQixFQUFFLCtCQUErQjtBQUNqRCxnREFBZ0IsRUFBRSxLQUFLO0FBQ3ZCLDRDQUFZLEVBQUUsS0FBSztBQUNuQixzREFBc0IsRUFBRSxLQUFLO0FBQzdCLDRDQUFZLEVBQUUsWUFBWTs2QkFDN0IsRUFDRDtBQUNJLHdDQUFRLEVBQUUsVUFBVTtBQUNwQiw0Q0FBWSxFQUFFLDZCQUE2QjtBQUMzQyw0Q0FBWSxFQUFFLFdBQVc7QUFDekIsNENBQVksRUFBRSxLQUFLO0FBQ25CLDBDQUFVLEVBQUUsdUJBQXVCO0FBQ25DLGdEQUFnQixFQUFFLCtCQUErQjtBQUNqRCxnREFBZ0IsRUFBRSxLQUFLO0FBQ3ZCLDRDQUFZLEVBQUUsS0FBSztBQUNuQixzREFBc0IsRUFBRSxLQUFLO0FBQzdCLDRDQUFZLEVBQUUsWUFBWTs2QkFDN0IsQ0FDSjtBQUNELHdEQUE0QixFQUFFLENBQzFCO0FBQ0ksMENBQVUsRUFBRSxtQkFBbUI7QUFDL0IsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsMENBQVUsRUFBRSwwQkFBMEI7QUFDdEMsZ0RBQWdCLEVBQUUsd0JBQXdCO0FBQzFDLGdEQUFnQixFQUFFLEVBQUU7QUFDcEIsNENBQVksRUFBRSxFQUFFO0FBQ2hCLHNEQUFzQixFQUFFLEtBQUs7QUFDN0IsNkVBQTZDLEVBQUUsRUFBRTtBQUNqRCwwRUFBMEMsRUFBRSxFQUFFO0FBQzlDLDBFQUEwQyxFQUFFLEVBQUU7QUFDOUMsdUNBQU8sRUFBRSxxQkFBcUI7NkJBQ2pDLEVBQ0Q7QUFDSSwwQ0FBVSxFQUFFLGlCQUFpQjtBQUM3Qiw0Q0FBWSxFQUFFLDZCQUE2QjtBQUMzQywwQ0FBVSxFQUFFLDBCQUEwQjtBQUN0QyxnREFBZ0IsRUFBRSx3Q0FBd0M7QUFDMUQsZ0RBQWdCLEVBQUUsRUFBRTtBQUNwQiw0Q0FBWSxFQUFFLEVBQUU7QUFDaEIsc0RBQXNCLEVBQUUsS0FBSztBQUM3Qiw2RUFBNkMsRUFBRSxFQUFFO0FBQ2pELDBFQUEwQyxFQUFFLEVBQUU7QUFDOUMsMEVBQTBDLEVBQUUsRUFBRTtBQUM5Qyx1Q0FBTyxFQUFFLHFCQUFxQjs2QkFDakMsRUFDRDtBQUNJLDBDQUFVLEVBQUUscUJBQXFCO0FBQ2pDLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDBDQUFVLEVBQUUsMkJBQTJCO0FBQ3ZDLGdEQUFnQixFQUFFLG1CQUFtQjtBQUNyQyxnREFBZ0IsRUFBRSxFQUFFO0FBQ3BCLDRDQUFZLEVBQUUsRUFBRTtBQUNoQixzREFBc0IsRUFBRSxLQUFLO0FBQzdCLDZFQUE2QyxFQUFFLEVBQUU7QUFDakQsMEVBQTBDLEVBQUUsRUFBRTtBQUM5QywwRUFBMEMsRUFBRSxFQUFFO0FBQzlDLHVDQUFPLEVBQUUscUJBQXFCOzZCQUNqQyxFQUNEO0FBQ0ksMENBQVUsRUFBRSxxQkFBcUI7QUFDakMsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsMENBQVUsRUFBRSwyQkFBMkI7QUFDdkMsZ0RBQWdCLEVBQUUsNkJBQTZCO0FBQy9DLGdEQUFnQixFQUFFLEVBQUU7QUFDcEIsNENBQVksRUFBRSxFQUFFO0FBQ2hCLHNEQUFzQixFQUFFLEtBQUs7QUFDN0IsNkVBQTZDLEVBQUUsRUFBRTtBQUNqRCwwRUFBMEMsRUFBRSxFQUFFO0FBQzlDLDBFQUEwQyxFQUFFLEVBQUU7QUFDOUMsdUNBQU8sRUFBRSxxQkFBcUI7NkJBQ2pDLEVBQ0Q7QUFDSSwwQ0FBVSxFQUFFLGNBQWM7QUFDMUIsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsMENBQVUsRUFBRSx3QkFBd0I7QUFDcEMsZ0RBQWdCLEVBQUUsMEJBQTBCO0FBQzVDLGdEQUFnQixFQUFFLEVBQUU7QUFDcEIsNENBQVksRUFBRSxFQUFFO0FBQ2hCLHNEQUFzQixFQUFFLEtBQUs7QUFDN0IsNkVBQTZDLEVBQUUsdUJBQXVCO0FBQ3RFLCtEQUErQixFQUFFLDZCQUE2QjtBQUM5RCwwRUFBMEMsRUFBRSxnQkFBZ0I7QUFDNUQsMEVBQTBDLEVBQUUsb0JBQW9CO0FBQ2hFLHVFQUF1QyxFQUFFLE1BQU07QUFDL0MsdUNBQU8sRUFBRSxxQkFBcUI7NkJBQ2pDLEVBQ0Q7QUFDSSwwQ0FBVSxFQUFFLGNBQWM7QUFDMUIsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsMENBQVUsRUFBRSx1QkFBdUI7QUFDbkMsZ0RBQWdCLEVBQUUsK0JBQStCO0FBQ2pELGdEQUFnQixFQUFFLFlBQVk7QUFDOUIsNENBQVksRUFBRSxFQUFFO0FBQ2hCLHNEQUFzQixFQUFFLEtBQUs7QUFDN0IsNkVBQTZDLEVBQUUsdUJBQXVCO0FBQ3RFLCtEQUErQixFQUFFLDZCQUE2QjtBQUM5RCwwRUFBMEMsRUFBRSxnQkFBZ0I7QUFDNUQsMEVBQTBDLEVBQUUsb0JBQW9CO0FBQ2hFLHVFQUF1QyxFQUFFLE1BQU07QUFDL0MsdUNBQU8sRUFBRSxxQkFBcUI7NkJBQ2pDLENBQ0o7QUFDRCwyQ0FBZSxFQUFFLGtDQUFrQztBQUNuRCx1Q0FBVyxFQUFFLGtDQUFrQztBQUMvQyw4Q0FBa0IsRUFBRSxLQUFLO3lCQUMzQixDQUFBO3FCQUNGOzs7OzJCQUVxQyxpQkFBTTtBQUMxQywrQkFBTztBQUNMLHNDQUFVLEVBQUUsSUFBSTtBQUNoQix5Q0FBYSxFQUFFLGtDQUFrQztBQUNqRCxxQ0FBUyxFQUFFLGtDQUFrQztBQUM3Qyw0Q0FBZ0IsRUFBRSxLQUFLO3lCQUN0QixDQUFBO3FCQUNKOzs7OzJCQUU4QixpQkFBTTtBQUNuQywrQkFBTztBQUNMLG9DQUFRLEVBQUUsQ0FDTjtBQUNJLDZDQUFhLEVBQUUsd0JBQXdCO0FBQ3ZDLCtDQUFlLEVBQUUsS0FBSztBQUN0QixrREFBa0IsRUFBRSxLQUFLO0FBQ3pCLGdEQUFnQixFQUFFLFlBQVk7QUFDOUIsd0NBQVEsRUFBRSxXQUFXO0FBQ3JCLHlDQUFTLEVBQUUsWUFBWTtBQUN2Qiw0Q0FBWSxFQUFFLGVBQWU7QUFDN0IsNENBQVksRUFBRSxZQUFZO0FBQzFCLDBDQUFVLEVBQUUsVUFBVTtBQUN0QiwyQ0FBVyxFQUFFLEtBQUs7QUFDbEIsb0RBQW9CLEVBQUUsaUJBQWlCO0FBQ3ZDLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDhDQUFjLEVBQUUsR0FBRztBQUNuQixvQ0FBSSxFQUFFLEtBQUs7QUFDWCw0Q0FBWSxFQUFFLDZCQUE2QjtBQUMzQyw4Q0FBYyxFQUFFLEdBQUc7NkJBQ3RCLEVBQ0Q7QUFDSSw2Q0FBYSxFQUFFLHNCQUFzQjtBQUNyQywrQ0FBZSxFQUFFLEtBQUs7QUFDdEIsa0RBQWtCLEVBQUUsS0FBSztBQUN6QixnREFBZ0IsRUFBRSxZQUFZO0FBQzlCLHdDQUFRLEVBQUUsV0FBVztBQUNyQix5Q0FBUyxFQUFFLFlBQVk7QUFDdkIsNENBQVksRUFBRSxlQUFlO0FBQzdCLDRDQUFZLEVBQUUsWUFBWTtBQUMxQiwwQ0FBVSxFQUFFLFVBQVU7QUFDdEIsMkNBQVcsRUFBRSxLQUFLO0FBQ2xCLG9EQUFvQixFQUFFLGNBQWM7QUFDcEMsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsOENBQWMsRUFBRSxHQUFHO0FBQ25CLG9DQUFJLEVBQUUsS0FBSztBQUNYLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDhDQUFjLEVBQUUsR0FBRzs2QkFDdEIsRUFDRDtBQUNJLCtDQUFlLEVBQUUsT0FBTztBQUN4QixrREFBa0IsRUFBRSxPQUFPO0FBQzNCLDJDQUFXLEVBQUUsTUFBTTtBQUNuQixvREFBb0IsRUFBRSxnQkFBZ0I7QUFDdEMsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsOENBQWMsRUFBRSxHQUFHO0FBQ25CLG9DQUFJLEVBQUUsS0FBSztBQUNYLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDhDQUFjLEVBQUUsR0FBRzs2QkFDdEIsRUFDRDtBQUNJLCtDQUFlLEVBQUUsT0FBTztBQUN4QixrREFBa0IsRUFBRSxPQUFPO0FBQzNCLDJDQUFXLEVBQUUsS0FBSztBQUNsQixvREFBb0IsRUFBRSxnQkFBZ0I7QUFDdEMsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsOENBQWMsRUFBRSxHQUFHO0FBQ25CLG9DQUFJLEVBQUUsS0FBSztBQUNYLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDhDQUFjLEVBQUUsR0FBRzs2QkFDdEIsRUFDRDtBQUNJLDZDQUFhLEVBQUUsb0JBQW9CO0FBQ25DLCtDQUFlLEVBQUUsS0FBSztBQUN0QixrREFBa0IsRUFBRSxLQUFLO0FBQ3pCLGdEQUFnQixFQUFFLFlBQVk7QUFDOUIsd0NBQVEsRUFBRSxXQUFXO0FBQ3JCLHlDQUFTLEVBQUUsWUFBWTtBQUN2Qiw0Q0FBWSxFQUFFLGVBQWU7QUFDN0IsNENBQVksRUFBRSxZQUFZO0FBQzFCLDBDQUFVLEVBQUUsVUFBVTtBQUN0QiwyQ0FBVyxFQUFFLEtBQUs7QUFDbEIsb0RBQW9CLEVBQUUsaUJBQWlCO0FBQ3ZDLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDhDQUFjLEVBQUUsR0FBRztBQUNuQixvQ0FBSSxFQUFFLEtBQUs7QUFDWCw0Q0FBWSxFQUFFLDZCQUE2QjtBQUMzQyw4Q0FBYyxFQUFFLEdBQUc7NkJBQ3RCLEVBQ0Q7QUFDSSwrQ0FBZSxFQUFFLE9BQU87QUFDeEIsa0RBQWtCLEVBQUUsT0FBTztBQUMzQiwyQ0FBVyxFQUFFLEtBQUs7QUFDbEIsb0RBQW9CLEVBQUUsZ0JBQWdCO0FBQ3RDLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDhDQUFjLEVBQUUsR0FBRztBQUNuQixvQ0FBSSxFQUFFLEtBQUs7QUFDWCw0Q0FBWSxFQUFFLDZCQUE2QjtBQUMzQyw4Q0FBYyxFQUFFLEdBQUc7NkJBQ3RCLEVBQ0Q7QUFDSSw2Q0FBYSxFQUFFLG9CQUFvQjtBQUNuQywrQ0FBZSxFQUFFLEtBQUs7QUFDdEIsa0RBQWtCLEVBQUUsS0FBSztBQUN6QixnREFBZ0IsRUFBRSxZQUFZO0FBQzlCLHdDQUFRLEVBQUUsV0FBVztBQUNyQix5Q0FBUyxFQUFFLFlBQVk7QUFDdkIsNENBQVksRUFBRSxlQUFlO0FBQzdCLDRDQUFZLEVBQUUsWUFBWTtBQUMxQiwwQ0FBVSxFQUFFLFVBQVU7QUFDdEIsMkNBQVcsRUFBRSxLQUFLO0FBQ2xCLG9EQUFvQixFQUFFLGdCQUFnQjtBQUN0Qyw0Q0FBWSxFQUFFLDZCQUE2QjtBQUMzQyw4Q0FBYyxFQUFFLEdBQUc7QUFDbkIsb0NBQUksRUFBRSxLQUFLO0FBQ1gsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsOENBQWMsRUFBRSxHQUFHOzZCQUN0QixFQUNEO0FBQ0ksNkNBQWEsRUFBRSxVQUFVO0FBQ3pCLCtDQUFlLEVBQUUsS0FBSztBQUN0QixrREFBa0IsRUFBRSxLQUFLO0FBQ3pCLGdEQUFnQixFQUFFLFlBQVk7QUFDOUIsd0NBQVEsRUFBRSxXQUFXO0FBQ3JCLHlDQUFTLEVBQUUsWUFBWTtBQUN2Qiw0Q0FBWSxFQUFFLGVBQWU7QUFDN0IsNENBQVksRUFBRSxZQUFZO0FBQzFCLDBDQUFVLEVBQUUsVUFBVTtBQUN0QiwyQ0FBVyxFQUFFLEtBQUs7QUFDbEIsb0RBQW9CLEVBQUUsZ0JBQWdCO0FBQ3RDLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDhDQUFjLEVBQUUsR0FBRztBQUNuQixvQ0FBSSxFQUFFLEtBQUs7QUFDWCw0Q0FBWSxFQUFFLDZCQUE2QjtBQUMzQyw4Q0FBYyxFQUFFLEdBQUc7NkJBQ3RCLEVBQ0Q7QUFDSSwrQ0FBZSxFQUFFLE9BQU87QUFDeEIsa0RBQWtCLEVBQUUsT0FBTztBQUMzQiwyQ0FBVyxFQUFFLEtBQUs7QUFDbEIsb0RBQW9CLEVBQUUsY0FBYztBQUNwQyw0Q0FBWSxFQUFFLDZCQUE2QjtBQUMzQyw4Q0FBYyxFQUFFLEdBQUc7QUFDbkIsb0NBQUksRUFBRSxLQUFLO0FBQ1gsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsOENBQWMsRUFBRSxHQUFHOzZCQUN0QixFQUNEO0FBQ0ksMkNBQVcsRUFBRSxLQUFLO0FBQ2xCLG9EQUFvQixFQUFFLGNBQWM7QUFDcEMsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsOENBQWMsRUFBRSxHQUFHO0FBQ25CLG9DQUFJLEVBQUUsS0FBSztBQUNYLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDhDQUFjLEVBQUUsR0FBRzs2QkFDdEIsRUFDRDtBQUNJLDZDQUFhLEVBQUUsb0JBQW9CO0FBQ25DLCtDQUFlLEVBQUUsT0FBTztBQUN4QixrREFBa0IsRUFBRSxPQUFPO0FBQzNCLGdEQUFnQixFQUFFLFlBQVk7QUFDOUIsd0NBQVEsRUFBRSxlQUFlO0FBQ3pCLHlDQUFTLEVBQUUsZ0JBQWdCO0FBQzNCLDRDQUFZLEVBQUUsbUJBQW1CO0FBQ2pDLDRDQUFZLEVBQUUsWUFBWTtBQUMxQiwwQ0FBVSxFQUFFLGFBQWE7QUFDekIsMkNBQVcsRUFBRSxLQUFLO0FBQ2xCLG9EQUFvQixFQUFFLGNBQWM7QUFDcEMsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsOENBQWMsRUFBRSxHQUFHO0FBQ25CLG9DQUFJLEVBQUUsS0FBSztBQUNYLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDhDQUFjLEVBQUUsR0FBRzs2QkFDdEIsQ0FDSjtBQUNELDJDQUFlLEVBQUUsa0NBQWtDO0FBQ25ELHVDQUFXLEVBQUUsa0NBQWtDO0FBQy9DLDhDQUFrQixFQUFFLEtBQUs7eUJBQzFCLENBQUE7cUJBQ0Y7Ozs7MkJBRWlELGlCQUFNO0FBQ3RELCtCQUFPO0FBQ0gsb0NBQVEsRUFBRSxDQUNOO0FBQ0ksc0NBQU0sRUFBRSxrQkFBa0I7QUFDMUIsdUNBQU8sRUFBRSxNQUFNOzZCQUNsQixFQUNEO0FBQ0ksc0NBQU0sRUFBRSxXQUFXO0FBQ25CLHVDQUFPLEVBQUUsTUFBTTs2QkFDbEIsRUFDRDtBQUNJLHNDQUFNLEVBQUUsWUFBWTtBQUNwQix1Q0FBTyxFQUFFLE1BQU07NkJBQ2xCLEVBQ0Q7QUFDSSxzQ0FBTSxFQUFFLDZCQUE2QjtBQUNyQyx1Q0FBTyxFQUFFLE1BQU07NkJBQ2xCLENBQ0o7QUFDRCwyQ0FBZSxFQUFFLGtDQUFrQztBQUNuRCx1Q0FBVyxFQUFFLGtDQUFrQztBQUMvQyw4Q0FBa0IsRUFBRSxLQUFLO3lCQUM1QixDQUFBO3FCQUNGOzs7OzJCQUUyQyxpQkFBTTtBQUNoRCwrQkFBTztBQUNILG9DQUFRLEVBQUUsQ0FDTjtBQUNJLDBDQUFVLEVBQUUsR0FBRztBQUNmLDhDQUFjLEVBQUUsNkJBQTZCO0FBQzdDLDBDQUFVLEVBQUUsU0FBUztBQUNyQiw4Q0FBYyxFQUFFLENBQUM7QUFDakIsNENBQVksRUFBRSxlQUFlO0FBQzdCLDJDQUFXLEVBQUUsS0FBSztBQUNsQixpREFBaUIsRUFBRSxDQUFDO0FBQ3BCLGdEQUFnQixFQUFFLEtBQUs7QUFDdkIscURBQXFCLEVBQUUsS0FBSztBQUM1Qiw0Q0FBWSxFQUFFLGlCQUFpQjtBQUMvQiw0Q0FBWSxFQUFFLFlBQVk7QUFDMUIsNkNBQWEsRUFBRSxVQUFVO0FBQ3pCLHVDQUFPLEVBQUUsWUFBWTs2QkFDeEIsRUFDRDtBQUNJLDBDQUFVLEVBQUUsR0FBRztBQUNmLDhDQUFjLEVBQUUsNkJBQTZCO0FBQzdDLDBDQUFVLEVBQUUsU0FBUztBQUNyQiw4Q0FBYyxFQUFFLENBQUM7QUFDakIsNENBQVksRUFBRSxjQUFjO0FBQzVCLDJDQUFXLEVBQUUsS0FBSztBQUNsQixpREFBaUIsRUFBRSxDQUFDO0FBQ3BCLGdEQUFnQixFQUFFLElBQUk7QUFDdEIscURBQXFCLEVBQUUsS0FBSztBQUM1Qiw0Q0FBWSxFQUFFLGlCQUFpQjtBQUMvQiw0Q0FBWSxFQUFFLFlBQVk7QUFDMUIsNkNBQWEsRUFBRSxVQUFVO0FBQ3pCLHVDQUFPLEVBQUUsYUFBYTs2QkFDekIsRUFDRDtBQUNJLDBDQUFVLEVBQUUsR0FBRztBQUNmLDhDQUFjLEVBQUUsNkJBQTZCO0FBQzdDLDBDQUFVLEVBQUUsU0FBUztBQUNyQiw4Q0FBYyxFQUFFLENBQUM7QUFDakIsNENBQVksRUFBRSxrQkFBa0I7QUFDaEMsMkNBQVcsRUFBRSxLQUFLO0FBQ2xCLGlEQUFpQixFQUFFLEtBQUs7QUFDeEIsZ0RBQWdCLEVBQUUsQ0FBQztBQUNuQixxREFBcUIsRUFBRSxDQUFDO0FBQ3hCLDRDQUFZLEVBQUUsaUJBQWlCO0FBQy9CLDRDQUFZLEVBQUUsWUFBWTtBQUMxQiw2Q0FBYSxFQUFFLFVBQVU7QUFDekIsdUNBQU8sRUFBRSxZQUFZOzZCQUN4QixFQUNEO0FBQ0ksMENBQVUsRUFBRSxHQUFHO0FBQ2YsOENBQWMsRUFBRSw2QkFBNkI7QUFDN0MsMENBQVUsRUFBRSxFQUFFO0FBQ2QsOENBQWMsRUFBRSxDQUFDO0FBQ2pCLDRDQUFZLEVBQUUsZ0JBQWdCO0FBQzlCLDJDQUFXLEVBQUUsS0FBSztBQUNsQixpREFBaUIsRUFBRSxDQUFDO0FBQ3BCLGdEQUFnQixFQUFFLEtBQUs7QUFDdkIscURBQXFCLEVBQUUsS0FBSztBQUM1Qiw0Q0FBWSxFQUFFLGlCQUFpQjtBQUMvQiw0Q0FBWSxFQUFFLEVBQUU7QUFDaEIsNkNBQWEsRUFBRSxFQUFFO0FBQ2pCLHVDQUFPLEVBQUUsYUFBYTs2QkFDekIsRUFDRDtBQUNJLDBDQUFVLEVBQUUsR0FBRztBQUNmLDhDQUFjLEVBQUUsNkJBQTZCO0FBQzdDLDBDQUFVLEVBQUUsT0FBTztBQUNuQiw4Q0FBYyxFQUFFLENBQUM7QUFDakIsNENBQVksRUFBRSxlQUFlO0FBQzdCLDJDQUFXLEVBQUUsS0FBSztBQUNsQixpREFBaUIsRUFBRSxDQUFDO0FBQ3BCLGdEQUFnQixFQUFFLEtBQUs7QUFDdkIscURBQXFCLEVBQUUsS0FBSztBQUM1Qiw0Q0FBWSxFQUFFLGVBQWU7QUFDN0IsNENBQVksRUFBRSxZQUFZO0FBQzFCLDZDQUFhLEVBQUUsVUFBVTtBQUN6Qix1Q0FBTyxFQUFFLFFBQVE7NkJBQ3BCLEVBQ0Q7QUFDSSwwQ0FBVSxFQUFFLEdBQUc7QUFDZiw4Q0FBYyxFQUFFLDZCQUE2QjtBQUM3QywwQ0FBVSxFQUFFLE9BQU87QUFDbkIsOENBQWMsRUFBRSxDQUFDO0FBQ2pCLDRDQUFZLEVBQUUsY0FBYztBQUM1QiwyQ0FBVyxFQUFFLEtBQUs7QUFDbEIsaURBQWlCLEVBQUUsQ0FBQztBQUNwQixnREFBZ0IsRUFBRSxLQUFLO0FBQ3ZCLHFEQUFxQixFQUFFLEtBQUs7QUFDNUIsNENBQVksRUFBRSxlQUFlO0FBQzdCLDRDQUFZLEVBQUUsWUFBWTtBQUMxQiw2Q0FBYSxFQUFFLFVBQVU7QUFDekIsdUNBQU8sRUFBRSxlQUFlOzZCQUMzQixFQUNEO0FBQ0ksMENBQVUsRUFBRSxHQUFHO0FBQ2YsOENBQWMsRUFBRSw2QkFBNkI7QUFDN0MsMENBQVUsRUFBRSxPQUFPO0FBQ25CLDhDQUFjLEVBQUUsQ0FBQztBQUNqQiw0Q0FBWSxFQUFFLGtCQUFrQjtBQUNoQywyQ0FBVyxFQUFFLEtBQUs7QUFDbEIsaURBQWlCLEVBQUUsS0FBSztBQUN4QixnREFBZ0IsRUFBRSxDQUFDO0FBQ25CLHFEQUFxQixFQUFFLENBQUM7QUFDeEIsNENBQVksRUFBRSxlQUFlO0FBQzdCLDRDQUFZLEVBQUUsWUFBWTtBQUMxQiw2Q0FBYSxFQUFFLFVBQVU7QUFDekIsdUNBQU8sRUFBRSxtQkFBbUI7NkJBQy9CLEVBQ0Q7QUFDSSwwQ0FBVSxFQUFFLEdBQUc7QUFDZiw4Q0FBYyxFQUFFLDZCQUE2QjtBQUM3QywwQ0FBVSxFQUFFLEVBQUU7QUFDZCw4Q0FBYyxFQUFFLENBQUM7QUFDakIsNENBQVksRUFBRSxnQkFBZ0I7QUFDOUIsMkNBQVcsRUFBRSxLQUFLO0FBQ2xCLGlEQUFpQixFQUFFLENBQUM7QUFDcEIsZ0RBQWdCLEVBQUUsR0FBRztBQUNyQixxREFBcUIsRUFBRSxLQUFLO0FBQzVCLDRDQUFZLEVBQUUsZUFBZTtBQUM3Qiw0Q0FBWSxFQUFFLEVBQUU7QUFDaEIsNkNBQWEsRUFBRSxFQUFFO0FBQ2pCLHVDQUFPLEVBQUUsZ0JBQWdCOzZCQUM1QixFQUNEO0FBQ0ksMENBQVUsRUFBRSxHQUFHO0FBQ2YsOENBQWMsRUFBRSw2QkFBNkI7QUFDN0MsMENBQVUsRUFBRSxFQUFFO0FBQ2QsOENBQWMsRUFBRSxDQUFDO0FBQ2pCLDRDQUFZLEVBQUUsZ0JBQWdCO0FBQzlCLDJDQUFXLEVBQUUsS0FBSztBQUNsQixpREFBaUIsRUFBRSxDQUFDO0FBQ3BCLGdEQUFnQixFQUFFLENBQUM7QUFDbkIscURBQXFCLEVBQUUsS0FBSztBQUM1Qiw0Q0FBWSxFQUFFLGVBQWU7QUFDN0IsNENBQVksRUFBRSxFQUFFO0FBQ2hCLDZDQUFhLEVBQUUsRUFBRTtBQUNqQix1Q0FBTyxFQUFFLGVBQWU7NkJBQzNCLEVBQ0Q7QUFDSSwwQ0FBVSxFQUFFLEdBQUc7QUFDZiw4Q0FBYyxFQUFFLDZCQUE2QjtBQUM3QywwQ0FBVSxFQUFFLFdBQVc7QUFDdkIsOENBQWMsRUFBRSxDQUFDO0FBQ2pCLDRDQUFZLEVBQUUsY0FBYztBQUM1QiwyQ0FBVyxFQUFFLEtBQUs7QUFDbEIsaURBQWlCLEVBQUUsQ0FBQztBQUNwQixnREFBZ0IsRUFBRSxFQUFFO0FBQ3BCLHFEQUFxQixFQUFFLENBQUM7QUFDeEIsNENBQVksRUFBRSxrQkFBa0I7QUFDaEMsNENBQVksRUFBRSxZQUFZO0FBQzFCLDZDQUFhLEVBQUUsVUFBVTtBQUN6Qix1Q0FBTyxFQUFFLDBDQUEwQzs2QkFDdEQsQ0FDSjtBQUNELDJDQUFlLEVBQUUsa0NBQWtDO0FBQ25ELHVDQUFXLEVBQUUsa0NBQWtDO0FBQy9DLDhDQUFrQixFQUFFLEtBQUs7eUJBQzVCLENBQUE7cUJBQ0Y7Ozs7MkJBRW1DLGlCQUFNO0FBQ3hDLCtCQUFPO0FBQ0wsMkNBQWUsRUFBRSxrQ0FBa0M7QUFDbkQsdUNBQVcsRUFBRSxrQ0FBa0M7QUFDL0MsOENBQWtCLEVBQUUsS0FBSzt5QkFDeEIsQ0FBQTtxQkFDSjs7OzsyQkFFa0MsaUJBQU07QUFDdkMsK0JBQU87QUFDTCxvQ0FBUSxFQUFFLENBQ1I7QUFDSSw2Q0FBYSxFQUFFLEVBQUU7QUFDakIsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsOENBQWMsRUFBRSxHQUFHO0FBQ25CLG9DQUFJLEVBQUUsR0FBRztBQUNULDhDQUFjLEVBQUUsQ0FBQztBQUNqQixzQ0FBTSxFQUFFLGVBQWU7NkJBQzFCLEVBQ0Q7QUFDSSw2Q0FBYSxFQUFFLEVBQUU7QUFDakIsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsOENBQWMsRUFBRSxHQUFHO0FBQ25CLG9DQUFJLEVBQUUsR0FBRztBQUNULDhDQUFjLEVBQUUsQ0FBQztBQUNqQixzQ0FBTSxFQUFFLGNBQWM7NkJBQ3pCLEVBQ0Q7QUFDSSw2Q0FBYSxFQUFFLEVBQUU7QUFDakIsNENBQVksRUFBRSw2QkFBNkI7QUFDM0MsOENBQWMsRUFBRSxHQUFHO0FBQ25CLG9DQUFJLEVBQUUsR0FBRztBQUNULDhDQUFjLEVBQUUsQ0FBQztBQUNqQixzQ0FBTSxFQUFFLGdCQUFnQjs2QkFDM0IsRUFDRDtBQUNJLDZDQUFhLEVBQUUsRUFBRTtBQUNqQiw0Q0FBWSxFQUFFLDZCQUE2QjtBQUMzQyw4Q0FBYyxFQUFFLEdBQUc7QUFDbkIsb0NBQUksRUFBRSxHQUFHO0FBQ1QsOENBQWMsRUFBRSxDQUFDO0FBQ2pCLHNDQUFNLEVBQUUsZ0JBQWdCOzZCQUMzQixFQUNEO0FBQ0ksNkNBQWEsRUFBRSxFQUFFO0FBQ2pCLDRDQUFZLEVBQUUsNkJBQTZCO0FBQzNDLDhDQUFjLEVBQUUsR0FBRztBQUNuQixvQ0FBSSxFQUFFLEdBQUc7QUFDVCw4Q0FBYyxFQUFFLENBQUM7QUFDakIsc0NBQU0sRUFBRSxrQkFBa0I7NkJBQzdCLENBQ0Y7QUFDRCwyQ0FBZSxFQUFFLGtDQUFrQztBQUNuRCx1Q0FBVyxFQUFFLGtDQUFrQztBQUMvQyw4Q0FBa0IsRUFBRSxLQUFLO3lCQUMxQixDQUFBO3FCQUNGOzs7OzJCQUVrQjtBQUNmLGdDQUFRLEVBQUUsQ0FDTjtBQUNJLHlDQUFhLEVBQUUsU0FBUztBQUN4Qix3Q0FBWSxFQUFFLDZCQUE2QjtBQUMzQywwQ0FBYyxFQUFFLEdBQUc7QUFDbkIsZ0NBQUksRUFBRSxJQUFJO0FBQ1Ysd0NBQVksRUFBRSw2QkFBNkI7QUFDM0MsMENBQWMsRUFBRSxHQUFHO0FBQ25CLGtDQUFNLEVBQUUsU0FBUzt5QkFDcEIsRUFDRDtBQUNJLHlDQUFhLEVBQUUsV0FBVztBQUMxQix3Q0FBWSxFQUFFLDZCQUE2QjtBQUMzQywwQ0FBYyxFQUFFLEdBQUc7QUFDbkIsZ0NBQUksRUFBRSxJQUFJO0FBQ1Ysd0NBQVksRUFBRSw2QkFBNkI7QUFDM0MsMENBQWMsRUFBRSxHQUFHO0FBQ25CLGtDQUFNLEVBQUUsV0FBVzt5QkFDdEIsRUFDRDtBQUNJLHlDQUFhLEVBQUUsT0FBTztBQUN0Qix3Q0FBWSxFQUFFLDZCQUE2QjtBQUMzQywwQ0FBYyxFQUFFLEdBQUc7QUFDbkIsZ0NBQUksRUFBRSxJQUFJO0FBQ1Ysd0NBQVksRUFBRSw2QkFBNkI7QUFDM0MsMENBQWMsRUFBRSxHQUFHO0FBQ25CLGtDQUFNLEVBQUUsT0FBTzt5QkFDbEIsQ0FDSjtBQUNELHVDQUFlLEVBQUUsa0NBQWtDO0FBQ25ELG1DQUFXLEVBQUUsa0NBQWtDO0FBQy9DLDBDQUFrQixFQUFFLEtBQUs7cUJBQzVCOzs7OzJCQUVnQyxpQkFBTTtBQUNyQywrQkFBTyxhQUFhLENBQUMsU0FBUyxDQUFDO3FCQUNoQzs7OzsyQkFFa0MsZUFBQyxRQUFRLEVBQUs7QUFDL0MsZ0NBQVEsQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25FLHFDQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsK0JBQU8sYUFBYSxDQUFDLFNBQVMsQ0FBQztxQkFDaEM7Ozs7MkJBRWUsZUFBQyxXQUFXLEVBQUs7QUFDL0IsNEJBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQUMsSUFBSTttQ0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt5QkFBQSxDQUFDLENBQUM7QUFDcEUsK0JBQU8sYUFBYSxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUM7cUJBQzFFOzs7O3VCQXpwQlUsYUFBYSIsImZpbGUiOiJzYW1wbGUtYXBwLWRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwidW5kZXJzY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgU2FtcGxlQXBwRGF0YSB7XG4gIHN0YXRpYyBnZXRHZW5lcmF0ZUV4cG9ydFJlc3BvbnNlID0gKGV4cG9ydEZvcm1hdCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgICBcIkRvd25sb2FkVXJsXCI6IGV4cG9ydEZvcm1hdCA9PSBcIkV4Y2VsXCIgPyBcIi9zYW1wbGUtZGF0YS9pbXNpLWV4cG9ydC0zZDg0YmZmZC1lNmE1LTRhYzQtOGE0OS03ZjcwZTUwM2NjY2EueGxzeFwiIDogXCIvc2FtcGxlLWRhdGEvaW1zaS1leHBvcnQtNTE2NmUyYTEtYWFhZC00N2ZjLThlNWYtYWYwN2IyYWY0MDZlLnNsZFwiLFxuICAgICAgICAgXCJUcmFuc2FjdGlvbklkXCI6IFwiMzgyMzM5NTM1MGY0NGVhZDhmZTQ2M2Y4NmE2OWFkMzFcIixcbiAgICAgICAgIFwiU2Vzc2lvbklkXCI6IFwiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIixcbiAgICAgICAgIFwiSGFzRXJyb3JPY2N1cnJlZFwiOiBmYWxzZVxuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgZ2V0SW1zaUFuYWx5c2lzU3VtbWFyeVJlc3BvbnNlID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgXCJJbXNpSGlzdG9yeVJlY29yZHNcIjogW1xuICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBcIkFjdGlvblwiOiBcIkltcG9ydCAoRXhwaXJlZClcIixcbiAgICAgICAgICAgICAgIFwiQ3JlYXRlVGltZVwiOiBcIjIwMTUtMTAtMzBUMTM6MDA6MDUuMTk2MzM0M1wiLFxuICAgICAgICAgICAgICAgXCJJbXNpU3RhdHVzXCI6IFwiSW5pdGlhbCBJbXBvcnRcIixcbiAgICAgICAgICAgICAgIFwiSXNJbkhsckFsbFwiOiBcIklOIEhMUkFMTFwiLFxuICAgICAgICAgICAgICAgXCJXb3JrZmxvd1wiOiBcIlNJTSBDYXJkIFByb3Zpc2lvbmluZ1wiLFxuICAgICAgICAgICAgICAgXCJUcmFja2luZ1N0YXR1c1wiOiBcIkZpbmFsaXplIExURSBQT1AgUHJvdmlzaW9uaW5nXCIsXG4gICAgICAgICAgICAgICBcIlByb3Zpc2lvbmVkTWRuXCI6IFwiNzAzNDQ5ODc0NVwiLFxuICAgICAgICAgICAgICAgXCJQZW5kaW5nTWRuXCI6IFwiXCIsXG4gICAgICAgICAgICAgICBcIklzUHJvdmlzaW9uaW5nT25Ib2xkXCI6IFwiTk9cIixcbiAgICAgICAgICAgICAgIFwiVGFyZ2V0U3BlY1wiOiBcIlRBUi0xICAgICBcIixcbiAgICAgICAgICAgICAgIFwiVXNlcm5hbWVcIjogXCJKb25lcywgSWxsaW5vaXNcIlxuICAgICAgICAgICB9LFxuICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBcIkFjdGlvblwiOiBcIlN0YXR1cyBDaGFuZ2VkXCIsXG4gICAgICAgICAgICAgICBcIkNyZWF0ZVRpbWVcIjogXCIyMDE1LTEwLTMwVDEzOjAwOjA2LjQ3MTQ2MThcIixcbiAgICAgICAgICAgICAgIFwiSW1zaVN0YXR1c1wiOiBcIlJlcHJvY2Vzc1wiLFxuICAgICAgICAgICAgICAgXCJJc0luSGxyQWxsXCI6IFwiSU4gSExSQUxMXCIsXG4gICAgICAgICAgICAgICBcIldvcmtmbG93XCI6IFwiU0lNIENhcmQgUHJvdmlzaW9uaW5nXCIsXG4gICAgICAgICAgICAgICBcIlRyYWNraW5nU3RhdHVzXCI6IFwiRmluYWxpemUgTFRFIFBPUCBQcm92aXNpb25pbmdcIixcbiAgICAgICAgICAgICAgIFwiUHJvdmlzaW9uZWRNZG5cIjogXCI3MDM0NDk4NzQ1XCIsXG4gICAgICAgICAgICAgICBcIlBlbmRpbmdNZG5cIjogXCJcIixcbiAgICAgICAgICAgICAgIFwiSXNQcm92aXNpb25pbmdPbkhvbGRcIjogXCJOT1wiLFxuICAgICAgICAgICAgICAgXCJUYXJnZXRTcGVjXCI6IFwiVEFSLTEgICAgIFwiLFxuICAgICAgICAgICAgICAgXCJVc2VybmFtZVwiOiBcIkpvbmVzLCBJbGxpbm9pc1wiXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIFwiQWN0aW9uXCI6IFwiRXhwb3J0ZWRcIixcbiAgICAgICAgICAgICAgIFwiQ3JlYXRlVGltZVwiOiBcIjIwMTUtMTAtMzBUMTM6MTM6MzcuOTQ2NjAxMlwiLFxuICAgICAgICAgICAgICAgXCJJbXNpU3RhdHVzXCI6IFwiUmVwcm9jZXNzXCIsXG4gICAgICAgICAgICAgICBcIklzSW5IbHJBbGxcIjogXCJOL0FcIixcbiAgICAgICAgICAgICAgIFwiV29ya2Zsb3dcIjogXCJTSU0gQ2FyZCBQcm92aXNpb25pbmdcIixcbiAgICAgICAgICAgICAgIFwiVHJhY2tpbmdTdGF0dXNcIjogXCJGaW5hbGl6ZSBMVEUgUE9QIFByb3Zpc2lvbmluZ1wiLFxuICAgICAgICAgICAgICAgXCJQcm92aXNpb25lZE1kblwiOiBcIk4vQVwiLFxuICAgICAgICAgICAgICAgXCJQZW5kaW5nTWRuXCI6IFwiTi9BXCIsXG4gICAgICAgICAgICAgICBcIklzUHJvdmlzaW9uaW5nT25Ib2xkXCI6IFwiTi9BXCIsXG4gICAgICAgICAgICAgICBcIlRhcmdldFNwZWNcIjogXCJUQVItMSAgICAgXCIsXG4gICAgICAgICAgICAgICBcIlVzZXJuYW1lXCI6IFwiSm9uZXMsIElsbGlub2lzXCJcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAge1xuICAgICAgICAgICAgICAgXCJBY3Rpb25cIjogXCJFeHBvcnRlZFwiLFxuICAgICAgICAgICAgICAgXCJDcmVhdGVUaW1lXCI6IFwiMjAxNS0xMC0zMFQxMzoxNzoxMy4xMzcxMTgxXCIsXG4gICAgICAgICAgICAgICBcIkltc2lTdGF0dXNcIjogXCJSZXByb2Nlc3NcIixcbiAgICAgICAgICAgICAgIFwiSXNJbkhsckFsbFwiOiBcIk4vQVwiLFxuICAgICAgICAgICAgICAgXCJXb3JrZmxvd1wiOiBcIlNJTSBDYXJkIFByb3Zpc2lvbmluZ1wiLFxuICAgICAgICAgICAgICAgXCJUcmFja2luZ1N0YXR1c1wiOiBcIkZpbmFsaXplIExURSBQT1AgUHJvdmlzaW9uaW5nXCIsXG4gICAgICAgICAgICAgICBcIlByb3Zpc2lvbmVkTWRuXCI6IFwiTi9BXCIsXG4gICAgICAgICAgICAgICBcIlBlbmRpbmdNZG5cIjogXCJOL0FcIixcbiAgICAgICAgICAgICAgIFwiSXNQcm92aXNpb25pbmdPbkhvbGRcIjogXCJOL0FcIixcbiAgICAgICAgICAgICAgIFwiVGFyZ2V0U3BlY1wiOiBcIlRBUi0xICAgICBcIixcbiAgICAgICAgICAgICAgIFwiVXNlcm5hbWVcIjogXCJKb25lcywgSWxsaW5vaXNcIlxuICAgICAgICAgICB9LFxuICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBcIkFjdGlvblwiOiBcIkV4cG9ydGVkXCIsXG4gICAgICAgICAgICAgICBcIkNyZWF0ZVRpbWVcIjogXCIyMDE1LTEwLTMwVDEzOjI0OjQ0Ljg1MzI4NTJcIixcbiAgICAgICAgICAgICAgIFwiSW1zaVN0YXR1c1wiOiBcIlJlcHJvY2Vzc1wiLFxuICAgICAgICAgICAgICAgXCJJc0luSGxyQWxsXCI6IFwiTi9BXCIsXG4gICAgICAgICAgICAgICBcIldvcmtmbG93XCI6IFwiU0lNIENhcmQgUHJvdmlzaW9uaW5nXCIsXG4gICAgICAgICAgICAgICBcIlRyYWNraW5nU3RhdHVzXCI6IFwiRmluYWxpemUgTFRFIFBPUCBQcm92aXNpb25pbmdcIixcbiAgICAgICAgICAgICAgIFwiUHJvdmlzaW9uZWRNZG5cIjogXCJOL0FcIixcbiAgICAgICAgICAgICAgIFwiUGVuZGluZ01kblwiOiBcIk4vQVwiLFxuICAgICAgICAgICAgICAgXCJJc1Byb3Zpc2lvbmluZ09uSG9sZFwiOiBcIk4vQVwiLFxuICAgICAgICAgICAgICAgXCJUYXJnZXRTcGVjXCI6IFwiVEFSLTEgICAgIFwiLFxuICAgICAgICAgICAgICAgXCJVc2VybmFtZVwiOiBcIlNtaXRoLCBBbmdlbGFcIlxuICAgICAgICAgICB9LFxuICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBcIkFjdGlvblwiOiBcIkV4cG9ydGVkXCIsXG4gICAgICAgICAgICAgICBcIkNyZWF0ZVRpbWVcIjogXCIyMDE1LTExLTAzVDE0OjI2OjEzLjA5ODEwNzVcIixcbiAgICAgICAgICAgICAgIFwiSW1zaVN0YXR1c1wiOiBcIlJlcHJvY2Vzc1wiLFxuICAgICAgICAgICAgICAgXCJJc0luSGxyQWxsXCI6IFwiTi9BXCIsXG4gICAgICAgICAgICAgICBcIldvcmtmbG93XCI6IFwiU0lNIENhcmQgUHJvdmlzaW9uaW5nXCIsXG4gICAgICAgICAgICAgICBcIlRyYWNraW5nU3RhdHVzXCI6IFwiRmluYWxpemUgTFRFIFBPUCBQcm92aXNpb25pbmdcIixcbiAgICAgICAgICAgICAgIFwiUHJvdmlzaW9uZWRNZG5cIjogXCJOL0FcIixcbiAgICAgICAgICAgICAgIFwiUGVuZGluZ01kblwiOiBcIk4vQVwiLFxuICAgICAgICAgICAgICAgXCJJc1Byb3Zpc2lvbmluZ09uSG9sZFwiOiBcIk4vQVwiLFxuICAgICAgICAgICAgICAgXCJUYXJnZXRTcGVjXCI6IFwiVEFSLTEgICAgIFwiXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIFwiQWN0aW9uXCI6IFwiRXhwb3J0ZWRcIixcbiAgICAgICAgICAgICAgIFwiQ3JlYXRlVGltZVwiOiBcIjIwMTUtMTEtMDNUMTQ6MzA6MjQuMjEyMjE2NFwiLFxuICAgICAgICAgICAgICAgXCJJbXNpU3RhdHVzXCI6IFwiUmVwcm9jZXNzXCIsXG4gICAgICAgICAgICAgICBcIklzSW5IbHJBbGxcIjogXCJOL0FcIixcbiAgICAgICAgICAgICAgIFwiV29ya2Zsb3dcIjogXCJTSU0gQ2FyZCBQcm92aXNpb25pbmdcIixcbiAgICAgICAgICAgICAgIFwiVHJhY2tpbmdTdGF0dXNcIjogXCJGaW5hbGl6ZSBMVEUgUE9QIFByb3Zpc2lvbmluZ1wiLFxuICAgICAgICAgICAgICAgXCJQcm92aXNpb25lZE1kblwiOiBcIk4vQVwiLFxuICAgICAgICAgICAgICAgXCJQZW5kaW5nTWRuXCI6IFwiTi9BXCIsXG4gICAgICAgICAgICAgICBcIklzUHJvdmlzaW9uaW5nT25Ib2xkXCI6IFwiTi9BXCIsXG4gICAgICAgICAgICAgICBcIlRhcmdldFNwZWNcIjogXCJUQVItMSAgICAgXCJcbiAgICAgICAgICAgfVxuICAgICAgIF0sXG4gICAgICAgXCJTZXJpYWxOdW1iZXJIaXN0b3J5UmVjb3Jkc1wiOiBbXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIFwiVXNlcm5hbWVcIjogXCJKT05BVEhBTiBTQ0hXQVJUWlwiLFxuICAgICAgICAgICAgICAgXCJNb2RpZnlUaW1lXCI6IFwiMjAxMy0wOC0xM1QxMDo1OTo0OS43MjcwMDAwXCIsXG4gICAgICAgICAgICAgICBcIldvcmtmbG93XCI6IFwiUHJvY2VzcyBTSU0gQ2FyZCBSZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICBcIlRyYWNraW5nU3RhdHVzXCI6IFwiU2VuZCBSZXF1ZXN0IHRvIFZlbmRvclwiLFxuICAgICAgICAgICAgICAgXCJQcm92aXNpb25lZE1kblwiOiBcIlwiLFxuICAgICAgICAgICAgICAgXCJQZW5kaW5nTWRuXCI6IFwiXCIsXG4gICAgICAgICAgICAgICBcIklzUHJvdmlzaW9uaW5nT25Ib2xkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgXCJNb3N0UmVjZW50RGV2aWNlRGlzY292ZXJ5UHJvZHVjdERlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgICAgICAgICBcIk1vc3RSZWNlbnREZXZpY2VEaXNjb3ZlcnlIZXhTZXJpYWxOdW1iZXJcIjogXCJcIixcbiAgICAgICAgICAgICAgIFwiTW9zdFJlY2VudERldmljZURpc2NvdmVyeURlY1NlcmlhbE51bWJlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgXCJVc2FnZVwiOiBcIklNU0kgZm9yIFByb2R1Y3Rpb25cIlxuICAgICAgICAgICB9LFxuICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBcIlVzZXJuYW1lXCI6IFwiSk9ITk5ZIFRIVVJTREFZXCIsXG4gICAgICAgICAgICAgICBcIk1vZGlmeVRpbWVcIjogXCIyMDEzLTA5LTA3VDE0OjM2OjUzLjE2MDAwMDBcIixcbiAgICAgICAgICAgICAgIFwiV29ya2Zsb3dcIjogXCJQcm9jZXNzIFNJTSBDYXJkIFJlcXVlc3RcIixcbiAgICAgICAgICAgICAgIFwiVHJhY2tpbmdTdGF0dXNcIjogXCJSZWNlaXZlZCBTaGlwIE5vdGlmaWNhdGlvbiBmcm9tIFZlbmRvclwiLFxuICAgICAgICAgICAgICAgXCJQcm92aXNpb25lZE1kblwiOiBcIlwiLFxuICAgICAgICAgICAgICAgXCJQZW5kaW5nTWRuXCI6IFwiXCIsXG4gICAgICAgICAgICAgICBcIklzUHJvdmlzaW9uaW5nT25Ib2xkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgXCJNb3N0UmVjZW50RGV2aWNlRGlzY292ZXJ5UHJvZHVjdERlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgICAgICAgICBcIk1vc3RSZWNlbnREZXZpY2VEaXNjb3ZlcnlIZXhTZXJpYWxOdW1iZXJcIjogXCJcIixcbiAgICAgICAgICAgICAgIFwiTW9zdFJlY2VudERldmljZURpc2NvdmVyeURlY1NlcmlhbE51bWJlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgXCJVc2FnZVwiOiBcIklNU0kgZm9yIFByb2R1Y3Rpb25cIlxuICAgICAgICAgICB9LFxuICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBcIlVzZXJuYW1lXCI6IFwiQkFSVEhPTE9NRVcgU1RJTExFUlwiLFxuICAgICAgICAgICAgICAgXCJNb2RpZnlUaW1lXCI6IFwiMjAxMy0wOS0xMlQxMTo0NDowOS43MTAwMDAwXCIsXG4gICAgICAgICAgICAgICBcIldvcmtmbG93XCI6IFwiUHJvY2VzcyBTSU0gQ2FyZCBTaGlwbWVudFwiLFxuICAgICAgICAgICAgICAgXCJUcmFja2luZ1N0YXR1c1wiOiBcIlJlY2VpdmVkIEZyb20gRyZEXCIsXG4gICAgICAgICAgICAgICBcIlByb3Zpc2lvbmVkTWRuXCI6IFwiXCIsXG4gICAgICAgICAgICAgICBcIlBlbmRpbmdNZG5cIjogXCJcIixcbiAgICAgICAgICAgICAgIFwiSXNQcm92aXNpb25pbmdPbkhvbGRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICBcIk1vc3RSZWNlbnREZXZpY2VEaXNjb3ZlcnlQcm9kdWN0RGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgICAgICAgIFwiTW9zdFJlY2VudERldmljZURpc2NvdmVyeUhleFNlcmlhbE51bWJlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgXCJNb3N0UmVjZW50RGV2aWNlRGlzY292ZXJ5RGVjU2VyaWFsTnVtYmVyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICBcIlVzYWdlXCI6IFwiSU1TSSBmb3IgUHJvZHVjdGlvblwiXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIFwiVXNlcm5hbWVcIjogXCJCQVJUSE9MT01FVyBTVElMTEVSXCIsXG4gICAgICAgICAgICAgICBcIk1vZGlmeVRpbWVcIjogXCIyMDE0LTAxLTEzVDExOjE4OjIzLjk2NzAwMDBcIixcbiAgICAgICAgICAgICAgIFwiV29ya2Zsb3dcIjogXCJQcm9jZXNzIFNJTSBDYXJkIFNoaXBtZW50XCIsXG4gICAgICAgICAgICAgICBcIlRyYWNraW5nU3RhdHVzXCI6IFwiU2hpcCBPdXQgdG8gUmV0YWlsIExvY2F0aW9uXCIsXG4gICAgICAgICAgICAgICBcIlByb3Zpc2lvbmVkTWRuXCI6IFwiXCIsXG4gICAgICAgICAgICAgICBcIlBlbmRpbmdNZG5cIjogXCJcIixcbiAgICAgICAgICAgICAgIFwiSXNQcm92aXNpb25pbmdPbkhvbGRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICBcIk1vc3RSZWNlbnREZXZpY2VEaXNjb3ZlcnlQcm9kdWN0RGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgICAgICAgIFwiTW9zdFJlY2VudERldmljZURpc2NvdmVyeUhleFNlcmlhbE51bWJlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgXCJNb3N0UmVjZW50RGV2aWNlRGlzY292ZXJ5RGVjU2VyaWFsTnVtYmVyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICBcIlVzYWdlXCI6IFwiSU1TSSBmb3IgUHJvZHVjdGlvblwiXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIFwiVXNlcm5hbWVcIjogXCJUQyBNZWRpYXRpb25cIixcbiAgICAgICAgICAgICAgIFwiTW9kaWZ5VGltZVwiOiBcIjIwMTQtMDEtMTZUMTk6NDk6NTQuMzUzMDAwMFwiLFxuICAgICAgICAgICAgICAgXCJXb3JrZmxvd1wiOiBcIlNJTSBDYXJkIERldmljZSBDaGFuZ2VcIixcbiAgICAgICAgICAgICAgIFwiVHJhY2tpbmdTdGF0dXNcIjogXCJEZXZpY2UgRGlzY292ZXJ5IExvZ2dpbmdcIixcbiAgICAgICAgICAgICAgIFwiUHJvdmlzaW9uZWRNZG5cIjogXCJcIixcbiAgICAgICAgICAgICAgIFwiUGVuZGluZ01kblwiOiBcIlwiLFxuICAgICAgICAgICAgICAgXCJJc1Byb3Zpc2lvbmluZ09uSG9sZFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgIFwiTW9zdFJlY2VudERldmljZURpc2NvdmVyeVByb2R1Y3REZXNjcmlwdGlvblwiOiBcIk1vdG9yb2xhIE1PVE8gWCBXaGl0ZVwiLFxuICAgICAgICAgICAgICAgXCJNb3N0UmVjZW50RGV2aWNlRGlzY292ZXJ5RGF0ZVwiOiBcIjIwMTQtMDEtMTZUMTk6NDk6NDMuMDAwMDAwMFwiLFxuICAgICAgICAgICAgICAgXCJNb3N0UmVjZW50RGV2aWNlRGlzY292ZXJ5SGV4U2VyaWFsTnVtYmVyXCI6IFwiNDM3NjQyOTMzMTI2ODJcIixcbiAgICAgICAgICAgICAgIFwiTW9zdFJlY2VudERldmljZURpc2NvdmVyeURlY1NlcmlhbE51bWJlclwiOiBcIjM3MzM0MTQ3MDcwMzIyMTEyMlwiLFxuICAgICAgICAgICAgICAgXCJNb3N0UmVjZW50RGV2aWNlRGlzY292ZXJ5V2FyZWhvdXNlU2t1XCI6IDIyNjAyOSxcbiAgICAgICAgICAgICAgIFwiVXNhZ2VcIjogXCJJTVNJIGZvciBQcm9kdWN0aW9uXCJcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAge1xuICAgICAgICAgICAgICAgXCJVc2VybmFtZVwiOiBcIlRDIE1lZGlhdGlvblwiLFxuICAgICAgICAgICAgICAgXCJNb2RpZnlUaW1lXCI6IFwiMjAxNC0wMS0xNlQxOTo1MDoyNS4zMDcwMDAwXCIsXG4gICAgICAgICAgICAgICBcIldvcmtmbG93XCI6IFwiU0lNIENhcmQgUHJvdmlzaW9uaW5nXCIsXG4gICAgICAgICAgICAgICBcIlRyYWNraW5nU3RhdHVzXCI6IFwiRmluYWxpemUgTFRFIFBPUCBQcm92aXNpb25pbmdcIixcbiAgICAgICAgICAgICAgIFwiUHJvdmlzaW9uZWRNZG5cIjogXCI3MDM0NDk4NzQ1XCIsXG4gICAgICAgICAgICAgICBcIlBlbmRpbmdNZG5cIjogXCJcIixcbiAgICAgICAgICAgICAgIFwiSXNQcm92aXNpb25pbmdPbkhvbGRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICBcIk1vc3RSZWNlbnREZXZpY2VEaXNjb3ZlcnlQcm9kdWN0RGVzY3JpcHRpb25cIjogXCJNb3Rvcm9sYSBNT1RPIFggV2hpdGVcIixcbiAgICAgICAgICAgICAgIFwiTW9zdFJlY2VudERldmljZURpc2NvdmVyeURhdGVcIjogXCIyMDE0LTAxLTE2VDE5OjQ5OjQzLjAwMDAwMDBcIixcbiAgICAgICAgICAgICAgIFwiTW9zdFJlY2VudERldmljZURpc2NvdmVyeUhleFNlcmlhbE51bWJlclwiOiBcIjQzNzY0MjkzMzEyNjgyXCIsXG4gICAgICAgICAgICAgICBcIk1vc3RSZWNlbnREZXZpY2VEaXNjb3ZlcnlEZWNTZXJpYWxOdW1iZXJcIjogXCIzNzMzNDE0NzA3MDMyMjExMjJcIixcbiAgICAgICAgICAgICAgIFwiTW9zdFJlY2VudERldmljZURpc2NvdmVyeVdhcmVob3VzZVNrdVwiOiAyMjYwMjksXG4gICAgICAgICAgICAgICBcIlVzYWdlXCI6IFwiSU1TSSBmb3IgUHJvZHVjdGlvblwiXG4gICAgICAgICAgIH1cbiAgICAgICBdLFxuICAgICAgIFwiVHJhbnNhY3Rpb25JZFwiOiBcIjljY2ZjMjFkNmFjZDQ3NTE4YzkyOGM2Zjk0ZTE0OWI3XCIsXG4gICAgICAgXCJTZXNzaW9uSWRcIjogXCIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFxuICAgICAgIFwiSGFzRXJyb3JPY2N1cnJlZFwiOiBmYWxzZVxuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgZ2V0RmV0Y2hIbHJhbGxTdGF0dXNSZXNwb25zZSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgSXNJbkhybEFsbDogdHJ1ZSxcbiAgICAgIFRyYW5zYWN0aW9uSWQ6IFwiMWZmNzA3M2FmOWZiNGQ5NDhjZjZiYWYxZGU0MzNkYjFcIixcbiAgICAgIFNlc3Npb25JZDogXCIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFxuICAgICAgSGFzRXJyb3JPY2N1cnJlZDogZmFsc2VcbiAgICAgIH1cbiAgfTtcblxuICBzdGF0aWMgZ2V0RXhwb3J0TGlzdFJlc3BvbnNlID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBcIlZhbHVlc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIkRlc2NyaXB0aW9uXCI6IFwiQXJsaW5ndG9uIFJlcHJvY2VzcyAjN1wiLFxuICAgICAgICAgICAgICBcIkZvcm1hdFZlcnNpb25cIjogXCIxLjNcIixcbiAgICAgICAgICAgICAgXCJXdHNGb3JtYXRWZXJzaW9uXCI6IFwiMS4zXCIsXG4gICAgICAgICAgICAgIFwiRmlsZUlkZW50aWZpZXJcIjogXCJGaWxlLTcgICAgXCIsXG4gICAgICAgICAgICAgIFwiQXV0aG9yXCI6IFwiQXV0aG9yICM3XCIsXG4gICAgICAgICAgICAgIFwiQ2hlY2tlclwiOiBcIkNoZWNrZXIgIzdcIixcbiAgICAgICAgICAgICAgXCJBdXRob3Jpc2VyXCI6IFwiQXV0aG9yaXplciAjN1wiLFxuICAgICAgICAgICAgICBcIlRhcmdldFNwZWNcIjogXCJUQVItNyAgICAgXCIsXG4gICAgICAgICAgICAgIFwiRmlsZURhdGVcIjogXCIxMC83MjAxNVwiLFxuICAgICAgICAgICAgICBcIkltc2lDb3VudFwiOiA1MDAwMCxcbiAgICAgICAgICAgICAgXCJDcmVhdGVVc2VyRnVsbE5hbWVcIjogXCJKb2hubnkgVGh1cnNkYXlcIixcbiAgICAgICAgICAgICAgXCJDcmVhdGVUaW1lXCI6IFwiMjAxNS0xMC0zMFQxMzoxMDozMS44ODk5OTc0XCIsXG4gICAgICAgICAgICAgIFwiQ3JlYXRlVXNlcklkXCI6IDEwMixcbiAgICAgICAgICAgICAgXCJJZFwiOiBcIjQxN1wiLFxuICAgICAgICAgICAgICBcIk1vZGlmeVRpbWVcIjogXCIyMDE1LTEwLTMwVDEzOjEwOjMxLjg4OTk5NzRcIixcbiAgICAgICAgICAgICAgXCJNb2RpZnlVc2VySWRcIjogMTAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiRGVzY3JpcHRpb25cIjogXCJGYWlyZmF4IFJlcHJvY2VzcyAjMlwiLFxuICAgICAgICAgICAgICBcIkZvcm1hdFZlcnNpb25cIjogXCIxLjNcIixcbiAgICAgICAgICAgICAgXCJXdHNGb3JtYXRWZXJzaW9uXCI6IFwiMS4zXCIsXG4gICAgICAgICAgICAgIFwiRmlsZUlkZW50aWZpZXJcIjogXCJGaWxlLTIgICAgXCIsXG4gICAgICAgICAgICAgIFwiQXV0aG9yXCI6IFwiQXV0aG9yICMyXCIsXG4gICAgICAgICAgICAgIFwiQ2hlY2tlclwiOiBcIkNoZWNrZXIgIzJcIixcbiAgICAgICAgICAgICAgXCJBdXRob3Jpc2VyXCI6IFwiQXV0aG9yaXplciAjMlwiLFxuICAgICAgICAgICAgICBcIlRhcmdldFNwZWNcIjogXCJUQVItMiAgICAgXCIsXG4gICAgICAgICAgICAgIFwiRmlsZURhdGVcIjogXCIxMC8yMjAxNVwiLFxuICAgICAgICAgICAgICBcIkltc2lDb3VudFwiOiA1MDAwMCxcbiAgICAgICAgICAgICAgXCJDcmVhdGVVc2VyRnVsbE5hbWVcIjogXCJBbmdlbGEgU21pdGhcIixcbiAgICAgICAgICAgICAgXCJDcmVhdGVUaW1lXCI6IFwiMjAxNS0xMC0zMFQxMzoxMjoyMS4wNTE5MTI1XCIsXG4gICAgICAgICAgICAgIFwiQ3JlYXRlVXNlcklkXCI6IDEwMSxcbiAgICAgICAgICAgICAgXCJJZFwiOiBcIjQxOFwiLFxuICAgICAgICAgICAgICBcIk1vZGlmeVRpbWVcIjogXCIyMDE1LTEwLTMwVDEzOjEyOjIxLjA1MTkxMjVcIixcbiAgICAgICAgICAgICAgXCJNb2RpZnlVc2VySWRcIjogMTAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiRm9ybWF0VmVyc2lvblwiOiBcIjAxLjAzXCIsXG4gICAgICAgICAgICAgIFwiV3RzRm9ybWF0VmVyc2lvblwiOiBcIjAxLjAzXCIsXG4gICAgICAgICAgICAgIFwiSW1zaUNvdW50XCI6IDExMjMxNyxcbiAgICAgICAgICAgICAgXCJDcmVhdGVVc2VyRnVsbE5hbWVcIjogXCJJbGxpbm9pcyBKb25lc1wiLFxuICAgICAgICAgICAgICBcIkNyZWF0ZVRpbWVcIjogXCIyMDE1LTEwLTMwVDEzOjEzOjI2LjUyMzQ1OTBcIixcbiAgICAgICAgICAgICAgXCJDcmVhdGVVc2VySWRcIjogMTAwLFxuICAgICAgICAgICAgICBcIklkXCI6IFwiNDE5XCIsXG4gICAgICAgICAgICAgIFwiTW9kaWZ5VGltZVwiOiBcIjIwMTUtMTAtMzBUMTM6MTM6MjYuNTIzNDU5MFwiLFxuICAgICAgICAgICAgICBcIk1vZGlmeVVzZXJJZFwiOiAxMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJGb3JtYXRWZXJzaW9uXCI6IFwiMDEuMDNcIixcbiAgICAgICAgICAgICAgXCJXdHNGb3JtYXRWZXJzaW9uXCI6IFwiMDEuMDNcIixcbiAgICAgICAgICAgICAgXCJJbXNpQ291bnRcIjogMjI0NTcsXG4gICAgICAgICAgICAgIFwiQ3JlYXRlVXNlckZ1bGxOYW1lXCI6IFwiSWxsaW5vaXMgSm9uZXNcIixcbiAgICAgICAgICAgICAgXCJDcmVhdGVUaW1lXCI6IFwiMjAxNS0xMC0zMFQxMzoxNDowNC4zOTAyNDUzXCIsXG4gICAgICAgICAgICAgIFwiQ3JlYXRlVXNlcklkXCI6IDEwMCxcbiAgICAgICAgICAgICAgXCJJZFwiOiBcIjQyMFwiLFxuICAgICAgICAgICAgICBcIk1vZGlmeVRpbWVcIjogXCIyMDE1LTEwLTMwVDEzOjE0OjA0LjM5MDI0NTNcIixcbiAgICAgICAgICAgICAgXCJNb2RpZnlVc2VySWRcIjogMTAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiRGVzY3JpcHRpb25cIjogXCJGYXJnbyBSZXByb2Nlc3MgIzhcIixcbiAgICAgICAgICAgICAgXCJGb3JtYXRWZXJzaW9uXCI6IFwiMS4zXCIsXG4gICAgICAgICAgICAgIFwiV3RzRm9ybWF0VmVyc2lvblwiOiBcIjEuM1wiLFxuICAgICAgICAgICAgICBcIkZpbGVJZGVudGlmaWVyXCI6IFwiRmlsZS04ICAgIFwiLFxuICAgICAgICAgICAgICBcIkF1dGhvclwiOiBcIkF1dGhvciAjOFwiLFxuICAgICAgICAgICAgICBcIkNoZWNrZXJcIjogXCJDaGVja2VyICM4XCIsXG4gICAgICAgICAgICAgIFwiQXV0aG9yaXNlclwiOiBcIkF1dGhvcml6ZXIgIzhcIixcbiAgICAgICAgICAgICAgXCJUYXJnZXRTcGVjXCI6IFwiVEFSLTggICAgIFwiLFxuICAgICAgICAgICAgICBcIkZpbGVEYXRlXCI6IFwiMTAvODIwMTVcIixcbiAgICAgICAgICAgICAgXCJJbXNpQ291bnRcIjogNTAwMDAsXG4gICAgICAgICAgICAgIFwiQ3JlYXRlVXNlckZ1bGxOYW1lXCI6IFwiSm9obm55IFRodXJzZGF5XCIsXG4gICAgICAgICAgICAgIFwiQ3JlYXRlVGltZVwiOiBcIjIwMTUtMTAtMzBUMTM6MTU6MjcuNzcyNTgyN1wiLFxuICAgICAgICAgICAgICBcIkNyZWF0ZVVzZXJJZFwiOiAxMDIsXG4gICAgICAgICAgICAgIFwiSWRcIjogXCI0MjFcIixcbiAgICAgICAgICAgICAgXCJNb2RpZnlUaW1lXCI6IFwiMjAxNS0xMC0zMFQxMzoxNToyNy43NzI1ODI3XCIsXG4gICAgICAgICAgICAgIFwiTW9kaWZ5VXNlcklkXCI6IDEwMlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIkZvcm1hdFZlcnNpb25cIjogXCIwMS4wM1wiLFxuICAgICAgICAgICAgICBcIld0c0Zvcm1hdFZlcnNpb25cIjogXCIwMS4wM1wiLFxuICAgICAgICAgICAgICBcIkltc2lDb3VudFwiOiAyMjkwNSxcbiAgICAgICAgICAgICAgXCJDcmVhdGVVc2VyRnVsbE5hbWVcIjogXCJJbGxpbm9pcyBKb25lc1wiLFxuICAgICAgICAgICAgICBcIkNyZWF0ZVRpbWVcIjogXCIyMDE1LTEwLTMwVDEzOjE3OjEwLjM2NDg0MDlcIixcbiAgICAgICAgICAgICAgXCJDcmVhdGVVc2VySWRcIjogMTAwLFxuICAgICAgICAgICAgICBcIklkXCI6IFwiNDIyXCIsXG4gICAgICAgICAgICAgIFwiTW9kaWZ5VGltZVwiOiBcIjIwMTUtMTAtMzBUMTM6MTc6MTAuMzY0ODQwOVwiLFxuICAgICAgICAgICAgICBcIk1vZGlmeVVzZXJJZFwiOiAxMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJEZXNjcmlwdGlvblwiOiBcIkZhcmdvIFJlcHJvY2VzcyAjM1wiLFxuICAgICAgICAgICAgICBcIkZvcm1hdFZlcnNpb25cIjogXCIxLjNcIixcbiAgICAgICAgICAgICAgXCJXdHNGb3JtYXRWZXJzaW9uXCI6IFwiMS4zXCIsXG4gICAgICAgICAgICAgIFwiRmlsZUlkZW50aWZpZXJcIjogXCJGaWxlLTggICAgXCIsXG4gICAgICAgICAgICAgIFwiQXV0aG9yXCI6IFwiQXV0aG9yICM4XCIsXG4gICAgICAgICAgICAgIFwiQ2hlY2tlclwiOiBcIkNoZWNrZXIgIzhcIixcbiAgICAgICAgICAgICAgXCJBdXRob3Jpc2VyXCI6IFwiQXV0aG9yaXplciAjOFwiLFxuICAgICAgICAgICAgICBcIlRhcmdldFNwZWNcIjogXCJUQVItOCAgICAgXCIsXG4gICAgICAgICAgICAgIFwiRmlsZURhdGVcIjogXCIxMC84MjAxNVwiLFxuICAgICAgICAgICAgICBcIkltc2lDb3VudFwiOiA1MDAwMCxcbiAgICAgICAgICAgICAgXCJDcmVhdGVVc2VyRnVsbE5hbWVcIjogXCJJbGxpbm9pcyBKb25lc1wiLFxuICAgICAgICAgICAgICBcIkNyZWF0ZVRpbWVcIjogXCIyMDE1LTEwLTMwVDEzOjE4OjAxLjAzNTkwNzVcIixcbiAgICAgICAgICAgICAgXCJDcmVhdGVVc2VySWRcIjogMTAwLFxuICAgICAgICAgICAgICBcIklkXCI6IFwiNDIzXCIsXG4gICAgICAgICAgICAgIFwiTW9kaWZ5VGltZVwiOiBcIjIwMTUtMTAtMzBUMTM6MTg6MDEuMDM1OTA3NVwiLFxuICAgICAgICAgICAgICBcIk1vZGlmeVVzZXJJZFwiOiAxMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJEZXNjcmlwdGlvblwiOiBcIkJhdGNoICM2XCIsXG4gICAgICAgICAgICAgIFwiRm9ybWF0VmVyc2lvblwiOiBcIjEuM1wiLFxuICAgICAgICAgICAgICBcIld0c0Zvcm1hdFZlcnNpb25cIjogXCIxLjNcIixcbiAgICAgICAgICAgICAgXCJGaWxlSWRlbnRpZmllclwiOiBcIkZpbGUtNiAgICBcIixcbiAgICAgICAgICAgICAgXCJBdXRob3JcIjogXCJBdXRob3IgIzZcIixcbiAgICAgICAgICAgICAgXCJDaGVja2VyXCI6IFwiQ2hlY2tlciAjNlwiLFxuICAgICAgICAgICAgICBcIkF1dGhvcmlzZXJcIjogXCJBdXRob3JpemVyICM2XCIsXG4gICAgICAgICAgICAgIFwiVGFyZ2V0U3BlY1wiOiBcIlRBUi02ICAgICBcIixcbiAgICAgICAgICAgICAgXCJGaWxlRGF0ZVwiOiBcIjEwLzYyMDE1XCIsXG4gICAgICAgICAgICAgIFwiSW1zaUNvdW50XCI6IDUwMDAwLFxuICAgICAgICAgICAgICBcIkNyZWF0ZVVzZXJGdWxsTmFtZVwiOiBcIklsbGlub2lzIEpvbmVzXCIsXG4gICAgICAgICAgICAgIFwiQ3JlYXRlVGltZVwiOiBcIjIwMTUtMTAtMzBUMTM6MjM6MDIuMTM4MDE0N1wiLFxuICAgICAgICAgICAgICBcIkNyZWF0ZVVzZXJJZFwiOiAxMDAsXG4gICAgICAgICAgICAgIFwiSWRcIjogXCI0MjRcIixcbiAgICAgICAgICAgICAgXCJNb2RpZnlUaW1lXCI6IFwiMjAxNS0xMC0zMFQxMzoyMzowMi4xMzgwMTQ3XCIsXG4gICAgICAgICAgICAgIFwiTW9kaWZ5VXNlcklkXCI6IDEwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIkZvcm1hdFZlcnNpb25cIjogXCIwMS4wM1wiLFxuICAgICAgICAgICAgICBcIld0c0Zvcm1hdFZlcnNpb25cIjogXCIwMS4wM1wiLFxuICAgICAgICAgICAgICBcIkltc2lDb3VudFwiOiA4OTg2MCxcbiAgICAgICAgICAgICAgXCJDcmVhdGVVc2VyRnVsbE5hbWVcIjogXCJBbmdlbGEgU21pdGhcIixcbiAgICAgICAgICAgICAgXCJDcmVhdGVUaW1lXCI6IFwiMjAxNS0xMC0zMFQxMzoyNDozNy45NDM1OTQzXCIsXG4gICAgICAgICAgICAgIFwiQ3JlYXRlVXNlcklkXCI6IDEwMSxcbiAgICAgICAgICAgICAgXCJJZFwiOiBcIjQyNVwiLFxuICAgICAgICAgICAgICBcIk1vZGlmeVRpbWVcIjogXCIyMDE1LTEwLTMwVDEzOjI0OjM3Ljk0MzU5NDNcIixcbiAgICAgICAgICAgICAgXCJNb2RpZnlVc2VySWRcIjogMTAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiSW1zaUNvdW50XCI6IDUwMDAwLFxuICAgICAgICAgICAgICBcIkNyZWF0ZVVzZXJGdWxsTmFtZVwiOiBcIkFuZ2VsYSBTbWl0aFwiLFxuICAgICAgICAgICAgICBcIkNyZWF0ZVRpbWVcIjogXCIyMDE1LTEwLTMwVDEzOjI2OjIzLjI1MjEyNDFcIixcbiAgICAgICAgICAgICAgXCJDcmVhdGVVc2VySWRcIjogMTAxLFxuICAgICAgICAgICAgICBcIklkXCI6IFwiNDI2XCIsXG4gICAgICAgICAgICAgIFwiTW9kaWZ5VGltZVwiOiBcIjIwMTUtMTAtMzBUMTM6MjY6MjMuMjUyMTI0MVwiLFxuICAgICAgICAgICAgICBcIk1vZGlmeVVzZXJJZFwiOiAxMDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJEZXNjcmlwdGlvblwiOiBcImV4cG9ydCBkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBcIkZvcm1hdFZlcnNpb25cIjogXCIwMS4wM1wiLFxuICAgICAgICAgICAgICBcIld0c0Zvcm1hdFZlcnNpb25cIjogXCIwMS4wM1wiLFxuICAgICAgICAgICAgICBcIkZpbGVJZGVudGlmaWVyXCI6IFwiZXhwb3J0IGZpbFwiLFxuICAgICAgICAgICAgICBcIkF1dGhvclwiOiBcImV4cG9ydCBhdXRob3JcIixcbiAgICAgICAgICAgICAgXCJDaGVja2VyXCI6IFwiZXhwb3J0IGNoZWNrZXJcIixcbiAgICAgICAgICAgICAgXCJBdXRob3Jpc2VyXCI6IFwiZXhwb3J0IGF1dGhvcml6ZXJcIixcbiAgICAgICAgICAgICAgXCJUYXJnZXRTcGVjXCI6IFwiZXhwb3J0IHRhclwiLFxuICAgICAgICAgICAgICBcIkZpbGVEYXRlXCI6IFwiZXhwb3J0IGRhdGVcIixcbiAgICAgICAgICAgICAgXCJJbXNpQ291bnRcIjogNjY5NTUsXG4gICAgICAgICAgICAgIFwiQ3JlYXRlVXNlckZ1bGxOYW1lXCI6IFwiQW5nZWxhIFNtaXRoXCIsXG4gICAgICAgICAgICAgIFwiQ3JlYXRlVGltZVwiOiBcIjIwMTUtMTAtMzBUMTM6Mjg6NDYuNDUxNDQyNlwiLFxuICAgICAgICAgICAgICBcIkNyZWF0ZVVzZXJJZFwiOiAxMDEsXG4gICAgICAgICAgICAgIFwiSWRcIjogXCI0MjdcIixcbiAgICAgICAgICAgICAgXCJNb2RpZnlUaW1lXCI6IFwiMjAxNS0xMC0zMFQxMzoyODo0Ni40NTE0NDI2XCIsXG4gICAgICAgICAgICAgIFwiTW9kaWZ5VXNlcklkXCI6IDEwMVxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIlRyYW5zYWN0aW9uSWRcIjogXCIxNmYwYTQ0MTZlZjg0NTA1YmVkMzEyN2U0MjQyNzg2OFwiLFxuICAgICAgXCJTZXNzaW9uSWRcIjogXCIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFxuICAgICAgXCJIYXNFcnJvck9jY3VycmVkXCI6IGZhbHNlXG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBnZXRGZXRjaEN1cnJlbnRTdGF0dXNGb3JBbGxJbXNpc1Jlc3BvbnNlID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwiVmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIk5hbWVcIjogXCJEbyBOb3QgUmVwcm9jZXNzXCIsXG4gICAgICAgICAgICAgICAgXCJDb3VudFwiOiAyMjI4NzdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiUmVwcm9jZXNzXCIsXG4gICAgICAgICAgICAgICAgXCJDb3VudFwiOiAxMTIzNDdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiU3VjY2Vzc2Z1bFwiLFxuICAgICAgICAgICAgICAgIFwiQ291bnRcIjogMTAwMDAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiTmFtZVwiOiBcIlRvdGFsIElNU0lzIGluIEJDQSBEYXRhYmFzZVwiLFxuICAgICAgICAgICAgICAgIFwiQ291bnRcIjogNDM1MjI0XG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiVHJhbnNhY3Rpb25JZFwiOiBcIjgyMWViZTczYTM0NDRhZWQ5MGMzNGY3NmMyZjdhNzlhXCIsXG4gICAgICAgIFwiU2Vzc2lvbklkXCI6IFwiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIixcbiAgICAgICAgXCJIYXNFcnJvck9jY3VycmVkXCI6IGZhbHNlXG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBnZXRDYW1wYWlnbkFuYWx5c2lzU3VtbWFyeVJlc3BvbnNlID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwiVmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkltcG9ydElkXCI6IDE4NSxcbiAgICAgICAgICAgICAgICBcIkRhdGVJbXBvcnRlZFwiOiBcIjIwMTUtMTAtMzBUMTI6NTk6NDkuMzIzNzQ3MlwiLFxuICAgICAgICAgICAgICAgIFwiQ2FtcGFpZ25cIjogXCJGYWlyZmF4XCIsXG4gICAgICAgICAgICAgICAgXCJJbXBvcnRUeXBlSWRcIjogMixcbiAgICAgICAgICAgICAgICBcIkltcG9ydFR5cGVcIjogXCJFeHBpcmVkIElNU0lzXCIsXG4gICAgICAgICAgICAgICAgXCJJbXNpQ291bnRcIjogNTAwMDAsXG4gICAgICAgICAgICAgICAgXCJTdWNjZXNzZnVsQ291bnRcIjogMCxcbiAgICAgICAgICAgICAgICBcIlJlcHJvY2Vzc0NvdW50XCI6IDE2MjI4LFxuICAgICAgICAgICAgICAgIFwiRG9Ob3RSZXByb2Nlc3NDb3VudFwiOiAzMzc3MixcbiAgICAgICAgICAgICAgICBcIkNyZWF0ZVVzZXJcIjogXCJKb25lcywgSWxsaW5vaXNcIixcbiAgICAgICAgICAgICAgICBcIlRhcmdldFNwZWNcIjogXCJUQVItMSAgICAgXCIsXG4gICAgICAgICAgICAgICAgXCJEZXNjcmlwdGlvblwiOiBcIkJhdGNoICMxXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcImxvYWQtMS5zbGRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkltcG9ydElkXCI6IDE4NixcbiAgICAgICAgICAgICAgICBcIkRhdGVJbXBvcnRlZFwiOiBcIjIwMTUtMTAtMzBUMTM6MDE6NDIuMzMxMDQ2OFwiLFxuICAgICAgICAgICAgICAgIFwiQ2FtcGFpZ25cIjogXCJGYWlyZmF4XCIsXG4gICAgICAgICAgICAgICAgXCJJbXBvcnRUeXBlSWRcIjogMSxcbiAgICAgICAgICAgICAgICBcIkltcG9ydFR5cGVcIjogXCJGYWlsZWQgSU1TSXNcIixcbiAgICAgICAgICAgICAgICBcIkltc2lDb3VudFwiOiA1MDAwMCxcbiAgICAgICAgICAgICAgICBcIlN1Y2Nlc3NmdWxDb3VudFwiOiAwLFxuICAgICAgICAgICAgICAgIFwiUmVwcm9jZXNzQ291bnRcIjogNjY3NyxcbiAgICAgICAgICAgICAgICBcIkRvTm90UmVwcm9jZXNzQ291bnRcIjogNDMzMjMsXG4gICAgICAgICAgICAgICAgXCJDcmVhdGVVc2VyXCI6IFwiSm9uZXMsIElsbGlub2lzXCIsXG4gICAgICAgICAgICAgICAgXCJUYXJnZXRTcGVjXCI6IFwiVEFSLTIgICAgIFwiLFxuICAgICAgICAgICAgICAgIFwiRGVzY3JpcHRpb25cIjogXCJCYXRjaCAjMlwiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCIgbG9hZC0yLnNsZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiSW1wb3J0SWRcIjogMTg3LFxuICAgICAgICAgICAgICAgIFwiRGF0ZUltcG9ydGVkXCI6IFwiMjAxNS0xMC0zMFQxMzowMjowNy40OTQ1NjI5XCIsXG4gICAgICAgICAgICAgICAgXCJDYW1wYWlnblwiOiBcIkZhaXJmYXhcIixcbiAgICAgICAgICAgICAgICBcIkltcG9ydFR5cGVJZFwiOiAzLFxuICAgICAgICAgICAgICAgIFwiSW1wb3J0VHlwZVwiOiBcIlN1Y2Nlc3NmdWwgSU1TSXNcIixcbiAgICAgICAgICAgICAgICBcIkltc2lDb3VudFwiOiA1MDAwMCxcbiAgICAgICAgICAgICAgICBcIlN1Y2Nlc3NmdWxDb3VudFwiOiA1MDAwMCxcbiAgICAgICAgICAgICAgICBcIlJlcHJvY2Vzc0NvdW50XCI6IDAsXG4gICAgICAgICAgICAgICAgXCJEb05vdFJlcHJvY2Vzc0NvdW50XCI6IDAsXG4gICAgICAgICAgICAgICAgXCJDcmVhdGVVc2VyXCI6IFwiSm9uZXMsIElsbGlub2lzXCIsXG4gICAgICAgICAgICAgICAgXCJUYXJnZXRTcGVjXCI6IFwiVEFSLTMgICAgIFwiLFxuICAgICAgICAgICAgICAgIFwiRGVzY3JpcHRpb25cIjogXCJCYXRjaCAjM1wiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJsb2FkLTMuc2xkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJJbXBvcnRJZFwiOiAxODgsXG4gICAgICAgICAgICAgICAgXCJEYXRlSW1wb3J0ZWRcIjogXCIyMDE1LTEwLTMwVDEzOjAzOjI5LjgzMTc5NThcIixcbiAgICAgICAgICAgICAgICBcIkNhbXBhaWduXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJJbXBvcnRUeXBlSWRcIjogNSxcbiAgICAgICAgICAgICAgICBcIkltcG9ydFR5cGVcIjogXCJJbiBIU1Mgbm90IE9QTVwiLFxuICAgICAgICAgICAgICAgIFwiSW1zaUNvdW50XCI6IDUwMDAwLFxuICAgICAgICAgICAgICAgIFwiU3VjY2Vzc2Z1bENvdW50XCI6IDAsXG4gICAgICAgICAgICAgICAgXCJSZXByb2Nlc3NDb3VudFwiOiAyMjA3NSxcbiAgICAgICAgICAgICAgICBcIkRvTm90UmVwcm9jZXNzQ291bnRcIjogMjc5MjUsXG4gICAgICAgICAgICAgICAgXCJDcmVhdGVVc2VyXCI6IFwiSm9uZXMsIElsbGlub2lzXCIsXG4gICAgICAgICAgICAgICAgXCJUYXJnZXRTcGVjXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJEZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJsb2FkLTQueGxzeFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiSW1wb3J0SWRcIjogMTg5LFxuICAgICAgICAgICAgICAgIFwiRGF0ZUltcG9ydGVkXCI6IFwiMjAxNS0xMC0zMFQxMzowNTozNC40NjAyNTc0XCIsXG4gICAgICAgICAgICAgICAgXCJDYW1wYWlnblwiOiBcIkZhcmdvXCIsXG4gICAgICAgICAgICAgICAgXCJJbXBvcnRUeXBlSWRcIjogMixcbiAgICAgICAgICAgICAgICBcIkltcG9ydFR5cGVcIjogXCJFeHBpcmVkIElNU0lzXCIsXG4gICAgICAgICAgICAgICAgXCJJbXNpQ291bnRcIjogNTAwMDAsXG4gICAgICAgICAgICAgICAgXCJTdWNjZXNzZnVsQ291bnRcIjogMCxcbiAgICAgICAgICAgICAgICBcIlJlcHJvY2Vzc0NvdW50XCI6IDMxODI4LFxuICAgICAgICAgICAgICAgIFwiRG9Ob3RSZXByb2Nlc3NDb3VudFwiOiAxODE3MixcbiAgICAgICAgICAgICAgICBcIkNyZWF0ZVVzZXJcIjogXCJTbWl0aCwgQW5nZWxhXCIsXG4gICAgICAgICAgICAgICAgXCJUYXJnZXRTcGVjXCI6IFwiVEFSLTUgICAgIFwiLFxuICAgICAgICAgICAgICAgIFwiRGVzY3JpcHRpb25cIjogXCJCYXRjaCAjNVwiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJsb2FkLTVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkltcG9ydElkXCI6IDE5MCxcbiAgICAgICAgICAgICAgICBcIkRhdGVJbXBvcnRlZFwiOiBcIjIwMTUtMTAtMzBUMTM6MDY6MTAuOTQzOTA1NFwiLFxuICAgICAgICAgICAgICAgIFwiQ2FtcGFpZ25cIjogXCJGYXJnb1wiLFxuICAgICAgICAgICAgICAgIFwiSW1wb3J0VHlwZUlkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJJbXBvcnRUeXBlXCI6IFwiRmFpbGVkIElNU0lzXCIsXG4gICAgICAgICAgICAgICAgXCJJbXNpQ291bnRcIjogNTAwMDAsXG4gICAgICAgICAgICAgICAgXCJTdWNjZXNzZnVsQ291bnRcIjogMCxcbiAgICAgICAgICAgICAgICBcIlJlcHJvY2Vzc0NvdW50XCI6IDM1MTI3LFxuICAgICAgICAgICAgICAgIFwiRG9Ob3RSZXByb2Nlc3NDb3VudFwiOiAxNDg3MyxcbiAgICAgICAgICAgICAgICBcIkNyZWF0ZVVzZXJcIjogXCJTbWl0aCwgQW5nZWxhXCIsXG4gICAgICAgICAgICAgICAgXCJUYXJnZXRTcGVjXCI6IFwiVEFSLTYgICAgIFwiLFxuICAgICAgICAgICAgICAgIFwiRGVzY3JpcHRpb25cIjogXCJCYXRjaCAjNlwiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJmYWlsZWQgbG9hZC02XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJJbXBvcnRJZFwiOiAxOTEsXG4gICAgICAgICAgICAgICAgXCJEYXRlSW1wb3J0ZWRcIjogXCIyMDE1LTEwLTMwVDEzOjA2OjQ0LjU0OTI2NTZcIixcbiAgICAgICAgICAgICAgICBcIkNhbXBhaWduXCI6IFwiRmFyZ29cIixcbiAgICAgICAgICAgICAgICBcIkltcG9ydFR5cGVJZFwiOiAzLFxuICAgICAgICAgICAgICAgIFwiSW1wb3J0VHlwZVwiOiBcIlN1Y2Nlc3NmdWwgSU1TSXNcIixcbiAgICAgICAgICAgICAgICBcIkltc2lDb3VudFwiOiA1MDAwMCxcbiAgICAgICAgICAgICAgICBcIlN1Y2Nlc3NmdWxDb3VudFwiOiA1MDAwMCxcbiAgICAgICAgICAgICAgICBcIlJlcHJvY2Vzc0NvdW50XCI6IDAsXG4gICAgICAgICAgICAgICAgXCJEb05vdFJlcHJvY2Vzc0NvdW50XCI6IDAsXG4gICAgICAgICAgICAgICAgXCJDcmVhdGVVc2VyXCI6IFwiU21pdGgsIEFuZ2VsYVwiLFxuICAgICAgICAgICAgICAgIFwiVGFyZ2V0U3BlY1wiOiBcIlRBUi03ICAgICBcIixcbiAgICAgICAgICAgICAgICBcIkRlc2NyaXB0aW9uXCI6IFwiQmF0Y2ggIzdcIixcbiAgICAgICAgICAgICAgICBcIk5vdGVzXCI6IFwic3VjY2Vzc2Z1bCBsb2FkLTdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkltcG9ydElkXCI6IDE5MixcbiAgICAgICAgICAgICAgICBcIkRhdGVJbXBvcnRlZFwiOiBcIjIwMTUtMTAtMzBUMTM6MDg6MjIuNzI3MDgyNFwiLFxuICAgICAgICAgICAgICAgIFwiQ2FtcGFpZ25cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkltcG9ydFR5cGVJZFwiOiA1LFxuICAgICAgICAgICAgICAgIFwiSW1wb3J0VHlwZVwiOiBcIkluIEhTUyBub3QgT1BNXCIsXG4gICAgICAgICAgICAgICAgXCJJbXNpQ291bnRcIjogNTAwMDAsXG4gICAgICAgICAgICAgICAgXCJTdWNjZXNzZnVsQ291bnRcIjogMCxcbiAgICAgICAgICAgICAgICBcIlJlcHJvY2Vzc0NvdW50XCI6IDM4MixcbiAgICAgICAgICAgICAgICBcIkRvTm90UmVwcm9jZXNzQ291bnRcIjogNDk2MTgsXG4gICAgICAgICAgICAgICAgXCJDcmVhdGVVc2VyXCI6IFwiU21pdGgsIEFuZ2VsYVwiLFxuICAgICAgICAgICAgICAgIFwiVGFyZ2V0U3BlY1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiRGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIk5vdGVzXCI6IFwibm90IG9wbSBsb2FkLThcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkltcG9ydElkXCI6IDE5MyxcbiAgICAgICAgICAgICAgICBcIkRhdGVJbXBvcnRlZFwiOiBcIjIwMTUtMTAtMzBUMTM6MDk6MDQuMDY4MjE2MVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FtcGFpZ25cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkltcG9ydFR5cGVJZFwiOiA0LFxuICAgICAgICAgICAgICAgIFwiSW1wb3J0VHlwZVwiOiBcIkluIE9QTSBub3QgSFNTXCIsXG4gICAgICAgICAgICAgICAgXCJJbXNpQ291bnRcIjogMzUyMjQsXG4gICAgICAgICAgICAgICAgXCJTdWNjZXNzZnVsQ291bnRcIjogMCxcbiAgICAgICAgICAgICAgICBcIlJlcHJvY2Vzc0NvdW50XCI6IDAsXG4gICAgICAgICAgICAgICAgXCJEb05vdFJlcHJvY2Vzc0NvdW50XCI6IDM1MjI0LFxuICAgICAgICAgICAgICAgIFwiQ3JlYXRlVXNlclwiOiBcIlNtaXRoLCBBbmdlbGFcIixcbiAgICAgICAgICAgICAgICBcIlRhcmdldFNwZWNcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcImluIG9wbSBsb2FkLTlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkltcG9ydElkXCI6IDE5NCxcbiAgICAgICAgICAgICAgICBcIkRhdGVJbXBvcnRlZFwiOiBcIjIwMTUtMTAtMzBUMTM6MTM6NTMuODE1MTg3OVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FtcGFpZ25cIjogXCJBcmxpbmd0b25cIixcbiAgICAgICAgICAgICAgICBcIkltcG9ydFR5cGVJZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiSW1wb3J0VHlwZVwiOiBcIkZhaWxlZCBJTVNJc1wiLFxuICAgICAgICAgICAgICAgIFwiSW1zaUNvdW50XCI6IDUwMDAwLFxuICAgICAgICAgICAgICAgIFwiU3VjY2Vzc2Z1bENvdW50XCI6IDAsXG4gICAgICAgICAgICAgICAgXCJSZXByb2Nlc3NDb3VudFwiOiAzMCxcbiAgICAgICAgICAgICAgICBcIkRvTm90UmVwcm9jZXNzQ291bnRcIjogMCxcbiAgICAgICAgICAgICAgICBcIkNyZWF0ZVVzZXJcIjogXCJUaHVyc2RheSwgSm9obm55XCIsXG4gICAgICAgICAgICAgICAgXCJUYXJnZXRTcGVjXCI6IFwiVEFSLTggICAgIFwiLFxuICAgICAgICAgICAgICAgIFwiRGVzY3JpcHRpb25cIjogXCJCYXRjaCAjOFwiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJKb2hubnkgaW1wb3J0aW5nIGxvYWQtOC5zbGQgb24gQXJsaW5ndG9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJUcmFuc2FjdGlvbklkXCI6IFwiZjA5ZTA0YzZhYWJlNDdjOGJiNDA4OTJkOTBmOTJhODhcIixcbiAgICAgICAgXCJTZXNzaW9uSWRcIjogXCIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFxuICAgICAgICBcIkhhc0Vycm9yT2NjdXJyZWRcIjogZmFsc2VcbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIGdldFN1Y2Nlc3NmdWxMb2dpblJlc3BvbnNlID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBcIlRyYW5zYWN0aW9uSWRcIjogXCI1ZmIwMWYwOTU1YzY0YTdhYTUzZTA5ZDMxMTY4MDVmOFwiLFxuICAgICAgXCJTZXNzaW9uSWRcIjogXCIxNTZhMWVhYTJiZDQ0NDkwOGQwODQ5MTFjZTVhZjk4NFwiLFxuICAgICAgXCJIYXNFcnJvck9jY3VycmVkXCI6IGZhbHNlXG4gICAgICB9XG4gIH07XG5cbiAgc3RhdGljIGdldEltcG9ydFR5cGVMaXN0UmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiVmFsdWVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJEZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICAgICAgXCJDcmVhdGVUaW1lXCI6IFwiMjAxNS0xMC0wNlQxMTozNjozNi4wMjcwMDAwXCIsXG4gICAgICAgICAgICBcIkNyZWF0ZVVzZXJJZFwiOiAxMDAsXG4gICAgICAgICAgICBcIklkXCI6IFwiMlwiLFxuICAgICAgICAgICAgXCJNb2RpZnlVc2VySWRcIjogMCxcbiAgICAgICAgICAgIFwiTmFtZVwiOiBcIkV4cGlyZWQgSU1TSXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIkRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgICAgICBcIkNyZWF0ZVRpbWVcIjogXCIyMDE1LTEwLTA2VDExOjM2OjM2LjAyNzAwMDBcIixcbiAgICAgICAgICAgIFwiQ3JlYXRlVXNlcklkXCI6IDEwMCxcbiAgICAgICAgICAgIFwiSWRcIjogXCIxXCIsXG4gICAgICAgICAgICBcIk1vZGlmeVVzZXJJZFwiOiAwLFxuICAgICAgICAgICAgXCJOYW1lXCI6IFwiRmFpbGVkIElNU0lzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJEZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICAgICAgXCJDcmVhdGVUaW1lXCI6IFwiMjAxNS0xMC0wNlQxMTozNjozNi4wMzAwMDAwXCIsXG4gICAgICAgICAgICBcIkNyZWF0ZVVzZXJJZFwiOiAxMDAsXG4gICAgICAgICAgICBcIklkXCI6IFwiNVwiLFxuICAgICAgICAgICAgXCJNb2RpZnlVc2VySWRcIjogMCxcbiAgICAgICAgICAgIFwiTmFtZVwiOiBcIkluIEhTUyBub3QgT1BNXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJEZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICAgICAgXCJDcmVhdGVUaW1lXCI6IFwiMjAxNS0xMC0wNlQxMTozNjozNi4wMzAwMDAwXCIsXG4gICAgICAgICAgICBcIkNyZWF0ZVVzZXJJZFwiOiAxMDAsXG4gICAgICAgICAgICBcIklkXCI6IFwiNFwiLFxuICAgICAgICAgICAgXCJNb2RpZnlVc2VySWRcIjogMCxcbiAgICAgICAgICAgIFwiTmFtZVwiOiBcIkluIE9QTSBub3QgSFNTXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJEZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICAgICAgXCJDcmVhdGVUaW1lXCI6IFwiMjAxNS0xMC0wNlQxMTozNjozNi4wMzAwMDAwXCIsXG4gICAgICAgICAgICBcIkNyZWF0ZVVzZXJJZFwiOiAxMDAsXG4gICAgICAgICAgICBcIklkXCI6IFwiM1wiLFxuICAgICAgICAgICAgXCJNb2RpZnlVc2VySWRcIjogMCxcbiAgICAgICAgICAgIFwiTmFtZVwiOiBcIlN1Y2Nlc3NmdWwgSU1TSXNcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJUcmFuc2FjdGlvbklkXCI6IFwiNDM3MGI4ZjIxODRmNGNmMjhmZjZmZDNkYjgyM2FlODZcIixcbiAgICAgIFwiU2Vzc2lvbklkXCI6IFwiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIixcbiAgICAgIFwiSGFzRXJyb3JPY2N1cnJlZFwiOiBmYWxzZVxuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgY2FtcGFpZ25zID0ge1xuICAgICAgXCJWYWx1ZXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJEZXNjcmlwdGlvblwiOiBcIkZhaXJmYXhcIixcbiAgICAgICAgICAgICAgXCJDcmVhdGVUaW1lXCI6IFwiMjAxNS0xMC0zMFQxMjo1OTozNy42MDg1NzU4XCIsXG4gICAgICAgICAgICAgIFwiQ3JlYXRlVXNlcklkXCI6IDEwMCxcbiAgICAgICAgICAgICAgXCJJZFwiOiBcIjUwXCIsXG4gICAgICAgICAgICAgIFwiTW9kaWZ5VGltZVwiOiBcIjIwMTUtMTAtMzBUMTI6NTk6MzcuNjA4NTc1OFwiLFxuICAgICAgICAgICAgICBcIk1vZGlmeVVzZXJJZFwiOiAxMDAsXG4gICAgICAgICAgICAgIFwiTmFtZVwiOiBcIkZhaXJmYXhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIkRlc2NyaXB0aW9uXCI6IFwiQXJsaW5ndG9uXCIsXG4gICAgICAgICAgICAgIFwiQ3JlYXRlVGltZVwiOiBcIjIwMTUtMTAtMzBUMTM6MDQ6NTUuNTA5MzYyN1wiLFxuICAgICAgICAgICAgICBcIkNyZWF0ZVVzZXJJZFwiOiAxMDEsXG4gICAgICAgICAgICAgIFwiSWRcIjogXCI1MVwiLFxuICAgICAgICAgICAgICBcIk1vZGlmeVRpbWVcIjogXCIyMDE1LTEwLTMwVDEzOjA0OjU1LjUwOTM2MjdcIixcbiAgICAgICAgICAgICAgXCJNb2RpZnlVc2VySWRcIjogMTAxLFxuICAgICAgICAgICAgICBcIk5hbWVcIjogXCJBcmxpbmd0b25cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIkRlc2NyaXB0aW9uXCI6IFwiRmFyZ29cIixcbiAgICAgICAgICAgICAgXCJDcmVhdGVUaW1lXCI6IFwiMjAxNS0xMC0zMVQxMzoxMjo0Ni41OTg0NjY5XCIsXG4gICAgICAgICAgICAgIFwiQ3JlYXRlVXNlcklkXCI6IDEwMixcbiAgICAgICAgICAgICAgXCJJZFwiOiBcIjUzXCIsXG4gICAgICAgICAgICAgIFwiTW9kaWZ5VGltZVwiOiBcIjIwMTUtMTAtMzFUMTM6MTI6NDYuNTk4NDY2OVwiLFxuICAgICAgICAgICAgICBcIk1vZGlmeVVzZXJJZFwiOiAxMDIsXG4gICAgICAgICAgICAgIFwiTmFtZVwiOiBcIkZhcmdvXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJUcmFuc2FjdGlvbklkXCI6IFwiYWMxNjczOGZlYTIwNGMyZTgyMGVlYTRmNWM2ZGY2MDNcIixcbiAgICAgIFwiU2Vzc2lvbklkXCI6IFwiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIixcbiAgICAgIFwiSGFzRXJyb3JPY2N1cnJlZFwiOiBmYWxzZVxuICB9O1xuXG4gIHN0YXRpYyBnZXRDYW1wYWlnbkxpc3RSZXNwb25zZSA9ICgpID0+IHtcbiAgICByZXR1cm4gU2FtcGxlQXBwRGF0YS5jYW1wYWlnbnM7XG4gIH07XG5cbiAgc3RhdGljIGdldENyZWF0ZUNhbXBhaWduUmVzcG9uc2UgPSAoY2FtcGFpZ24pID0+IHtcbiAgICBjYW1wYWlnbi5JZCA9IFNhbXBsZUFwcERhdGEubmV4dElkKFNhbXBsZUFwcERhdGEuY2FtcGFpZ25zLlZhbHVlcyk7XG4gICAgU2FtcGxlQXBwRGF0YS5jYW1wYWlnbnMuVmFsdWVzLnB1c2goY2FtcGFpZ24pO1xuICAgIHJldHVybiBTYW1wbGVBcHBEYXRhLmNhbXBhaWducztcbiAgfTtcblxuICBzdGF0aWMgbmV4dElkID0gKGxpc3RXaXRoSWRzKSA9PiB7XG4gICAgbGV0IGl0ZW1XaXRoTWF4SWQgPSBfLm1heChsaXN0V2l0aElkcywgKGl0ZW0pID0+IHBhcnNlSW50KGl0ZW0uSWQpKTtcbiAgICByZXR1cm4gaXRlbVdpdGhNYXhJZCA/IChwYXJzZUludChpdGVtV2l0aE1heElkLklkKSArIDEpLnRvU3RyaW5nKCkgOiBcIjFcIjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
