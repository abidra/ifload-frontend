import React from 'react';

class Body extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
        </Row>
      </div>
      )
    }
  }
export default Body;
