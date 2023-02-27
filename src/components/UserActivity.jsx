import { Area } from '@ant-design/plots';
import { Card, Col, Row, Select, Typography } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { getUserActivityData } from '../constants';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function UserActivity() {
    const [data, setData] = React.useState(getUserActivityData());

    const timestamp = useSelector(state => state.data.timestamp)

    React.useEffect(() => {
        setData(getUserActivityData())
    }, [timestamp]);

    const config = {
        data,
        xField: 'year',
        yField: 'value',
        seriesField: 'country',
        height: 172,
        color: ['#82d1de', '#cb302d', '#e3ca8c'],
        areaStyle: {
            fillOpacity: 0.7,
        },
        appendPadding: 10,
        isPercent: true,
        yAxis: {
            label: {
                formatter: (value) => {
                    return value * 100;
                },
            },
        },
        pattern: {
            type: 'line',
        },
    };

    return (
        <Row className="user-activity-caontainer">
            <Col span={24}>
                <Card hoverable>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={16}>
                                    <span>
                                        <Typography.Text strong>User Activity</Typography.Text>
                                    </span>
                                </Col>
                                <Col span={8} className="text-end">
                                    <Select defaultValue="lucy" bordered={false} onChange={() => setData(getUserActivityData())}>
                                        <Select.Option value="jack">Weekly</Select.Option>
                                        <Select.Option value="lucy">Monthly</Select.Option>
                                        <Select.Option value="Yiminghe">Yearly</Select.Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Typography.Text strong type='secondary'>This Month</Typography.Text>
                        </Col>
                        <Col span={24}>
                            <Typography.Title level={4} >
                                {numberWithCommas(data.reduce((acc, curr) => { acc += curr.value; return acc }, 0))}
                            </Typography.Title>
                        </Col>
                        <Col span={24} >
                            <Area {...config} />;
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default UserActivity