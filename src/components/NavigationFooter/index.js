import React from 'react';
import { Link } from 'react-router-dom';
import Paragraph from '../Paragraph';
import Row from '../Row';
import Stack from '../Stack';
import { Footer } from './styles';

export default ({ style }) => (
  <Footer style={style}>
    <Row>
      <Stack>
        <Link to="/">
          <Paragraph>About Us</Paragraph>
        </Link>
        <Link to="/contact">
          <Paragraph> Contact Us</Paragraph>
        </Link>
      </Stack>
      <Stack>
        <Paragraph>Join Us as a Buyer</Paragraph>
        <Link to="/register">
          <Paragraph>Join Us as a farmer</Paragraph>
        </Link>
        <Link to="/register">
          <Paragraph>Join Us as a Logistic Partner</Paragraph>
        </Link>
      </Stack>
      <Stack>
        <Link to="/policy">
          <Paragraph>Terms and conditions</Paragraph>
        </Link>
        <Link to="/login">
          <Paragraph> Login</Paragraph>
        </Link>
      </Stack>
    </Row>
  </Footer>
);
