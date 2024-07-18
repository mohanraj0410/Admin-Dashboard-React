import { Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const RecentOrder = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/cart');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                if (result) {
                    setData(result.carts);
                    setLoading(false)
                } else {
                    console.error("Unexpected response structure:", result);
                }
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    // console.log(data);

    const columns = [
        // {
        //     title: "Cart ID",
        //     dataIndex: "id",
        //     key: "id",
        // },
        // {
        //     title: "User ID",
        //     dataIndex: "userId",
        //     key: "userId",
        // },
        {
            title: "Product Titles",
            key: "products",
            render: (text, record) => (
                <ul>
                    <li>{record.products[0].title}</li>
                </ul>
            ),
        },
        {
            title: "Total Quantity",
            dataIndex: "totalQuantity",
            key: "totalQuantity",
        },
        {
            title: "Discounted Prices",
            key: "discountedPrices",
            render: (text, record) => (
                <div>$ {record.products[0].discountedTotal}</div>
            ),
        },
    ];

    return (
        <>
            <Typography.Title level={5}>Recent Order</Typography.Title>
            <Table loading={loading} size='small' columns={columns} dataSource={data} rowKey={record => record.title} pagination={{ pageSize: 5 }} />
        </>
    );
}

export default RecentOrder;
