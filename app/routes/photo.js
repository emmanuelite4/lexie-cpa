import Route from '@ember/routing/route';
import ENV from 'lexie-cpa/config/environment';

export default class PhotoRoute extends Route {
  async model(params) {
    let response = await fetch(`${ENV.API_ENDPOINT}id/${params.photo_id}/info`);
    return await response.json();
  }
}
