import React from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Tooltip
} from 'recharts';

const CharacterRadarGraph = ({ character1 = {}, character2 = {} }) => {
    const capacities1 = character1.capacities || {};
    const capacities2 = character2.capacities || {};

    const data = [
        { subject: 'Force', A: capacities1.force || 0, B: capacities2.force || 0 },
        { subject: 'Intelligence', A: capacities1.intelligence || 0, B: capacities2.intelligence || 0 },
        { subject: 'Energy', A: capacities1.energy || 0, B: capacities2.energy || 0 },
        { subject: 'Speed', A: capacities1.speed || 0, B: capacities2.speed || 0 },
        { subject: 'Durability', A: capacities1.durability || 0, B: capacities2.durability || 0 },
        { subject: 'Fighting', A: capacities1.fighting || 0, B: capacities2.fighting || 0 },
    ];

    return (
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name={character1.name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name={character2.name} dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
            <Tooltip />
        </RadarChart>
    );
};

export default CharacterRadarGraph;