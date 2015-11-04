import {inject} from "aurelia-framework";

/**
 * regular html5 autofocus does not work when loading content dynamically.
 * Therefore, we create our own autofocus that works inside of aurelia viewmodels.
 * usage: add aurelia-autofocus attribute to tag.
 */

@inject(Element)
export class AureliaAutofocusCustomAttribute {
  element;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.element.focus();
  }
}
