import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import React from 'react';

import HelloWorld from '../src/index';

storiesOf('HelloWorld', module)
  .add('to Storybook', () => <HelloWorld />);
