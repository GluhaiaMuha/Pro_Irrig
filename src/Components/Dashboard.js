import React, {PureComponent} from 'react';
import '../Styles/Dashboard.css'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: 'Soil Sensor 1',
        humidity: 33,
    },
    {
        name: 'Soil Sensor 2',
        humidity: 35,
    },
    {
        name: 'Soil Sensor 3',
        humidity: 31,
    },
    {
        name: 'Soil Sensor 4',
        humidity: 27,
    },
    {
        name: 'Soil Sensor 5',
        humidity: 23,
    }
]
const Dashboard = () => {
    return (
        <div className="container">
            <h3>Soil Sensor Data</h3>
            <ResponsiveContainer height="50%">
                <LineChart
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="humidity" stroke="#82ca9d"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;