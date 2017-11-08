import styled from 'styled-components';
import domElements from 'styled-components/lib/utils/domElements';

function capitalize (element) {
  return element.charAt(0).toUpperCase() + element.slice(1);
}

function constructProps (props) {
  const {chidlren, theme, ...rest} = props;

  return Object.keys(props)
    .map(key => `${key}: ${rest[key]};`)
    .join('\n');
}

const Elements = domElements.reduce((result, element) => {
  result[capitalize(element)] = styled[element]`
    ${props => {
    return constructProps(props);
  }};
  `;

  return result;
}, {});

export default Elements;
