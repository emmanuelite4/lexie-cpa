import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true,
    },
  };

  async model(params) {
    let response = await fetch(
      `http://jsonplaceholder.typicode.com/photos?_start=${params.page}&_limit=25`
    );
    return await response.json();
  }
}
