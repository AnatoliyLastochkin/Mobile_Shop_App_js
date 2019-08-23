export default class Components {
  constructor(element) {
    this.element = element;

  }

  on(eventName, elementName, callBack) {
    this.element.addEventListener(eventName, evt => {
      const delegateTarget = evt.target.closest(`[data-element="${elementName}"]`);

      if (!delegateTarget) return;

      evt.delegateTarget = delegateTarget;

      callBack(evt);
    });
  }
}