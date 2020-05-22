import React from 'react';

import { Stack } from './styles';

export default ({ children, ...props }) => <Stack style={props.style}>{children}</Stack>;
