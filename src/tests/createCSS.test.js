import createCSS from '../createCSS';

describe('capitalize.js', () => {
  it('should create CSS from an object', () => {
    const input = {
      hello: 'world',
      goodbye: 'world'
    };
    // eslint-disable-next-line
    const {children, theme, ...rest} = input;
    const output = Object.keys(rest)
      .map(key => `${key}: ${rest[key]};`)
      .join('\n');

    expect(createCSS(input)).toEqual(output);
  });
});
