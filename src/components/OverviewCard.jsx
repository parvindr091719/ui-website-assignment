import { Area } from '@ant-design/plots';
import { Card, Col, Divider, Row, Select, Typography } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { overviewData } from '../constants';


function OverviewCard() {
    const [data, setData] = React.useState(overviewData());
    const timestamp = useSelector(state => state.data.timestamp)
    const users = useSelector(state => state.data.users)
    const activeUserId = useSelector(state => state.data.activeUserId)
    let { overview } = users.filter(eachUser => eachUser.id === activeUserId)[0]

    const dispatch = useDispatch()

    React.useEffect(() => {
        setData(overviewData())
    }, [timestamp])
    const config = {
        xField: 'timePeriod',
        yField: 'value',
        height: 275,
        xAxis: {
            range: [0, 1],
        },
    };
    return (
        <Row className={'overview-card-container'}>
            <Col span={24}>
                <Card hoverable>
                    <Row>
                        <Col xxl={8} xl={8} md={24} sm={24}>
                            <Row>
                                <Col span={24}>
                                    <Typography.Text strong>Overview</Typography.Text>
                                </Col>
                                <Col span={24} className="pt-20">
                                    <Typography.Text strong type="secondary">This Month</Typography.Text>
                                </Col>
                                <Col span={24} className="pt-10">
                                    <Row>
                                        <Col span={8}>
                                            <Typography.Title level={4} strong >{overview.total}</Typography.Title>
                                        </Col>
                                        <Col span={16}>
                                            <span className='percentage-container top5'>
                                                <span className={overview.relativePercetage < 0 ? 'loss' : 'profit'}>
                                                    <Typography.Text strong type={overview.relativePercetage < 0 ? 'danger' : 'success'}>
                                                        {overview.relativePercetage > 0 ? `+${overview.relativePercetage}` : overview.relativePercetage}%
                                                    </Typography.Text>
                                                </span>
                                            </span>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24} className='pt-20'>
                                    <Row>
                                        {overview.info.map((info, index) => {
                                            return <Col span={12} key={index} className={' overview-info-elements'}>
                                                <Row className={index % 2 == 0 ? 'border-right-grey' : ''}>
                                                    <Col span={24}>
                                                        <Typography.Text type='secondary' strong>{info.type}</Typography.Text>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Typography.Title level={4}>{info.value}</Typography.Title>
                                                    </Col>
                                                    {index < 4 && <Divider />}
                                                </Row>
                                            </Col>
                                        })}
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xxl={16} xl={16} md={24} sm={24}>
                            <Row>
                                <Col span={24} className='text-end' >
                                    <Typography.Text strong>Sort By:</Typography.Text>
                                    <Select defaultValue="lucy" style={{ width: 72 }} bordered={false}
                                        onChange={() => setData(overviewData())}
                                    >
                                        <Select.Option value="Day">Day</Select.Option>
                                        <Select.Option value="Month">Month</Select.Option>
                                        <Select.Option value="lucy">Yearly</Select.Option>
                                    </Select>
                                </Col>
                                <Col span={24}>
                                    <Area {...config} data={data} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default OverviewCard