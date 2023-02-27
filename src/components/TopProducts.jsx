import React from 'react'
import { Card, Typography, Row, Col, Select, Divider } from 'antd'
import { useSelector } from 'react-redux'

let products = [
    {
        name: 'Polo blue T-shirt',
        countSold: '3.82k',
        price: '$25.4'
    },
    {
        name: 'Hoodie for men',
        countSold: '3.14k',
        price: '$24.5'
    },
    {
        name: 'Red color Cap',
        countSold: '2.84k',
        price: '$22.5'
    },
    {
        name: 'Pocket T-shirt',
        countSold: '3.06k',
        price: '$30.2'
    }
]
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}
function TopProducts() {
    const [data, setData] = React.useState(products)
    const timestamp = useSelector(state => state.data.timestamp)

    React.useEffect(() => {
        setData(shuffle(products))
    }, [timestamp])


    return (
        <Row className={'top-products-container'}>
            <Col span={24}>
                <Card hoverable>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={16}>
                                    <span>
                                        <Typography.Text strong>Top Products</Typography.Text>
                                    </span>
                                </Col>
                                <Col span={8} className="text-end">
                                    <Select defaultValue="jack" bordered={false} onChange={() => setData(shuffle(products))}>
                                        <Select.Option value="jack">Weekly</Select.Option>
                                        <Select.Option value="lucy">Monthly</Select.Option>
                                        <Select.Option value="Yiminghe">Yearly</Select.Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Row className="products-list">
                                {data.map((eachProd, index) => {
                                    return <Col span={24} className='top-product-element pt-10' key={index}>
                                        <Row>
                                            <Col span={4} className='top-product-rank'>
                                                <Typography.Text strong className="rank-text">#{index + 1}</Typography.Text>
                                            </Col>
                                            <Col span={20}>
                                                <Row>
                                                    <Col span={16} className='top-product-info'>
                                                        <Row>
                                                            <Col span={24}>
                                                                <Typography.Text type="secondary" ellipsis={{ tooltip: 'true' }}>{eachProd.name}</Typography.Text>
                                                            </Col>
                                                            <Col span={24}>
                                                                <Typography.Text strong>{eachProd.price}</Typography.Text>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={8} className='text-end'>
                                                        <Typography.Text strong className='recent-activity-date-part products-count-sold'>{eachProd.countSold}</Typography.Text>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Divider className='order-status-divider' />
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

export default TopProducts