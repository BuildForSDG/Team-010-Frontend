import React from 'react';

import { Card } from './styles';

export default ({ children, ...props }) => <Card style={props.style}>{children}</Card>;
