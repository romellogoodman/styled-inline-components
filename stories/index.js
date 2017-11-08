import {storiesOf} from '@storybook/react';
import React from 'react';

import Elements from '../src/index';

const {Div, P} = Elements;

storiesOf('HelloWorld', module).add('to Storybook', () => {
  return (
    <Div padding='20px' color='red'>
      <P font-weight='bold' font-size='32px'>
        Hello World
      </P>
    </Div>
  );
});
