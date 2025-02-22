// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import {Card, CardContent, Typography} from "@mui/material";

// export default function MonthlyIssuanceChart() {
//   // Example data
//   const data = [
//     {month: "May", Personalized: 20, Instant: 80},
//     {month: "Jun", Personalized: 40, Instant: 60},
//     {month: "Jul", Personalized: 30, Instant: 70},
//     {month: "Aug", Personalized: 45, Instant: 55},
//     {month: "Sep", Personalized: 50, Instant: 50},
//     {month: "Oct", Personalized: 20, Instant: 80},
//     {month: "Nov", Personalized: 30, Instant: 70},
//   ];

//   return (
//     <Card className="shadow-md">
//       <CardContent>
//         {/* Chart Title */}
//         <Typography variant="h6" className="font-bold mb-4">
//           Monthly Issuance
//         </Typography>

//         <div className="w-full h-64">
//           {/* ResponsiveContainer automatically adjusts to the parent container size */}
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               data={data}
//               margin={{top: 5, right: 20, bottom: 5, left: 0}}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               {/* Stacked Bars */}
//               <Bar dataKey="Personalized" stackId="a" fill="#1D4ED8" />
//               <Bar dataKey="Instant" stackId="a" fill="#93C5FD" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
import React from "react";
import {Card, CardContent, IconButton, Typography} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Maximize from "@/icons/maximize";

export default function MonthlyIssuanceChart() {
  const data = [
    {month: "May", Personalized: 20, Instant: 50},
    {month: "Jun", Personalized: 40, Instant: 55},
    {month: "Jul", Personalized: 30, Instant: 40},
    {month: "Aug", Personalized: 45, Instant: 30},
    {month: "Sep", Personalized: 10, Instant: 50},
    {month: "Oct", Personalized: 20, Instant: 80},
    {month: "Nov", Personalized: 30, Instant: 50},
  ];

  return (
    <Card sx={{borderRadius: '12px'}} className="row-span-7 border !shadow-none">
      <CardContent>
        <div className="flex mb-4 items-center justify-between">
          <Typography variant="h6">Monthly Issuance</Typography>
          <IconButton aria-label="Maximize">
            <Maximize />
          </IconButton>
        </div>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barCategoryGap="20%"
              margin={{top: 5, right: 10, bottom: 5, left: 0}}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{fontSize: "12px"}} />
              <YAxis
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                tick={{fontSize: "12px"}}
              />
              <Tooltip contentStyle={{fontSize: "12px"}} />
              <Legend iconType="circle" wrapperStyle={{fontSize: "12px"}} />

              {/* Stacked bars with rounded top edges */}
              <Bar
                dataKey="Personalized"
                stackId="a"
                fill="#014DAF"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="Instant"
                stackId="a"
                fill="#CCE2FF"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
