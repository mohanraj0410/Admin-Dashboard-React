import { Space, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import RecentOrder from './RecentOrder'
import BarChart from './BarChart'

const Index = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/carts/1").then((res) => res.json())
      .then((res) => {
        setOrders(res.total);
        setRevenue(res.discountedTotal);
      });
    fetch("https://dummyjson.com/products").then((res) => res.json()).then((res) => {
      setInventory(res.total);
    });
    fetch("https://dummyjson.com/users").then((res) => res.json()).then((res) => {
      setCustomers(res.total);
    });
  }, []);
  return (
    <>
      <Typography.Title level={4}>DashBoard</Typography.Title>
      <Space direction='horizontal'>
        <Cards
          icon={<ShoppingCartOutlined style={{
            fontSize: '35px',
            color: 'green',
            backgroundColor: 'rgba(0,255,0,0.25)',
            padding: "10px",
            borderRadius: "20px"
          }} />}
          title={"Orders"}
          value={orders}
        />
        <Cards
          icon={<ShoppingOutlined style={{
            fontSize: '35px',
            color: 'purple',
            backgroundColor: 'rgba(0,0,255,0.25)',
            padding: "10px",
            borderRadius: "20px"
          }}
          />}
          title={"Inventory"}
          value={inventory}
        />
        <Cards
          icon={<UserOutlined style={{
            fontSize: '35px',
            color: 'blue',
            backgroundColor: 'rgba(0,255,255,0.25)',
            padding: "10px",
            borderRadius: "20px"
          }}
          />}
          title={"Customers"}
          value={customers} />
        <Cards
          icon={<DollarCircleOutlined style={{
            fontSize: '35px',
            color: 'red',
            backgroundColor: 'rgba(255,0,0,0.25)',
            padding: "10px",
            borderRadius: "20px"
          }}
          />}
          title={"Revenue"}
          value={revenue} />
      </Space>
      <Space>
        <RecentOrder />
        <BarChart />
      </Space>
    </>
  )
}



export default Index