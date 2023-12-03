import { PieChart, Pie, Cell, Legend } from "recharts";
import { getStoredDonationId } from "../utils/localStorage";
import { useEffect, useState } from "react";

import './Statistics.css';

const Statistics = () => {
    const [donation, setDonation] = useState([]);

    const donationAmount = getStoredDonationId().length;

    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setDonation(data))
    }, [])

    const data = [
        { name: "Total Donation", value: donation.length - donationAmount },
        { name: "Your Donation", value: donationAmount },
    ];

    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="flex justify-center">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend layout="horizontal" align="center" iconSize={40} iconType="plainline" ></Legend>
            </PieChart>
        </div>
    );
};

export default Statistics;