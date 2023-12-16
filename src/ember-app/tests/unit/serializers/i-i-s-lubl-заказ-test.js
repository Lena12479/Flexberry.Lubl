import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-lubl-заказ', 'Unit | Serializer | i-i-s-lubl-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-lubl-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-lubl-оплата',

    'model:i-i-s-lubl-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
