import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PhotoRoute extends Route {
  @service request;

  async model(params) {
    return await this.request.getData(`id/${params.photo_id}/info`);
  }
}
