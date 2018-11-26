import styled from 'styled-components';

import capitalize from './capitalize';
import createCSS from './createCSS';
import domElements from './domElements';

const Elements = domElements.reduce((result, element) => {
  result[capitalize(element)] = styled[element]`
    ${props => createCSS(props)};
  `;

  return result;
}, {});

export default Elements;
