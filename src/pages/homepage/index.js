import React from 'react';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Icon from '../../components/Icon';
import Image from '../../components/Image';
import Main from '../../components/Main';
import Paragraph from '../../components/Paragraph';
import Link from '../../components/Link';
import Radio from '../../components/Radio';
import Row from '../../components/Row';
import Stack from '../../components/Stack';

export default () => (
  <Main style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <Stack style={{ justifyContent: 'flex-end', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
      <Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
        <Paragraph>Welcome to Farmhub</Paragraph>
      </Row>
      <Row style={{ justifyContent: 'flex-start', minWidth: '50px', minHeight: '50px' }}>
        <Card style={{ justifyContent: 'flex-start', minWidth: '50px', minHeight: '1310px', width: '1310px' }}>
          <Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
            <Card style={{ flexDirection: 'row', minWidth: '50px', minHeight: '90px', width: '1270px', flexGrow: '0' }}>
              <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                <Paragraph>Welcome to Farmhub</Paragraph>
                <Paragraph>Welcome to Farmhub</Paragraph>
                <Paragraph>Welcome to Farmhub</Paragraph>
              </Row>
              <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                <Icon liga="search" />
                <Icon liga="bars" />
              </Row>
            </Card>
          </Row>
          <Row style={{ minWidth: '50px', minHeight: '50px' }}>
            <Stack style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
              <Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                <Paragraph>Welcome to Farmhub</Paragraph>
              </Row>
              <Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                <Stack style={{ alignItems: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                  <Paragraph>Welcome to Farmhub</Paragraph>
                  <Paragraph>Welcome to Farmhub</Paragraph>
                  <Paragraph>Welcome to Farmhub</Paragraph>
                </Stack>
              </Row>
              <Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                <Paragraph>Quis turpis non</Paragraph>
              </Row>
            </Stack>
            <Stack style={{ justifyContent: 'flex-start', minWidth: '50px', minHeight: '50px' }}>
              <Stack style={{ minWidth: '50px', minHeight: '50px' }}>
                <Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                  <Paragraph>Welcome to Farmhub</Paragraph>
                </Row>
                <Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                  <Image
                    style={{ width: '150px', height: '70px', backgroundImage: 'url(/images/placeholder-01.jpg)' }}
                  />
                  <Paragraph>Welcome to Farmhub</Paragraph>
                </Row>
              </Stack>
              <Row style={{ justifyContent: 'flex-start', minWidth: '50px', minHeight: '50px' }}>
                <Card style={{ minWidth: '50px', minHeight: '480px', width: '970px' }}>
                  <Row style={{ justifyContent: 'flex-end', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                    <Card
                      style={{
                        flexDirection: 'row',
                        minWidth: '50px',
                        minHeight: '100px',
                        width: '1070px',
                        flexGrow: '0'
                      }}
                    >
                      <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                        <Paragraph>Welcome to Farmhub</Paragraph>
                        <Paragraph>Welcome to Farmhub</Paragraph>
                      </Row>
                      <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                        <Paragraph>Welcome to Farmhub</Paragraph>
                        <Paragraph>Welcome to Farmhub</Paragraph>
                      </Row>
                    </Card>
                  </Row>
                  <Stack style={{ minWidth: '50px', minHeight: '50px' }}>
                    <Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                      <Paragraph>Welcome to Farmhub</Paragraph>
                    </Row>
                    <Row style={{ justifyContent: 'flex-start', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                      <Paragraph>Welcome to Farmhub</Paragraph>
                      <Paragraph>Welcome to Farmhub</Paragraph>
                    </Row>
                  </Stack>
                </Card>
              </Row>
              <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                <Stack style={{ justifyContent: 'center', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                  <Paragraph>Welcome to Farmhub</Paragraph>
                </Stack>
                <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
                  <Radio style={{ width: '20px', height: '20px' }} />
                  <Icon liga="ellipsis-h" />
                </Row>
              </Row>
            </Stack>
          </Row>
        </Card>
      </Row>
    </Stack>
    <Stack
      style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexGrow: '0',
        minWidth: '50px',
        minHeight: '50px'
      }}
    >
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </Stack>
  </Main>
);
