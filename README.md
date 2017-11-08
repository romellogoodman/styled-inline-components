# styled-inline-components
Inline style system for styled-components

[![npm](https://img.shields.io/npm/v/styled-inline-components.svg)](https://www.npmjs.com/package/styled-inline-components)

### Install
```
npm install styled-inline-components styled-components
```

## Usage

```js
import React from 'react';
import Elements from 'styled-inline-components';

const {Div, P} = Elements;

const Component = () => {
  return (
    <Div padding='20px' background='papayawhip'>
      <P color='palevioletred'>Hello World</P>
    </Div>
  );
};
```

Any dom element that styled-components [recognizes as valid](https://github.com/styled-components/styled-components/blob/master/src/utils/domElements.js̨) can be used. To require it, capitalize the first letter of the element.

For example:

| Tag     | Component |
|:--------|:----------|
| div     | Div       |
| p       | P         |
| section | Section   |

## Why?

Inspired by a [styled-components spectrum thread](https://spectrum.chat/thread/014f7053-e24a-4891-a633-4065e91f3bf8).
