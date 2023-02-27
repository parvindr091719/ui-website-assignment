import { EllipsisOutlined } from '@ant-design/icons';
import { measureTextWidth, Pie } from '@ant-design/plots';
import { Card, Col, Divider, Row, Typography } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { getOrderStats } from '../constants';

const colors = [
  '#FF6B3B',
  '#626681',
  '#FFC100',
  '#9FB40F',
  '#76523B',
  '#DAD5B5',
  '#0E8E89',
  '#E19348',
  '#F383A2',
  '#247FEA',
]

function OrderStatus() {

  const [data, setData] = React.useState(getOrderStats())
  const timestamp = useSelector(state => state.data.timestamp)

  React.useEffect(() => {
    setData(getOrderStats())
  }, [timestamp])

  function renderStatistic(containerWidth, text, style) {
    const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
    const R = containerWidth / 2; 

    let scale = 1;

    if (containerWidth < textWidth) {
      scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
  }


  const config = {
    appendPadding: 10,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    height: 200,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v) => `${v} $`,
      },
    },
    label: {
      type: 'inner',
      offset: '-50%',
      style: {
        textAlign: 'center',
        fontSize: 14
      },
      autoRotate: false,
      content: '{value}',
    },
    statistic: {
      title: {
        offsetY: -4,
        customHtml: (container, view, datum) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          const text = datum ? datum.type : 'Total';
          return renderStatistic(d, text, {
            fontSize: 14,
          });
        },
      },
      content: {
        offsetY: 4,
        style: {
          fontSize: '14px',
        },
        customHtml: (container, view, datum, data) => {
          const { width } = container.getBoundingClientRect();
          const text = datum ? `$ ${datum.value}` : `$ ${data.reduce((r, d) => r + d.value, 0)}`;
          return renderStatistic(width, text, {
            fontSize: 20,
          });
        },
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
      {
        type: 'pie-statistic-active',
      },
    ],
    theme: {
      colors10: colors.sort(() => .5 - Math.random()).slice(0, 3)
    }
  };

  return (
    <Row className={'order-status-container'}>
      <Col span={24}>
        <Card hoverable>
          <Row>
            <Col span={24}>
              <Row>
                <Col span={16}>
                  <span>
                    <Typography.Text strong>Order Stats</Typography.Text>
                  </span>
                </Col>
                <Col span={8} className="text-end">
                  <Typography.Text strong type="secondary">
                    <EllipsisOutlined />
                  </Typography.Text>

                </Col>
              </Row>
            </Col>
            <Col span={24} className='pt-10 order-status-chart' >
              <Pie {...config} data={data} />
            </Col>
            <Col span={24}>
              <Divider className='order-status-divider' />
            </Col>
            <Col span={24}>
              <Row>
                {data.map((value, index) => {
                  return <Col span={8} key={index}>
                    <Row className='text-center'>
                      <Col span={24}>
                        <Typography.Text strong ellipsis={{ tooltip: true }} type='secondary'>{value.type}</Typography.Text>
                      </Col>
                      <Col span={24} className='pt-10'>
                        <Typography.Text strong>{value.value}</Typography.Text>
                      </Col>
                    </Row>
                  </Col>
                })}
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default OrderStatus