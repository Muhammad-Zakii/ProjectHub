import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export default function App(props) {
  const data = [
    {
      name: 'Site Age(In years)',
      siteAge: props.siteage,
      // pv: 10,
    },
  ]
  return (
    <BarChart
      width={300}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='siteAge' fill='#8884d8' />
      {/* <Bar dataKey='uv' fill='#82ca9d' /> */}
    </BarChart>
  )
}
