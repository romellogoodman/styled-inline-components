export default function cleanProps(props) {
  // eslint-disable-next-line
  const {children, theme, ...rest} = props;

  return Object.keys(rest)
    .map(key => `${key}: ${rest[key]};`)
    .join('\n');
}
