import PhonesCatalog from './PhonesCatalog.js';
import ShoppingCart from './ShoppingCart.js';
import Filter from './Filter.js';
import PhoneViewer from './PhoneViewer.js';
import { getAll, getById } from "../api/phones.js";
import Component from "../Component.js";

export default class PhonesPage extends Component {
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
    const phones = await getAll()
    this.setState({ phones })
  }

  removeItem(phoneId) {
    const newItems = {...this.state.items};
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
      items: items,
    });
  }
  async selectedPhone(phoneId) {
    const phone = await getById(phoneId);
    this.setState({ selectedPhone: phone});
  }

  unSelectedPhone() {
    this.setState({
      selectedPhone: null,
    });
  }

  init() {
    this.initComponent(PhonesCatalog, {
      phones: this.state.phones,
      onPhoneSelected: this.onPhoneSelected ,
      onAdd: this.onAdd,
    });
    this.initComponent(PhoneViewer, {
      phone: this.state.selectedPhone,
      onBack: this.onBack,
      onAdd: this.onAdd,
    });

    this.initComponent(ShoppingCart, {
      items: this.state.items,
      onRemove:  this.onRemove,
    });
    this.initComponent(Filter);
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
        ${this.state.selectedPhone ? 
          `<div data-component="PhoneViewer"></div>`
          :
          `<div data-component="PhonesCatalog"></div>`}
        </div>
      </div>  
    `;

    this.init();
  }
}