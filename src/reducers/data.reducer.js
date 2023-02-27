const initialState = () => ({
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
                    description: 'Responded to need "Volunteer work"'
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
        },
        {
            id: 'tom',
            name: 'Tom',
            designation: 'Product Developer',
            earning: {
                total: 123,
                calculatedPercent: 87,
                prevMonthRelative: 9.3
            },
            recentActivity: [
                {
                    date: [1, 'Aug'],
                    description: 'Worked on "web assesment"'
                },
                {
                    date: [24, 'Jan'],
                    description: 'Submitted web assesment'
                }
            ],
            info: [
                {
                    type: 'Products',
                    value: 743
                },
                {
                    type: 'Followers',
                    value: 682,
                    shortForm: true
                }
            ],
            overview: {
                total: '$94,568',
                relativePercetage: 6.33,
                info: [
                    {
                        type: 'Orders',
                        value: '1,386'
                    },
                    {
                        type: 'Sales',
                        value: '63,863',
                    },
                    {
                        type: 'Order Value',
                        value: '24.03%'
                    },
                    {
                        type: 'Customers',
                        value: '19,642'
                    },
                    {
                        type: 'Income',
                        value: '$54,435'
                    },
                    {
                        type: 'Expenses',
                        value: '$5,836'
                    }
                ]
            }
        }
    ],
    siderCollapse: false
})

let sampleData = [
    {
        "revenue": 1983,
        "orders": 6971,
        "customers": 7266
    },
    {
        "revenue": 8983,
        "orders": 7950,
        "customers": 9659
    },
    {
        "revenue": 9161,
        "orders": 6754,
        "customers": 7135
    },
    {
        "revenue": 9378,
        "orders": 4521,
        "customers": 5929
    },
    {
        "revenue": 8246,
        "orders": 2398,
        "customers": 8169
    },
    {
        "revenue": 3451,
        "orders": 7554,
        "customers": 9627
    }
]

export default function (state = initialState(), action) {
    let { type, payload } = action
    switch (type) {
        case 'UPDATE_TEST':
            return { ...state, payload }
        case 'UPDATE_TIME': {
            return { ...state, timestamp: new Date().getTime() }
        }
        case 'SIDER_COLLAPSE': {
            return { ...state, siderCollapse: payload }
        }
        case 'UPDATE_STATE': {
            return {
                ...state, timestamp: new Date().getTime(),
                activeUserId: state.activeUserId === 'tom' ? 'jBen' : 'tom',
                ...sampleData[Math.floor(Math.random() * sampleData.length)]
            }
        }
        default:
            return state
    }
}
