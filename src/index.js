import styled from 'styled-components';
import domElements from 'styled-components/lib/utils/domElements';

import capitalize from './utils/capitalize';
import createCSS from './utils/createCSS';

const Elements = domElements.reduce((result, element) => {
  result[capitalize(element)] = styled[element]`
    ${props => createCSS(props)};
  `;

  return result;
}, {});

export default Elements;
