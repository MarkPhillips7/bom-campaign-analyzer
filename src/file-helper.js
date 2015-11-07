import _ from "underscore";

export class FileHelper {

  // filename can be full path or just file name
  // allowedExtensions can be string of a single extension or array of strings
  static isFilenameValid(filename, allowedExtensions) {
    if (!_.isString(filename)) {
      return false;
    }
    if (_.isString(allowedExtensions)) {
      allowedExtensions = [ allowedExtensions ];
    }
    let lastDotIndex = filename.lastIndexOf('.');
    let fileExtension = filename.substring(lastDotIndex + 1).toLowerCase();

    return allowedExtensions.some(allowedExtension =>
      allowedExtension.toLowerCase() === fileExtension);
  }
}
