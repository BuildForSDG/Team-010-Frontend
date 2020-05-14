import React from 'react';

import {
  Option,
  InputDropdown,
  Icon,
  Container,
} from './styles';

export default (props) => (
  <Container style={props.style}>
    <InputDropdown>
      <Option value="text" selected={props.true} />
    </InputDropdown>
    <Icon />
  </Container>
);
