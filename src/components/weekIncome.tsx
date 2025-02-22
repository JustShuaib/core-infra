import React from "react";
import {Card, CardContent, IconButton, Typography} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Maximize from "@/icons/maximize";

const data = [
  {day: "Mon", income: 40},
  {day: "Tue", income: 35},
  {day: "Wed", income: 60},
  {day: "Thu", income: 45},
  {day: "Fri", income: 55},
  {day: "Sat", income: 80},
  {day: "Sun", income: 75},
];

export default function WeekIncome() {
  return (
    <Card sx={{borderRadius: "12px"}} className="row-span-5 border !shadow-none">
      <CardContent>
        <div className="flex items-center justify-between">
          <Typography variant="h6">This Week’s Income</Typography>
          <IconButton aria-label="Maximize">
            <Maximize />
          </IconButton>
        </div>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%" className="text-xs">
            <LineChart
              data={data}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="income"
                stroke="#4DAF01"
                strokeWidth={3}
                dot={false}
                activeDot={{r: 8}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
