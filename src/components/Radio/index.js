import React from 'react';

import { Toggle, Input, Label } from './styles';

export default (props) => (
  <Label style={props.style}>
    <Toggle checked={props.checked} />
    <Input type="checkbox" defaultChecked={props.checked} />
  </Label>
);
