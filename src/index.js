import styled from 'styled-components';
import domElements from 'styled-components/lib/utils/domElements';

function capitalize (element) {
  return element.charAt(0).toUpperCase() + element.slice(1);
}

function constructProps (props) {
  const {children, theme, ...rest} = props;

  return Object.keys(rest)
    .map(key => `${key}: ${rest[key]};`)
    .join('\n');
}

const Elements = domElements.reduce((result, element) => {
  result[capitalize(element)] = styled[element]`
    ${props => constructProps(props)};
  `;

  return result;
}, {});

export default Elements;
