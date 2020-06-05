import React from 'react';

import { Row } from './styles';

export default ({ children, ...props }) => <Row style={props.style}>{children}</Row>;
