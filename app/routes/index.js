import Route from '@ember/routing/route';
import ENV from 'lexie-cpa/config/environment';

export default class IndexRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true,
    },
  };

  async model(params) {
    let response = await fetch(
      `${ENV.API_ENDPOINT}v2/list?page=${params.page}&limit=25`
    );
    return await response.json();
  }
}
