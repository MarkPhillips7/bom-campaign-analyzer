import _ from "underscore";

export class SampleAppData {
  static getGenerateExportResponse = (exportFormat) => {
    return {
         "DownloadUrl": exportFormat == "Excel" ? "/sample-data/imsi-export-3d84bffd-e6a5-4ac4-8a49-7f70e503ccca.xlsx" : "/sample-data/imsi-export-5166e2a1-aaad-47fc-8e5f-af07b2af406e.sld",
         "TransactionId": "3823395350f44ead8fe463f86a69ad31",
         "SessionId": "00000000000000000000000000000000",
         "HasErrorOccurred": false
    }
  };

  static getImsiAnalysisSummaryResponse = () => {
    return {
       "ImsiHistoryRecords": [
           {
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
           },
           {
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
           },
           {
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
           },
           {
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
           },
           {
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
           },
           {
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
           },
           {
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
           }
       ],
       "SerialNumberHistoryRecords": [
           {
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
           },
           {
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
           },
           {
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
           },
           {
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
           },
           {
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
           },
           {
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
           }
       ],
       "TransactionId": "9ccfc21d6acd47518c928c6f94e149b7",
       "SessionId": "00000000000000000000000000000000",
       "HasErrorOccurred": false
    }
  };

  static getFetchHlrallStatusResponse = () => {
    return {
      IsInHrlAll: true,
      TransactionId: "1ff7073af9fb4d948cf6baf1de433db1",
      SessionId: "00000000000000000000000000000000",
      HasErrorOccurred: false
      }
  };

  static getExportListResponse = () => {
    return {
      "Values": [
          {
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
          },
          {
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
          },
          {
              "FormatVersion": "01.03",
              "WtsFormatVersion": "01.03",
              "ImsiCount": 112317,
              "CreateUserFullName": "Illinois Jones",
              "CreateTime": "2015-10-30T13:13:26.5234590",
              "CreateUserId": 100,
              "Id": "419",
              "ModifyTime": "2015-10-30T13:13:26.5234590",
              "ModifyUserId": 100
          },
          {
              "FormatVersion": "01.03",
              "WtsFormatVersion": "01.03",
              "ImsiCount": 22457,
              "CreateUserFullName": "Illinois Jones",
              "CreateTime": "2015-10-30T13:14:04.3902453",
              "CreateUserId": 100,
              "Id": "420",
              "ModifyTime": "2015-10-30T13:14:04.3902453",
              "ModifyUserId": 100
          },
          {
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
          },
          {
              "FormatVersion": "01.03",
              "WtsFormatVersion": "01.03",
              "ImsiCount": 22905,
              "CreateUserFullName": "Illinois Jones",
              "CreateTime": "2015-10-30T13:17:10.3648409",
              "CreateUserId": 100,
              "Id": "422",
              "ModifyTime": "2015-10-30T13:17:10.3648409",
              "ModifyUserId": 100
          },
          {
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
          },
          {
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
          },
          {
              "FormatVersion": "01.03",
              "WtsFormatVersion": "01.03",
              "ImsiCount": 89860,
              "CreateUserFullName": "Angela Smith",
              "CreateTime": "2015-10-30T13:24:37.9435943",
              "CreateUserId": 101,
              "Id": "425",
              "ModifyTime": "2015-10-30T13:24:37.9435943",
              "ModifyUserId": 101
          },
          {
              "ImsiCount": 50000,
              "CreateUserFullName": "Angela Smith",
              "CreateTime": "2015-10-30T13:26:23.2521241",
              "CreateUserId": 101,
              "Id": "426",
              "ModifyTime": "2015-10-30T13:26:23.2521241",
              "ModifyUserId": 101
          },
          {
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
          }
      ],
      "TransactionId": "16f0a4416ef84505bed3127e42427868",
      "SessionId": "00000000000000000000000000000000",
      "HasErrorOccurred": false
    }
  };

  static getFetchCurrentStatusForAllImsisResponse = () => {
    return {
        "Values": [
            {
                "Name": "Do Not Reprocess",
                "Count": 222877
            },
            {
                "Name": "Reprocess",
                "Count": 112347
            },
            {
                "Name": "Successful",
                "Count": 100000
            },
            {
                "Name": "Total IMSIs in BCA Database",
                "Count": 435224
            }
        ],
        "TransactionId": "821ebe73a3444aed90c34f76c2f7a79a",
        "SessionId": "00000000000000000000000000000000",
        "HasErrorOccurred": false
    }
  };

  static getCampaignAnalysisSummaryResponse = () => {
    return {
        "Values": [
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            }
        ],
        "TransactionId": "f09e04c6aabe47c8bb40892d90f92a88",
        "SessionId": "00000000000000000000000000000000",
        "HasErrorOccurred": false
    }
  };

  static getSuccessfulLoginResponse = () => {
    return {
      "TransactionId": "5fb01f0955c64a7aa53e09d3116805f8",
      "SessionId": "156a1eaa2bd444908d084911ce5af984",
      "HasErrorOccurred": false
      }
  };

  static getImportTypeListResponse = () => {
    return {
      "Values": [
        {
            "Description": "",
            "CreateTime": "2015-10-06T11:36:36.0270000",
            "CreateUserId": 100,
            "Id": "2",
            "ModifyUserId": 0,
            "Name": "Expired IMSIs"
        },
        {
            "Description": "",
            "CreateTime": "2015-10-06T11:36:36.0270000",
            "CreateUserId": 100,
            "Id": "1",
            "ModifyUserId": 0,
            "Name": "Failed IMSIs"
        },
        {
            "Description": "",
            "CreateTime": "2015-10-06T11:36:36.0300000",
            "CreateUserId": 100,
            "Id": "5",
            "ModifyUserId": 0,
            "Name": "In HSS not OPM"
        },
        {
            "Description": "",
            "CreateTime": "2015-10-06T11:36:36.0300000",
            "CreateUserId": 100,
            "Id": "4",
            "ModifyUserId": 0,
            "Name": "In OPM not HSS"
        },
        {
            "Description": "",
            "CreateTime": "2015-10-06T11:36:36.0300000",
            "CreateUserId": 100,
            "Id": "3",
            "ModifyUserId": 0,
            "Name": "Successful IMSIs"
        }
      ],
      "TransactionId": "4370b8f2184f4cf28ff6fd3db823ae86",
      "SessionId": "00000000000000000000000000000000",
      "HasErrorOccurred": false
    }
  };

  static campaigns = {
      "Values": [
          {
              "Description": "Fairfax",
              "CreateTime": "2015-10-30T12:59:37.6085758",
              "CreateUserId": 100,
              "Id": "50",
              "ModifyTime": "2015-10-30T12:59:37.6085758",
              "ModifyUserId": 100,
              "Name": "Fairfax"
          },
          {
              "Description": "Arlington",
              "CreateTime": "2015-10-30T13:04:55.5093627",
              "CreateUserId": 101,
              "Id": "51",
              "ModifyTime": "2015-10-30T13:04:55.5093627",
              "ModifyUserId": 101,
              "Name": "Arlington"
          },
          {
              "Description": "Fargo",
              "CreateTime": "2015-10-31T13:12:46.5984669",
              "CreateUserId": 102,
              "Id": "53",
              "ModifyTime": "2015-10-31T13:12:46.5984669",
              "ModifyUserId": 102,
              "Name": "Fargo"
          }
      ],
      "TransactionId": "ac16738fea204c2e820eea4f5c6df603",
      "SessionId": "00000000000000000000000000000000",
      "HasErrorOccurred": false
  };

  static getCampaignListResponse = () => {
    return SampleAppData.campaigns;
  };

  static getCreateCampaignResponse = (campaign) => {
    campaign.Id = SampleAppData.nextId(SampleAppData.campaigns.Values);
    SampleAppData.campaigns.Values.push(campaign);
    return SampleAppData.campaigns;
  };

  static nextId = (listWithIds) => {
    let itemWithMaxId = _.max(listWithIds, (item) => parseInt(item.Id));
    return itemWithMaxId ? (parseInt(itemWithMaxId.Id) + 1).toString() : "1";
  }
}
