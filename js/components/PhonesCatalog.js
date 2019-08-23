export default class PhonesCatalog {
  constructor(element, props) {
    this.element = element;
    this.props = props;
    this.render()
  }

  render() {
    const phones = this.props.phones;
    this.element.innerHTML = `
      <ul class="phones">
        ${phones.map(item => `
          <li class="thumbnail">
            <a href="#!/phones/${item.id}" class="thumb">
              <img alt="${item.name}" src="${item.imageUrl}">
            </a>

            <div class="phones__btn-buy-wrapper">
              <a class="btn btn-success">
                Add
              </a>
            </div>

            <a href="#!/phones/${item.id}">${item.name}</a>
            <p>${item.snippet}</p>
          </li>
        `).join('')}    
      </ul>    
    `;
  }
}