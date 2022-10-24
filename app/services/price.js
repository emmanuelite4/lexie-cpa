import Service from '@ember/service';

export default class PriceService extends Service {
  items = {
    small: 10,
    medium: 20,
    large: 30,
    xLarge: 40,
  };

  get() {
    return this.items;
  }
}
