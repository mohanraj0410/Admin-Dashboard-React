import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from "../../Pages/DashBoard/Index"
import Inventory from "../../Pages/Inventory/Index"
import Orders from "../../Pages/Orders/Index"
import Customers from "../../Pages/Customers/Index"

const Index = () => {
  return (
    <Routes>
      <Route path='/' element={<DashBoard />}></Route>
      <Route path='/inventory' element={<Inventory />}></Route>
      <Route path='/orders' element={<Orders />}></Route>
      <Route path='/customers' element={<Customers />}></Route>
    </Routes>
  )
}

export default Index