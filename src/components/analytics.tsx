import React from "react";
import {Card, CardContent} from "@mui/material";
import CreditCardCheck from "@/icons/creditCardCheck";
import CreditCardEdit from "@/icons/creditCardEdit";
import BankNote from "@/icons/bankNote";
import HourGlass from "@/icons/hourGlass";
import ArrowUpRight from "@/icons/arrowUpRight";
import AlertCircle from "@/icons/alertCircle";

const metricsData = [
  {
    icon: <CreditCardCheck />,
    title: "Total Active Cards",
    value: "26,478",
    description: (
      <span className="text-[#00000093] text-xs flex gap-x-1 items-center">
        <span className="bg-[#EFFAF6] rounded p-0.5 text-[#29A174] flex items-center gap-x-1">
          <ArrowUpRight /> +9%
        </span>
        this month
      </span>
    ),
  },
  {
    icon: <CreditCardEdit stroke="#8020E7" />,
    title: "Total Personalized Cards",
    value: "15,703",
    description: (
      <span className="text-[#00000093] text-xs flex gap-x-1 items-center">
        <span className="bg-[#EFFAF6] rounded p-0.5 text-[#29A174] flex items-center gap-x-1">
          <ArrowUpRight /> 8.5%
        </span>
        this month
      </span>
    ),
  },
  {
    icon: <BankNote />,
    title: "Today's Revenue",
    value: "₦9.3M",
    description: (
      <span className="text-[#00000093] text-xs flex gap-x-1 items-center">
        <span className="bg-[#EFFAF6] rounded p-0.5 text-[#29A174] flex items-center gap-x-1">
          <ArrowUpRight /> +6%
        </span>
        vs yesterday
      </span>
    ),
  },
  {
    icon: <HourGlass />,
    title: "Pending Requests",
    value: "38",
    description: (
      <span className="text-[#E78020] text-xs flex gap-x-1 items-center">
        <AlertCircle />
        <span>Requires attention</span>
      </span>
    ),
  },
];
interface CardProps {
  icon: React.JSX.Element;
  title: string;
  value: number | string;
  description: React.JSX.Element;
}
export default function Analytics() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {metricsData.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}

const MetricCard = ({icon, title, description, value}: CardProps) => {
  return (
    <Card className="!shadow-none border border-[#E2E2E2] !rounded-xl">
      <CardContent className="space-y-1.5">
        {icon}
        <p className="text-[#00000093] text-sm font-medium">{title}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-[#121212]">{value}</p>
          {description}
        </div>
      </CardContent>
    </Card>
  );
};
