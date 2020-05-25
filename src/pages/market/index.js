import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Image from '../../components/Image';
import Main from '../../components/Main';
import NavigationHeader from '../../components/NavigationHeader';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Stack from '../../components/Stack';
import InputField from '../../components/InputField';
import NavigationFooter from '../../components/NavigationFooter';
import Select from '../../components/Select';

export default () => (
  <Main style={{ justifyContent: 'center', alignItems: 'center' }}>
    <NavigationHeader> </NavigationHeader>
    <Stack style={{ minWidth: '50px', minHeight: '50px' }}>
      <Row
        style={{
          justifyContent: 'space-around',
          flexGrow: '0',
          minWidth: '50px',
          minHeight: '50px'
        }}
      >
        <Select id="Categories" placeholder="Categories">
          <option value="" style={{ fontSize: '15px' }}>
            All Categories
          </option>
          <option value="Grains" style={{ fontSize: '15px' }}>
            Perishable
          </option>
          <option value="Vegetables" style={{ fontSize: '15px' }}>
            Unperishable
          </option>
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
          <InputField placeholder="Find a Product" style={{ width: '750px' }} />
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
            backgroundImage: 'url(/images/categories/farm.jpeg)'
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
                    backgroundImage: 'url(/images/categories/rice.jpeg)'
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
                    backgroundImage: 'url(/images/categories/beans.jpeg)'
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
                    backgroundImage: 'url(/images/categories/watermelon.jpeg)'
                  }}
                />
                <Paragraph>Water melon</Paragraph>
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
                  backgroundImage: 'url(/images/categories/yam.jpeg)'
                }}
              />
              <Paragraph>Tubers of sweet Yam</Paragraph>
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
                  backgroundImage: 'url(/images/categories/tomato.jpeg)'
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
                  backgroundImage: 'url(/images/categories/onions.jpeg)'
                }}
              />
              <Paragraph>Bags of Onions</Paragraph>
              <Paragraph>Price</Paragraph>
            </Card>
          </Link>
        </Row>
      </Stack>
      <NavigationFooter> </NavigationFooter>
    </Stack>
  </Main>
);
