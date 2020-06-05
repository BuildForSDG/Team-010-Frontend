import React from 'react';

import { Main } from './styles';

export default ({ children, ...props }) => <Main style={props.style}>{children}</Main>;
