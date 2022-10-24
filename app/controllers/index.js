import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class IndexController extends Controller {
  queryParams = ['page'];
  @service router;

  page = 1;

  @action
  handlePrevPage() {
    if (this.page === 1) return;
    this.router.transitionTo(`/?page=${this.page - 1}`);
  }

  @action
  handleNextPage() {
    this.router.transitionTo(`/?page=${this.page + 1}`);
  }
}
