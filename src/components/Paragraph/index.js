import React from 'react';

import { Typography } from './styles';

export default ({ children, ...props }) => <Typography style={props.style}>{children}</Typography>;
