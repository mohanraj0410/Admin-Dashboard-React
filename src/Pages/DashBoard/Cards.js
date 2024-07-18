import { Card, Space, Statistic } from 'antd'
import React from 'react'

const Cards = ({ title, value, icon }) => {
    return (
        <div>
            <Card>
                <Space direction='horizontal'>
                    {icon}
                    <Statistic title={title} value={value}></Statistic>
                </Space>
            </Card>
        </div>
    )
}

export default Cards