import React from 'react'
import {
  LineChart,
  Line,
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
      name: 'Jan',
      PageViews: Math.ceil(props.views / 12),
      amt: 2400,
    },
    {
      name: 'Fab',

      PageViews: Math.ceil(props.views / 11),
      amt: 2210,
    },
    {
      name: 'Mar',

      PageViews: Math.ceil(props.views / 10),
      amt: 2290,
    },
    {
      name: 'April',

      PageViews: Math.ceil(props.views / 9),
      amt: 2000,
    },
    {
      name: 'May',

      PageViews: Math.ceil(props.views / 8),
      amt: 2181,
    },
    {
      name: 'June',

      PageViews: Math.ceil(props.views / 7),
      amt: 2500,
    },
    {
      name: 'July',

      PageViews: Math.ceil(props.views / 6),
      amt: 2100,
    },
    {
      name: 'Aug',

      PageViews: Math.ceil(props.views / 5),
      amt: 2100,
    },
    {
      name: 'Sep',

      PageViews: Math.ceil(props.views / 4),
      amt: 2100,
    },
    {
      name: 'Oct',

      PageViews: Math.ceil(props.views / 3),
      amt: 2100,
    },
    {
      name: 'Nov',

      PageViews: Math.ceil(props.views / 2),
      amt: 2100,
    },
    {
      name: 'Dec',

      PageViews: Math.ceil(props.views / 1),
      amt: 2100,
    },
  ]

  return (
    <ResponsiveContainer width='95%' height={400}>
      <LineChart
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
        <Line
          type='monotone'
          dataKey='PageViews'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
        {/* <Line type='monotone' dataKey='uv' stroke='#82ca9d' /> */}
      </LineChart>
    </ResponsiveContainer>
  )
}
