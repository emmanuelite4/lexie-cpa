import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CartService extends Service {
  @service price;

  @tracked items = {};

  get total() {
    let amount = 0,
      count = 0;

    Object.values(this.items).forEach((item) => {
      Object.values(item).forEach((innerItem) => {
        count = count + innerItem.count;
        amount = amount + innerItem.amount * innerItem.count;
      });
    });

    return { amount, count };
  }

  add(id, size) {
    let items = { ...this.items };
    items[id] = {
      ...this.items[id],
      [size]: {
        amount: this.price.items[size],
        count:
          this.items[id] && this.items[id][size]
            ? this.items[id][size].count + 1
            : 1,
      },
    };
    this.items = items;
  }

  delete(id, size) {
    let items = this.items;
    let itemCount = items[id][size].count;
    if (itemCount > 1) {
      items[id][size].count = itemCount - 1;
    } else {
      delete items[id][size];
      if (Object.values(items[id]).length === 0) {
        delete items[id];
      }
    }
    this.items = items;
  }
}
