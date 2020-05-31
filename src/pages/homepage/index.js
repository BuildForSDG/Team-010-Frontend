import React from 'react';

import Button from '../../components/button';
import Main from '../../components/Main';
import Paragraph from '../../components/Paragraph';
import Link from '../../components/Link';
import Stack from '../../components/Stack';

export default () => (
  <Main style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <Stack style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
      {/* <Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}> */}
        <Paragraph>Welcome to FarmHub</Paragraph>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
    </Stack>
  </Main>
);
