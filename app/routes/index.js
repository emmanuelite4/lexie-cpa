import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service request;
  queryParams = {
    page: {
      refreshModel: true,
    },
  };

  async model(params) {
    return await this.request.getData(`v2/list?page=${params.page}&limit=25`);
  }
}
