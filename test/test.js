

var add = (a, b) => {
  return a + b;
}

test('return a + b', () => {
  expect(add(1, 2)).toBe(3);
})