import React from 'react';
import { Link } from 'react-router-dom';

import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Stack from '../../components/Stack';
import Image from '../../components/Image';
import Icon from '../../components/Icon';

import {
  Header,
} from './styles';

export default ({ children, ...props }) => (
  <Header style={props.style}>
    {children}
    <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
        <Link to="/">
          <Image
          style={{
            width: '100px',
            height: '100px',
            backgroundImage: 'url(/logo192.png)'
          }}
          />
        </Link>
      </Row>

      <Stack
        style={{
          justifyContent: 'flex-end',
          flexGrow: '0',
          minWidth: '50px',
          minHeight: '50px'
        }}
      >
        <Row>
        <Link to="/">
            {' '}
            <Paragraph>About Us</Paragraph>
          </Link>
          <Link to="/dashboard">
            {' '}
            <Paragraph>My Dashboard</Paragraph>
          </Link>
          <Link to="/contact">
            {' '}
            <Paragraph>Contact Us</Paragraph>
          </Link>
          <Link to="/login">
            {' '}
            <Paragraph>SignIn</Paragraph>
          </Link>
          <Link to="/register">
            {' '}
            <Paragraph>Register as Buyer</Paragraph>
          </Link>
          <Link to="/register">
            {' '}
            <Paragraph>Register as Farmer</Paragraph>
          </Link>
          <Link to="/checkout">
            <Icon liga="shopping-cart" />{' '}
          </Link>
        </Row>
      </Stack>
    
  </Header>
  
);
