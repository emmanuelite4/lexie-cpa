import Model, { attr } from '@ember-data/model';

export default class PhotoModel extends Model {
  @attr id;
  @attr author;
  @attr width;
  @attr height;
  @attr url;
  @attr download_url;
}
