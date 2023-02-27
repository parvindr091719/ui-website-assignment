import { FolderOpenFilled, PieChartFilled, UserOutlined } from '@ant-design/icons'
import React from 'react'

function GetIcon({ type }) {
    return (
        <div className='get-icon-container'>
            {
                {
                    'revenue': <PieChartFilled />,
                    'orders': <FolderOpenFilled />,
                    'customers': <UserOutlined />
                }[type] || <div>default</div>
            }
        </div>
    )
}

export default GetIcon