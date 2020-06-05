import React from 'react';

import { Link } from './styles';

export default ({ children, ...props }) => <Link style={props.style}>{children}</Link>;
