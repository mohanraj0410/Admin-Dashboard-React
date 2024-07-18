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
      title: "Rating",
      render: (text, record) => (
        <Rate value={record.rating} allowHalf disabled></Rate>
      ),
      key: "rating",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Thumbnail",
      render: (text, record) => (
        <img src={record.thumbnail}></img>
      ),
      key: "thumbnail",
    },
    {
      title: "Brand",
      render: (text, record) => (
        <div>{record.brand ? record.brand : "No brand"}</div>
      ),
      key: "brand",
    },
    {
      title: "Categories",
      dataIndex: "category",
      key: "category",
    },
  ];


  return (
    <Space direction='vertical'>
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table loading={loading} size='small' columns={columns} dataSource={data} rowKey={record => record.title} pagination={{ pageSize: 5 }} style={{ width: "100%" }} />
    </Space>
  )
}

export default Index