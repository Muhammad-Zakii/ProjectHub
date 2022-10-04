import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function App(props) {
  const data = [
    {
      name: 'Revenue',
      Price: props.price,
    },
  ]
  const data02 = [
    {
      name: 'Monthly profit',
      Profit: props.profit,
      // amt: 2400,
    },
  ]
  return (
    <>
      <LineChart
        width={500}
        height={300}
        data={data}
        syncId='anyId'
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Line type='monotone' dataKey='Price' stroke='#8884d8' fill='#8884d8' />
      </LineChart>

      <LineChart
        width={500}
        height={300}
        data={data02}
        // syncId='anyId'
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Line
          type='monotone'
          dataKey='Profit'
          stroke='#82ca9d'
          fill='#82ca9d'
        />
        {/* <Brush /> */}
      </LineChart>
    </>
  )
}
