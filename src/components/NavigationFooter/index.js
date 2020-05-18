import React from 'react';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import { Link } from 'react-router-dom';
import Stack from '../../components/Stack';

import {
  Footer,
} from './styles';

export default ({ children, ...props }) => (
  <Footer style={props.style}>
    {children}
    <Row>
          <Stack>
            <Link to="/">
              {' '}
              <Paragraph>About Us</Paragraph>
            </Link>
            <Link to="/contact">
              {' '}
              <Paragraph> Contact Us</Paragraph>
            </Link>
          </Stack>
          <Stack>
            <Link to="/register">
              {' '}
              <Paragraph>Join Us as a Buyer</Paragraph>
            </Link>
            <Link to="/register">
              {' '}
              <Paragraph>Join Us as a farmer</Paragraph>
            </Link>
            <Link to="/register">
              {' '}
              <Paragraph>Join Us as a Logistic Partner</Paragraph>
            </Link>
          </Stack>
          <Stack>
            <Link to="/policy">
              {' '}
              <Paragraph>Terms and conditions</Paragraph>
            </Link>
            <Link to="/login">
              {' '}
              <Paragraph> Login</Paragraph>
            </Link>
          </Stack>
        </Row>
  </Footer>
);
