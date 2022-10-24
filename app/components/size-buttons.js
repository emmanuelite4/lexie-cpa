import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class SizeButtons extends Component {
  @service cart;
  @service price;

  get smallCount() {
    return this.cart.items[this.args.id]?.small?.count || 0;
  }

  get mediumCount() {
    return this.cart.items[this.args.id]?.medium?.count || 0;
  }

  get largeCount() {
    return this.cart.items[this.args.id]?.large?.count || 0;
  }

  get xLargeCount() {
    return this.cart.items[this.args.id]?.xLarge?.count || 0;
  }

  addToCart = (id, url, size) => {
    this.cart.add(id, url, size);
  };

  removeFromCart = (id, size) => {
    this.cart.delete(id, size);
  };
}
