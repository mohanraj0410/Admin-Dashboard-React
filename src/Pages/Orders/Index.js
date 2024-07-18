import { Rate, Space, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'

const Index = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result) {
          setData(result.products);
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

  console.log(data);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      render: (text, record) => (
        <div>$ {record.price}</div>
      ),
      key: "price",
    },
    {
      title: "shippingInformation",
      key: "shippingInformation",
      dataIndex: "shippingInformation"
    },
    {
      title: "Warranty Information",
      dataIndex: "warrantyInformation",
      key: "warrantyInformation",
    }

  ]


  return (
    <Space direction='vertical'>
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table loading={loading}  columns={columns} dataSource={data} rowKey={record => record.title} pagination={{ pageSize: 5 }} />
    </Space>
  )
}

export default Index