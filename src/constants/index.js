const randomnumber = (minimum, maximum, float = true) => {
    return float ? parseFloat((Math.random() * (maximum - minimum) + minimum).toFixed(4)) : parseInt((Math.random() * (maximum - minimum) + minimum).toFixed(4))
}

export const overviewData = () => {
    let result = [
        {
            "timePeriod": "2006 Q3",
            "value": 1
        },
        {
            "timePeriod": "2006 Q4",
            "value": 1.08
        },
        {
            "timePeriod": "2007 Q1",
            "value": 1.17
        },
        {
            "timePeriod": "2007 Q2",
            "value": 1.26
        },
        {
            "timePeriod": "2007 Q3",
            "value": 1.34
        },
        {
            "timePeriod": "2007 Q4",
            "value": 1.41
        },
        {
            "timePeriod": "2008 Q1",
            "value": 1.52
        },
        {
            "timePeriod": "2008 Q2",
            "value": 1.67
        }
    ]
    result = result.map(data => {
        data.value = randomnumber(1.01, 4.001)
        return data
    })
    return result
}

export const getUserActivityData = () => {
    let data = [{
        "country": "Asia",
        "year": "1750",
        "value": 502
    }, {
        "country": "Asia",
        "year": "1800",
        "value": 635
    }, {
        "country": "Asia",
        "year": "1850",
        "value": 809
    }, {
        "country": "Asia",
        "year": "1900",
        "value": 947
    }, {
        "country": "Asia",
        "year": "1950",
        "value": 1402
    }, {
        "country": "Asia",
        "year": "1999",
        "value": 3634
    }, {
        "country": "Asia",
        "year": "2050",
        "value": 5268
    }, {
        "country": "Africa",
        "year": "1750",
        "value": 106
    }, {
        "country": "Africa",
        "year": "1800",
        "value": 107
    }, {
        "country": "Africa",
        "year": "1850",
        "value": 111
    }, {
        "country": "Africa",
        "year": "1900",
        "value": 133
    }, {
        "country": "Africa",
        "year": "1950",
        "value": 221
    }, {
        "country": "Africa",
        "year": "1999",
        "value": 767
    }, {
        "country": "Africa",
        "year": "2050",
        "value": 1766
    }, {
        "country": "Europe",
        "year": "1750",
        "value": 163
    }, {
        "country": "Europe",
        "year": "1800",
        "value": 203
    }, {
        "country": "Europe",
        "year": "1850",
        "value": 276
    }, {
        "country": "Europe",
        "year": "1900",
        "value": 408
    }, {
        "country": "Europe",
        "year": "1950",
        "value": 547
    }, {
        "country": "Europe",
        "year": "1999",
        "value": 729
    }, {
        "country": "Europe",
        "year": "2050",
        "value": 628
    }]

    return data.map(record => {
        record.value = randomnumber(1000, 2200, false)
        return record
    })
}

export const secondUser = () => {
    return {
        name: '',
        revenue: 21456,
        orders: 5643,
        customers: 45254,
        reference: {
            revenue: 21457,
            orders: 5644,
            customers: 45255,
        },
        activeUserId: 'jBen',
        users: [
            {
                id: 'jBen',
                name: 'Jennefer Bennett',
                designation: 'Product Designer',
                earning: {
                    total: 26256,
                    calculatedPercent: 76,
                    prevMonthRelative: 2.65
                },
                recentActivity: [
                    {
                        date: [12, 'Sep'],
                        description: 'Responded to need "Volunteer Activities"'
                    },
                    {
                        date: [11, 'Sep'],
                        description: 'Everyone realizes would be desirable...'
                    },
                    {
                        date: [10, 'Sep'],
                        description: 'Joined the group "Boardsmanship Forum"'
                    }
                ],
                info: [
                    {
                        type: 'Products',
                        value: 1269
                    },
                    {
                        type: 'Followers',
                        value: '5.2k',
                        shortForm: true
                    }
                ],
                overview: {
                    total: '$24,568',
                    relativePercetage: 2.56,
                    info: [
                        {
                            type: 'Orders',
                            value: '5,643'
                        },
                        {
                            type: 'Sales',
                            value: '16,273',
                        },
                        {
                            type: 'Order Value',
                            value: '12.03%'
                        },
                        {
                            type: 'Customers',
                            value: '21,456'
                        },
                        {
                            type: 'Income',
                            value: '$35,652'
                        },
                        {
                            type: 'Expenses',
                            value: '$12,248'
                        }
                    ]
                }
            }
        ]
    }
}

export const getOrderStats = () => {
    let data = [
        {
            type: 'Completed',
            value: 27,
        },
        {
            type: 'Pending',
            value: 25,
        },
        {
            type: 'Cancel',
            value: 18,
        }
    ];
    return data.map(record => {
        record.value = randomnumber(20, 90, false)
        return record
    })
}