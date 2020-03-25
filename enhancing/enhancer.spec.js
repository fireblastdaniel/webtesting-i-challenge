const enhancer = require('./enhancer.js');

describe('enhancer.js', function() {
  describe('.repair()', function() {
    it.todo('throw if item does not have durability');
    it.todo('throw if durability isnt a number');
    it.todo('throw if durability is not between 0 and 100');
    it.todo('durability should be 100 after a repair');
  });

  describe('.success()', function() {
    it.todo('throw if item does not have enhancement');
    it.todo('throw if enhancement isnt a number');
    it.todo('throw if enhancement isnt between 0 and 20');
    it.todo('enhancement should be 1 higher than before');
    it.todo('enhancement should not increase above 20');
  });

  describe('.fail()', function() {
    it.todo('throw if item does not have durability or enhancement');
    it.todo('throw if enhancement or durability arent numbers');
    it.todo('throw if enhancement or durability are out of range');
    it.todo('durability should drop by 5 if enhancement below 15');
    it.todo('durabiltiy should drop by 10 if enhancement at or above 15');
    it.todo('enhancement should drop by 1 if enhancement is above 16');
    it.todo('durability should not go below 0');
  });

  describe('.get()', function() {
    it.todo(' **STRETCH** write tests for get function');
  });
});
