/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PhonesPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


// eslint-disable-next-line no-new
new _components_PhonesPage_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('[data-component="PhonesPage"]'));


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhonesPage; });
/* harmony import */ var _PhonesCatalog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _ShoppingCart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _Filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _PhoneViewer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _api_phones_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);







class PhonesPage extends _Component_js__WEBPACK_IMPORTED_MODULE_5__["default"] {
  constructor(element) {
    super(element);

    this.state = {
      phones: [],
      selectedPhone: null,
      items: {},
    };

    this.onRemove = (phoneId) => this.removeItem(phoneId);
    this.onPhoneSelected = (phoneId) => this.selectedPhone(phoneId);
    this.onAdd = (phoneId) => this.addItem(phoneId);
    this.onBack = () => this.unSelectedPhone();

    this.render();

    this.loadPhones();
  }

  async loadPhones() {
    const phones = await Object(_api_phones_js__WEBPACK_IMPORTED_MODULE_4__["getAll"])();
    this.setState({ phones });
  }

  removeItem(phoneId) {
    const newItems = { ...this.state.items };
    delete newItems[phoneId];
    this.setState({
      items: newItems,
    });
  }

  addItem(phoneId) {
    const oldItems = this.state.items;
    const items = {
      ...oldItems,
      [phoneId]: oldItems[phoneId] ? oldItems[phoneId] + 1 : 1,
    };

    this.setState({
      items,
    });
  }

  async selectedPhone(phoneId) {
    const phone = await Object(_api_phones_js__WEBPACK_IMPORTED_MODULE_4__["getById"])(phoneId);
    this.setState({ selectedPhone: phone });
  }

  unSelectedPhone() {
    this.setState({
      selectedPhone: null,
    });
  }

  init() {
    this.initComponent(_PhonesCatalog_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      phones: this.state.phones,
      onPhoneSelected: this.onPhoneSelected,
      onAdd: this.onAdd,
    });
    this.initComponent(_PhoneViewer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      phone: this.state.selectedPhone,
      onBack: this.onBack,
      onAdd: this.onAdd,
    });

    this.initComponent(_ShoppingCart_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      items: this.state.items,
      onRemove: this.onRemove,
    });
    this.initComponent(_Filter_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

  render() {
    this.element.innerHTML = `
      <div class="row">
  
        <!--Sidebar-->
        <div class="col-md-2">
          <section data-component="Filter">
            
          </section>
  
          <section data-component="ShoppingCart">
            
          </section>
        </div>
  
        <!--Main content-->
        
        <div class="col-md-10">
        ${this.state.selectedPhone
    ? '<div data-component="PhoneViewer"></div>'
    : '<div data-component="PhonesCatalog"></div>'}
        </div>
      </div>  
    `;

    this.init();
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhonesCatalog; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class PhonesCatalog extends _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('click', 'PhoneLink', evt => {
      const { phoneId } = evt.delegateTarget.dataset;
      this.props.onPhoneSelected(phoneId);
    });

    this.on('click', 'AddButton', evt => {
      const { phoneId } = evt.delegateTarget.dataset;
      this.props.onAdd(phoneId);
    });
  }

  render() {
    const { phones } = this.props;
    this.element.innerHTML = `
      <ul class="phones">
        ${phones.map(item => `
          <li class="thumbnail">
            <a data-element="PhoneLink" data-phone-id="${item.id}"
            href="#!/phones/${item.id}" class="thumb">
              <img alt="${item.name}" src="${item.imageUrl}">
            </ada>

            <div class="phones__btn-buy-wrapper">
              <a class="btn btn-success" data-element="AddButton" data-phone-id="${item.id}">
                Add
              </a>
            </div>

            <a data-element="PhoneLink" data-phone-id="${item.id}"
             href="#!/phones/${item.id}">${item.name}</a>
            <p>${item.snippet}</p>
          </li>
        `).join('')}    
      </ul>    
    `;
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
class Component {
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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShoppingCart; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class ShoppingCart extends _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('click', 'RemoveButton', evt => {
      const { phoneId } = evt.delegateTarget.dataset;

      this.props.onRemove(phoneId);
    });
  }

  render() {
    this.element.innerHTML = `
      <h4>Shopping Cart</h4>
      <ul class="shopping-cart-list">
        ${Object.keys(this.props.items).map(item => `
          <li>${item.toUpperCase().slice(0, 13)} - ${this.props.items[item]}
            <button class="btn" data-element="RemoveButton" data-phone-id="${item}">X</button>
          </li>  
        `).join('')}
      </ul>    
    `;
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
class Filter {
  constructor(element) {
    this.element = element;

    this.render();
  }

  render() {
    this.element.innerHTML = `
      <p>
        Search:
        <input>
      </p>

      <p>
        Sort by:
        <select>
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>    
    `;
  }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneViewer; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class PhoneViewer extends _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props);

    this.state = {
      selectedImg: this.props.phone.images[0],
    };

    this.render();

    this.on('click', 'BackButton', () => {
      this.props.onBack();
    });

    this.on('click', 'AddButton', () => {
      this.props.onAdd(this.props.phone.id);
    });

    this.on('click', 'smallImage', evt => {
      const imgUrl = evt.delegateTarget.dataset.imageUrl;
      this.setState({
        selectedImg: imgUrl,
      });
    });
  }

  render() {
    const { phone } = this.props;
    this.element.innerHTML = `
    <div>
  
      <img class="phone" src="${this.state.selectedImg}">
  
      <button data-element="BackButton" class="btn btn-success">Back</button>
      <button data-element="AddButton" class="btn btn-success">Add to basket</button>
  
  
      <h1>${phone.name}</h1>
  
      <p>${phone.description}</p>
  
      <ul class="phone-thumbs">
        ${phone.images.map(img => `
          <li data-element="smallImage" data-image-url="${img}">
            <img src="${img}">
          </li>
        `).join('')}
      </ul>
  
      <ul class="specs">
        <li>
          <span>Availability and Networks</span>
          <dl>
            <dt>Availability</dt>
            <dd>${phone.availability}</dd>
          </dl>
        </li>
        <li>
          <span>Battery</span>
          <dl>
            <dt>Type</dt>
            <dd>Other ( mAH)</dd>
            <dt>Talk Time</dt>
            <dd>24 hours</dd>
            <dt>Standby time (max)</dt>
            <dd>336 hours</dd>
          </dl>
        </li>
        <li>
          <span>Storage and Memory</span>
          <dl>
            <dt>RAM</dt>
            <dd>1000MB</dd>
            <dt>Internal Storage</dt>
            <dd>32000MB</dd>
          </dl>
        </li>
        <li>
          <span>Connectivity</span>
          <dl>
            <dt>Network Support</dt>
            <dd></dd>
            <dt>WiFi</dt>
            <dd>802.11 b/g/n</dd>
            <dt>Bluetooth</dt>
            <dd>Bluetooth 2.1</dd>
            <dt>Infrared</dt>
            <dd>✘</dd>
            <dt>GPS</dt>
            <dd>✓</dd>
          </dl>
        </li>
        <li>
          <span>Android</span>
          <dl>
            <dt>OS Version</dt>
            <dd>Android 3.0</dd>
            <dt>UI</dt>
            <dd>Honeycomb</dd>
          </dl>
        </li>
        <li>
          <span>Size and Weight</span>
          <dl>
            <dt>Dimensions</dt>
            <dd>249.1 mm (w)</dd>
            <dd>167.8 mm (h)</dd>
            <dd>12.9 mm (d)</dd>
            <dt>Weight</dt>
            <dd>708.0 grams</dd>
          </dl>
        </li>
        <li>
          <span>Display</span>
          <dl>
            <dt>Screen size</dt>
            <dd>10.1 inches</dd>
            <dt>Screen resolution</dt>
            <dd>WXGA (1200 x 800)</dd>
            <dt>Touch screen</dt>
            <dd>✓</dd>
          </dl>
        </li>
        <li>
          <span>Hardware</span>
          <dl>
            <dt>CPU</dt>
            <dd>1 GHz Dual Core Tegra 2</dd>
            <dt>USB</dt>
            <dd>USB 2.0</dd>
            <dt>Audio / headphone jack</dt>
            <dd>3.5mm</dd>
            <dt>FM Radio</dt>
            <dd>✘</dd>
            <dt>Accelerometer</dt>
            <dd>✓</dd>
          </dl>
        </li>
        <li>
          <span>Camera</span>
          <dl>
            <dt>Primary</dt>
            <dd>5.0 megapixels</dd>
            <dt>Features</dt>
            <dd>Flash, Video</dd>
          </dl>
        </li>
        <li>
          <span>Additional Features</span>
          <dd>Sensors: proximity, ambient light, barometer, gyroscope</dd>
        </li>
      </ul>
    </div>    
    `;
  }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
const API_URL = 'https://anatoliylastochkin.github.io/Mobile_Shop_App_js/api/phones';

const getAll = async () => {
  try {
    const response = await fetch(`${API_URL}.json`);
    return response.json();
  } catch (e) {
    return [];
  }
};

const getById = async (phoneId) => {
  try {
    const response = await fetch(`${API_URL}/${phoneId}.json`);
    const data = response.json();
    return data;
  } catch (e) {
    return 0;
  }
};


/***/ })
/******/ ]);