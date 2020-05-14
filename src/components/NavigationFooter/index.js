import React from 'react';

import {
  Footer,
} from './styles';

export default ({ children, ...props }) => (
  <Footer style={props.style}>
    {children}
  </Footer>
);
