import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from "recharts";

// Example data
const data = [
  {name: "Active", value: 1500, color: "#01A4AF"},
  {name: "Expired", value: 300, color: "#FFBA24"},
  {name: "Inactive", value: 200, color: "#014DAF"},
  {name: "Blocked", value: 350, color: "#8020E7"},
  {name: "Lost", value: 100, color: "#FF4457"},
];

// Calculate total cards
const totalCards = data.reduce((acc, curr) => acc + curr.value, 0);

/**
 * Custom center label for the donut.
 */
const renderCenterLabel = () => {
  return (
    <>
      <text
        x="50%"
        y={110 - 10}
        textAnchor="middle"
        dominantBaseline="central"
        style={{fontSize: "12px", fill: "#808080", }}
      >
        Total Cards
      </text>

      <text
        x="50%"
        y={110 + 12}
        textAnchor="middle"
        dominantBaseline="central"
        style={{fontSize: "24px", fontWeight: "500", fill: "#121212"}}
      >
        {totalCards.toLocaleString()}
      </text>
    </>
  );
};

export default function CardStatusDistribution() {
  return (
    <Card sx={{borderRadius: '12px'}} className="row-span-6 border !shadow-none">
      <CardContent>
        <Typography variant="h6">
          Card Status Distribution
        </Typography>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="68%"
                outerRadius="80%"
                cornerRadius={4}
                paddingAngle={1}
                labelLine={false}
                label={renderCenterLabel}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="#fff"
                    strokeWidth={2}
                  />
                ))}
              </Pie>

              <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                height={24}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
