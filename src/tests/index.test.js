import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import Elements from '../index';
import capitalize from '../utils/capitalize';
import domElements from 'styled-components/lib/utils/domElements';

const {Div} = Elements;

describe('index.js', () => {
  it('should render all valid dom elements', () => {
    const wrapper = shallow(
      <div>{domElements.map(element => Elements[capitalize(element)])}</div>
    );
    const ElementsLength = Object.keys(Elements).length;

    expect(ElementsLength).toEqual(domElements.length);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should correctly apply styles', () => {
    const wrapper = shallow(<Div font-weight='32px' text-align='center' />);

    expect(wrapper).toHaveStyleRule('font-weight', '32px');
    expect(wrapper).toHaveStyleRule('text-align', 'center');
  });

  it('should correctly apply objects as a typeof string', () => {
    const wrapper = shallow(<Div names={{john: 'doe', jane: 'doe'}} />);

    expect(wrapper).toHaveStyleRule('names', '[object Object]');
  });
});
