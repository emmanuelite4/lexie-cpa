import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    try {
      const response = await fetch('https://picsum.photos/v2/list');
      const parsed = await response.json();
      console.log(parsed);
      return parsed;
    } catch (e) {
      console.log(e);
    }
  }
}
