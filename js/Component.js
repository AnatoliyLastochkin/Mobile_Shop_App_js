export default class Component {
  constructor(element, props = {}) {
    this.element = element;
    this.props = props;

  }
  initComponent(Constructor, props = {}) {
    const componentName = Constructor.name;
    const element = this.element.querySelector(`[data-component="${componentName}"]`);

    if (element) {
      new Constructor(element, props);
    }
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    };

    this.render();
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