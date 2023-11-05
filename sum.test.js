const mod = require('./sum.js')

test('adds 1+2 to eq 3', () => {
  expect(mod.sum(1,2)).toBe(3);
});

test('object assignment',() =>{
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not zero', () => {
  for (let i = 0; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      expect(i+j).not.toBe(0);
    }}});

    test('null', () => {
      const n = null;
      expect(n).toBeNull();
      expect(n).toBeDefined();
      expect(n).not.toBeUndefined();
      expect(n).not.toBeTruthy();
      expect(n).toBeFalsy();
    });
    
    test('zero', () => {
      const z = 0;
      expect(z).not.toBeNull();
      expect(z).toBeDefined();
      expect(z).not.toBeUndefined();
      expect(z).not.toBeTruthy();
      expect(z).toBeFalsy();
    });

    test('two plus two', () => {
      const value = 2 + 2;
      expect(value).toBeGreaterThan(3);
      expect(value).toBeGreaterThanOrEqual(3.5);
      expect(value).toBeLessThan(5);
      expect(value).toBeLessThanOrEqual(4.5);
    
      // toBe and toEqual are equivalent for numbers
      expect(value).toBe(4);
      expect(value).toEqual(4);
    });