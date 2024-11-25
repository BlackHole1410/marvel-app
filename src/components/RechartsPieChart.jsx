import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { prepareData } from './chart-utils';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA00FF', '#FF00AA'];

const RechartsPieChart = ({ data }) => {
    const preparedData = prepareData(data);

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={preparedData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
            >
                {preparedData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default RechartsPieChart;