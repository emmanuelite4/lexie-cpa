import Service from '@ember/service';
import ENV from 'lexie-cpa/config/environment';

export default class RequestService extends Service {
  async getData(url) {
    let response = await fetch(`${ENV.API_ENDPOINT}${url}`);
    return await response.json();
  }
}
