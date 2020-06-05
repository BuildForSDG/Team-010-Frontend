import React from 'react';

import Button from '../../components/button';
import Image from '../../components/Image';
import Main from '../../components/Main';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Stack from '../../components/Stack';
import InputField from '../../components/InputField';
import Title from '../../components/Title';

export default () => (
  <Main style={{ flexDirection: 'row' }}>
    <Row style={{ minWidth: '50%' }}>
      <Image style={{ width: '600px', height: '600px', backgroundImage: 'url(/images/3-blog.jpg)' }} />
    </Row>
    <Stack style={{ minWidth: '50%' }}>
      <Row>
        <Title>Log Into Your Account</Title>
      </Row>

      <Row>
        <Paragraph>Email</Paragraph>
      </Row>
      <Row style={{ justifyContent: 'center', minWidth: '50px' }}>
        <InputField placeholder="Enter your email address" style={{ width: '100%' }} />
      </Row>
      <Row>
        <Paragraph>Password</Paragraph>
      </Row>
      <Row style={{ justifyContent: 'center', minWidth: '50px' }}>
        <InputField placeholder="Enter your password" style={{ width: '100%' }} />
      </Row>
      <Row style={{ justifyContent: 'flex-end', flexGrow: '0', minWidth: '50px' }}>
        <Button>Login</Button>
      </Row>
      <Row>
        <Paragraph>New User ? Forgot Password?</Paragraph>
      </Row>
    </Stack>
  </Main>
);
