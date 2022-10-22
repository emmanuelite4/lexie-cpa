import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    try {
      let response = await fetch('https://picsum.photos/v2/list');
      let parsed = await response.json();

      return parsed;
    } catch (e) {
      console.error(e);
    }
  }
}
