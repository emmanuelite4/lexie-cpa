import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'lexie-cpa/tests/helpers';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('.navbar-brand').hasText('MyPhotoShop');
  });

  test('pagination /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('.pagination-container').exists();

    assert.dom('[data-testid="prev-button"]').exists();
    assert.dom('[data-testid="next-button"]').exists();

    assert.dom('[data-testid="prev-button"]').isDisabled();

    await click('[data-testid="next-button"]');

    assert.strictEqual(currentURL(), '/?page=1');

    assert.dom('[data-testid="prev-button"]').isEnabled();

    await click('[data-testid="prev-button"]');

    assert.strictEqual(currentURL(), '/');
    assert.dom('[data-testid="prev-button"]').isDisabled();
  });
});
