const enhancer = require('./enhancer.js');

//item testing suite:
const item1 = { name: 'item1', durability: 10, enhancement: 10 };
const item2 = { name: 'item2', durability: 0, enhancement: 0 };
const item3 = { name: 'item3', durability: 100, enhancement: 20 };
const item4 = { name: 'item4' };
const item5 = { name: 'item5', durability: '100', enhancement: '10' };
const item6 = { name: 'item6', durability: 200, enhancement: 22 };
const item7 = { name: 'item7', durability: -12, enhancement: -1 };

const item8 = { name: 'item8', durability: 30, enhancement: 10 };
const item9 = { name: 'item9', durability: 100, enhancement: 14 };
const item10 = { name: 'item10', durability: 5, enhancement: 0 };
const item11 = { name: 'item11', durability: 10, enhancement: 15 };
const item12 = { name: 'item12', durability: 100, enhancement: 16 };
const item13 = { name: 'item13', durability: 50, enhancement: 20 };
const item14 = { name: 'item14', durability: 20 };
const item15 = { name: 'item15', enhancement: 12 };
const item16 = { name: 'item16', durability: 20, enhancement: '12' };
const item17 = { name: 'item17', durability: '20', enhancement: 12 };
const item18 = { name: 'item18', durability: 3, enhancement: 2 };
const item19 = { name: 'item19', durability: 9, enhancement: 18 };

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
    it('durability should drop by 5 if enhancement below 15', function() {
      expect(enhancer.fail(item8).durability).toBe(25);
      expect(enhancer.fail(item9).durability).toBe(95);
      expect(enhancer.fail(item10).durability).toBe(0);
    });

    it('durabiltiy should drop by 10 if enhancement at or above 15', function() {
      expect(enhancer.fail(item11).durability).toBe(0);
      expect(enhancer.fail(item12).durability).toBe(90);
      expect(enhancer.fail(item13).durability).toBe(40);
    });

    it('enhancement should drop by 1 if enhancement is above 16', function() {
      expect(enhancer.fail(item12).enhancement).toBe(16);
      expect(enhancer.fail(item13).enhancement).toBe(19);
    });

    it('throw if item does not have durability or enhancement', function() {
      expect(() => enhancer.fail(item4)).toThrow();
      expect(() => enhancer.fail(item14)).toThrow();
      expect(() => enhancer.fail(item15)).toThrow();
    });

    it('throw if enhancement or durability arent numbers', function() {
      expect(() => enhancer.fail(item5)).toThrow();
      expect(() => enhancer.fail(item16)).toThrow();
      expect(() => enhancer.fail(item17)).toThrow();
    });

    it('throw if enhancement or durability are out of range', function() {
      expect(() => enhancer.fail(item6)).toThrow();
      expect(() => enhancer.fail(item7)).toThrow();
    });

    it('durability should not go below 0', function() {
      expect(enhancer.fail(item18).durability).toBe(0);
      expect(enhancer.fail(item19).durability).toBe(0);
    });
  });

  describe('.get()', function() {
    it.todo(' **STRETCH** write tests for get function');
  });
});
