const enhancer = require('./enhancer.js');

//item testing suite:
const item1 = { name: 'item1', durability: 10, enhancement: 10 };
const item2 = { name: 'item2', durability: 0, enhancement: 0 };
const item3 = { name: 'item3', durability: 100, enhancement: 20 };
const item4 = { name: 'item4' };
const item5 = { name: 'item5', durability: '100', enhancement: '10' };
const item6 = { name: 'item6', durability: 200, enhancement: 22 };
const item7 = { name: 'item7', durability: -12, enhancement: -1 };

describe('enhancer.js', function() {
  describe('.repair()', function() {
    it('durability should be 100 after a repair', function() {
      expect(enhancer.repair(item1).durability).toBe(100);
      expect(enhancer.repair(item2).durability).toBe(100);
      expect(enhancer.repair(item3).durability).toBe(100);
    });

    it('throw if item does not have durability', function() {
      expect(() => enhancer.repair(item4)).toThrow();
    });

    it('throw if durability isnt a number', function() {
      expect(() => enhancer.repair(item5)).toThrow();
    });

    it('throw if durability is not between 0 and 100', function() {
      expect(() => enhancer.repair(item6)).toThrow();
      expect(() => enhancer.repair(item7)).toThrow();
    });
  });

  describe('.succeed()', function() {
    it('enhancement should be 1 higher than before', function() {
      expect(enhancer.succeed(item1).enhancement).toBe(11);
      expect(enhancer.succeed(item2).enhancement).toBe(1);
    });

    it('enhancement should not increase above 20', function() {
      expect(enhancer.succeed(item3).enhancement).toBe(20);
    });

    it('throw if item does not have enhancement', function() {
      expect(() => enhancer.succeed(item4)).toThrow();
    });

    it('throw if enhancement isnt a number', function() {
      expect(() => enhancer.succeed(item5)).toThrow();
    });

    it('throw if enhancement isnt between 0 and 20', function() {
      expect(() => enhancer.succeed(item6)).toThrow();
      expect(() => enhancer.succeed(item7)).toThrow();
    });
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
