import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class TableComponent extends Component {
  @service cart;

  get carts() {
    let items = [];

    let cartItem = this.cart.items;
    Object.keys(cartItem).forEach((item) => {
      let sizeItem = cartItem[item];
      Object.keys(cartItem[item]).forEach((innerItem) => {
        items.push({
          id: item,
          size: innerItem,
          url: sizeItem[innerItem].url,
          count: sizeItem[innerItem].count,
          amount: sizeItem[innerItem].count * sizeItem[innerItem].amount,
        });
      });
    });

    return items;
  }

  removeFromCart = (id, size) => {
    this.cart.delete(id, size);
  };
}
