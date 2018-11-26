import React from 'react';
import {storiesOf} from '@storybook/react';

import Elements from '../src/index';

const {Div, P} = Elements;

storiesOf('HelloWorld', module).add('to Storybook', () => {
  return (
    <Div background="papayawhip" padding="20px" text-align="center">
      <P color="palevioletred" font-size="48px" font-weight="bold">
        Hello World
      </P>
    </Div>
  );
});
