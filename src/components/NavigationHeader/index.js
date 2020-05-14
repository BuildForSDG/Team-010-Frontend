import React from 'react';

import {
  Header,
} from './styles';

export default ({ children, ...props }) => (
  <Header style={props.style}>
    {children}
  </Header>
);
