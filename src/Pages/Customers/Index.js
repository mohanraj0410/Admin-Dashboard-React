import { Space, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'

const Index = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result) {
          setData(result.users);
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
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Phone No",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email"
    },
    {
      title: "Address",
      key: "email",
      render: (text, record) => (
        <div>{record.address.address},{record.address.city}</div>
      ),
    },

  ]


  return (
    <Space direction='vertical'>
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table loading={loading} columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </Space>
  )
}

export default Index