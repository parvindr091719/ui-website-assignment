import React from 'react'
import { Card, Avatar, Image, Col, Typography, Row, Divider, Tooltip, } from 'antd'
import { useSelector } from 'react-redux'
import { InfoCircleTwoTone } from '@ant-design/icons'
import { Gauge } from '@ant-design/plots';

const URL = 'https://images.ctfassets.net/hrltx12pl8hq/5yjq49yZ4IOwuD8lCUpLs6/e53019fe173267ea9124a3917aff1f34/the-arts-shutterstock_691440016.jpg?fit=fill&w=1024&h=683&fm=webp'
const AVATAR_URL = 'https://www.shutterstock.com/image-photo/venice-italy-august-30-emma-600w-1195796386.jpg'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function UserCard() {
    const users = useSelector(state => state.data.users)
    const activeUserId = useSelector(state => state.data.activeUserId)
    let currentUser = users.filter(eachUser => eachUser.id === activeUserId)[0]

    const config = {
        percent: currentUser.earning.calculatedPercent / 100,
        range: {
            color: 'l(0) 0:#B8E1FF 1:#3D76DD',
        },
        startAngle: Math.PI,
        endAngle: 2 * Math.PI,
        indicator: null,
        statistic: {
            title: {
                offsetY: -36,
                style: {
                    fontSize: '36px',
                    color: '#4B535E',
                },
                formatter: () => `${currentUser.earning.calculatedPercent}%`,
            },
            content: {
                style: {
                    fontSize: '24px',
                    lineHeight: '44px',
                    color: '#4B535E',
                },
                formatter: () => `$${numberWithCommas(currentUser.earning.total)}`,
            },
        },
    };

    return (
        <Card className='user-card-container' hoverable
            cover={<img className='user-card-cover-image' alt="Backdrop" src={URL} />}
        >
            <Col span={24} className='avatar-image-container'>
                <Avatar className='avatar-image' size={80} src={<Image src={AVATAR_URL} />} />
            </Col>
            <span className='three-dots'>...</span>
            <Col span={24} className='user-name text-center'><Typography.Title level={4}>{currentUser.name}</Typography.Title></Col>
            <Col span={24} className='user-designation text-center'><Typography.Text type="secondary" strong>{currentUser.designation}</Typography.Text></Col>
            <Col span={24}>
                <Row>
                    {currentUser.info.map((userInfo, index) => {
                        return <Col span={12} key={index} className='text-center pt-10'>
                            <Row className={index === 0 ? 'border-right-grey' : ''}>
                                <Col span={24}>
                                    <Typography.Title level={4}>{numberWithCommas(userInfo.value)}</Typography.Title>
                                </Col>
                                <Col span={24}>
                                    <Typography.Text type="secondary" strong>{userInfo.type}</Typography.Text>
                                </Col>
                            </Row>
                        </Col>
                    })}
                </Row>
            </Col>
            <Col span={24}>
                <Divider />
            </Col>
            <Col span={24}>
                <Row>
                    <Col span={12}>
                        <Typography.Text strong>Earning</Typography.Text>
                    </Col>
                    <Col span={12} className='text-end'>
                        <Tooltip title='Earning Details'>
                            <InfoCircleTwoTone />
                        </Tooltip>
                    </Col>
                </Row>
            </Col >
            <Col span={24} className='earning-chart-container'>
                <Gauge {...config} />
            </Col>
            <Col span={24} className='text-center pt-10'>
                <Typography.Text type="secondary" >Earning this month</Typography.Text>
            </Col>
            <Col span={24} className='text-center'>
                <Typography.Text type="secondary" >
                    <span className='percentage-container'>
                        <span className={currentUser.earning.prevMonthRelative < 0 ? 'loss' : 'profit'}>
                            <Typography.Text strong type={currentUser.earning.prevMonthRelative < 0 ? 'danger' : 'success'}>
                                {currentUser.earning.prevMonthRelative > 0 ? `+${currentUser.earning.prevMonthRelative}` : currentUser.earning.prevMonthRelative}%
                            </Typography.Text>
                        </span>
                    </span>
                    From previous month
                </Typography.Text>
            </Col>
            <Col span={24}>
                <Divider />
            </Col>
            <Col span={24}>
                <Typography.Text strong>Recent Activity</Typography.Text>
            </Col>
            <Col span={24}>
                {currentUser.recentActivity.map((event, index) => {
                    return <Row className={'pt-10'} key={index}>
                        <Col span={6}>
                            <Row className={'recent-activity-date-part'}>
                                <Col span={24}>
                                    <Typography.Text strong>
                                        {event.date[0]}
                                    </Typography.Text>
                                </Col>
                                <Col span={24}>
                                    <Typography.Text strong>
                                        {event.date[1]}
                                    </Typography.Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={18}>
                            <Typography.Text className={'pl-10'} type='secondary' strong ellipsis={{ tooltip: true }}>
                                {event.description}
                            </Typography.Text>
                        </Col>
                    </Row>
                })}
            </Col>
        </Card >
    )
}

export default UserCard