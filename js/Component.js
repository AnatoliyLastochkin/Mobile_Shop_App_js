export default class Component {
  constructor(element, props = {}) {
    this.element = element;
    this.props = props;

    this.components = {};
  }

  initComponent(Constructor, props = {}) {
    const componentName = Constructor.name;
    const element = this.element.querySelector(`[data-component="${componentName}"]`);

    if (!element) {
      return;
    }

    const current = this.components[componentName];

    if (!current || !this.deepEqual(current.props, props)) {
      this.components[componentName] = new Constructor(element, props);
    } else {
      element.parentNode.replaceChild(current.element, element);
    }
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };

    this.render();
  }

  on(eventName, elementName, callBack) {
    this.element.addEventListener(eventName, evt => {
      const delegateTarget = evt.target.closest(`[data-element="${elementName}"]`);

      if (!delegateTarget) return;

      // eslint-disable-next-line  no-param-reassign
      evt.delegateTarget = delegateTarget;

      callBack(evt);
    });
  }

  deepEqual(a, b) {
    if (a === b) return true;

    if (typeof a !== 'object'
      || typeof b !== 'object'
      || a === null
      || b === null) {
      return false;
    }

    return Object.keys(a).length === Object.keys(b).length
      && Object.keys(a).every(key => this.deepEqual(a[key], b[key]));
  }
}
