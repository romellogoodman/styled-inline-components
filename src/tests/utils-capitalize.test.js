import capitalize from '../utils/capitalize';

describe('capitalize.js', () => {
  it('should capitalize abc to ABC', () => {
    const input = 'abc';
    const output = 'Abc';

    expect(capitalize(input)).toEqual(output);
  });

  it("shouldn't capitalize stringified numbers", () => {
    const input = '123';
    const output = '123';

    expect(capitalize(input)).toEqual(output);
  });
});
