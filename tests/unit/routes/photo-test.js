import { module, test } from 'qunit';
import { setupTest } from 'lexie-cpa/tests/helpers';

module('Unit | Route | photo', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:photo');
    assert.ok(route);
  });
});
