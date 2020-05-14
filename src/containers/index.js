import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import Card from '../components/Card';
import Image from '../components/Image';
import Main from '../components/Main';
import NavigationHeader from '../components/NavigationHeader';
import Paragraph from '../components/Paragraph';
import Row from '../components/Row';
import Stack from '../components/Stack';
import Icon from '../components/Icon';
import InputField from '../components/InputField';
import NavigationFooter from '../components/NavigationFooter';
import Select from '../components/Select';

export default () => (
  <Main style={{ justifyContent: 'center', alignItems: 'center' }}>
    <NavigationHeader>
      <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
        <Link to="/">
          {' '}
          <Paragraph>Farm Hub</Paragraph>
        </Link>
        <Link to="/">
          {' '}
          <Paragraph>Sell</Paragraph>
        </Link>
        <Link to="/">
          {' '}
          <Paragraph>Contact</Paragraph>
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
            <Icon liga="shopping-cart" />{' '}
          </Link>
          <Link to="/">
            {' '}
            <Paragraph>SignIn</Paragraph>
          </Link>
          <Link to="/">
            {' '}
            <Paragraph>SignUp</Paragraph>
          </Link>
        </Row>
      </Stack>
    </NavigationHeader>
    <Stack style={{ minWidth: '50px', minHeight: '50px' }}>
      <Row
        style={{
          justifyContent: 'space-around',
          flexGrow: '0',
          minWidth: '50px',
          minHeight: '50px'
        }}
      >
        <Select id="Categories">
          <option value="" style={{ fontSize: '15px' }}>
            Cateories
          </option>

          <option value="Grains" style={{ fontSize: '15px' }}>
            Grains
          </option>
          <option value="Vegetables" style={{ fontSize: '15px' }}>
            Vegetables
          </option>
          <option value="Pepper" style={{ fontSize: '15px' }}>
            Pepper
          </option>
          <option value="Yams" style={{ fontSize: '15px' }}>
            Yams
          </option>
          <option value="Fruits" style={{ fontSize: '15px' }}>
            Fruits
          </option>
          <option value="Tomatoes" style={{ fontSize: '15px' }}>
            Tomatoes
          </option>

          <option value="Other">Other</option>
        </Select>
        <Row
          style={{
            justifyContent: 'flex-end',
            flexGrow: '0',
            minWidth: '50px',
            minHeight: '50px'
          }}
        >
          {' '}
          <InputField placeholder="search" style={{ width: '750px' }} />
          <Button>Search</Button>
        </Row>
      </Row>
      <Row
        style={{
          justifyContent: 'flex-start',
          flexGrow: '0',
          minWidth: '50px',
          minHeight: '50px'
        }}
      >
        <Image
          style={{
            width: 'calc(100% - 20px)',
            height: '370px',
            backgroundImage: 'url(/images/farm.jpg)'
          }}
        />
      </Row>
    </Stack>
    <Stack style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
      <Row style={{ minWidth: '50px', minHeight: '50px' }}>
        <Stack style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
          <Row
            style={{
              justifyContent: 'flex-start',
              flexGrow: '0',
              minWidth: '50px',
              minHeight: '50px'
            }}
          >
            <Link to="/">
              <Card
                style={{
                  justifyContent: 'flex-start',
                  minWidth: '50px',
                  minHeight: '350px',
                  width: '430px',
                  flexGrow: '0'
                }}
              >
                <Image
                  style={{
                    width: '370px',
                    height: '180px',
                    backgroundImage: 'url(/images/rice.jpg)'
                  }}
                />
                <Paragraph>Rice</Paragraph>
                <Paragraph>Price</Paragraph>
              </Card>
            </Link>
            <Link to="/">
              <Card
                style={{
                  justifyContent: 'flex-start',
                  minWidth: '50px',
                  minHeight: '350px',
                  width: '430px',
                  flexGrow: '0',
                  flexDirection: 'column'
                }}
              >
                <Image
                  style={{
                    width: '370px',
                    height: '180px',
                    backgroundImage: 'url(/images/beans.jpeg)'
                  }}
                />
                <Paragraph>Beans</Paragraph>
                <Paragraph>Price</Paragraph>
              </Card>
            </Link>
            <Link to="/">
              <Card
                style={{
                  justifyContent: 'flex-start',
                  minWidth: '50px',
                  minHeight: '350px',
                  width: '430px',
                  flexGrow: '0',
                  flexDirection: 'column'
                }}
              >
                <Image
                  style={{
                    width: '370px',
                    height: '180px',
                    backgroundImage: 'url(/images/water-melon.jpg)'
                  }}
                />
                <Paragraph>Water mellon</Paragraph>
                <Paragraph>Price</Paragraph>
              </Card>
            </Link>
          </Row>
        </Stack>
      </Row>
      <Stack style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
        <Row
          style={{
            justifyContent: 'flex-start',
            flexGrow: '0',
            minWidth: '50px',
            minHeight: '50px'
          }}
        >
          <Link to="">
            <Card
              style={{
                justifyContent: 'flex-start',
                minWidth: '50px',
                minHeight: '350px',
                width: '430px',
                flexGrow: '0',
                flexDirection: 'column'
              }}
            >
              <Image
                style={{
                  width: '370px',
                  height: '180px',
                  backgroundImage: 'url(/images/yam.jpg)'
                }}
              />
              <Paragraph>800 tubers of sweet Yam</Paragraph>
              <Paragraph>Price</Paragraph>
            </Card>
          </Link>
          <Link to="">
            <Card
              style={{
                justifyContent: 'flex-start',
                minWidth: '50px',
                minHeight: '350px',
                width: '430px',
                flexGrow: '0',
                flexDirection: 'column'
              }}
            >
              <Image
                style={{
                  width: '370px',
                  height: '180px',
                  backgroundImage: 'url(/images/toma.jpg)'
                }}
              />
              <Paragraph>Baskets of Tomatos</Paragraph>
              <Paragraph>Price</Paragraph>
            </Card>
          </Link>
          <Link to="/">
            <Card
              style={{
                justifyContent: 'flex-start',
                minWidth: '50px',
                minHeight: '350px',
                width: '430px',
                flexGrow: '0',
                flexDirection: 'column'
              }}
            >
              <Image
                style={{
                  width: '370px',
                  height: '180px',
                  backgroundImage: 'url(/images/onions.jpg)'
                }}
              />
              <Paragraph>25 bags Onions</Paragraph>
              <Paragraph>Price</Paragraph>
            </Card>
          </Link>
        </Row>
      </Stack>
      <NavigationFooter>
        <Row>
          <Stack>
            <Link to="/">
              {' '}
              <Paragraph>About Us</Paragraph>
            </Link>
            <Link to="/">
              {' '}
              <Paragraph>Terms and conditions</Paragraph>
            </Link>
          </Stack>
          <Stack>
            <Link to="/">
              {' '}
              <Paragraph> Join Us</Paragraph>
            </Link>
            <Link to="/">
              {' '}
              <Paragraph>Join Us as a buyer</Paragraph>
            </Link>
            <Link to="/">
              {' '}
              <Paragraph>Join Us as a farmer</Paragraph>
            </Link>
            <Link to="/">
              {' '}
              <Paragraph>join us as a logistic partner</Paragraph>
            </Link>
          </Stack>
          <Stack>
            <Link to="/">
              {' '}
              <Paragraph> Contact Us</Paragraph>
            </Link>
            <Paragraph></Paragraph>
          </Stack>
        </Row>
      </NavigationFooter>
    </Stack>
  </Main>
);
